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

    // Add request/response interceptors for debugging
    this.httpClient.interceptors.request.use((config) => {
      this.logger.debug(`🔍 M-Pesa Request: ${config.method?.toUpperCase()} ${config.url}`);
      this.logger.debug(`🔍 Headers: ${JSON.stringify(config.headers, null, 2)}`);
      if (config.data) {
        this.logger.debug(`🔍 Body: ${JSON.stringify(config.data, null, 2)}`);
      }
      return config;
    });

    this.httpClient.interceptors.response.use(
      (response) => {
        this.logger.debug(`✅ M-Pesa Response: ${response.status}`);
        this.logger.debug(`✅ Data: ${JSON.stringify(response.data, null, 2)}`);
        return response;
      },
      (error) => {
        this.logger.error(`❌ M-Pesa Error: ${error.response?.status}`);
        this.logger.error(`❌ Error Data: ${JSON.stringify(error.response?.data, null, 2)}`);
        return Promise.reject(error);
      }
    );
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

      // FIX: Remove the extra /webhooks/mpesa from callback URL
      const callbackUrl = process.env.MPESA_CALLBACK_URL || 'https://webhook.site/test';

      const stkPushRequest = {
        BusinessShortCode: process.env.MPESA_SHORTCODE!,
        Password: password,
        Timestamp: timestamp,
        TransactionType: 'CustomerPayBillOnline',
        Amount: Math.round(request.amount),
        PartyA: phoneNumber,
        PartyB: process.env.MPESA_SHORTCODE!,
        PhoneNumber: phoneNumber,
        CallBackURL: callbackUrl, // Fixed: Use direct callback URL
        AccountReference: request.orderId,
        TransactionDesc: request.description || `Payment for order ${request.orderId}`,
      };

      // Log the request details for debugging
      this.logger.log(`🚀 STK Push Request Details:`);
      this.logger.log(`📱 Phone: ${phoneNumber}`);
      this.logger.log(`💰 Amount: ${stkPushRequest.Amount}`);
      this.logger.log(`🔗 Callback: ${callbackUrl}`);
      this.logger.log(`🔑 Shortcode: ${process.env.MPESA_SHORTCODE}`);
      this.logger.log(`⏰ Timestamp: ${timestamp}`);

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
      this.logger.error(`M-Pesa payment failed: ${error.message}`);
      if (error.response?.data) {
        this.logger.error(`M-Pesa Error Details: ${JSON.stringify(error.response.data, null, 2)}`);
      }
      
      return {
        paymentId: request.orderId,
        status: PaymentStatus.FAILED,
        amount: request.amount,
        currency: request.currency,
        metadata: {
          error: error.message,
          errorDetails: error.response?.data,
          provider: 'MPESA',
        },
      };
    }
  }

  async getPaymentStatus(paymentId: string): Promise<PaymentResponse> {
    try {
      const accessToken = await this.getAccessToken();
      const timestamp = this.generateTimestamp();
      
      const queryRequest = {
        BusinessShortCode: process.env.MPESA_SHORTCODE!,
        Password: this.generatePassword(timestamp),
        Timestamp: timestamp,
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
    this.logger.debug(`Webhook data: ${JSON.stringify(eventData, null, 2)}`);
    // Handle M-Pesa webhook events
  }

  // Enhanced authorization method - similar to your example
  private async getAccessToken(): Promise<string> {
    if (this.accessToken && this.tokenExpiresAt && this.tokenExpiresAt > new Date()) {
      this.logger.debug('♻️ Using cached M-Pesa access token');
      return this.accessToken;
    }

    try {
      this.logger.log('🔑 Requesting new M-Pesa access token...');
      
      const consumerKey = process.env.MPESA_CONSUMER_KEY;
      const consumerSecret = process.env.MPESA_CONSUMER_SECRET;

      if (!consumerKey || !consumerSecret) {
        throw new Error('M-Pesa consumer key and secret are required');
      }

      // Enhanced authorization - same as your example but with better error handling
      const auth = Buffer.from(`${consumerKey}:${consumerSecret}`).toString('base64');
      
      this.logger.debug(`🔐 Auth string length: ${auth.length}`);
      this.logger.debug(`🔗 Request URL: ${this.httpClient.defaults.baseURL}/oauth/v1/generate?grant_type=client_credentials`);

      const response = await this.httpClient.get(
        '/oauth/v1/generate?grant_type=client_credentials',
        {
          headers: {
            Authorization: `Basic ${auth}`,
            'Content-Type': 'application/json',
          },
        }
      );

      if (!response.data.access_token) {
        throw new Error('No access token received from M-Pesa');
      }

      this.accessToken = response.data.access_token;
      // Set expiration to 90% of the actual expiration to ensure we refresh before it expires
      const expiresInSeconds = parseInt(response.data.expires_in) || 3600;
      this.tokenExpiresAt = new Date(Date.now() + (expiresInSeconds * 0.9 * 1000));

      this.logger.log(`✅ M-Pesa access token obtained successfully`);
      this.logger.debug(`⏰ Token expires at: ${this.tokenExpiresAt.toISOString()}`);
      
      return this.accessToken;
    } catch (error) {
      this.logger.error(`❌ Failed to get M-Pesa access token: ${error.message}`);
      if (error.response?.data) {
        this.logger.error(`❌ Token Error Details: ${JSON.stringify(error.response.data, null, 2)}`);
      }
      throw new Error(`M-Pesa authentication failed: ${error.message}`);
    }
  }

  private generateTimestamp(): string {
    const now = new Date();
    const timestamp = now.getFullYear().toString() +
           (now.getMonth() + 1).toString().padStart(2, '0') +
           now.getDate().toString().padStart(2, '0') +
           now.getHours().toString().padStart(2, '0') +
           now.getMinutes().toString().padStart(2, '0') +
           now.getSeconds().toString().padStart(2, '0');
    
    this.logger.debug(`⏰ Generated timestamp: ${timestamp}`);
    return timestamp;
  }

  private generatePassword(timestamp: string): string {
    const passkey = process.env.MPESA_PASSKEY;
    const shortcode = process.env.MPESA_SHORTCODE;
    
    if (!passkey || !shortcode) {
      throw new Error('M-Pesa passkey and shortcode are required');
    }

    const dataToEncode = shortcode + passkey + timestamp;
    const password = Buffer.from(dataToEncode).toString('base64');
    
    this.logger.debug(`🔑 Password generated for shortcode: ${shortcode}`);
    this.logger.debug(`🔑 Data to encode length: ${dataToEncode.length}`);
    this.logger.debug(`🔑 Password length: ${password.length}`);
    
    return password;
  }

  private formatPhoneNumber(phone: string): string {
    const digits = phone.replace(/\D/g, '');
    
    let formattedPhone: string;
    
    if (digits.startsWith('254')) {
      formattedPhone = digits;
    } else if (digits.startsWith('0')) {
      formattedPhone = '254' + digits.substring(1);
    } else if (digits.length === 9) {
      formattedPhone = '254' + digits;
    } else {
      throw new Error(`Invalid phone number format: ${phone}`);
    }
    
    // Validate Kenya phone number format
    if (!formattedPhone.match(/^254[17]\d{8}$/)) {
      throw new Error(`Invalid Kenya phone number: ${phone}. Expected format: 254XXXXXXXXX`);
    }
    
    this.logger.debug(`📱 Formatted phone: ${phone} -> ${formattedPhone}`);
    return formattedPhone;
  }

  private mapMpesaResponseToPaymentResponse(mpesaResponse: any, request: PaymentRequest): PaymentResponse {
    this.logger.debug(`📋 Mapping M-Pesa response: ${JSON.stringify(mpesaResponse, null, 2)}`);
    
    const isSuccess = mpesaResponse.ResponseCode === '0';
    
    if (!isSuccess) {
      this.logger.warn(`⚠️ M-Pesa payment not successful. Code: ${mpesaResponse.ResponseCode}, Message: ${mpesaResponse.CustomerMessage}`);
    }
    
    return {
      paymentId: mpesaResponse.CheckoutRequestID || request.orderId,
      status: isSuccess ? PaymentStatus.PROCESSING : PaymentStatus.FAILED,
      amount: request.amount,
      currency: request.currency,
      providerTransactionId: mpesaResponse.MerchantRequestID,
      instructions: isSuccess ? 
        'Please check your phone for the M-Pesa payment prompt and enter your PIN to complete the payment.' :
        mpesaResponse.CustomerMessage || 'Payment failed',
      expiresAt: new Date(Date.now() + 5 * 60 * 1000), // 5 minutes
      metadata: {
        merchantRequestId: mpesaResponse.MerchantRequestID,
        checkoutRequestId: mpesaResponse.CheckoutRequestID,
        responseCode: mpesaResponse.ResponseCode,
        customerMessage: mpesaResponse.CustomerMessage,
        responseDescription: mpesaResponse.ResponseDescription,
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
      amount: 0, // Amount not provided in query response
      currency: Currency.KES,
      providerTransactionId: queryResponse.MpesaReceiptNumber,
      metadata: {
        resultCode: queryResponse.ResultCode,
        resultDescription: queryResponse.ResultDesc,
      },
    };
  }
}