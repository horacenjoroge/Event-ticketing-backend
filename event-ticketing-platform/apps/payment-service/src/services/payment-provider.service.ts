// src/services/payment-provider.service.ts
import { Injectable, Logger, BadRequestException } from '@nestjs/common';
import { IPaymentProvider } from '../providers/payment-provider.interface';
import { StripeProvider } from '../providers/stripe.provider';
import { MpesaProvider } from '../providers/mpesa.provider';
import { FlutterwaveProvider } from '../providers/flutterwave.provider'; 
import { PaymentProvider, Currency, PaymentMethod } from '../enums';

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
    this.providers.set(PaymentProvider.FLUTTERWAVE, flutterwaveProvider); // ← ADD THIS REGISTRATION
    
    this.logger.log(`Registered ${this.providers.size} payment providers`);
  }

  getProvider(currency: Currency, paymentMethod: PaymentMethod): IPaymentProvider {
    // M-Pesa for Kenyan mobile money
    if (currency === Currency.KES && paymentMethod === PaymentMethod.MOBILE_MONEY) {
      this.logger.log(`Selected MPESA for ${currency} ${paymentMethod}`);
      return this.providers.get(PaymentProvider.MPESA)!;
    }
    
    // Flutterwave for cards ← FIXED: Using your existing CARD enum
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
}