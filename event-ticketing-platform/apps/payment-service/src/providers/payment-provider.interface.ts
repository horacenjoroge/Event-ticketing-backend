// src/providers/payment-provider.interface.ts
import { PaymentStatus, PaymentProvider, PaymentMethod, Currency } from '../enums';

export interface PaymentRequest {
  orderId: string;
  amount: number;
  currency: Currency;
  paymentMethodId: string;
  customerEmail: string;
  customerPhone?: string;
  metadata?: Record<string, any>;
  description?: string;
  returnUrl?: string;
}

export interface PaymentResponse {
  paymentId: string;
  status: PaymentStatus;
  amount: number;
  currency: Currency;
  providerTransactionId?: string;
  redirectUrl?: string;
  qrCode?: string;
  instructions?: string;
  expiresAt?: Date;
  metadata?: Record<string, any>;
}

export interface RefundRequest {
  paymentId: string;
  amount?: number;
  reason?: string;
  metadata?: Record<string, any>;
}

export interface RefundResponse {
  refundId: string;
  paymentId: string;
  amount: number;
  currency: Currency;
  status: PaymentStatus;
  providerRefundId?: string;
  metadata?: Record<string, any>;
}

export interface PaymentProviderCapabilities {
  supportedCurrencies: Currency[];
  supportedPaymentMethods: PaymentMethod[];
  supportedCountries: string[];
  supportsRefunds: boolean;
  supportsPartialRefunds: boolean;
  supportsRecurringPayments: boolean;
  webhookEvents: string[];
}

export interface IPaymentProvider {
  readonly provider: PaymentProvider;
  
  processPayment(request: PaymentRequest): Promise<PaymentResponse>;
  getPaymentStatus(paymentId: string): Promise<PaymentResponse>;
  refundPayment(request: RefundRequest): Promise<RefundResponse>;
  isSupported(currency: Currency, paymentMethod: PaymentMethod): boolean;
  getCapabilities(): PaymentProviderCapabilities;
  handleWebhookEvent(eventType: string, eventData: any, signature?: string): Promise<void>;
}
