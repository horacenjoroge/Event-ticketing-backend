// apps/order-service/src/saga/saga.service.ts
import { Injectable, Logger, NotFoundException, BadRequestException, Inject } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { ConfigService } from '@nestjs/config';
import { SagaStatus, SagaStepStatus } from '../../prisma/generated/prisma';
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
          amount: order.totalAmount,
          currency: 'USD',
          paymentMethodId,
          billingEmail,
          billingDetails,
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
        actionType: 'CANCEL',
      },
      {
        stepName: 'RELEASE_TICKETS',
        serviceType: 'TICKET_SERVICE',
        actionType: 'RELEASE',
      },
      {
        stepName: 'SEND_CANCELLATION_NOTICE',
        serviceType: 'NOTIFICATION_SERVICE',
        actionType: 'SEND',
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
            requestData: { orderId, userId },
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
      callbackPattern: 'saga.step.completed',
      errorCallbackPattern: 'saga.step.failed',
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
    await this.ticketClient.emit(pattern, message).toPromise();
  }

  private async sendToPaymentService(actionType: string, message: any) {
    const pattern = `payment.${actionType.toLowerCase()}`;
    await this.paymentClient.emit(pattern, message).toPromise();
  }

  private async sendToNotificationService(actionType: string, message: any) {
    const pattern = `notification.${actionType.toLowerCase()}`;
    await this.notificationClient.emit(pattern, message).toPromise();
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

    // Update order status to confirmed
    await this.orderService.updateOrderStatus(sagaExecution.orderId, 'CONFIRMED');

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

      // Update order status back to pending or cancelled
      await this.orderService.updateOrderStatus(sagaExecution.orderId, 'CANCELLED');

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
    }

    return sagaExecution;
  }
}