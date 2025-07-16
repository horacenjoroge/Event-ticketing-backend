// apps/payment-service/src/controllers/payment.controller.ts
import { Controller, Logger } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { PaymentService } from '../services/payment.service';
import { 
  CreatePaymentDto, 
  RefundPaymentDto, 
  PaymentResponseDto,
  RefundResponseDto 
} from '../dto';

@Controller()
export class PaymentController {
  private readonly logger = new Logger(PaymentController.name);

  constructor(private readonly paymentService: PaymentService) {}

  // ========== SAGA MESSAGE PATTERNS ==========

  @MessagePattern('payment.process')
  async processPayment(@Payload() payload: {
    sagaExecutionId: string;
    stepNumber: number;
    requestData: CreatePaymentDto;
  }) {
    try {
      this.logger.log(`🔥 Processing saga payment: ${payload.sagaExecutionId}`);

      const result = await this.paymentService.processPayment(payload.requestData);

      // Notify saga of completion or processing status
      await this.paymentService.notifySagaPaymentStatus(
        payload.sagaExecutionId,
        payload.stepNumber,
        result
      );

      return {
        success: true,
        data: result,
        message: 'Payment processing initiated',
      };
    } catch (error) {
      this.logger.error(`Saga payment failed: ${error.message}`, error.stack);

      // Notify saga of failure
      await this.paymentService.notifySagaPaymentFailure(
        payload.sagaExecutionId,
        payload.stepNumber,
        error.message
      );

      return {
        success: false,
        error: error.message,
        message: 'Payment processing failed',
      };
    }
  }

  @MessagePattern('payment.status')
  async getPaymentStatus(@Payload() payload: {
    paymentId?: string;
    orderId?: string;
  }): Promise<{
    success: boolean;
    data?: PaymentResponseDto;
    message: string;
  }> {
    try {
      let payment: PaymentResponseDto;

      if (payload.paymentId) {
        payment = await this.paymentService.getPaymentStatus(payload.paymentId);
      } else if (payload.orderId) {
        payment = await this.paymentService.getPaymentByOrderId(payload.orderId);
      } else {
        throw new Error('Either paymentId or orderId is required');
      }

      return {
        success: true,
        data: payment,
        message: 'Payment status retrieved successfully',
      };
    } catch (error) {
      this.logger.error(`Failed to get payment status: ${error.message}`, error.stack);
      return {
        success: false,
        message: `Failed to get payment status: ${error.message}`,
      };
    }
  }

  @MessagePattern('payment.refund')
  async refundPayment(@Payload() payload: {
    sagaExecutionId?: string;
    stepNumber?: number;
    requestData: RefundPaymentDto;
  }): Promise<{
    success: boolean;
    data?: RefundResponseDto;
    message: string;
  }> {
    try {
      this.logger.log(`Processing refund for payment ${payload.requestData.paymentId}`);

      const refund = await this.paymentService.refundPayment(payload.requestData);

      // If this is part of a saga, notify the orchestrator
      if (payload.sagaExecutionId && payload.stepNumber) {
        await this.paymentService.notifySagaRefundStatus(
          payload.sagaExecutionId,
          payload.stepNumber,
          refund
        );
      }

      return {
        success: true,
        data: refund,
        message: 'Refund processed successfully',
      };
    } catch (error) {
      this.logger.error(`Refund failed: ${error.message}`, error.stack);

      // If this is part of a saga, notify the orchestrator of failure
      if (payload.sagaExecutionId && payload.stepNumber) {
        await this.paymentService.notifySagaRefundFailure(
          payload.sagaExecutionId,
          payload.stepNumber,
          error.message
        );
      }

      return {
        success: false,
        message: `Refund failed: ${error.message}`,
      };
    }
  }

  @MessagePattern('payment.webhook')
  async handleWebhook(@Payload() payload: {
    provider: string;
    eventType: string;
    eventData: any;
    signature?: string;
  }) {
    try {
      this.logger.log(`🔥 Processing webhook from ${payload.provider}: ${payload.eventType}`);

      await this.paymentService.handleWebhookEvent(
        payload.provider,
        payload.eventType,
        payload.eventData,
        payload.signature
      );

      return {
        success: true,
        message: 'Webhook processed successfully',
      };
    } catch (error) {
      this.logger.error(`Webhook processing failed: ${error.message}`, error.stack);
      return {
        success: false,
        message: `Webhook processing failed: ${error.message}`,
      };
    }
  }

  // ========== PROVIDER CAPABILITY QUERIES ==========

  @MessagePattern('payment.providers.list')
  async listSupportedProviders() {
    try {
      const providers = await this.paymentService.getSupportedProviders();
      
      return {
        success: true,
        data: providers,
        message: 'Supported providers retrieved successfully',
      };
    } catch (error) {
      this.logger.error(`Failed to list providers: ${error.message}`, error.stack);
      return {
        success: false,
        message: `Failed to list providers: ${error.message}`,
      };
    }
  }

  @MessagePattern('payment.providers.capabilities')
  async getProviderCapabilities(@Payload() payload: { 
    provider?: string;
    currency?: string;
    paymentMethod?: string; 
  }) {
    try {
      const capabilities = await this.paymentService.getProviderCapabilities(
        payload.provider,
        payload.currency,
        payload.paymentMethod
      );
      
      return {
        success: true,
        data: capabilities,
        message: 'Provider capabilities retrieved successfully',
      };
    } catch (error) {
      this.logger.error(`Failed to get capabilities: ${error.message}`, error.stack);
      return {
        success: false,
        message: `Failed to get capabilities: ${error.message}`,
      };
    }
  }

  // ========== HEALTH CHECK ==========

  @MessagePattern('payment.health')
  async healthCheck() {
    try {
      const health = await this.paymentService.getHealthStatus();
      
      return {
        success: true,
        data: health,
        message: 'Payment service is healthy',
      };
    } catch (error) {
      this.logger.error(`Health check failed: ${error.message}`, error.stack);
      return {
        success: false,
        message: `Payment service is unhealthy: ${error.message}`,
      };
    }
  }
}