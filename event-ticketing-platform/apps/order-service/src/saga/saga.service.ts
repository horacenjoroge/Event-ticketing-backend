// apps/order-service/src/saga/saga.service.ts
import { Injectable, Logger, NotFoundException, BadRequestException, Inject } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { ConfigService } from '@nestjs/config';
import { SagaStatus, SagaStepStatus, OrderStatus } from '../../prisma/generated/prisma';
import { OrderService } from '../order/order.service';
import { CompensationService } from '../saga/compensation.service';
import { ClientProxy } from '@nestjs/microservices';

interface CheckoutSagaData {
  userId: string;
  orderId: string;
  paymentMethodId: string;
  billingEmail: string;
  billingDetails?: any;
}

interface CancelOrderSagaData {
  orderId: string;
  userId: string;
}

@Injectable()
export class SagaService {
  private readonly logger = new Logger(SagaService.name);
  private readonly sagaTimeoutMinutes: number;

  constructor(
    private readonly prisma: PrismaService,
    private readonly configService: ConfigService,
    private readonly orderService: OrderService,
    private readonly compensationService: CompensationService,
    @Inject('TICKET_SERVICE') private readonly ticketClient: ClientProxy,
    @Inject('PAYMENT_SERVICE') private readonly paymentClient: ClientProxy,
    @Inject('NOTIFICATION_SERVICE') private readonly notificationClient: ClientProxy,
  ) {
    this.sagaTimeoutMinutes = parseInt(configService.get('SAGA_TIMEOUT_MINUTES', '10'));
  }

  async startCheckoutSaga(data: CheckoutSagaData) {
    const { userId, orderId, paymentMethodId, billingEmail, billingDetails } = data;

    this.logger.log(`Starting checkout saga for order ${orderId}`);

    // Verify order exists and belongs to user
    const order = await this.orderService.findOrderById(orderId, userId);
    if (!order) {
      throw new NotFoundException('Order not found');
    }

    if (order.status !== 'PENDING') {
      throw new BadRequestException(`Cannot checkout order with status: ${order.status}`);
    }

    // Check if saga already exists for this order
    const existingSaga = await this.prisma.sagaExecution.findUnique({
      where: { orderId },
    });

    if (existingSaga && existingSaga.status !== SagaStatus.FAILED) {
      throw new BadRequestException('Saga already in progress for this order');
    }

    // Create saga execution
    const sagaExecution = await this.prisma.sagaExecution.create({
      data: {
        orderId,
        sagaType: 'ORDER_PROCESSING',
        status: SagaStatus.STARTED,
        currentStep: 0,
        totalSteps: 4, // Reserve tickets -> Process payment -> Confirm tickets -> Send notification
        compensationData: {
          userId,
          orderId,
          paymentMethodId,
          billingEmail,
          billingDetails,
        },
      },
    });

    // Define saga steps
    const steps = [
      {
        stepName: 'RESERVE_TICKETS',
        serviceType: 'TICKET_SERVICE',
        actionType: 'RESERVE',
        requestData: {
          orderId,
          userId,
          items: order.items.map(item => ({
            ticketTypeId: item.itemId,
            quantity: item.quantity,
          })),
        },
      },
      {
        stepName: 'PROCESS_PAYMENT',
        serviceType: 'PAYMENT_SERVICE',
        actionType: 'PROCESS',
        requestData: {
          orderId,
          amount: parseFloat(order.totalAmount.toString()),
          currency: 'USD', // TODO: Make this configurable
          paymentMethodId,
          customerEmail: billingEmail,
          customerPhone: billingDetails?.phone,
          paymentMethod: 'CARD', // TODO: Determine from paymentMethodId
          description: `Payment for order ${orderId}`,
          metadata: {
            userId,
            sagaExecutionId: sagaExecution.id,
            ...billingDetails,
          },
        },
      },
      {
        stepName: 'CONFIRM_TICKETS',
        serviceType: 'TICKET_SERVICE',
        actionType: 'CONFIRM',
        requestData: {
          orderId,
          userId,
        },
      },
      {
        stepName: 'SEND_CONFIRMATION',
        serviceType: 'NOTIFICATION_SERVICE',
        actionType: 'SEND',
        requestData: {
          userId,
          orderId,
          templateType: 'ORDER_CONFIRMATION',
          recipientEmail: billingEmail,
          metadata: {
            orderAmount: order.totalAmount,
            paymentMethodId,
          },
        },
      },
    ];

    // Create saga steps
    await Promise.all(
      steps.map((step, index) =>
        this.prisma.sagaStep.create({
          data: {
            sagaExecutionId: sagaExecution.id,
            stepNumber: index + 1,
            stepName: step.stepName,
            status: SagaStepStatus.PENDING,
            serviceType: step.serviceType,
            actionType: step.actionType,
            requestData: step.requestData,
          },
        })
      )
    );

    // Start executing the first step
    await this.executeNextStep(sagaExecution.id);

    return this.getSagaStatus(sagaExecution.id);
  }

  async startCancelOrderSaga(data: CancelOrderSagaData) {
    const { orderId, userId } = data;

    this.logger.log(`Starting cancel order saga for order ${orderId}`);

    // Verify order exists and belongs to user
    const order = await this.orderService.findOrderById(orderId, userId);
    if (!order) {
      throw new NotFoundException('Order not found');
    }

    // Create cancellation saga
    const sagaExecution = await this.prisma.sagaExecution.create({
      data: {
        orderId,
        sagaType: 'ORDER_CANCELLATION',
        status: SagaStatus.STARTED,
        currentStep: 0,
        totalSteps: 3, // Cancel payment -> Release tickets -> Send notification
        compensationData: {
          userId,
          orderId,
          originalStatus: order.status,
        },
      },
    });

    // Define cancellation steps
    const steps = [
      {
        stepName: 'CANCEL_PAYMENT',
        serviceType: 'PAYMENT_SERVICE',
        actionType: 'REFUND',
        requestData: { orderId, userId },
      },
      {
        stepName: 'RELEASE_TICKETS',
        serviceType: 'TICKET_SERVICE',
        actionType: 'RELEASE',
        requestData: { orderId, userId },
      },
      {
        stepName: 'SEND_CANCELLATION_NOTICE',
        serviceType: 'NOTIFICATION_SERVICE',
        actionType: 'SEND',
        requestData: { 
          orderId, 
          userId,
          templateType: 'ORDER_CANCELLATION',
        },
      },
    ];

    // Create saga steps
    await Promise.all(
      steps.map((step, index) =>
        this.prisma.sagaStep.create({
          data: {
            sagaExecutionId: sagaExecution.id,
            stepNumber: index + 1,
            stepName: step.stepName,
            status: SagaStepStatus.PENDING,
            serviceType: step.serviceType,
            actionType: step.actionType,
            requestData: step.requestData,
          },
        })
      )
    );

    // Start executing the first step
    await this.executeNextStep(sagaExecution.id);

    return this.getSagaStatus(sagaExecution.id);
  }

  async getSagaStatus(sagaId: string) {
    this.logger.log(`Getting saga status for ${sagaId}`);

    const sagaExecution = await this.prisma.sagaExecution.findUnique({
      where: { id: sagaId },
      include: {
        steps: {
          orderBy: { stepNumber: 'asc' },
        },
        order: {
          include: {
            items: true,
          },
        },
      },
    });

    if (!sagaExecution) {
      throw new NotFoundException('Saga execution not found');
    }

    return sagaExecution;
  }

  async getActiveSagas(limit: number = 50, offset: number = 0) {
    this.logger.log(`Getting active sagas (limit: ${limit}, offset: ${offset})`);

    const activeSagas = await this.prisma.sagaExecution.findMany({
      where: {
        status: {
          in: [SagaStatus.STARTED, SagaStatus.COMPENSATING],
        },
      },
      include: {
        steps: {
          orderBy: { stepNumber: 'asc' },
        },
        order: {
          select: {
            id: true,
            userId: true,
            totalAmount: true,
            status: true,
            createdAt: true,
          },
        },
      },
      orderBy: {
        startedAt: 'desc',
      },
      take: limit,
      skip: offset,
    });

    const totalCount = await this.prisma.sagaExecution.count({
      where: {
        status: {
          in: [SagaStatus.STARTED, SagaStatus.COMPENSATING],
        },
      },
    });

    return {
      sagas: activeSagas,
      totalCount,
      hasMore: offset + limit < totalCount,
    };
  }

  async getHealthStatus() {
    this.logger.log('Getting saga health status');

    const now = new Date();
    const oneHourAgo = new Date(now.getTime() - 60 * 60 * 1000);
    const oneDayAgo = new Date(now.getTime() - 24 * 60 * 60 * 1000);

    // Get saga statistics
    const [
      totalSagas,
      activeSagas,
      completedSagasLast24h,
      failedSagasLast24h,
      compensatedSagasLast24h,
      stuckSagas, // Sagas that have been running for more than saga timeout
    ] = await Promise.all([
      this.prisma.sagaExecution.count(),
      this.prisma.sagaExecution.count({
        where: {
          status: {
            in: [SagaStatus.STARTED, SagaStatus.COMPENSATING],
          },
        },
      }),
      this.prisma.sagaExecution.count({
        where: {
          status: SagaStatus.COMPLETED,
          completedAt: {
            gte: oneDayAgo,
          },
        },
      }),
      this.prisma.sagaExecution.count({
        where: {
          status: SagaStatus.FAILED,
          failedAt: {
            gte: oneDayAgo,
          },
        },
      }),
      this.prisma.sagaExecution.count({
        where: {
          status: SagaStatus.COMPENSATED,
          compensatedAt: {
            gte: oneDayAgo,
          },
        },
      }),
      this.prisma.sagaExecution.count({
        where: {
          status: SagaStatus.STARTED,
          startedAt: {
            lt: new Date(now.getTime() - this.sagaTimeoutMinutes * 60 * 1000),
          },
        },
      }),
    ]);

    // Calculate success rate
    const totalProcessedLast24h = completedSagasLast24h + failedSagasLast24h + compensatedSagasLast24h;
    const successRate = totalProcessedLast24h > 0 
      ? (completedSagasLast24h / totalProcessedLast24h) * 100 
      : 0;

    // Get average completion time for last 24h
    const recentCompletedSagas = await this.prisma.sagaExecution.findMany({
      where: {
        status: SagaStatus.COMPLETED,
        completedAt: {
          gte: oneDayAgo,
        },
      },
      select: {
        startedAt: true,
        completedAt: true,
      },
    });

    const avgCompletionTimeMs = recentCompletedSagas.length > 0
      ? recentCompletedSagas.reduce((sum, saga) => {
          const duration = saga.completedAt!.getTime() - saga.startedAt!.getTime();
          return sum + duration;
        }, 0) / recentCompletedSagas.length
      : 0;

    return {
      service: 'saga-orchestrator',
      status: stuckSagas > 0 ? 'warning' : 'healthy',
      timestamp: new Date().toISOString(),
      metrics: {
        total: {
          totalSagas,
          activeSagas,
          stuckSagas,
        },
        last24Hours: {
          completed: completedSagasLast24h,
          failed: failedSagasLast24h,
          compensated: compensatedSagasLast24h,
          successRate: Math.round(successRate * 100) / 100,
        },
        performance: {
          averageCompletionTimeSeconds: Math.round(avgCompletionTimeMs / 1000),
          timeoutThresholdMinutes: this.sagaTimeoutMinutes,
        },
      },
      warnings: stuckSagas > 0 ? [`${stuckSagas} sagas may be stuck`] : [],
    };
  }

  async getSagasByOrderId(orderId: string) {
    this.logger.log(`Getting all sagas for order ${orderId}`);

    return this.prisma.sagaExecution.findMany({
      where: { orderId },
      include: {
        steps: {
          orderBy: { stepNumber: 'asc' },
        },
      },
      orderBy: {
        startedAt: 'desc',
      },
    });
  }

  async getSagasByUserId(userId: string, limit: number = 20, offset: number = 0) {
    this.logger.log(`Getting sagas for user ${userId}`);

    return this.prisma.sagaExecution.findMany({
      where: {
        order: {
          userId,
        },
      },
      include: {
        steps: {
          orderBy: { stepNumber: 'asc' },
        },
        order: {
          select: {
            id: true,
            totalAmount: true,
            status: true,
            createdAt: true,
          },
        },
      },
      orderBy: {
        startedAt: 'desc',
      },
      take: limit,
      skip: offset,
    });
  }

  async getSagaMetrics(startDate: Date, endDate: Date) {
    this.logger.log(`Getting saga metrics from ${startDate.toISOString()} to ${endDate.toISOString()}`);

    const sagas = await this.prisma.sagaExecution.findMany({
      where: {
        startedAt: {
          gte: startDate,
          lte: endDate,
        },
      },
      include: {
        steps: true,
      },
    });

    // Calculate metrics
    const metrics = {
      totalSagas: sagas.length,
      byStatus: {
        completed: sagas.filter(s => s.status === SagaStatus.COMPLETED).length,
        failed: sagas.filter(s => s.status === SagaStatus.FAILED).length,
        compensated: sagas.filter(s => s.status === SagaStatus.COMPENSATED).length,
        active: sagas.filter(s => s.status === SagaStatus.STARTED).length,
      },
      byType: {
        checkout: sagas.filter(s => s.sagaType === 'ORDER_PROCESSING').length,
        cancellation: sagas.filter(s => s.sagaType === 'ORDER_CANCELLATION').length,
      },
      stepFailures: {} as Record<string, number>,
      averageCompletionTime: 0,
    };

    // Calculate step failure statistics
    sagas.forEach(saga => {
      saga.steps.forEach(step => {
        if (step.status === SagaStepStatus.FAILED) {
          metrics.stepFailures[step.stepName] = (metrics.stepFailures[step.stepName] || 0) + 1;
        }
      });
    });

    // Calculate average completion time for completed sagas
    const completedSagas = sagas.filter(s => s.status === SagaStatus.COMPLETED && s.completedAt);
    if (completedSagas.length > 0) {
      const totalCompletionTime = completedSagas.reduce((sum, saga) => {
        const duration = saga.completedAt!.getTime() - saga.startedAt!.getTime();
        return sum + duration;
      }, 0);
      metrics.averageCompletionTime = Math.round(totalCompletionTime / completedSagas.length / 1000); // in seconds
    }

    return metrics;
  }

  // Add this method to handle cleanup of old sagas
  async cleanupOldSagas(olderThanDays: number = 30) {
    this.logger.log(`Cleaning up sagas older than ${olderThanDays} days`);

    const cutoffDate = new Date();
    cutoffDate.setDate(cutoffDate.getDate() - olderThanDays);

    const deletedCount = await this.prisma.sagaExecution.deleteMany({
      where: {
        startedAt: {
          lt: cutoffDate,
        },
        status: {
          in: [SagaStatus.COMPLETED, SagaStatus.FAILED, SagaStatus.COMPENSATED],
        },
      },
    });

    this.logger.log(`Cleaned up ${deletedCount.count} old saga executions`);
    return deletedCount;
  }

  async findSagaByOrderId(orderId: string) {
    return this.prisma.sagaExecution.findFirst({
      where: { 
        orderId,
        status: {
          in: [SagaStatus.STARTED, SagaStatus.COMPENSATING]
        }
      },
      include: {
        steps: true,
      },
    });
  }

  async completeStep(sagaExecutionId: string, stepNumber: number, responseData: any) {
    this.logger.log(`Completing saga step ${stepNumber} for saga ${sagaExecutionId}`);

    // Update step status
    await this.prisma.sagaStep.update({
      where: {
        sagaExecutionId_stepNumber: {
          sagaExecutionId,
          stepNumber,
        },
      },
      data: {
        status: SagaStepStatus.COMPLETED,
        responseData,
        completedAt: new Date(),
      },
    });

    // Update saga execution
    const sagaExecution = await this.prisma.sagaExecution.update({
      where: { id: sagaExecutionId },
      data: {
        currentStep: stepNumber,
      },
      include: {
        steps: true,
      },
    });

    // Check if all steps are completed
    if (stepNumber >= sagaExecution.totalSteps) {
      return this.completeSaga(sagaExecutionId);
    }

    // Execute next step
    return this.executeNextStep(sagaExecutionId);
  }

  async failStep(sagaExecutionId: string, stepNumber: number, errorMessage: string) {
    this.logger.log(`Failing saga step ${stepNumber} for saga ${sagaExecutionId}: ${errorMessage}`);

    // Update step status
    await this.prisma.sagaStep.update({
      where: {
        sagaExecutionId_stepNumber: {
          sagaExecutionId,
          stepNumber,
        },
      },
      data: {
        status: SagaStepStatus.FAILED,
        errorMessage,
        failedAt: new Date(),
      },
    });

    // Start compensation
    return this.startCompensation(sagaExecutionId, errorMessage);
  }

  async compensateStep(sagaExecutionId: string, stepNumber: number, reason: string) {
    this.logger.log(`Compensating saga step ${stepNumber} for saga ${sagaExecutionId}`);

    const step = await this.prisma.sagaStep.findUnique({
      where: {
        sagaExecutionId_stepNumber: {
          sagaExecutionId,
          stepNumber,
        },
      },
    });

    if (!step) {
      throw new NotFoundException('Saga step not found');
    }

    // Execute compensation
    const compensationResult = await this.compensationService.compensateStep(step, reason);

    // Update step status
    await this.prisma.sagaStep.update({
      where: { id: step.id },
      data: {
        status: SagaStepStatus.COMPENSATED,
        compensationData: compensationResult,
        compensatedAt: new Date(),
      },
    });

    return compensationResult;
  }

  async retrySaga(sagaExecutionId: string) {
    this.logger.log(`Retrying saga ${sagaExecutionId}`);

    const sagaExecution = await this.prisma.sagaExecution.findUnique({
      where: { id: sagaExecutionId },
      include: { steps: true },
    });

    if (!sagaExecution) {
      throw new NotFoundException('Saga execution not found');
    }

    if (sagaExecution.status !== SagaStatus.FAILED) {
      throw new BadRequestException('Can only retry failed sagas');
    }

    // Reset saga status
    await this.prisma.sagaExecution.update({
      where: { id: sagaExecutionId },
      data: {
        status: SagaStatus.STARTED,
        errorMessage: null,
        failedAt: null,
      },
    });

    // Find the failed step and retry from there
    const failedStep = sagaExecution.steps.find(step => step.status === SagaStepStatus.FAILED);
    if (failedStep) {
      await this.prisma.sagaStep.update({
        where: { id: failedStep.id },
        data: {
          status: SagaStepStatus.PENDING,
          errorMessage: null,
          failedAt: null,
        },
      });

      return this.executeStep(sagaExecutionId, failedStep.stepNumber);
    }

    return this.executeNextStep(sagaExecutionId);
  }

  async handleTimeout(sagaExecutionId: string) {
    this.logger.log(`Handling timeout for saga ${sagaExecutionId}`);

    const sagaExecution = await this.prisma.sagaExecution.update({
      where: { id: sagaExecutionId },
      data: {
        status: SagaStatus.FAILED,
        errorMessage: 'Saga execution timed out',
        failedAt: new Date(),
      },
    });

    // Start compensation for timeout
    return this.startCompensation(sagaExecutionId, 'Saga execution timed out');
  }

  private async executeNextStep(sagaExecutionId: string) {
    const sagaExecution = await this.prisma.sagaExecution.findUnique({
      where: { id: sagaExecutionId },
      include: { steps: true },
    });

    if (!sagaExecution) {
      throw new NotFoundException('Saga execution not found');
    }

    const nextStepNumber = sagaExecution.currentStep + 1;
    return this.executeStep(sagaExecutionId, nextStepNumber);
  }

  private async executeStep(sagaExecutionId: string, stepNumber: number) {
    this.logger.log(`Executing saga step ${stepNumber} for saga ${sagaExecutionId}`);

    const step = await this.prisma.sagaStep.findUnique({
      where: {
        sagaExecutionId_stepNumber: {
          sagaExecutionId,
          stepNumber,
        },
      },
    });

    if (!step) {
      throw new NotFoundException(`Saga step ${stepNumber} not found`);
    }

    // Update step status to started
    await this.prisma.sagaStep.update({
      where: { id: step.id },
      data: {
        status: SagaStepStatus.STARTED,
        startedAt: new Date(),
      },
    });

    // Send message to appropriate service
    const message = {
      sagaExecutionId,
      stepNumber,
      requestData: step.requestData,
    };

    try {
      switch (step.serviceType) {
        case 'TICKET_SERVICE':
          await this.sendToTicketService(step.actionType, message);
          break;
        case 'PAYMENT_SERVICE':
          await this.sendToPaymentService(step.actionType, message);
          break;
        case 'NOTIFICATION_SERVICE':
          await this.sendToNotificationService(step.actionType, message);
          break;
        default:
          throw new Error(`Unknown service type: ${step.serviceType}`);
      }

      this.logger.log(`Successfully sent ${step.stepName} request to ${step.serviceType}`);
    } catch (error) {
      this.logger.error(`Failed to send request to ${step.serviceType}: ${error.message}`);
      await this.failStep(sagaExecutionId, stepNumber, error.message);
    }

    return step;
  }

  private async sendToTicketService(actionType: string, message: any) {
    const pattern = `ticket.${actionType.toLowerCase()}`;
    this.logger.log(`Sending ${pattern} to ticket service`);
    await this.ticketClient.emit(pattern, message);
  }

  private async sendToPaymentService(actionType: string, message: any) {
    let pattern: string;
    
    switch (actionType.toLowerCase()) {
      case 'process':
        pattern = 'payment.process';
        break;
      case 'cancel':
      case 'refund':
        pattern = 'payment.refund';
        break;
      default:
        pattern = `payment.${actionType.toLowerCase()}`;
    }
    
    this.logger.log(`Sending ${pattern} to payment service`);
    
    try {
      // Use emit for fire-and-forget message
      await this.paymentClient.emit(pattern, message);
      this.logger.log(`Successfully sent ${pattern} to payment service`);
    } catch (error) {
      this.logger.error(`Payment service error: ${error.message}`);
      throw error;
    }
  }

  private async sendToNotificationService(actionType: string, message: any) {
    const pattern = `notification.${actionType.toLowerCase()}`;
    this.logger.log(`Sending ${pattern} to notification service`);
    await this.notificationClient.emit(pattern, message);
  }

  private async completeSaga(sagaExecutionId: string) {
    this.logger.log(`Completing saga ${sagaExecutionId}`);

    const sagaExecution = await this.prisma.sagaExecution.update({
      where: { id: sagaExecutionId },
      data: {
        status: SagaStatus.COMPLETED,
        completedAt: new Date(),
      },
      include: {
        order: true,
      },
    });

    // FIX: Use proper OrderStatus enum instead of string literal
    await this.orderService.updateOrderStatus(sagaExecution.orderId, OrderStatus.CONFIRMED);

    this.logger.log(`✅ Saga ${sagaExecutionId} completed successfully`);
    return sagaExecution;
  }

  private async startCompensation(sagaExecutionId: string, reason: string) {
    this.logger.log(`Starting compensation for saga ${sagaExecutionId}: ${reason}`);

    const sagaExecution = await this.prisma.sagaExecution.update({
      where: { id: sagaExecutionId },
      data: {
        status: SagaStatus.COMPENSATING,
        errorMessage: reason,
        failedAt: new Date(),
      },
      include: {
        steps: {
          orderBy: { stepNumber: 'desc' }, // Compensate in reverse order
        },
      },
    });

    // Find all completed steps that need compensation
    const stepsToCompensate = sagaExecution.steps.filter(
      step => step.status === SagaStepStatus.COMPLETED
    );

    if (stepsToCompensate.length === 0) {
      // No steps to compensate, mark saga as failed
      await this.prisma.sagaExecution.update({
        where: { id: sagaExecutionId },
        data: {
          status: SagaStatus.FAILED,
        },
      });
      
      // FIX: Use proper OrderStatus enum instead of string literal
      await this.orderService.updateOrderStatus(sagaExecution.orderId, OrderStatus.CANCELLED);
      
      return sagaExecution;
    }

    // Start compensating steps in reverse order
    try {
      for (const step of stepsToCompensate) {
        await this.compensateStep(sagaExecutionId, step.stepNumber, reason);
      }

      // Mark saga as compensated
      await this.prisma.sagaExecution.update({
        where: { id: sagaExecutionId },
        data: {
          status: SagaStatus.COMPENSATED,
          compensatedAt: new Date(),
        },
      });

      // FIX: Use proper OrderStatus enum instead of string literal
      await this.orderService.updateOrderStatus(sagaExecution.orderId, OrderStatus.CANCELLED);

      this.logger.log(`✅ Saga ${sagaExecutionId} compensated successfully`);

    } catch (compensationError) {
      this.logger.error(`Compensation failed for saga ${sagaExecutionId}: ${compensationError.message}`);
      
      // Mark saga as failed if compensation fails
      await this.prisma.sagaExecution.update({
        where: { id: sagaExecutionId },
        data: {
          status: SagaStatus.FAILED,
          errorMessage: `Original error: ${reason}. Compensation error: ${compensationError.message}`,
        },
      });

      // FIX: Use proper OrderStatus enum - CANCELLED instead of FAILED for failed saga
      await this.orderService.updateOrderStatus(sagaExecution.orderId, OrderStatus.CANCELLED);
    }

    return sagaExecution;
  }
}