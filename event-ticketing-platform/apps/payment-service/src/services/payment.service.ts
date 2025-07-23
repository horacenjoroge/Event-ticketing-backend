// =====================================================
// apps/payment-service/src/services/payment.service.ts
// COMPLETE FILE with notification integration and TypeScript fixes
// =====================================================
import { Injectable, Logger, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { PrismaService } from '../database/prisma.service';
import { PaymentProviderService } from './payment-provider.service';
import { 
  CreatePaymentDto, 
  RefundPaymentDto, 
  PaymentResponseDto,
  RefundResponseDto 
} from '../dto';

// Import your actual enums
import { PaymentStatus } from '../enums/payment-status.enum';
import { RefundStatus } from '../enums/payment-provider.enum';
import { PaymentProvider } from '../enums/payment-provider.enum';
import { Currency } from '../enums/currency.enum';

@Injectable()
export class PaymentService {
  private readonly logger = new Logger(PaymentService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly paymentProviderService: PaymentProviderService,
    @Inject('ORDER_SERVICE') private readonly orderClient: ClientProxy,
    @Inject('NOTIFICATION_SERVICE') private readonly notificationClient: ClientProxy,
  ) {
    this.logger.log('🚀 PaymentService initialized with notification integration');
  }

  // ========== CORE PAYMENT PROCESSING ==========

  async processPayment(createPaymentDto: CreatePaymentDto): Promise<PaymentResponseDto> {
    this.logger.log(`Processing payment for order: ${createPaymentDto.orderId}`);

    try {
      // Validate input
      await this.validatePaymentRequest(createPaymentDto);

      // Create payment record
      const payment = await this.createPaymentRecord(createPaymentDto);

      // Get appropriate payment provider
      const provider = await this.paymentProviderService.selectProvider(
        createPaymentDto.currency,
        createPaymentDto.paymentMethod,
        createPaymentDto.amount,
      );

      this.logger.log(`Selected ${provider} for ${createPaymentDto.currency} ${createPaymentDto.paymentMethod}`);

      // Process payment with selected provider
      let providerResponse;
      switch (provider) {
        case 'STRIPE':
          providerResponse = await this.paymentProviderService.processStripePayment(createPaymentDto);
          break;
        case 'MPESA':
          providerResponse = await this.paymentProviderService.processMpesaPayment(createPaymentDto);
          break;
        case 'FLUTTERWAVE':
          providerResponse = await this.paymentProviderService.processFlutterwavePayment(createPaymentDto);
          break;
        default:
          throw new Error(`Unsupported payment provider: ${provider}`);
      }

      // Update payment with provider response
      const updatedPayment = await this.updatePaymentWithProviderResponse(
        payment.id,
        provider,
        providerResponse,
      );

      // Trigger notifications based on payment status
      if (updatedPayment.status === PaymentStatus.COMPLETED) {
        await this.triggerPaymentCompletedNotifications(updatedPayment);
      } else if (updatedPayment.status === PaymentStatus.FAILED) {
        await this.triggerPaymentFailedNotifications(updatedPayment);
      }

      return this.mapToPaymentResponseDto(updatedPayment);
    } catch (error) {
      this.logger.error(`Payment processing failed: ${error.message}`, error.stack);
      
      // Update payment status to failed
      if (createPaymentDto.orderId) {
        await this.updatePaymentStatus(createPaymentDto.orderId, PaymentStatus.FAILED, error.message);
      }

      // Trigger failure notifications
      await this.triggerPaymentFailedNotifications({
        orderId: createPaymentDto.orderId,
        customerEmail: createPaymentDto.customerEmail,
        amount: createPaymentDto.amount,
        currency: createPaymentDto.currency,
        errorMessage: error.message,
      });

      throw error;
    }
  }

  async refundPayment(refundDto: RefundPaymentDto): Promise<RefundResponseDto> {
    this.logger.log(`Processing refund for payment: ${refundDto.paymentId}`);

    try {
      // Get payment record
      const payment = await this.getPaymentById(refundDto.paymentId);
      
      if (!payment) {
        throw new Error(`Payment not found: ${refundDto.paymentId}`);
      }

      if (payment.status !== PaymentStatus.COMPLETED) {
        throw new Error(`Cannot refund payment with status: ${payment.status}`);
      }

      // Create refund record
      const refund = await this.createRefundRecord(refundDto, payment);

      // Process refund with provider
      let providerResponse;
      switch (payment.provider) {
        case 'STRIPE':
          providerResponse = await this.paymentProviderService.processStripeRefund(refundDto, payment);
          break;
        case 'MPESA':
          providerResponse = await this.paymentProviderService.processMpesaRefund(refundDto, payment);
          break;
        case 'FLUTTERWAVE':
          providerResponse = await this.paymentProviderService.processFlutterwaveRefund(refundDto, payment);
          break;
        default:
          throw new Error(`Unsupported refund provider: ${payment.provider}`);
      }

      // Update refund with provider response
      const updatedRefund = await this.updateRefundWithProviderResponse(
        refund.id,
        providerResponse,
      );

      // Update payment status if fully refunded
      if (updatedRefund.amount >= payment.amount) {
        await this.updatePaymentStatus(payment.orderId, PaymentStatus.REFUNDED);
      }

      // Trigger refund notifications
      await this.triggerRefundNotifications(updatedRefund, payment);

      return this.mapToRefundResponseDto(updatedRefund);
    } catch (error) {
      this.logger.error(`Refund processing failed: ${error.message}`, error.stack);
      throw error;
    }
  }

  // ========== NOTIFICATION INTEGRATION ==========

  async notifySagaPaymentStatus(
    sagaExecutionId: string, 
    stepNumber: number, 
    paymentResult: any
  ): Promise<void> {
    try {
      if (paymentResult.success && paymentResult.data.status === PaymentStatus.COMPLETED) {
        // Notify order service saga that payment completed
        this.orderClient.emit('saga.step.completed', {
          sagaExecutionId,
          stepNumber,
          responseData: {
            paymentId: paymentResult.data.paymentId,
            amount: paymentResult.data.amount,
            currency: paymentResult.data.currency,
            status: paymentResult.data.status,
            providerTransactionId: paymentResult.data.providerTransactionId,
            completedAt: new Date(),
            metadata: paymentResult.data.metadata,
          },
        });

        this.logger.log(`✅ Notified saga ${sagaExecutionId} of payment completion`);
      } else if (paymentResult.data.status === PaymentStatus.PROCESSING) {
        // Payment is still processing - don't complete saga step yet
        this.logger.log(`⏳ Payment ${paymentResult.data.paymentId} is still processing`);
      } else {
        // Payment failed
        await this.notifySagaPaymentFailure(sagaExecutionId, stepNumber, paymentResult.error || 'Payment failed');
      }
    } catch (error) {
      this.logger.error(`Failed to notify saga of payment status: ${error.message}`, error.stack);
    }
  }

  async notifySagaPaymentFailure(
    sagaExecutionId: string, 
    stepNumber: number, 
    errorMessage: string
  ): Promise<void> {
    try {
      this.orderClient.emit('saga.step.failed', {
        sagaExecutionId,
        stepNumber,
        errorMessage,
      });

      this.logger.log(`❌ Notified saga ${sagaExecutionId} of payment failure`);
    } catch (error) {
      this.logger.error(`Failed to notify saga of payment failure: ${error.message}`, error.stack);
    }
  }

  async notifySagaRefundStatus(
    sagaExecutionId: string, 
    stepNumber: number, 
    refundResult: any
  ): Promise<void> {
    try {
      if (refundResult.success) {
        this.orderClient.emit('saga.step.completed', {
          sagaExecutionId,
          stepNumber,
          responseData: {
            refundId: refundResult.refundId,
            amount: refundResult.amount,
            status: refundResult.status,
            completedAt: new Date(),
          },
        });

        this.logger.log(`✅ Notified saga ${sagaExecutionId} of refund completion`);
      } else {
        await this.notifySagaRefundFailure(sagaExecutionId, stepNumber, refundResult.error);
      }
    } catch (error) {
      this.logger.error(`Failed to notify saga of refund status: ${error.message}`, error.stack);
    }
  }

  async notifySagaRefundFailure(
    sagaExecutionId: string, 
    stepNumber: number, 
    errorMessage: string
  ): Promise<void> {
    try {
      this.orderClient.emit('saga.step.failed', {
        sagaExecutionId,
        stepNumber,
        errorMessage,
      });

      this.logger.log(`❌ Notified saga ${sagaExecutionId} of refund failure`);
    } catch (error) {
      this.logger.error(`Failed to notify saga of refund failure: ${error.message}`, error.stack);
    }
  }

  private async triggerPaymentCompletedNotifications(payment: any): Promise<void> {
    try {
      this.logger.log(`🔔 Triggering payment completion notifications for order: ${payment.orderId}`);

      // Emit immediate payment completion event
      this.notificationClient.emit('payment.completed', {
        paymentId: payment.id,
        orderId: payment.orderId,
        amount: payment.amount.toNumber(),
        currency: payment.currency,
        customerEmail: payment.customerEmail,
        customerName: payment.customerEmail.split('@')[0],
        eventName: payment.metadata?.eventName || 'Event Ticket',
        paymentMethod: payment.paymentMethod,
        transactionId: payment.providerTransactionId,
        status: payment.status,
        completedAt: payment.completedAt,
        metadata: payment.metadata,
      });

      // Also emit to order service for saga coordination
      this.orderClient.emit('payment.completed', {
        paymentId: payment.id,
        orderId: payment.orderId,
        amount: payment.amount.toNumber(),
        currency: payment.currency,
        status: payment.status,
        metadata: payment.metadata,
      });

      this.logger.log(`✅ Payment completion notifications triggered for order: ${payment.orderId}`);
    } catch (error) {
      this.logger.error(`Failed to trigger payment completion notifications: ${error.message}`, error.stack);
    }
  }

  private async triggerPaymentFailedNotifications(payment: any): Promise<void> {
    try {
      this.logger.log(`🔔 Triggering payment failure notifications for order: ${payment.orderId}`);

      // Emit payment failure event
      this.notificationClient.emit('payment.failed', {
        paymentId: payment.id || 'unknown',
        orderId: payment.orderId,
        customerEmail: payment.customerEmail,
        customerName: payment.customerEmail?.split('@')[0] || 'Customer',
        amount: payment.amount,
        currency: payment.currency,
        errorMessage: payment.errorMessage || 'Payment processing failed',
        failedAt: payment.failedAt || new Date(),
        metadata: payment.metadata,
      });

      // Also emit to order service for saga coordination
      this.orderClient.emit('payment.failed', {
        paymentId: payment.id || 'unknown',
        orderId: payment.orderId,
        errorMessage: payment.errorMessage || 'Payment processing failed',
        metadata: payment.metadata,
      });

      this.logger.log(`❌ Payment failure notifications triggered for order: ${payment.orderId}`);
    } catch (error) {
      this.logger.error(`Failed to trigger payment failure notifications: ${error.message}`, error.stack);
    }
  }

  private async triggerRefundNotifications(refund: any, payment: any): Promise<void> {
    try {
      this.logger.log(`🔔 Triggering refund notifications for payment: ${payment.id}`);

      this.notificationClient.emit('payment.refunded', {
        refundId: refund.id,
        paymentId: payment.id,
        orderId: payment.orderId,
        amount: refund.amount.toNumber(),
        currency: payment.currency,
        customerEmail: payment.customerEmail,
        customerName: payment.customerEmail.split('@')[0],
        reason: refund.reason,
        status: refund.status,
        completedAt: refund.completedAt,
      });

      this.logger.log(`✅ Refund notifications triggered for payment: ${payment.id}`);
    } catch (error) {
      this.logger.error(`Failed to trigger refund notifications: ${error.message}`, error.stack);
    }
  }

  // ========== WEBHOOK HANDLING ==========

  async handleWebhookEvent(
    provider: string,
    eventType: string,
    eventData: any,
    signature?: string,
  ): Promise<void> {
    this.logger.log(`Processing webhook from ${provider}: ${eventType}`);

    try {
      // Verify webhook signature
      await this.verifyWebhookSignature(provider, eventData, signature);

      // Process based on provider and event type
      switch (provider.toLowerCase()) {
        case 'stripe':
          await this.handleStripeWebhook(eventType, eventData);
          break;
        case 'mpesa':
          await this.handleMpesaWebhook(eventType, eventData);
          break;
        case 'flutterwave':
          await this.handleFlutterwaveWebhook(eventType, eventData);
          break;
        default:
          this.logger.warn(`Unknown webhook provider: ${provider}`);
      }

      // Log webhook event
      await this.logWebhookEvent(provider, eventType, eventData, 'SUCCESS');
    } catch (error) {
      this.logger.error(`Webhook processing failed: ${error.message}`, error.stack);
      await this.logWebhookEvent(provider, eventType, eventData, 'FAILED', error.message);
      throw error;
    }
  }

  private async handleStripeWebhook(eventType: string, eventData: any): Promise<void> {
    switch (eventType) {
      case 'payment_intent.succeeded':
        await this.updatePaymentStatusFromWebhook(
          eventData.id,
          PaymentStatus.COMPLETED,
        );
        break;
      case 'payment_intent.payment_failed':
        await this.updatePaymentStatusFromWebhook(
          eventData.id,
          PaymentStatus.FAILED,
        );
        break;
      default:
        this.logger.debug(`Unhandled Stripe event: ${eventType}`);
    }
  }

  private async handleMpesaWebhook(eventType: string, eventData: any): Promise<void> {
    switch (eventType) {
      case 'payment.success':
      case 'C2B_PAYMENT':
        await this.updatePaymentStatusFromWebhook(
          eventData.CheckoutRequestID || eventData.TransactionID,
          PaymentStatus.COMPLETED,
        );
        break;
      case 'payment.failed':
        await this.updatePaymentStatusFromWebhook(
          eventData.CheckoutRequestID || eventData.TransactionID,
          PaymentStatus.FAILED,
        );
        break;
      default:
        this.logger.debug(`Unhandled M-Pesa event: ${eventType}`);
    }
  }

  private async handleFlutterwaveWebhook(eventType: string, eventData: any): Promise<void> {
    switch (eventType) {
      case 'charge.completed':
        if (eventData.status === 'successful') {
          await this.updatePaymentStatusFromWebhook(
            eventData.tx_ref || eventData.id,
            PaymentStatus.COMPLETED,
          );
        } else {
          await this.updatePaymentStatusFromWebhook(
            eventData.tx_ref || eventData.id,
            PaymentStatus.FAILED,
          );
        }
        break;
      default:
        this.logger.debug(`Unhandled Flutterwave event: ${eventType}`);
    }
  }

  private async updatePaymentStatusFromWebhook(
    providerTransactionId: string, 
    status: PaymentStatus,
    errorMessage?: string
  ): Promise<void> {
    try {
      const payment = await this.prisma.payment.findFirst({
        where: { 
          OR: [
            { providerTransactionId },
            { id: providerTransactionId },
          ]
        },
      });

      if (payment) {
        const updatedPayment = await this.prisma.payment.update({
          where: { id: payment.id },
          data: { 
            status,
            completedAt: status === PaymentStatus.COMPLETED ? new Date() : null,
            failedAt: status === PaymentStatus.FAILED ? new Date() : null,
            errorMessage: errorMessage || null,
            updatedAt: new Date(),
          },
        });

        // Trigger appropriate notifications
        if (status === PaymentStatus.COMPLETED) {
          await this.triggerPaymentCompletedNotifications(updatedPayment);
        } else if (status === PaymentStatus.FAILED) {
          await this.triggerPaymentFailedNotifications(updatedPayment);
        }

        this.logger.log(`✅ Updated payment ${payment.id} status to ${status} via webhook`);
      } else {
        this.logger.warn(`Payment not found for provider transaction: ${providerTransactionId}`);
      }
    } catch (error) {
      this.logger.error(`Failed to update payment status from webhook: ${error.message}`, error.stack);
    }
  }

  // ========== QUERY METHODS ==========

  async getPaymentStatus(paymentId: string): Promise<PaymentResponseDto> {
    const payment = await this.getPaymentById(paymentId);
    
    if (!payment) {
      throw new Error(`Payment not found: ${paymentId}`);
    }

    return this.mapToPaymentResponseDto(payment);
  }

  async getPaymentByOrderId(orderId: string): Promise<PaymentResponseDto> {
    const payment = await this.prisma.payment.findFirst({
      where: { orderId },
      orderBy: { createdAt: 'desc' },
    });

    if (!payment) {
      throw new Error(`Payment not found for order: ${orderId}`);
    }

    return this.mapToPaymentResponseDto(payment);
  }

  async getSupportedProviders(): Promise<any[]> {
    return this.paymentProviderService.getSupportedProviders();
  }

  async getProviderCapabilities(
    provider?: string,
    currency?: string,
    paymentMethod?: string,
  ): Promise<any> {
    return this.paymentProviderService.getProviderCapabilities(provider, currency, paymentMethod);
  }

  async getHealthStatus(): Promise<any> {
    try {
      const totalPayments = await this.prisma.payment.count();
      const completedPayments = await this.prisma.payment.count({
        where: { status: PaymentStatus.COMPLETED },
      });
      const failedPayments = await this.prisma.payment.count({
        where: { status: PaymentStatus.FAILED },
      });

      const supportedProviders = await this.getSupportedProviders();

      return {
        service: 'payment-service',
        status: 'healthy',
        timestamp: new Date().toISOString(),
        metrics: {
          totalPayments,
          completedPayments,
          failedPayments,
          successRate: totalPayments > 0 ? (completedPayments / totalPayments) * 100 : 0,
        },
        providers: supportedProviders,
        features: {
          multiProvider: true,
          webhooks: true,
          refunds: true,
          notifications: true,
          sagaIntegration: true,
        },
      };
    } catch (error) {
      return {
        service: 'payment-service',
        status: 'unhealthy',
        error: error.message,
        timestamp: new Date().toISOString(),
      };
    }
  }

  // ========== HELPER METHODS ==========

  private async validatePaymentRequest(dto: CreatePaymentDto): Promise<void> {
    if (!dto.orderId) {
      throw new Error('Order ID is required');
    }

    if (!dto.amount || dto.amount <= 0) {
      throw new Error('Valid amount is required');
    }

    if (!dto.currency) {
      throw new Error('Currency is required');
    }

    if (!dto.customerEmail) {
      throw new Error('Customer email is required');
    }

    // Check for duplicate payments
    const existingPayment = await this.prisma.payment.findFirst({
      where: { 
        orderId: dto.orderId,
        status: { in: [PaymentStatus.COMPLETED, PaymentStatus.PROCESSING] },
      },
    });

    if (existingPayment) {
      throw new Error(`Payment already exists for order: ${dto.orderId}`);
    }
  }

  private async createPaymentRecord(dto: CreatePaymentDto): Promise<any> {
    return this.prisma.payment.create({
      data: {
        orderId: dto.orderId,
        amount: dto.amount,
        currency: dto.currency,
        paymentMethod: dto.paymentMethod,
        provider: null, // Set as null initially, will be updated after provider selection
        customerEmail: dto.customerEmail,
        customerPhone: dto.customerPhone,
        customerName: dto.customerName,
        status: PaymentStatus.PENDING,
        description: dto.description,
        metadata: dto.metadata,
        idempotencyKey: dto.idempotencyKey || `payment_${dto.orderId}_${Date.now()}`,
      },
    });
  }

  private async createRefundRecord(dto: RefundPaymentDto, payment: any): Promise<any> {
    return this.prisma.refund.create({
      data: {
        paymentId: payment.id,
        amount: dto.amount ?? payment.amount, // FIXED: Use nullish coalescing to handle undefined
        currency: payment.currency, // FIXED: Added missing currency field
        provider: payment.provider, // FIXED: Added missing provider field
        reason: dto.reason,
        status: RefundStatus.PENDING,
        metadata: dto.metadata,
        idempotencyKey: dto.idempotencyKey || `refund_${payment.id}_${Date.now()}`,
      },
    });
  }

  private async updatePaymentWithProviderResponse(
    paymentId: string,
    provider: string,
    response: any,
  ): Promise<any> {
    return this.prisma.payment.update({
      where: { id: paymentId },
      data: {
        provider: provider as PaymentProvider, // FIXED: Type cast to PaymentProvider enum
        providerTransactionId: response.transactionId || response.id,
        providerResponse: response,
        status: this.mapProviderStatusToPaymentStatus(response.status),
        redirectUrl: response.redirectUrl,
        qrCode: response.qrCode,
        instructions: response.instructions,
        expiresAt: response.expiresAt,
        updatedAt: new Date(),
      },
    });
  }

  private async updateRefundWithProviderResponse(
    refundId: string,
    response: any,
  ): Promise<any> {
    return this.prisma.refund.update({
      where: { id: refundId },
      data: {
        providerRefundId: response.refundId || response.id,
        providerResponse: response,
        status: this.mapProviderStatusToRefundStatus(response.status),
        completedAt: response.status === 'completed' ? new Date() : null,
        updatedAt: new Date(),
      },
    });
  }

  private async updatePaymentStatus(
    orderId: string,
    status: PaymentStatus,
    errorMessage?: string,
  ): Promise<void> {
    await this.prisma.payment.updateMany({
      where: { orderId },
      data: {
        status,
        errorMessage: errorMessage || null,
        failedAt: status === PaymentStatus.FAILED ? new Date() : null,
        completedAt: status === PaymentStatus.COMPLETED ? new Date() : null,
        updatedAt: new Date(),
      },
    });
  }

  private async getPaymentById(paymentId: string): Promise<any> {
    return this.prisma.payment.findUnique({
      where: { id: paymentId },
      include: {
        refunds: true,
      },
    });
  }

  private async verifyWebhookSignature(
    provider: string,
    eventData: any,
    signature?: string,
  ): Promise<void> {
    // Implement signature verification based on provider
    switch (provider.toLowerCase()) {
      case 'stripe':
        // Implement Stripe signature verification
        break;
      case 'flutterwave':
        // Implement Flutterwave signature verification
        break;
      case 'mpesa':
        // M-Pesa doesn't use signatures, but you can verify other fields
        break;
    }
  }

  private async logWebhookEvent(
    provider: string,
    eventType: string,
    eventData: any,
    status: string,
    errorMessage?: string,
  ): Promise<void> {
    try {
      await this.prisma.webhookLog.create({
        data: {
          provider: provider as PaymentProvider,
          eventType,
          eventId: eventData.id || `${provider}_${Date.now()}`,
          payload: eventData, // FIXED: Changed from 'eventData' to 'payload' to match schema
          processed: status === 'SUCCESS', // FIXED: Added missing 'processed' field
          processedAt: new Date(),
          errorMessage,
        },
      });
    } catch (error) {
      this.logger.error(`Failed to log webhook event: ${error.message}`, error.stack);
    }
  }

  private mapProviderStatusToPaymentStatus(providerStatus: string): PaymentStatus {
    switch (providerStatus?.toLowerCase()) {
      case 'completed':
      case 'successful':
      case 'success':
      case 'paid':
        return PaymentStatus.COMPLETED;
      case 'processing':
      case 'pending':
        return PaymentStatus.PROCESSING;
      case 'failed':
      case 'declined':
      case 'error':
        return PaymentStatus.FAILED;
      case 'cancelled':
      case 'canceled':
        return PaymentStatus.CANCELLED;
      default:
        return PaymentStatus.PENDING;
    }
  }

  private mapProviderStatusToRefundStatus(providerStatus: string): RefundStatus {
    switch (providerStatus?.toLowerCase()) {
      case 'completed':
      case 'successful':
      case 'success':
        return RefundStatus.COMPLETED;
      case 'processing':
      case 'pending':
        return RefundStatus.PROCESSING;
      case 'failed':
      case 'declined':
      case 'error':
        return RefundStatus.FAILED;
      default:
        return RefundStatus.PENDING;
    }
  }

  private mapToPaymentResponseDto(payment: any): PaymentResponseDto {
    return {
      paymentId: payment.id,
      orderId: payment.orderId,
      status: payment.status,
      amount: payment.amount.toNumber(),
      currency: payment.currency,
      provider: payment.provider,
      providerTransactionId: payment.providerTransactionId,
      redirectUrl: payment.redirectUrl,
      qrCode: payment.qrCode,
      instructions: payment.instructions,
      expiresAt: payment.expiresAt,
      createdAt: payment.createdAt,
      updatedAt: payment.updatedAt,
      metadata: payment.metadata,
    };
  }

  private mapToRefundResponseDto(refund: any): RefundResponseDto {
    return {
      refundId: refund.id,
      paymentId: refund.paymentId,
      amount: refund.amount.toNumber(),
      currency: refund.currency, // FIXED: Added missing currency field
      status: refund.status,
      reason: refund.reason,
      providerRefundId: refund.providerRefundId,
      createdAt: refund.createdAt,
      completedAt: refund.completedAt,
      metadata: refund.metadata,
    };
  }
}