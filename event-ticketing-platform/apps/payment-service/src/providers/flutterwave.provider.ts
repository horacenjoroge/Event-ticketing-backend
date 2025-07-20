// apps/payment-service/src/providers/flutterwave.provider.ts
import { Injectable, Logger } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
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
export class FlutterwaveProvider implements IPaymentProvider {
  private readonly logger = new Logger(FlutterwaveProvider.name);
  private httpClient: AxiosInstance;

  readonly provider = PaymentProvider.FLUTTERWAVE;

  constructor() {
    this.httpClient = axios.create({
      baseURL: process.env.FLUTTERWAVE_BASE_URL || 'https://api.flutterwave.com/v3',
      timeout: 30000,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.FLUTTERWAVE_SECRET_KEY}`,
      },
    });

    // Add request/response interceptors for debugging
    this.httpClient.interceptors.request.use((config) => {
      this.logger.debug(`🔍 Flutterwave Request: ${config.method?.toUpperCase()} ${config.url}`);
      return config;
    });

    this.httpClient.interceptors.response.use(
      (response) => {
        this.logger.debug(`✅ Flutterwave Response: ${response.status}`);
        return response;
      },
      (error) => {
        this.logger.error(`❌ Flutterwave Error: ${error.response?.status}`);
        this.logger.error(`❌ Error Data: ${JSON.stringify(error.response?.data, null, 2)}`);
        return Promise.reject(error);
      }
    );
  }

  async processPayment(request: PaymentRequest): Promise<PaymentResponse> {
    try {
      this.logger.log(`Processing Flutterwave payment for order ${request.orderId}`);

      const paymentData = {
        tx_ref: request.orderId,
        amount: request.amount,
        currency: request.currency,
        redirect_url: process.env.FLUTTERWAVE_REDIRECT_URL || 'http://localhost:3000/payment/callback',
        payment_options: this.getPaymentOptions(request.paymentMethodId),
        customer: {
          email: request.customerEmail,
          phonenumber: request.customerPhone || '',
          name: request.customerEmail.split('@')[0], // Extract name from email
        },
        customizations: {
          title: "Event Ticket Payment",
          description: request.description || `Payment for order ${request.orderId}`,
          logo: process.env.COMPANY_LOGO_URL || '',
        },
        meta: {
          orderId: request.orderId,
          source: 'event-ticketing-platform'
        }
      };

      this.logger.log(`🚀 Flutterwave Payment Data:`);
      this.logger.log(`💰 Amount: ${paymentData.amount} ${paymentData.currency}`);
      this.logger.log(`📧 Customer: ${paymentData.customer.email}`);
      this.logger.log(`🎫 Order: ${paymentData.tx_ref}`);
      this.logger.log(`💳 Payment Options: ${paymentData.payment_options}`);

      const response = await this.httpClient.post('/payments', paymentData);

      return this.mapFlutterwaveResponseToPaymentResponse(response.data, request);
    } catch (error) {
      this.logger.error(`Flutterwave payment failed: ${error.message}`);
      if (error.response?.data) {
        this.logger.error(`Flutterwave Error Details: ${JSON.stringify(error.response.data, null, 2)}`);
      }
      
      return {
        paymentId: request.orderId,
        status: PaymentStatus.FAILED,
        amount: request.amount,
        currency: request.currency,
        metadata: {
          error: error.message,
          errorDetails: error.response?.data,
          provider: 'FLUTTERWAVE',
        },
      };
    }
  }

  async getPaymentStatus(paymentId: string): Promise<PaymentResponse> {
    try {
      const response = await this.httpClient.get(`/transactions/${paymentId}/verify`);
      return this.mapFlutterwaveVerifyResponseToPaymentResponse(response.data);
    } catch (error) {
      this.logger.error(`Failed to get Flutterwave payment status: ${error.message}`);
      throw error;
    }
  }

  async refundPayment(request: RefundRequest): Promise<RefundResponse> {
    // Flutterwave refund implementation
    throw new Error('Flutterwave refunds not implemented yet');
  }

  isSupported(currency: Currency, paymentMethod: PaymentMethod): boolean {
    const capabilities = this.getCapabilities();
    return capabilities.supportedCurrencies.includes(currency) && 
           capabilities.supportedPaymentMethods.includes(paymentMethod);
  }

  getCapabilities(): PaymentProviderCapabilities {
    return {
      supportedCurrencies: [Currency.KES, Currency.USD, Currency.EUR, Currency.GBP],
      supportedPaymentMethods: [
        PaymentMethod.CARD,           // ← Using your existing enum values
        PaymentMethod.MOBILE_MONEY,
        PaymentMethod.BANK_TRANSFER,
        PaymentMethod.DIGITAL_WALLET
      ],
      supportedCountries: ['KE', 'NG', 'GH', 'UG', 'US', 'UK', 'ZA'],
      supportsRefunds: true,
      supportsPartialRefunds: true,
      supportsRecurringPayments: true,
      webhookEvents: ['charge.completed', 'transfer.completed'],
    };
  }

  async handleWebhookEvent(eventType: string, eventData: any, signature?: string): Promise<void> {
    this.logger.log(`Processing Flutterwave webhook event: ${eventType}`);
    this.logger.debug(`Webhook data: ${JSON.stringify(eventData, null, 2)}`);
    
    // TODO: Implement webhook signature verification
    // TODO: Process different event types
  }

  // Private helper methods
  private getPaymentOptions(paymentMethodId: string | undefined): string {
    // Map your existing paymentMethodId strings to Flutterwave payment options
    switch (paymentMethodId?.toLowerCase()) {
      case 'card':
      case 'credit_card':
      case 'debit_card':
        return 'card';
      case 'mobile_money':
      case 'mpesa':
        return 'mobilemoney';
      case 'bank_transfer':
        return 'banktransfer';
      case 'digital_wallet':
        return 'ussd,account,qr'; // Flutterwave digital wallet options
      case 'crypto':
        return 'card'; // Fallback to card for crypto (Flutterwave doesn't have direct crypto)
      default:
        return 'card,mobilemoney,banktransfer'; // All main options
    }
  }

  private mapFlutterwaveResponseToPaymentResponse(flutterwaveResponse: any, request: PaymentRequest): PaymentResponse {
    const { status, data } = flutterwaveResponse;
    
    if (status === 'success' && data?.link) {
      return {
        paymentId: data.id || request.orderId,
        status: PaymentStatus.PROCESSING,
        amount: request.amount,
        currency: request.currency,
        providerTransactionId: data.id,
        redirectUrl: data.link, // Flutterwave hosted payment page
        instructions: 'You will be redirected to complete your payment',
        expiresAt: new Date(Date.now() + 30 * 60 * 1000), // 30 minutes
        metadata: {
          flutterwave_id: data.id,
          payment_link: data.link,
          tx_ref: data.tx_ref,
          provider: 'FLUTTERWAVE',
        },
      };
    }

    return {
      paymentId: request.orderId,
      status: PaymentStatus.FAILED,
      amount: request.amount,
      currency: request.currency,
      metadata: {
        error: 'Failed to create Flutterwave payment',
        response: flutterwaveResponse,
        provider: 'FLUTTERWAVE',
      },
    };
  }

  private mapFlutterwaveVerifyResponseToPaymentResponse(verifyResponse: any): PaymentResponse {
    const { status, data } = verifyResponse;
    
    if (status === 'success' && data) {
      let paymentStatus: PaymentStatus;
      
      switch (data.status) {
        case 'successful':
          paymentStatus = PaymentStatus.COMPLETED;
          break;
        case 'failed':
          paymentStatus = PaymentStatus.FAILED;
          break;
        case 'cancelled':
          paymentStatus = PaymentStatus.CANCELLED;
          break;
        default:
          paymentStatus = PaymentStatus.PROCESSING;
      }

      return {
        paymentId: data.id,
        status: paymentStatus,
        amount: data.amount,
        currency: data.currency,
        providerTransactionId: data.flw_ref,
        metadata: {
          processor_response: data.processor_response,
          card: data.card,
          customer: data.customer,
          charged_amount: data.charged_amount,
          provider: 'FLUTTERWAVE',
        },
      };
    }

    throw new Error('Invalid Flutterwave verification response');
  }
}