
// apps/payment-service/src/dto/payment-response.dto.ts
// Updated response DTOs with all required fields
// =====================================================
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { PaymentStatus, PaymentProvider, Currency } from '../enums';

export class PaymentResponseDto {
  @ApiProperty({ description: 'Payment ID' })
  paymentId: string;

  @ApiProperty({ description: 'Order ID' })
  orderId: string;

  @ApiProperty({ enum: PaymentStatus, description: 'Payment status' })
  status: PaymentStatus;

  @ApiProperty({ description: 'Payment amount' })
  amount: number;

  @ApiProperty({ enum: Currency, description: 'Payment currency' })
  currency: Currency;

  @ApiPropertyOptional({ enum: PaymentProvider, description: 'Payment provider used' })
  provider?: PaymentProvider;

  @ApiPropertyOptional({ description: 'Provider transaction ID' })
  providerTransactionId?: string;

  @ApiPropertyOptional({ description: 'Redirect URL for payment completion' })
  redirectUrl?: string;

  @ApiPropertyOptional({ description: 'QR code for mobile payments' })
  qrCode?: string;

  @ApiPropertyOptional({ description: 'Payment instructions' })
  instructions?: string;

  @ApiPropertyOptional({ description: 'Payment expiration time' })
  expiresAt?: Date;

  @ApiProperty({ description: 'Payment creation time' })
  createdAt: Date;

  @ApiProperty({ description: 'Payment last update time' })
  updatedAt: Date;

  @ApiPropertyOptional({ description: 'Additional metadata' })
  metadata?: Record<string, any>;
}

export class RefundResponseDto {
  @ApiProperty({ description: 'Refund ID' })
  refundId: string;

  @ApiProperty({ description: 'Payment ID' })
  paymentId: string;

  @ApiProperty({ description: 'Refund amount' })
  amount: number;

  @ApiProperty({ enum: Currency, description: 'Refund currency' })
  currency: Currency;

  @ApiProperty({ enum: PaymentStatus, description: 'Refund status' })
  status: PaymentStatus;

  @ApiPropertyOptional({ enum: PaymentProvider, description: 'Payment provider used' })
  provider?: PaymentProvider;

  @ApiPropertyOptional({ description: 'Provider refund ID' })
  providerRefundId?: string;

  @ApiPropertyOptional({ description: 'Reason for refund' })
  reason?: string;

  @ApiProperty({ description: 'Refund creation time' })
  createdAt: Date;

  @ApiPropertyOptional({ description: 'Refund completion time' })
  completedAt?: Date;

  @ApiPropertyOptional({ description: 'Additional metadata' })
  metadata?: Record<string, any>;
}

export class WebhookResponseDto {
  @ApiProperty({ description: 'Webhook processing success' })
  success: boolean;

  @ApiProperty({ description: 'Response message' })
  message: string;

  @ApiPropertyOptional({ description: 'Updated payment data' })
  paymentData?: any;
}

export class ProviderCapabilitiesDto {
  @ApiProperty({ description: 'Provider name' })
  provider: string;

  @ApiProperty({ description: 'Supported currencies', type: [String] })
  currencies: string[];

  @ApiProperty({ description: 'Supported payment methods', type: [String] })
  paymentMethods: string[];

  @ApiProperty({ description: 'Available features', type: [String] })
  features: string[];

  @ApiProperty({ description: 'Supported regions', type: [String] })
  regions: string[];

  @ApiProperty({ description: 'Provider enabled status' })
  enabled: boolean;
}