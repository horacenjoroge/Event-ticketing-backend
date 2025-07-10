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

  @MessagePattern('saga.compensate')
  async compensateStep(@Payload() payload: CompensateStepPayload) {
    try {
      this.logger.log(`Compensating saga step: ${payload.sagaExecutionId} step ${payload.stepNumber}`);

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
}