// apps/order-service/src/saga/saga.controller.ts
import { Controller, Logger } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { SagaService } from './saga.service';

interface CheckoutSagaPayload {
  userId: string;
  orderId: string;
  paymentMethodId: string;
  billingEmail: string;
  billingDetails?: any;
}

interface CancelOrderSagaPayload {
  orderId: string;
  userId: string;
}

interface GetSagaStatusPayload {
  sagaId: string;
}

interface CompensateStepPayload {
  sagaExecutionId: string;
  stepNumber: number;
  reason: string;
}

@Controller()
export class SagaController {
  private readonly logger = new Logger(SagaController.name);

  constructor(private readonly sagaService: SagaService) {
    this.logger.log('🚀 SagaController initialized and ready to receive messages!');
  }

  // ========== SAGA ORCHESTRATION PATTERNS ==========

  @MessagePattern('saga.checkout')
  async startCheckoutSaga(@Payload() payload: CheckoutSagaPayload) {
    try {
      this.logger.log(`Starting checkout saga for order ${payload.orderId}`);

      const sagaExecution = await this.sagaService.startCheckoutSaga(payload);

      return {
        success: true,
        data: sagaExecution,
        message: 'Checkout saga started successfully',
      };
    } catch (error) {
      this.logger.error(`Failed to start checkout saga: ${error.message}`, error.stack);
      return {
        success: false,
        error: error.message,
        message: 'Failed to start checkout saga',
      };
    }
  }

  @MessagePattern('saga.cancel-order')
  async startCancelOrderSaga(@Payload() payload: CancelOrderSagaPayload) {
    try {
      this.logger.log(`Starting cancel order saga for order ${payload.orderId}`);

      const sagaExecution = await this.sagaService.startCancelOrderSaga(payload);

      return {
        success: true,
        data: sagaExecution,
        message: 'Cancel order saga started successfully',
      };
    } catch (error) {
      this.logger.error(`Failed to start cancel order saga: ${error.message}`, error.stack);
      return {
        success: false,
        error: error.message,
        message: 'Failed to start cancel order saga',
      };
    }
  }

  @MessagePattern('saga.get-status')
  async getSagaStatus(@Payload() payload: GetSagaStatusPayload) {
    try {
      this.logger.log(`Getting saga status for ${payload.sagaId}`);

      const sagaExecution = await this.sagaService.getSagaStatus(payload.sagaId);

      return {
        success: true,
        data: sagaExecution,
        message: 'Saga status retrieved successfully',
      };
    } catch (error) {
      this.logger.error(`Failed to get saga status: ${error.message}`, error.stack);
      return {
        success: false,
        error: error.message,
        message: 'Failed to retrieve saga status',
      };
    }
  }

  // ========== SAGA STEP COMPLETION PATTERNS ==========

  @MessagePattern('saga.step.completed')
  async handleStepCompleted(@Payload() payload: {
    sagaExecutionId: string;
    stepNumber: number;
    responseData: any;
  }) {
    try {
      this.logger.log(`🔥 RECEIVED COMPLETION MESSAGE: ${JSON.stringify(payload)}`);
      this.logger.log(`Saga step completed: ${payload.sagaExecutionId} step ${payload.stepNumber}`);

      const result = await this.sagaService.completeStep(
        payload.sagaExecutionId,
        payload.stepNumber,
        payload.responseData,
      );

      return {
        success: true,
        data: result,
        message: 'Saga step completed successfully',
      };
    } catch (error) {
      this.logger.error(`Failed to complete saga step: ${error.message}`, error.stack);
      return {
        success: false,
        error: error.message,
        message: 'Failed to complete saga step',
      };
    }
  }

  @MessagePattern('saga.step.failed')
  async handleStepFailed(@Payload() payload: {
    sagaExecutionId: string;
    stepNumber: number;
    errorMessage: string;
  }) {
    try {
      this.logger.log(`🔥 RECEIVED FAILURE MESSAGE: ${JSON.stringify(payload)}`);
      this.logger.log(`Saga step failed: ${payload.sagaExecutionId} step ${payload.stepNumber}`);

      const result = await this.sagaService.failStep(
        payload.sagaExecutionId,
        payload.stepNumber,
        payload.errorMessage,
      );

      return {
        success: true,
        data: result,
        message: 'Saga step failure handled successfully',
      };
    } catch (error) {
      this.logger.error(`Failed to handle saga step failure: ${error.message}`, error.stack);
      return {
        success: false,
        error: error.message,
        message: 'Failed to handle saga step failure',
      };
    }
  }

  // ========== PAYMENT SERVICE EVENT HANDLERS ==========

  @MessagePattern('payment.completed')
  async handlePaymentCompleted(@Payload() payload: {
    paymentId: string;
    orderId: string;
    amount: number;
    currency: string;
    status: string;
    metadata?: any;
  }) {
    try {
      this.logger.log(`🔥 Payment completed for order: ${payload.orderId} (Payment ID: ${payload.paymentId})`);
      
      // Find the saga execution for this order
      const sagaExecution = await this.sagaService.findSagaByOrderId(payload.orderId);
      
      if (sagaExecution) {
        // Check if we're on the payment step (step 2)
        if (sagaExecution.currentStep === 2) {
          await this.sagaService.completeStep(
            sagaExecution.id,
            2, // Payment step number
            {
              paymentId: payload.paymentId,
              amount: payload.amount,
              currency: payload.currency,
              status: payload.status,
              completedAt: new Date(),
              metadata: payload.metadata,
            }
          );
        } else {
          this.logger.warn(`Saga for order ${payload.orderId} is not on payment step (current: ${sagaExecution.currentStep})`);
        }
      } else {
        this.logger.warn(`No active saga found for order ${payload.orderId}`);
      }
      
      return { success: true };
    } catch (error) {
      this.logger.error(`Failed to handle payment completion: ${error.message}`, error.stack);
      return { success: false, error: error.message };
    }
  }

  @MessagePattern('payment.failed')
  async handlePaymentFailed(@Payload() payload: {
    paymentId?: string;
    orderId: string;
    errorMessage: string;
    metadata?: any;
  }) {
    try {
      this.logger.log(`🔥 Payment failed for order: ${payload.orderId} - ${payload.errorMessage}`);
      
      // Find the saga execution for this order
      const sagaExecution = await this.sagaService.findSagaByOrderId(payload.orderId);
      
      if (sagaExecution) {
        // Check if we're on the payment step (step 2)
        if (sagaExecution.currentStep === 2) {
          await this.sagaService.failStep(
            sagaExecution.id,
            2, // Payment step number
            payload.errorMessage || 'Payment processing failed'
          );
        } else {
          this.logger.warn(`Saga for order ${payload.orderId} is not on payment step (current: ${sagaExecution.currentStep})`);
        }
      } else {
        this.logger.warn(`No active saga found for order ${payload.orderId}`);
      }
      
      return { success: true };
    } catch (error) {
      this.logger.error(`Failed to handle payment failure: ${error.message}`, error.stack);
      return { success: false, error: error.message };
    }
  }

  // ========== TICKET SERVICE EVENT HANDLERS ==========

  @MessagePattern('ticket.reserved')
  async handleTicketReserved(@Payload() payload: {
    orderId: string;
    reservations: any[];
    totalTickets: number;
    metadata?: any;
  }) {
    try {
      this.logger.log(`🔥 Tickets reserved for order: ${payload.orderId} (${payload.totalTickets} tickets)`);
      
      // This is typically handled by saga.step.completed, but can be used for additional logic
      return { success: true };
    } catch (error) {
      this.logger.error(`Failed to handle ticket reservation: ${error.message}`, error.stack);
      return { success: false, error: error.message };
    }
  }

  @MessagePattern('ticket.confirmed')
  async handleTicketConfirmed(@Payload() payload: {
    orderId: string;
    confirmations: any[];
    metadata?: any;
  }) {
    try {
      this.logger.log(`🔥 Tickets confirmed for order: ${payload.orderId}`);
      
      // This is typically handled by saga.step.completed, but can be used for additional logic
      return { success: true };
    } catch (error) {
      this.logger.error(`Failed to handle ticket confirmation: ${error.message}`, error.stack);
      return { success: false, error: error.message };
    }
  }

  // ========== NOTIFICATION SERVICE EVENT HANDLERS ==========

  @MessagePattern('notification.sent')
  async handleNotificationSent(@Payload() payload: {
    orderId: string;
    notificationId: string;
    type: string;
    recipient: string;
    metadata?: any;
  }) {
    try {
      this.logger.log(`🔥 Notification sent for order: ${payload.orderId} (${payload.type} to ${payload.recipient})`);
      
      // This is typically handled by saga.step.completed, but can be used for additional logic
      return { success: true };
    } catch (error) {
      this.logger.error(`Failed to handle notification sent: ${error.message}`, error.stack);
      return { success: false, error: error.message };
    }
  }

  // ========== COMPENSATION PATTERNS ==========

  @MessagePattern('saga.compensate')
  async compensateStep(@Payload() payload: CompensateStepPayload) {
    try {
      this.logger.log(`Compensating saga step: ${payload.sagaExecutionId} step ${payload.stepNumber} - ${payload.reason}`);

      const result = await this.sagaService.compensateStep(
        payload.sagaExecutionId,
        payload.stepNumber,
        payload.reason,
      );

      return {
        success: true,
        data: result,
        message: 'Saga step compensated successfully',
      };
    } catch (error) {
      this.logger.error(`Failed to compensate saga step: ${error.message}`, error.stack);
      return {
        success: false,
        error: error.message,
        message: 'Failed to compensate saga step',
      };
    }
  }

  // ========== SAGA MANAGEMENT PATTERNS ==========

  @MessagePattern('saga.retry')
  async retrySaga(@Payload() payload: { sagaExecutionId: string }) {
    try {
      this.logger.log(`Retrying saga: ${payload.sagaExecutionId}`);

      const result = await this.sagaService.retrySaga(payload.sagaExecutionId);

      return {
        success: true,
        data: result,
        message: 'Saga retry initiated successfully',
      };
    } catch (error) {
      this.logger.error(`Failed to retry saga: ${error.message}`, error.stack);
      return {
        success: false,
        error: error.message,
        message: 'Failed to retry saga',
      };
    }
  }

  @MessagePattern('saga.timeout')
  async handleSagaTimeout(@Payload() payload: { sagaExecutionId: string }) {
    try {
      this.logger.log(`Handling saga timeout: ${payload.sagaExecutionId}`);

      const result = await this.sagaService.handleTimeout(payload.sagaExecutionId);

      return {
        success: true,
        data: result,
        message: 'Saga timeout handled successfully',
      };
    } catch (error) {
      this.logger.error(`Failed to handle saga timeout: ${error.message}`, error.stack);
      return {
        success: false,
        error: error.message,
        message: 'Failed to handle saga timeout',
      };
    }
  }

  @MessagePattern('saga.cancel')
  async cancelSaga(@Payload() payload: { sagaExecutionId: string; reason?: string }) {
    try {
      this.logger.log(`Cancelling saga: ${payload.sagaExecutionId} - ${payload.reason || 'No reason provided'}`);

      // Find the saga and start compensation
      const sagaExecution = await this.sagaService.getSagaStatus(payload.sagaExecutionId);
      
      if (sagaExecution.status === 'STARTED') {
        const result = await this.sagaService.failStep(
          payload.sagaExecutionId,
          sagaExecution.currentStep,
          payload.reason || 'Saga manually cancelled'
        );

        return {
          success: true,
          data: result,
          message: 'Saga cancellation initiated successfully',
        };
      } else {
        return {
          success: false,
          message: `Cannot cancel saga with status: ${sagaExecution.status}`,
        };
      }
    } catch (error) {
      this.logger.error(`Failed to cancel saga: ${error.message}`, error.stack);
      return {
        success: false,
        error: error.message,
        message: 'Failed to cancel saga',
      };
    }
  }

  // ========== SAGA MONITORING PATTERNS ==========

  @MessagePattern('saga.list.active')
  async listActiveSagas(@Payload() payload?: { limit?: number; offset?: number }) {
    try {
      this.logger.log('Listing active sagas');

      const activeSagas = await this.sagaService.getActiveSagas(
        payload?.limit || 50,
        payload?.offset || 0
      );

      return {
        success: true,
        data: activeSagas,
        message: 'Active sagas retrieved successfully',
      };
    } catch (error) {
      this.logger.error(`Failed to list active sagas: ${error.message}`, error.stack);
      return {
        success: false,
        error: error.message,
        message: 'Failed to list active sagas',
      };
    }
  }

  @MessagePattern('saga.health')
  async getSagaHealthStatus() {
    try {
      const healthStatus = await this.sagaService.getHealthStatus();

      return {
        success: true,
        data: healthStatus,
        message: 'Saga health status retrieved successfully',
      };
    } catch (error) {
      this.logger.error(`Failed to get saga health status: ${error.message}`, error.stack);
      return {
        success: false,
        error: error.message,
        message: 'Failed to get saga health status',
      };
    }
  }
}