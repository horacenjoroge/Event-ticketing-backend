// src/providers/stripe.provider.ts
import { Injectable, Logger } from '@nestjs/common';
import Stripe from 'stripe';
import {
  IPaymentProvider,
  PaymentRequest,
  PaymentResponse,
  RefundRequest,
  RefundResponse,
  PaymentProviderCapabilities
} from './payment-provider.interface';
import {
  PaymentStatus,
  PaymentProvider,
  PaymentMethod,
  Currency
} from '../enums';

@Injectable()
export class StripeProvider implements IPaymentProvider {
  private readonly logger = new Logger(StripeProvider.name);
  private stripe: Stripe;

  readonly provider = PaymentProvider.STRIPE;

  constructor() {
    this.stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
      // FIX: Update to latest Stripe API version
      apiVersion: '2025-06-30.basil',
    });
  }

  async processPayment(request: PaymentRequest): Promise<PaymentResponse> {
    try {
      this.logger.log(`Processing Stripe payment for order ${request.orderId}`);

      const paymentIntent = await this.stripe.paymentIntents.create({
        amount: Math.round(request.amount * 100),
        currency: request.currency.toLowerCase(),
        payment_method: request.paymentMethodId,
        description: request.description || `Payment for order ${request.orderId}`,
        metadata: {
          orderId: request.orderId,
          ...request.metadata,
        },
        confirmation_method: 'manual',
        confirm: true,
        return_url: request.returnUrl,
      });

      return this.mapStripePaymentIntentToResponse(paymentIntent, request);
    } catch (error) {
      this.logger.error(`Stripe payment failed: ${error.message}`, error.stack);
      
      if (error instanceof Stripe.errors.StripeCardError) {
        return {
          paymentId: request.orderId,
          status: PaymentStatus.FAILED,
          amount: request.amount,
          currency: request.currency,
          metadata: {
            error: error.message,
            code: error.code,
            decline_code: error.decline_code,
          },
        };
      }

      throw error;
    }
  }

  async getPaymentStatus(paymentId: string): Promise<PaymentResponse> {
    try {
      const paymentIntent = await this.stripe.paymentIntents.retrieve(paymentId);
      return this.mapStripePaymentIntentToResponse(paymentIntent);
    } catch (error) {
      this.logger.error(`Failed to get Stripe payment status: ${error.message}`);
      throw error;
    }
  }

  async refundPayment(request: RefundRequest): Promise<RefundResponse> {
    try {
      this.logger.log(`Processing Stripe refund for payment ${request.paymentId}`);

      const refund = await this.stripe.refunds.create({
        payment_intent: request.paymentId,
        amount: request.amount ? Math.round(request.amount * 100) : undefined,
        metadata: request.metadata,
      });

      return {
        refundId: refund.id,
        paymentId: request.paymentId,
        amount: refund.amount / 100,
        currency: refund.currency.toUpperCase() as Currency,
        // FIX: Add null check for refund.status
        status: this.mapStripeRefundStatus(refund.status || 'unknown'),
        providerRefundId: refund.id,
        // FIX: Handle null metadata
        metadata: refund.metadata || undefined,
      };
    } catch (error) {
      this.logger.error(`Stripe refund failed: ${error.message}`, error.stack);
      throw error;
    }
  }

  isSupported(currency: Currency, paymentMethod: PaymentMethod): boolean {
    const capabilities = this.getCapabilities();
    return capabilities.supportedCurrencies.includes(currency) && 
           capabilities.supportedPaymentMethods.includes(paymentMethod);
  }

  getCapabilities(): PaymentProviderCapabilities {
    return {
      supportedCurrencies: [Currency.USD, Currency.EUR, Currency.GBP],
      supportedPaymentMethods: [PaymentMethod.CARD, PaymentMethod.DIGITAL_WALLET],
      supportedCountries: ['US', 'GB', 'CA', 'AU', 'DE', 'FR', 'IT', 'ES', 'NL'],
      supportsRefunds: true,
      supportsPartialRefunds: true,
      supportsRecurringPayments: true,
      webhookEvents: [
        'payment_intent.succeeded',
        'payment_intent.payment_failed',
        'charge.dispute.created',
      ],
    };
  }

  async handleWebhookEvent(eventType: string, eventData: any, signature?: string): Promise<void> {
    this.logger.log(`Processing Stripe webhook event: ${eventType}`);
    
    // Verify signature if provided
    if (signature && process.env.STRIPE_WEBHOOK_SECRET) {
      try {
        this.stripe.webhooks.constructEvent(
          JSON.stringify(eventData),
          signature,
          process.env.STRIPE_WEBHOOK_SECRET
        );
      } catch (error) {
        this.logger.error(`Stripe webhook signature verification failed: ${error.message}`);
        throw error;
      }
    }

    // Process different event types
    switch (eventType) {
      case 'payment_intent.succeeded':
        await this.handlePaymentSucceeded(eventData.data.object);
        break;
      case 'payment_intent.payment_failed':
        await this.handlePaymentFailed(eventData.data.object);
        break;
      default:
        this.logger.log(`Unhandled Stripe webhook event: ${eventType}`);
    }
  }

  private mapStripePaymentIntentToResponse(
    paymentIntent: Stripe.PaymentIntent,
    request?: PaymentRequest
  ): PaymentResponse {
    const status = this.mapStripePaymentStatus(paymentIntent.status);
    
    const response: PaymentResponse = {
      paymentId: paymentIntent.id,
      status,
      amount: paymentIntent.amount / 100,
      currency: paymentIntent.currency.toUpperCase() as Currency,
      providerTransactionId: paymentIntent.id,
      metadata: paymentIntent.metadata,
    };

    // FIX: Add null check for redirect URL
    if (paymentIntent.next_action?.redirect_to_url?.url) {
      response.redirectUrl = paymentIntent.next_action.redirect_to_url.url;
    }

    return response;
  }

  private mapStripePaymentStatus(stripeStatus: string): PaymentStatus {
    switch (stripeStatus) {
      case 'requires_payment_method':
      case 'requires_confirmation':
        return PaymentStatus.PENDING;
      case 'requires_action':
      case 'processing':
        return PaymentStatus.PROCESSING;
      case 'succeeded':
        return PaymentStatus.COMPLETED;
      case 'canceled':
        return PaymentStatus.CANCELLED;
      default:
        return PaymentStatus.FAILED;
    }
  }

  private mapStripeRefundStatus(stripeStatus: string): PaymentStatus {
    switch (stripeStatus) {
      case 'pending':
        return PaymentStatus.PROCESSING;
      case 'succeeded':
        return PaymentStatus.REFUNDED;
      case 'failed':
        return PaymentStatus.FAILED;
      default:
        return PaymentStatus.FAILED;
    }
  }

  private async handlePaymentSucceeded(paymentIntent: Stripe.PaymentIntent): Promise<void> {
    this.logger.log(`Payment succeeded: ${paymentIntent.id}`);
    // Emit event to be handled by payment service
  }

  private async handlePaymentFailed(paymentIntent: Stripe.PaymentIntent): Promise<void> {
    this.logger.log(`Payment failed: ${paymentIntent.id}`);
    // Emit event to be handled by payment service
  }
}