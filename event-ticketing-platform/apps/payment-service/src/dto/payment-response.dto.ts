// src/dto/payment-response.dto.ts
import { PaymentStatus, PaymentProvider, Currency } from '../enums';

export class PaymentResponseDto {
  paymentId: string;
  orderId: string;
  status: PaymentStatus;
  amount: number;
  currency: Currency;
  provider: PaymentProvider;
  providerTransactionId?: string;
  redirectUrl?: string;
  qrCode?: string;
  instructions?: string;
  expiresAt?: Date;
  createdAt: Date;
  updatedAt: Date;
  metadata?: Record<string, any>;
}

export class RefundResponseDto {
  refundId: string;
  paymentId: string;
  amount: number;
  currency: Currency;
  status: PaymentStatus;
  provider: PaymentProvider;
  providerRefundId?: string;
  reason?: string;
  createdAt: Date;
  metadata?: Record<string, any>;
}
