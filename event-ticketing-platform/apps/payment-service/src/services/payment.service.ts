// src/services/payment.service.ts
import { Injectable, Logger, NotFoundException, BadRequestException, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { PrismaService } from '../database/prisma.service';
import { PaymentProviderService } from './payment-provider.service';
import {
  CreatePaymentDto,
  RefundPaymentDto,
  PaymentResponseDto,
  RefundResponseDto
} from '../dto';
import {
  PaymentStatus,
  PaymentProvider,
  Currency,
  PaymentMethod
} from '../enums';

@Injectable()
export class PaymentService {
  private readonly logger = new Logger(PaymentService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly paymentProviderService: PaymentProviderService,
    @Inject('ORDER_SERVICE') private readonly orderClient: ClientProxy,
    @Inject('NOTIFICATION_SERVICE') private readonly notificationClient: ClientProxy,
  ) {}

  async processPayment(createPaymentDto: CreatePaymentDto): Promise<PaymentResponseDto> {
    try {
      this.logger.log(`Processing payment for order ${createPaymentDto.orderId}`);

      // Check for existing payment
      const existingPayment = await this.prisma.payment.findUnique({
        where: { orderId: createPaymentDto.orderId },
      });

      if (existingPayment) {
        throw new BadRequestException('Payment already exists for this order');
      }

      // Get appropriate payment provider
      const provider = this.paymentProviderService.getProvider(
        createPaymentDto.currency,
        createPaymentDto.paymentMethod
      );

      // Create payment record
      const payment = await this.prisma.payment.create({
        data: {
          orderId: createPaymentDto.orderId,
          amount: createPaymentDto.amount,
          currency: createPaymentDto.currency,
          status: PaymentStatus.PENDING,
          provider: provider.provider,
          paymentMethod: createPaymentDto.paymentMethod,
          providerPaymentMethodId: createPaymentDto.paymentMethodId,
          customerEmail: createPaymentDto.customerEmail,
          customerPhone: createPaymentDto.customerPhone,
          description: createPaymentDto.description,
          metadata: createPaymentDto.metadata,
          returnUrl: createPaymentDto.returnUrl,
        },
      });

      // Process payment through provider
      const providerResponse = await provider.processPayment({
        orderId: createPaymentDto.orderId,
        amount: createPaymentDto.amount,
        currency: createPaymentDto.currency,
        paymentMethodId: createPaymentDto.paymentMethodId,
        customerEmail: createPaymentDto.customerEmail,
        customerPhone: createPaymentDto.customerPhone,
        description: createPaymentDto.description,
        metadata: createPaymentDto.metadata,
        returnUrl: createPaymentDto.returnUrl,
      });

      // Update payment with provider response
      const updatedPayment = await this.prisma.payment.update({
        where: { id: payment.id },
        data: {
          status: providerResponse.status,
          providerTransactionId: providerResponse.providerTransactionId,
          redirectUrl: providerResponse.redirectUrl,
          qrCode: providerResponse.qrCode,
          instructions: providerResponse.instructions,
          expiresAt: providerResponse.expiresAt,
          metadata: {
            ...payment.metadata as object,
            ...providerResponse.metadata,
          },
        },
      });

      // FIXED: Log payment event with correct provider
      await this.createPaymentEvent(payment.id, 'payment.initiated', providerResponse, provider.provider);

      return this.mapPaymentToDto(updatedPayment);
    } catch (error) {
      this.logger.error(`Payment processing failed: ${error.message}`, error.stack);
      throw error;
    }
  }

  async getPaymentStatus(paymentId: string): Promise<PaymentResponseDto> {
    const payment = await this.prisma.payment.findUnique({
      where: { id: paymentId },
    });

    if (!payment) {
      throw new NotFoundException('Payment not found');
    }

    return this.mapPaymentToDto(payment);
  }

  async getPaymentByOrderId(orderId: string): Promise<PaymentResponseDto> {
    const payment = await this.prisma.payment.findUnique({
      where: { orderId },
    });

    if (!payment) {
      throw new NotFoundException('Payment not found for this order');
    }

    return this.mapPaymentToDto(payment);
  }

  async refundPayment(refundDto: RefundPaymentDto): Promise<RefundResponseDto> {
    try {
      this.logger.log(`Processing refund for payment ${refundDto.paymentId}`);

      const payment = await this.prisma.payment.findUnique({
        where: { id: refundDto.paymentId },
      });

      if (!payment) {
        throw new NotFoundException('Payment not found');
      }

      if (payment.status !== PaymentStatus.COMPLETED) {
        throw new BadRequestException('Can only refund completed payments');
      }

      // FIX: Cast enum to ensure compatibility
      const provider = this.paymentProviderService.getProviderByName(payment.provider as PaymentProvider);

      // Create refund record
      const refund = await this.prisma.refund.create({
        data: {
          paymentId: payment.id,
          amount: refundDto.amount || payment.amount.toNumber(),
          currency: payment.currency,
          status: PaymentStatus.PROCESSING,
          provider: payment.provider,
          reason: refundDto.reason,
          metadata: refundDto.metadata,
        },
      });

      // Process refund through provider
      const providerResponse = await provider.refundPayment({
        paymentId: payment.providerTransactionId || payment.id,
        amount: refundDto.amount,
        reason: refundDto.reason,
        metadata: refundDto.metadata,
      });

      // Update refund with provider response
      const updatedRefund = await this.prisma.refund.update({
        where: { id: refund.id },
        data: {
          status: providerResponse.status,
          providerRefundId: providerResponse.providerRefundId,
          metadata: {
            ...refund.metadata as object,
            ...providerResponse.metadata,
          },
        },
      });

      // Update payment status
      const refundAmount = refundDto.amount || payment.amount.toNumber();
      if (refundAmount === payment.amount.toNumber()) {
        await this.prisma.payment.update({
          where: { id: payment.id },
          data: { status: PaymentStatus.REFUNDED },
        });
      } else {
        await this.prisma.payment.update({
          where: { id: payment.id },
          data: { status: PaymentStatus.PARTIALLY_REFUNDED },
        });
      }

      return this.mapRefundToDto(updatedRefund);
    } catch (error) {
      this.logger.error(`Refund processing failed: ${error.message}`, error.stack);
      throw error;
    }
  }

  async handleWebhookEvent(provider: string, eventType: string, eventData: any, signature?: string): Promise<void> {
    try {
      this.logger.log(`Handling webhook from ${provider}: ${eventType}`);

      const providerInstance = this.paymentProviderService.getProviderByName(provider as PaymentProvider);
      
      // Process the webhook event
      await providerInstance.handleWebhookEvent(eventType, eventData, signature);

      // Log webhook event
      await this.prisma.webhookLog.create({
        data: {
          provider: provider as PaymentProvider,
          eventId: eventData.id || Date.now().toString(),
          eventType,
          payload: eventData,
          processed: true,
          processedAt: new Date(),
        },
      });

      // Handle specific webhook events that affect payment status
      await this.processWebhookBusinessLogic(provider as PaymentProvider, eventType, eventData);
    } catch (error) {
      this.logger.error(`Webhook processing failed: ${error.message}`, error.stack);
      
      // Log failed webhook
      await this.prisma.webhookLog.create({
        data: {
          provider: provider as PaymentProvider,
          eventId: eventData.id || Date.now().toString(),
          eventType,
          payload: eventData,
          processed: false,
          errorMessage: error.message,
        },
      });
      
      throw error;
    }
  }

  // Saga notification methods
  async notifySagaPaymentStatus(sagaExecutionId: string, stepNumber: number, payment: PaymentResponseDto): Promise<void> {
    try {
      if (payment.status === PaymentStatus.COMPLETED) {
        this.orderClient.emit('saga.step.completed', {
          sagaExecutionId,
          stepNumber,
          responseData: payment,
        });
      } else if (payment.status === PaymentStatus.PROCESSING) {
        // For payments that require user action (3D Secure, M-Pesa prompt)
        this.orderClient.emit('saga.step.completed', {
          sagaExecutionId,
          stepNumber,
          responseData: payment,
        });
      }
    } catch (error) {
      this.logger.error(`Failed to notify saga: ${error.message}`, error.stack);
    }
  }

  async notifySagaPaymentFailure(sagaExecutionId: string, stepNumber: number, errorMessage: string): Promise<void> {
    try {
      this.orderClient.emit('saga.step.failed', {
        sagaExecutionId,
        stepNumber,
        errorMessage,
      });
    } catch (error) {
      this.logger.error(`Failed to notify saga of failure: ${error.message}`, error.stack);
    }
  }

  async notifySagaRefundStatus(sagaExecutionId: string, stepNumber: number, refund: RefundResponseDto): Promise<void> {
    try {
      this.orderClient.emit('saga.step.completed', {
        sagaExecutionId,
        stepNumber,
        responseData: refund,
      });
    } catch (error) {
      this.logger.error(`Failed to notify saga of refund: ${error.message}`, error.stack);
    }
  }

  async notifySagaRefundFailure(sagaExecutionId: string, stepNumber: number, errorMessage: string): Promise<void> {
    try {
      this.orderClient.emit('saga.step.failed', {
        sagaExecutionId,
        stepNumber,
        errorMessage,
      });
    } catch (error) {
      this.logger.error(`Failed to notify saga of refund failure: ${error.message}`, error.stack);
    }
  }

  // Provider capability methods
  async getSupportedProviders() {
    const providers = this.paymentProviderService.getSupportedProviders();
    const capabilities = this.paymentProviderService.getAllCapabilities();

    return providers.map(provider => ({
      provider,
      capabilities: capabilities.get(provider),
    }));
  }

  async getProviderCapabilities(provider?: string, currency?: string, paymentMethod?: string) {
    if (provider) {
      return this.paymentProviderService.getCapabilitiesForProvider(provider as PaymentProvider);
    }

    if (currency && paymentMethod) {
      const selectedProvider = this.paymentProviderService.getProvider(
        currency as Currency,
        paymentMethod as PaymentMethod
      );
      return {
        provider: selectedProvider.provider,
        capabilities: selectedProvider.getCapabilities(),
      };
    }

    return this.paymentProviderService.getAllCapabilities();
  }

  async getHealthStatus() {
    const totalPayments = await this.prisma.payment.count();
    const completedPayments = await this.prisma.payment.count({
      where: { status: PaymentStatus.COMPLETED },
    });
    const failedPayments = await this.prisma.payment.count({
      where: { status: PaymentStatus.FAILED },
    });

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
      providers: this.paymentProviderService.getSupportedProviders(),
    };
  }

  // Private helper methods
  private async processWebhookBusinessLogic(provider: PaymentProvider, eventType: string, eventData: any): Promise<void> {
    switch (provider) {
      case PaymentProvider.STRIPE:
        await this.handleStripeWebhookBusinessLogic(eventType, eventData);
        break;
      case PaymentProvider.MPESA:
        await this.handleMpesaWebhookBusinessLogic(eventType, eventData);
        break;
    }
  }

  private async handleStripeWebhookBusinessLogic(eventType: string, eventData: any): Promise<void> {
    switch (eventType) {
      case 'payment_intent.succeeded':
        await this.updatePaymentStatusFromWebhook(
          eventData.data.object.id,
          PaymentStatus.COMPLETED
        );
        break;
      case 'payment_intent.payment_failed':
        await this.updatePaymentStatusFromWebhook(
          eventData.data.object.id,
          PaymentStatus.FAILED
        );
        break;
    }
  }

  private async handleMpesaWebhookBusinessLogic(eventType: string, eventData: any): Promise<void> {
    switch (eventType) {
      case 'stkpush_callback':
        const isSuccess = eventData.Body?.stkCallback?.ResultCode === 0;
        const checkoutRequestId = eventData.Body?.stkCallback?.CheckoutRequestID;
        
        if (checkoutRequestId) {
          await this.updatePaymentStatusFromWebhook(
            checkoutRequestId,
            isSuccess ? PaymentStatus.COMPLETED : PaymentStatus.FAILED
          );
        }
        break;
    }
  }

  private async updatePaymentStatusFromWebhook(providerTransactionId: string, status: PaymentStatus): Promise<void> {
    try {
      const payment = await this.prisma.payment.findFirst({
        where: { providerTransactionId },
      });

      if (payment) {
        await this.prisma.payment.update({
          where: { id: payment.id },
          data: { 
            status,
            completedAt: status === PaymentStatus.COMPLETED ? new Date() : null,
            failedAt: status === PaymentStatus.FAILED ? new Date() : null,
          },
        });

        // Notify other services
        if (status === PaymentStatus.COMPLETED) {
          await this.notifyPaymentCompleted(payment);
        } else if (status === PaymentStatus.FAILED) {
          await this.notifyPaymentFailed(payment);
        }

        this.logger.log(`Updated payment ${payment.id} status to ${status}`);
      }
    } catch (error) {
      this.logger.error(`Failed to update payment status: ${error.message}`, error.stack);
    }
  }

  private async notifyPaymentCompleted(payment: any): Promise<void> {
    // Notify order service
    this.orderClient.emit('payment.completed', {
      paymentId: payment.id,
      orderId: payment.orderId,
      amount: payment.amount,
      currency: payment.currency,
      status: payment.status,
    });

    // Notify notification service
    this.notificationClient.emit('notification.send', {
      type: 'payment_completed',
      recipientEmail: payment.customerEmail,
      data: {
        orderId: payment.orderId,
        amount: payment.amount,
        currency: payment.currency,
      },
    });
  }

  private async notifyPaymentFailed(payment: any): Promise<void> {
    // Notify order service
    this.orderClient.emit('payment.failed', {
      paymentId: payment.id,
      orderId: payment.orderId,
      amount: payment.amount,
      currency: payment.currency,
      status: payment.status,
    });
  }

  // FIXED: Updated createPaymentEvent method to accept provider parameter
  private async createPaymentEvent(
    paymentId: string, 
    eventType: string, 
    eventData: any, 
    provider?: PaymentProvider
  ): Promise<void> {
    await this.prisma.paymentEvent.create({
      data: {
        paymentId,
        provider: provider || eventData.provider || PaymentProvider.STRIPE,
        eventType,
        eventData,
        processedAt: new Date(),
      },
    });
  }

  private mapPaymentToDto(payment: any): PaymentResponseDto {
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

  private mapRefundToDto(refund: any): RefundResponseDto {
    return {
      refundId: refund.id,
      paymentId: refund.paymentId,
      amount: refund.amount.toNumber(),
      currency: refund.currency,
      status: refund.status,
      provider: refund.provider,
      providerRefundId: refund.providerRefundId,
      reason: refund.reason,
      createdAt: refund.createdAt,
      metadata: refund.metadata,
    };
  }
}