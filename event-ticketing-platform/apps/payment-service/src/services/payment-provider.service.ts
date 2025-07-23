// =====================================================
// apps/payment-service/src/services/payment-provider.service.ts
// Updated with missing methods while keeping your existing structure
// =====================================================
import { Injectable, Logger, BadRequestException } from '@nestjs/common';
import { IPaymentProvider } from '../providers/payment-provider.interface';
import { StripeProvider } from '../providers/stripe.provider';
import { MpesaProvider } from '../providers/mpesa.provider';
import { FlutterwaveProvider } from '../providers/flutterwave.provider';
import { PaymentProvider } from '../enums/payment-provider.enum';
import { Currency } from '../enums/currency.enum';
import { PaymentMethod } from '../enums/payment-method.enum';

@Injectable()
export class PaymentProviderService {
  private readonly logger = new Logger(PaymentProviderService.name);
  private readonly providers: Map<PaymentProvider, IPaymentProvider> = new Map();

  constructor(
    private readonly stripeProvider: StripeProvider,
    private readonly mpesaProvider: MpesaProvider,
    private readonly flutterwaveProvider: FlutterwaveProvider,
  ) {
    this.providers.set(PaymentProvider.STRIPE, stripeProvider);
    this.providers.set(PaymentProvider.MPESA, mpesaProvider);
    this.providers.set(PaymentProvider.FLUTTERWAVE, flutterwaveProvider);

    this.logger.log(`Registered ${this.providers.size} payment providers`);
  }

  // ========== YOUR EXISTING METHODS ==========

  getProvider(currency: Currency, paymentMethod: PaymentMethod): IPaymentProvider {
    // M-Pesa for Kenyan mobile money
    if (currency === Currency.KES && paymentMethod === PaymentMethod.MOBILE_MONEY) {
      this.logger.log(`Selected MPESA for ${currency} ${paymentMethod}`);
      return this.providers.get(PaymentProvider.MPESA)!;
    }

    // Flutterwave for cards
    if (paymentMethod === PaymentMethod.CARD) {
      this.logger.log(`Selected FLUTTERWAVE for ${currency} ${paymentMethod}`);
      return this.providers.get(PaymentProvider.FLUTTERWAVE)!;
    }

    // Flutterwave for bank transfers and digital wallets
    if (paymentMethod === PaymentMethod.BANK_TRANSFER || paymentMethod === PaymentMethod.DIGITAL_WALLET) {
      this.logger.log(`Selected FLUTTERWAVE for ${currency} ${paymentMethod}`);
      return this.providers.get(PaymentProvider.FLUTTERWAVE)!;
    }

    // Fallback to provider that supports the combination
    for (const [providerName, provider] of this.providers) {
      if (provider.isSupported(currency, paymentMethod)) {
        this.logger.log(`Selected ${providerName} for ${currency} ${paymentMethod}`);
        return provider;
      }
    }

    throw new BadRequestException(
      `No payment provider supports ${currency} with ${paymentMethod}`
    );
  }

  getProviderByName(provider: PaymentProvider): IPaymentProvider {
    const providerInstance = this.providers.get(provider);

    if (!providerInstance) {
      throw new BadRequestException(`Payment provider ${provider} not found`);
    }

    return providerInstance;
  }

  getSupportedProviders(): PaymentProvider[] {
    return Array.from(this.providers.keys());
  }

  getCapabilitiesForProvider(provider: PaymentProvider) {
    const providerInstance = this.providers.get(provider);
    return providerInstance ? providerInstance.getCapabilities() : null;
  }

  getAllCapabilities() {
    const capabilities = new Map();

    for (const [provider, providerInstance] of this.providers) {
      capabilities.set(provider, providerInstance.getCapabilities());
    }

    return capabilities;
  }

  // ========== MISSING METHODS THAT WERE CAUSING BUILD ERRORS ==========

  async selectProvider(
    currency: string,
    paymentMethod: string,
    amount: number,
  ): Promise<string> {
    this.logger.log(`Selecting provider for ${currency} ${amount} via ${paymentMethod}`);

    const currencyEnum = currency as Currency;
    const paymentMethodEnum = paymentMethod as PaymentMethod;

    if (currencyEnum === Currency.KES && paymentMethodEnum === PaymentMethod.MOBILE_MONEY) {
      return PaymentProvider.MPESA;
    }

    if ([Currency.USD, Currency.EUR, Currency.GBP].includes(currencyEnum) && paymentMethodEnum === PaymentMethod.CARD) {
      return PaymentProvider.STRIPE;
    }

    if ([Currency.NGN, Currency.GHS, Currency.KES, Currency.UGX, Currency.TZS].includes(currencyEnum)) {
      return PaymentProvider.FLUTTERWAVE;
    }

    return PaymentProvider.STRIPE;
  }

  async processStripePayment(paymentData: any): Promise<any> {
    try {
      this.logger.log(`Processing Stripe payment for ${paymentData.amount} ${paymentData.currency}`);
      
      const provider = this.providers.get(PaymentProvider.STRIPE);
      if (!provider) {
        throw new Error('Stripe provider not available');
      }

      const result = await provider.processPayment({
        orderId: paymentData.orderId,
        amount: paymentData.amount,
        currency: paymentData.currency,
        paymentMethodId: paymentData.paymentMethodId,
        customerEmail: paymentData.customerEmail,
        customerPhone: paymentData.customerPhone,
        description: paymentData.description,
        metadata: paymentData.metadata,
        returnUrl: paymentData.returnUrl,
      });

      return {
        success: true,
        transactionId: result.providerTransactionId,
        status: result.status,
        redirectUrl: result.redirectUrl,
        qrCode: result.qrCode,
        instructions: result.instructions,
        expiresAt: result.expiresAt,
        providerResponse: result,
      };
    } catch (error) {
      this.logger.error(`Stripe payment failed: ${error.message}`, error.stack);
      return {
        success: false,
        status: 'failed',
        error: error.message,
      };
    }
  }

  async processMpesaPayment(paymentData: any): Promise<any> {
    try {
      this.logger.log(`Processing M-Pesa payment for ${paymentData.amount} ${paymentData.currency}`);
      
      const provider = this.providers.get(PaymentProvider.MPESA);
      if (!provider) {
        throw new Error('M-Pesa provider not available');
      }

      const result = await provider.processPayment({
        orderId: paymentData.orderId,
        amount: paymentData.amount,
        currency: paymentData.currency,
        paymentMethodId: paymentData.paymentMethodId,
        customerEmail: paymentData.customerEmail,
        customerPhone: paymentData.customerPhone,
        description: paymentData.description,
        metadata: paymentData.metadata,
      });

      return {
        success: true,
        transactionId: result.providerTransactionId,
        status: result.status,
        instructions: result.instructions,
        expiresAt: result.expiresAt,
        providerResponse: result,
      };
    } catch (error) {
      this.logger.error(`M-Pesa payment failed: ${error.message}`, error.stack);
      return {
        success: false,
        status: 'failed',
        error: error.message,
      };
    }
  }

  async processFlutterwavePayment(paymentData: any): Promise<any> {
    try {
      this.logger.log(`Processing Flutterwave payment for ${paymentData.amount} ${paymentData.currency}`);
      
      const provider = this.providers.get(PaymentProvider.FLUTTERWAVE);
      if (!provider) {
        throw new Error('Flutterwave provider not available');
      }

      const result = await provider.processPayment({
        orderId: paymentData.orderId,
        amount: paymentData.amount,
        currency: paymentData.currency,
        paymentMethodId: paymentData.paymentMethodId,
        customerEmail: paymentData.customerEmail,
        customerPhone: paymentData.customerPhone,
        description: paymentData.description,
        metadata: paymentData.metadata,
        returnUrl: paymentData.returnUrl,
      });

      return {
        success: true,
        transactionId: result.providerTransactionId,
        status: result.status,
        redirectUrl: result.redirectUrl,
        expiresAt: result.expiresAt,
        providerResponse: result,
      };
    } catch (error) {
      this.logger.error(`Flutterwave payment failed: ${error.message}`, error.stack);
      return {
        success: false,
        status: 'failed',
        error: error.message,
      };
    }
  }

  async processStripeRefund(refundData: any, payment: any): Promise<any> {
    try {
      this.logger.log(`Processing Stripe refund for payment ${payment.id}`);
      
      const provider = this.providers.get(PaymentProvider.STRIPE);
      if (!provider) {
        throw new Error('Stripe provider not available');
      }

      const result = await provider.refundPayment({
        paymentId: refundData.paymentId,
        amount: refundData.amount || payment.amount.toNumber(),
        reason: refundData.reason,
        metadata: refundData.metadata,
      });

      return {
        success: true,
        refundId: result.refundId,
        status: result.status,
        amount: result.amount,
        providerResponse: result,
      };
    } catch (error) {
      this.logger.error(`Stripe refund failed: ${error.message}`, error.stack);
      return {
        success: false,
        status: 'failed',
        error: error.message,
      };
    }
  }

  async processMpesaRefund(refundData: any, payment: any): Promise<any> {
    try {
      this.logger.log(`Processing M-Pesa refund for payment ${payment.id}`);
      
      return {
        success: false,
        status: 'manual_required',
        error: 'M-Pesa refunds require manual processing',
      };
    } catch (error) {
      this.logger.error(`M-Pesa refund failed: ${error.message}`, error.stack);
      return {
        success: false,
        status: 'failed',
        error: error.message,
      };
    }
  }

  async processFlutterwaveRefund(refundData: any, payment: any): Promise<any> {
    try {
      this.logger.log(`Processing Flutterwave refund for payment ${payment.id}`);
      
      const provider = this.providers.get(PaymentProvider.FLUTTERWAVE);
      if (!provider) {
        throw new Error('Flutterwave provider not available');
      }

      const result = await provider.refundPayment({
        paymentId: refundData.paymentId,
        amount: refundData.amount || payment.amount.toNumber(),
        reason: refundData.reason,
        metadata: refundData.metadata,
      });

      return {
        success: true,
        refundId: result.refundId,
        status: result.status,
        amount: result.amount,
        providerResponse: result,
      };
    } catch (error) {
      this.logger.error(`Flutterwave refund failed: ${error.message}`, error.stack);
      return {
        success: false,
        status: 'failed',
        error: error.message,
      };
    }
  }

  async getProviderCapabilities(
    provider?: string,
    currency?: string,
    paymentMethod?: string,
  ): Promise<any> {
    const capabilities = {
      [PaymentProvider.STRIPE]: {
        supportedCurrencies: [Currency.USD, Currency.EUR, Currency.GBP],
        supportedPaymentMethods: [PaymentMethod.CARD],
        supportedCountries: ['US', 'EU', 'UK'],
        supportsRefunds: true,
        supportsPartialRefunds: true,
        supportsRecurringPayments: true,
        webhookEvents: ['payment.succeeded', 'payment.failed'],
      },
      [PaymentProvider.MPESA]: {
        supportedCurrencies: [Currency.KES],
        supportedPaymentMethods: [PaymentMethod.MOBILE_MONEY],
        supportedCountries: ['KE'],
        supportsRefunds: false,
        supportsPartialRefunds: false,
        supportsRecurringPayments: false,
        webhookEvents: ['payment.success', 'payment.failed'],
      },
      [PaymentProvider.FLUTTERWAVE]: {
        supportedCurrencies: [Currency.NGN, Currency.KES, Currency.GHS, Currency.UGX, Currency.TZS],
        supportedPaymentMethods: [PaymentMethod.CARD, PaymentMethod.MOBILE_MONEY, PaymentMethod.BANK_TRANSFER],
        supportedCountries: ['NG', 'KE', 'GH', 'UG', 'TZ'],
        supportsRefunds: true,
        supportsPartialRefunds: true,
        supportsRecurringPayments: true,
        webhookEvents: ['charge.completed', 'transfer.completed'],
      },
    };

    if (provider) {
      const providerKey = provider.toUpperCase() as PaymentProvider;
      return capabilities[providerKey] || null;
    }

    return capabilities;
  }
}