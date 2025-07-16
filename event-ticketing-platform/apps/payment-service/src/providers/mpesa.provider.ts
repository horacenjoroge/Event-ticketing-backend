// src/providers/mpesa.provider.ts
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
export class MpesaProvider implements IPaymentProvider {
  private readonly logger = new Logger(MpesaProvider.name);
  private httpClient: AxiosInstance;
  private accessToken: string | null = null;
  private tokenExpiresAt: Date | null = null;

  readonly provider = PaymentProvider.MPESA;

  constructor() {
    this.httpClient = axios.create({
      baseURL: process.env.MPESA_BASE_URL || 'https://sandbox.safaricom.co.ke',
      timeout: 30000,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  async processPayment(request: PaymentRequest): Promise<PaymentResponse> {
    try {
      this.logger.log(`Processing M-Pesa payment for order ${request.orderId}`);

      if (!request.customerPhone) {
        throw new Error('Phone number is required for M-Pesa payments');
      }

      const phoneNumber = this.formatPhoneNumber(request.customerPhone);
      const accessToken = await this.getAccessToken();
      const timestamp = this.generateTimestamp();
      const password = this.generatePassword(timestamp);

      const stkPushRequest = {
        BusinessShortCode: process.env.MPESA_SHORTCODE!,
        Password: password,
        Timestamp: timestamp,
        TransactionType: 'CustomerPayBillOnline',
        Amount: Math.round(request.amount),
        PartyA: phoneNumber,
        PartyB: process.env.MPESA_SHORTCODE!,
        PhoneNumber: phoneNumber,
        CallBackURL: `${process.env.MPESA_CALLBACK_URL}/webhooks/mpesa`,
        AccountReference: request.orderId,
        TransactionDesc: request.description || `Payment for order ${request.orderId}`,
      };

      const response = await this.httpClient.post(
        '/mpesa/stkpush/v1/processrequest',
        stkPushRequest,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      return this.mapMpesaResponseToPaymentResponse(response.data, request);
    } catch (error) {
      this.logger.error(`M-Pesa payment failed: ${error.message}`, error.stack);
      
      return {
        paymentId: request.orderId,
        status: PaymentStatus.FAILED,
        amount: request.amount,
        currency: request.currency,
        metadata: {
          error: error.message,
          provider: 'MPESA',
        },
      };
    }
  }

  async getPaymentStatus(paymentId: string): Promise<PaymentResponse> {
    try {
      const accessToken = await this.getAccessToken();
      
      const queryRequest = {
        BusinessShortCode: process.env.MPESA_SHORTCODE!,
        Password: this.generatePassword(this.generateTimestamp()),
        Timestamp: this.generateTimestamp(),
        CheckoutRequestID: paymentId,
      };

      const response = await this.httpClient.post(
        '/mpesa/stkpushquery/v1/query',
        queryRequest,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      return this.mapMpesaQueryResponseToPaymentResponse(response.data);
    } catch (error) {
      this.logger.error(`Failed to get M-Pesa payment status: ${error.message}`);
      throw error;
    }
  }

  async refundPayment(request: RefundRequest): Promise<RefundResponse> {
    // M-Pesa refund implementation
    throw new Error('M-Pesa refunds not implemented yet');
  }

  isSupported(currency: Currency, paymentMethod: PaymentMethod): boolean {
    const capabilities = this.getCapabilities();
    return capabilities.supportedCurrencies.includes(currency) && 
           capabilities.supportedPaymentMethods.includes(paymentMethod);
  }

  getCapabilities(): PaymentProviderCapabilities {
    return {
      supportedCurrencies: [Currency.KES],
      supportedPaymentMethods: [PaymentMethod.MOBILE_MONEY],
      supportedCountries: ['KE'],
      supportsRefunds: false,
      supportsPartialRefunds: false,
      supportsRecurringPayments: false,
      webhookEvents: ['stkpush_callback'],
    };
  }

  async handleWebhookEvent(eventType: string, eventData: any): Promise<void> {
    this.logger.log(`Processing M-Pesa webhook event: ${eventType}`);
    // Handle M-Pesa webhook events
  }

  // Private helper methods
  private async getAccessToken(): Promise<string> {
    if (this.accessToken && this.tokenExpiresAt && this.tokenExpiresAt > new Date()) {
      return this.accessToken;
    }

    try {
      const credentials = Buffer.from(
        `${process.env.MPESA_CONSUMER_KEY}:${process.env.MPESA_CONSUMER_SECRET}`
      ).toString('base64');

      const response = await this.httpClient.get(
        '/oauth/v1/generate?grant_type=client_credentials',
        {
          headers: {
            Authorization: `Basic ${credentials}`,
          },
        }
      );

      this.accessToken = response.data.access_token;
      this.tokenExpiresAt = new Date(Date.now() + (parseInt(response.data.expires_in) * 1000));

      // FIX: Add null check before returning access token
      if (!this.accessToken) {
        throw new Error('Failed to obtain M-Pesa access token');
      }
      
      return this.accessToken;
    } catch (error) {
      this.logger.error(`Failed to get M-Pesa access token: ${error.message}`);
      throw error;
    }
  }

  private generateTimestamp(): string {
    const now = new Date();
    return now.getFullYear().toString() +
           (now.getMonth() + 1).toString().padStart(2, '0') +
           now.getDate().toString().padStart(2, '0') +
           now.getHours().toString().padStart(2, '0') +
           now.getMinutes().toString().padStart(2, '0') +
           now.getSeconds().toString().padStart(2, '0');
  }

  private generatePassword(timestamp: string): string {
    const passkey = process.env.MPESA_PASSKEY!;
    const shortcode = process.env.MPESA_SHORTCODE!;
    const dataToEncode = shortcode + passkey + timestamp;
    return Buffer.from(dataToEncode).toString('base64');
  }

  private formatPhoneNumber(phone: string): string {
    const digits = phone.replace(/\D/g, '');
    
    if (digits.startsWith('254')) {
      return digits;
    } else if (digits.startsWith('0')) {
      return '254' + digits.substring(1);
    } else if (digits.length === 9) {
      return '254' + digits;
    }
    
    throw new Error(`Invalid phone number format: ${phone}`);
  }

  private mapMpesaResponseToPaymentResponse(mpesaResponse: any, request: PaymentRequest): PaymentResponse {
    const isSuccess = mpesaResponse.ResponseCode === '0';
    
    return {
      paymentId: mpesaResponse.CheckoutRequestID,
      status: isSuccess ? PaymentStatus.PROCESSING : PaymentStatus.FAILED,
      amount: request.amount,
      currency: request.currency,
      providerTransactionId: mpesaResponse.MerchantRequestID,
      instructions: isSuccess ? 
        'Please check your phone for the M-Pesa payment prompt and enter your PIN to complete the payment.' :
        mpesaResponse.CustomerMessage,
      expiresAt: new Date(Date.now() + 5 * 60 * 1000),
      metadata: {
        merchantRequestId: mpesaResponse.MerchantRequestID,
        checkoutRequestId: mpesaResponse.CheckoutRequestID,
      },
    };
  }

  private mapMpesaQueryResponseToPaymentResponse(queryResponse: any): PaymentResponse {
    const resultCode = queryResponse.ResultCode;
    let status: PaymentStatus;

    switch (resultCode) {
      case '0':
        status = PaymentStatus.COMPLETED;
        break;
      case '1032':
        status = PaymentStatus.CANCELLED;
        break;
      case '1037':
        status = PaymentStatus.EXPIRED;
        break;
      default:
        status = PaymentStatus.FAILED;
    }

    return {
      paymentId: queryResponse.CheckoutRequestID,
      status,
      amount: 0,
      currency: Currency.KES,
      providerTransactionId: queryResponse.MpesaReceiptNumber,
      metadata: {
        resultCode: queryResponse.ResultCode,
        resultDescription: queryResponse.ResultDesc,
      },
    };
  }
}