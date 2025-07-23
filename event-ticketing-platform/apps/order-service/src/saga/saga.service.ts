// =====================================================
// apps/order-service/src/saga/saga.service.ts
// COMPLETE FILE with TypeScript fixes and notification integration
// =====================================================
import { Injectable, Logger, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { PrismaService } from '../database/prisma.service';

export interface SagaDefinition {
  name: string;
  version: string;
  steps: SagaStep[];
}

export interface SagaStep {
  stepNumber: number;
  serviceName: string;
  action: string;
  compensationAction: string;
  timeout: number;
  retryPolicy?: {
    maxRetries: number;
    retryDelay: number;
  };
}

export interface SagaExecution {
  id: string;
  sagaDefinition: SagaDefinition;
  orderId: string;
  userId: string;
  status: 'STARTED' | 'COMPLETED' | 'COMPENSATING' | 'FAILED' | 'CANCELLED';
  currentStep: number;
  context: Record<string, any>;
  steps: SagaStepExecution[];
  startedAt: Date;
  completedAt?: Date;
  failedAt?: Date;
  compensatedAt?: Date;
  errorMessage?: string;
}

export interface SagaStepExecution {
  stepNumber: number;
  status: 'PENDING' | 'PROCESSING' | 'COMPLETED' | 'FAILED' | 'COMPENSATED';
  startedAt?: Date;
  completedAt?: Date;
  failedAt?: Date;
  compensatedAt?: Date;
  responseData?: any;
  errorMessage?: string;
  retryCount: number;
}

interface CheckoutSagaPayload {
  userId: string;
  orderId: string;
  paymentMethodId: string;
  billingEmail: string;
  billingDetails?: any;
  eventId?: string;
  eventName?: string;
  eventDate?: string;
  eventVenue?: string;
  ticketCount?: number;
  totalAmount?: number;
  currency?: string;
}

interface CancelOrderSagaPayload {
  orderId: string;
  userId: string;
  reason?: string;
}

@Injectable()
export class SagaService {
  private readonly logger = new Logger(SagaService.name);

  constructor(
    private readonly prisma: PrismaService,
    @Inject('TICKET_SERVICE') private readonly ticketClient: ClientProxy,
    @Inject('PAYMENT_SERVICE') private readonly paymentClient: ClientProxy,
    @Inject('NOTIFICATION_SERVICE') private readonly notificationClient: ClientProxy,
  ) {
    this.logger.log('🚀 SagaService initialized');
  }

  // ========== SAGA ORCHESTRATION PATTERNS ==========

  async startCheckoutSaga(payload: CheckoutSagaPayload): Promise<SagaExecution> {
    this.logger.log(`Starting checkout saga for order ${payload.orderId}`);

    const sagaDefinition: SagaDefinition = {
      name: 'checkout',
      version: '2.0', // Updated version with notifications
      steps: [
        // Step 1: Reserve Tickets
        {
          stepNumber: 1,
          serviceName: 'ticket-service',
          action: 'ticket.reserve',
          compensationAction: 'ticket.release',
          timeout: 30000, // 30 seconds
          retryPolicy: {
            maxRetries: 3,
            retryDelay: 5000,
          },
        },
        // Step 2: Process Payment
        {
          stepNumber: 2,
          serviceName: 'payment-service',
          action: 'payment.process',
          compensationAction: 'payment.refund',
          timeout: 60000, // 60 seconds
          retryPolicy: {
            maxRetries: 2,
            retryDelay: 10000,
          },
        },
        // Step 3: Send Payment Confirmation (NEW)
        {
          stepNumber: 3,
          serviceName: 'notification-service',
          action: 'notification.payment-confirmation.saga',
          compensationAction: 'notification.compensate.saga',
          timeout: 30000, // 30 seconds
          retryPolicy: {
            maxRetries: 3,
            retryDelay: 5000,
          },
        },
        // Step 4: Send Ticket Delivery (NEW)
        {
          stepNumber: 4,
          serviceName: 'notification-service',
          action: 'notification.ticket-delivery.saga',
          compensationAction: 'notification.compensate.saga',
          timeout: 30000, // 30 seconds
          retryPolicy: {
            maxRetries: 3,
            retryDelay: 5000,
          },
        },
        // Step 5: Schedule Event Reminders (NEW)
        {
          stepNumber: 5,
          serviceName: 'notification-service',
          action: 'notification.reminder.saga',
          compensationAction: 'notification.compensate.saga',
          timeout: 30000, // 30 seconds
          retryPolicy: {
            maxRetries: 2,
            retryDelay: 10000,
          },
        },
      ],
    };

    const sagaExecution = await this.createSagaExecution(sagaDefinition, payload);
    await this.executeStep(sagaExecution, 1); // Start with step 1
    
    return sagaExecution;
  }

  async startCancelOrderSaga(payload: CancelOrderSagaPayload): Promise<SagaExecution> {
    this.logger.log(`Starting cancel order saga for order ${payload.orderId}`);

    const sagaDefinition: SagaDefinition = {
      name: 'cancel-order',
      version: '1.0',
      steps: [
        // Step 1: Cancel Payment
        {
          stepNumber: 1,
          serviceName: 'payment-service',
          action: 'payment.cancel',
          compensationAction: 'payment.restore',
          timeout: 30000,
        },
        // Step 2: Release Tickets
        {
          stepNumber: 2,
          serviceName: 'ticket-service',
          action: 'ticket.release',
          compensationAction: 'ticket.restore',
          timeout: 30000,
        },
        // Step 3: Send Cancellation Notification
        {
          stepNumber: 3,
          serviceName: 'notification-service',
          action: 'notification.cancellation.saga',
          compensationAction: 'notification.compensate.saga',
          timeout: 30000,
        },
      ],
    };

    const sagaExecution = await this.createSagaExecution(sagaDefinition, payload);
    await this.executeStep(sagaExecution, 1);
    
    return sagaExecution;
  }

  private async createSagaExecution(
    sagaDefinition: SagaDefinition,
    payload: CheckoutSagaPayload | CancelOrderSagaPayload
  ): Promise<SagaExecution> {
    const sagaExecution: SagaExecution = {
      id: this.generateSagaId(),
      sagaDefinition,
      orderId: payload.orderId,
      userId: payload.userId,
      status: 'STARTED',
      currentStep: 0,
      context: {
        ...payload,
        // Add additional context for notifications - FIXED TYPE SAFETY
        customerName: this.getCustomerNameFromPayload(payload),
        paymentMethod: this.getPaymentMethodFromPayload(payload),
        billingEmail: this.getBillingEmailFromPayload(payload),
        createdAt: new Date(),
      },
      steps: sagaDefinition.steps.map(step => ({
        stepNumber: step.stepNumber,
        status: 'PENDING',
        retryCount: 0,
      })),
      startedAt: new Date(),
    };

    // Store saga execution in database
    await this.saveSagaExecution(sagaExecution);

    this.logger.log(`Created saga execution: ${sagaExecution.id} for order: ${payload.orderId}`);
    return sagaExecution;
  }

  // ========== TYPE SAFE HELPER METHODS ==========

  private getCustomerNameFromPayload(payload: CheckoutSagaPayload | CancelOrderSagaPayload): string {
    // Type guard to check if it's a CheckoutSagaPayload
    if ('billingEmail' in payload && payload.billingEmail) {
      return payload.billingEmail.split('@')[0];
    }
    return 'Customer';
  }

  private getPaymentMethodFromPayload(payload: CheckoutSagaPayload | CancelOrderSagaPayload): string | undefined {
    // Type guard to check if it's a CheckoutSagaPayload
    if ('paymentMethodId' in payload) {
      return payload.paymentMethodId;
    }
    return undefined;
  }

  private getBillingEmailFromPayload(payload: CheckoutSagaPayload | CancelOrderSagaPayload): string | undefined {
    // Type guard to check if it's a CheckoutSagaPayload
    if ('billingEmail' in payload) {
      return payload.billingEmail;
    }
    return undefined;
  }

  private isCheckoutPayload(payload: CheckoutSagaPayload | CancelOrderSagaPayload): payload is CheckoutSagaPayload {
    return 'billingEmail' in payload;
  }

  // ========== SAGA EXECUTION METHODS ==========

  async executeStep(sagaExecution: SagaExecution, stepNumber: number): Promise<void> {
    const step = sagaExecution.sagaDefinition.steps.find(s => s.stepNumber === stepNumber);
    
    if (!step) {
      throw new Error(`Step ${stepNumber} not found in saga definition`);
    }

    this.logger.log(`Executing step ${stepNumber}: ${step.action} for saga ${sagaExecution.id}`);

    // Update saga current step and step status
    sagaExecution.currentStep = stepNumber;
    const stepExecution = sagaExecution.steps.find(s => s.stepNumber === stepNumber);
    if (stepExecution) {
      stepExecution.status = 'PROCESSING';
      stepExecution.startedAt = new Date();
    }

    await this.updateSagaExecution(sagaExecution);

    // Build the payload based on step type
    const stepPayload = this.buildStepPayload(sagaExecution, stepNumber);

    // Send message to appropriate service
    await this.sendSagaMessage(step.serviceName, step.action, stepPayload);
    
    // Set timeout for step
    this.setStepTimeout(sagaExecution.id, stepNumber, step.timeout);
  }

  private buildStepPayload(sagaExecution: SagaExecution, stepNumber: number): any {
    const basePayload = {
      sagaExecutionId: sagaExecution.id,
      stepNumber: stepNumber,
    };

    switch (stepNumber) {
      case 1: // Ticket reservation
        return {
          ...basePayload,
          requestData: {
            orderId: sagaExecution.orderId,
            userId: sagaExecution.userId,
            eventId: sagaExecution.context.eventId,
            ticketCount: sagaExecution.context.ticketCount || 1,
            ticketType: sagaExecution.context.ticketType || 'general',
            pricePerTicket: sagaExecution.context.pricePerTicket,
          },
        };

      case 2: // Payment processing
        return {
          ...basePayload,
          requestData: {
            orderId: sagaExecution.orderId,
            amount: sagaExecution.context.totalAmount,
            currency: sagaExecution.context.currency || 'KES',
            paymentMethod: 'CARD', // From context
            customerEmail: sagaExecution.context.billingEmail,
            customerPhone: sagaExecution.context.customerPhone,
            description: `Payment for ${sagaExecution.context.eventName || 'Event Ticket'}`,
            metadata: {
              sagaExecutionId: sagaExecution.id,
              stepNumber: stepNumber,
            },
          },
        };

      case 3: // Payment confirmation notification
        return {
          ...basePayload,
          requestData: {
            orderId: sagaExecution.orderId,
            customerEmail: sagaExecution.context.billingEmail,
            customerName: sagaExecution.context.customerName,
            amount: sagaExecution.context.totalAmount,
            currency: sagaExecution.context.currency || 'KES',
            eventName: sagaExecution.context.eventName || 'Event Ticket',
            paymentMethod: sagaExecution.context.paymentMethod,
            transactionId: sagaExecution.context.paymentId || 'pending',
          },
        };

      case 4: // Ticket delivery notification
        return {
          ...basePayload,
          requestData: {
            orderId: sagaExecution.orderId,
            customerEmail: sagaExecution.context.billingEmail,
            customerName: sagaExecution.context.customerName,
            eventName: sagaExecution.context.eventName || 'Amazing Event',
            eventDate: sagaExecution.context.eventDate || new Date().toISOString(),
            eventVenue: sagaExecution.context.eventVenue || 'Event Venue',
            ticketCount: sagaExecution.context.ticketCount || 1,
            ticketPdf: sagaExecution.context.ticketPdf, // Generated in previous steps
          },
        };

      case 5: // Event reminders
        const eventDate = new Date(sagaExecution.context.eventDate || Date.now() + 7 * 24 * 60 * 60 * 1000);
        const reminderDate = new Date(eventDate.getTime() - 24 * 60 * 60 * 1000); // 24 hours before
        
        return {
          ...basePayload,
          requestData: {
            eventId: sagaExecution.context.eventId,
            reminderType: '24h',
            scheduledFor: reminderDate,
            orderId: sagaExecution.orderId,
            customerEmail: sagaExecution.context.billingEmail,
            eventName: sagaExecution.context.eventName,
            eventDate: sagaExecution.context.eventDate,
            eventVenue: sagaExecution.context.eventVenue,
          },
        };

      default:
        return basePayload;
    }
  }

  async completeStep(
    sagaExecutionId: string,
    stepNumber: number,
    responseData: any,
  ): Promise<SagaExecution> {
    this.logger.log(`Completing step ${stepNumber} for saga ${sagaExecutionId}`);

    const sagaExecution = await this.getSagaStatus(sagaExecutionId);
    const stepExecution = sagaExecution.steps.find(s => s.stepNumber === stepNumber);

    if (!stepExecution) {
      throw new Error(`Step ${stepNumber} not found in saga execution`);
    }

    // Update step status
    stepExecution.status = 'COMPLETED';
    stepExecution.completedAt = new Date();
    stepExecution.responseData = responseData;

    // Update saga context with response data
    if (stepNumber === 2 && responseData.paymentId) {
      sagaExecution.context.paymentId = responseData.paymentId;
      sagaExecution.context.paymentStatus = responseData.status;
    }

    if (stepNumber === 1 && responseData.reservations) {
      sagaExecution.context.reservations = responseData.reservations;
    }

    await this.updateSagaExecution(sagaExecution);

    // Check if there are more steps
    const nextStepNumber = stepNumber + 1;
    const nextStep = sagaExecution.sagaDefinition.steps.find(s => s.stepNumber === nextStepNumber);

    if (nextStep) {
      // Execute next step
      await this.executeStep(sagaExecution, nextStepNumber);
    } else {
      // Saga completed
      sagaExecution.status = 'COMPLETED';
      sagaExecution.completedAt = new Date();
      await this.updateSagaExecution(sagaExecution);
      
      this.logger.log(`✅ Saga ${sagaExecutionId} completed successfully`);
    }

    return sagaExecution;
  }

  async failStep(
    sagaExecutionId: string,
    stepNumber: number,
    errorMessage: string,
  ): Promise<SagaExecution> {
    this.logger.log(`Failing step ${stepNumber} for saga ${sagaExecutionId}: ${errorMessage}`);

    const sagaExecution = await this.getSagaStatus(sagaExecutionId);
    const stepExecution = sagaExecution.steps.find(s => s.stepNumber === stepNumber);

    if (!stepExecution) {
      throw new Error(`Step ${stepNumber} not found in saga execution`);
    }

    const step = sagaExecution.sagaDefinition.steps.find(s => s.stepNumber === stepNumber);
    
    // Check if we should retry
    if (step?.retryPolicy && stepExecution.retryCount < step.retryPolicy.maxRetries) {
      stepExecution.retryCount++;
      this.logger.log(`Retrying step ${stepNumber} (attempt ${stepExecution.retryCount}/${step.retryPolicy.maxRetries})`);
      
      // Schedule retry
      setTimeout(async () => {
        await this.executeStep(sagaExecution, stepNumber);
      }, step.retryPolicy.retryDelay);
      
      return sagaExecution;
    }

    // No more retries, fail the step
    stepExecution.status = 'FAILED';
    stepExecution.failedAt = new Date();
    stepExecution.errorMessage = errorMessage;

    // Start compensation from current step backwards
    sagaExecution.status = 'COMPENSATING';
    sagaExecution.errorMessage = errorMessage;

    await this.updateSagaExecution(sagaExecution);

    // Start compensation
    await this.startCompensation(sagaExecution, stepNumber - 1);

    return sagaExecution;
  }

  private async startCompensation(sagaExecution: SagaExecution, fromStepNumber: number): Promise<void> {
    this.logger.log(`Starting compensation from step ${fromStepNumber} for saga ${sagaExecution.id}`);

    for (let stepNumber = fromStepNumber; stepNumber >= 1; stepNumber--) {
      const stepExecution = sagaExecution.steps.find(s => s.stepNumber === stepNumber);
      
      if (stepExecution && stepExecution.status === 'COMPLETED') {
        await this.compensateStep(sagaExecution.id, stepNumber, 'Saga failed');
      }
    }

    // Mark saga as compensated
    sagaExecution.status = 'FAILED';
    sagaExecution.failedAt = new Date();
    await this.updateSagaExecution(sagaExecution);

    this.logger.log(`❌ Saga ${sagaExecution.id} failed and compensated`);
  }

  async compensateStep(
    sagaExecutionId: string,
    stepNumber: number,
    reason: string,
  ): Promise<any> {
    this.logger.log(`Compensating step ${stepNumber} for saga ${sagaExecutionId}: ${reason}`);

    const sagaExecution = await this.getSagaStatus(sagaExecutionId);
    const step = sagaExecution.sagaDefinition.steps.find(s => s.stepNumber === stepNumber);
    const stepExecution = sagaExecution.steps.find(s => s.stepNumber === stepNumber);

    if (!step || !stepExecution) {
      throw new Error(`Step ${stepNumber} not found`);
    }

    // Build compensation payload
    const compensationPayload = {
      sagaExecutionId,
      stepNumber,
      reason,
      originalResponseData: stepExecution.responseData,
    };

    // Send compensation message
    await this.sendSagaMessage(step.serviceName, step.compensationAction, compensationPayload);

    // Update step status
    stepExecution.status = 'COMPENSATED';
    stepExecution.compensatedAt = new Date();

    await this.updateSagaExecution(sagaExecution);

    return { compensated: true, step: stepNumber };
  }

  // ========== SAGA HELPER METHODS ==========

  private async sendSagaMessage(serviceName: string, action: string, payload: any): Promise<void> {
    try {
      let client: ClientProxy;

      switch (serviceName) {
        case 'ticket-service':
          client = this.ticketClient;
          break;
        case 'payment-service':
          client = this.paymentClient;
          break;
        case 'notification-service':
          client = this.notificationClient;
          break;
        default:
          throw new Error(`Unknown service: ${serviceName}`);
      }

      client.emit(action, payload);
      this.logger.debug(`📤 Sent message ${action} to ${serviceName}`);
    } catch (error) {
      this.logger.error(`Failed to send message to ${serviceName}: ${error.message}`, error.stack);
      throw error;
    }
  }

  private setStepTimeout(sagaExecutionId: string, stepNumber: number, timeout: number): void {
    setTimeout(async () => {
      try {
        const sagaExecution = await this.getSagaStatus(sagaExecutionId);
        const stepExecution = sagaExecution.steps.find(s => s.stepNumber === stepNumber);

        if (stepExecution && stepExecution.status === 'PROCESSING') {
          await this.failStep(sagaExecutionId, stepNumber, 'Step timeout');
        }
      } catch (error) {
        this.logger.error(`Error handling step timeout: ${error.message}`, error.stack);
      }
    }, timeout);
  }

  async findSagaByOrderId(orderId: string): Promise<SagaExecution | null> {
    // Implementation depends on how you store saga executions
    // For now, return null - you'll need to implement database storage
    return null;
  }

  async getSagaStatus(sagaId: string): Promise<SagaExecution> {
    // Implementation depends on how you store saga executions
    // This is a placeholder - you'll need to implement database storage
    throw new Error('getSagaStatus not implemented - need database storage');
  }

  async getActiveSagas(limit: number, offset: number): Promise<SagaExecution[]> {
    // Implementation depends on how you store saga executions
    return [];
  }

  async getHealthStatus(): Promise<any> {
    return {
      service: 'saga-service',
      status: 'healthy',
      activeSagas: 0,
      completedSagas: 0,
      failedSagas: 0,
    };
  }

  async retrySaga(sagaExecutionId: string): Promise<any> {
    const sagaExecution = await this.getSagaStatus(sagaExecutionId);
    
    if (sagaExecution.status === 'FAILED') {
      // Restart from the failed step
      const failedStep = sagaExecution.steps.find(s => s.status === 'FAILED');
      if (failedStep) {
        await this.executeStep(sagaExecution, failedStep.stepNumber);
      }
    }

    return sagaExecution;
  }

  async handleTimeout(sagaExecutionId: string): Promise<any> {
    return this.failStep(sagaExecutionId, 0, 'Saga timeout');
  }

  // ========== UTILITY METHODS ==========

  private generateSagaId(): string {
    return `saga_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  private async saveSagaExecution(sagaExecution: SagaExecution): Promise<void> {
    // TODO: Implement database storage for saga executions
    this.logger.debug(`Saving saga execution: ${sagaExecution.id}`);
  }

  private async updateSagaExecution(sagaExecution: SagaExecution): Promise<void> {
    // TODO: Implement database update for saga executions
    this.logger.debug(`Updating saga execution: ${sagaExecution.id}`);
  }
}