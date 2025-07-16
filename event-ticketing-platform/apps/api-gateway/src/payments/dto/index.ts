// apps/api-gateway/src/payments/dto/index.ts
import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsNumber,
  IsEmail,
  IsOptional,
  IsEnum,
  IsObject,
  Min,
} from 'class-validator';

// Enums
export enum PaymentMethod {
  CARD = 'CARD',
  MOBILE_MONEY = 'MOBILE_MONEY',
  DIGITAL_WALLET = 'DIGITAL_WALLET',
}

export enum Currency {
  USD = 'USD',
  EUR = 'EUR',
  GBP = 'GBP',
  KES = 'KES',
}

export enum PaymentStatus {
  PENDING = 'PENDING',
  PROCESSING = 'PROCESSING',
  COMPLETED = 'COMPLETED',
  FAILED = 'FAILED',
  CANCELLED = 'CANCELLED',
  REFUNDED = 'REFUNDED',
  PARTIALLY_REFUNDED = 'PARTIALLY_REFUNDED',
  EXPIRED = 'EXPIRED',
}

// Create Payment DTO
export class CreatePaymentDto {
  @ApiProperty({ example: 'order_123456' })
  @IsString()
  orderId: string;

  @ApiProperty({ example: 99.99 })
  @IsNumber()
  @Min(0.01)
  amount: number;

  @ApiProperty({ enum: Currency, example: Currency.USD })
  @IsEnum(Currency)
  currency: Currency;

  @ApiProperty({ enum: PaymentMethod, example: PaymentMethod.CARD })
  @IsEnum(PaymentMethod)
  paymentMethod: PaymentMethod;

  @ApiProperty({ example: 'pm_1234567890', required: false })
  @IsOptional()
  @IsString()
  paymentMethodId?: string;

  @ApiProperty({ example: 'john@example.com', required: false })
  @IsOptional()
  @IsEmail()
  customerEmail?: string;

  @ApiProperty({ example: '+254712345678', required: false })
  @IsOptional()
  @IsString()
  customerPhone?: string;

  @ApiProperty({ example: 'Payment for event tickets', required: false })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({ example: 'https://example.com/return', required: false })
  @IsOptional()
  @IsString()
  returnUrl?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsObject()
  metadata?: Record<string, any>;
}

// Refund Payment DTO
export class RefundPaymentDto {
  @ApiProperty({ example: 'pay_1234567890' })
  @IsString()
  paymentId: string;

  @ApiProperty({ 
    example: 50.00, 
    required: false, 
    description: 'Amount to refund. If not provided, full amount will be refunded' 
  })
  @IsOptional()
  @IsNumber()
  @Min(0.01)
  amount?: number;

  @ApiProperty({ example: 'Customer requested refund', required: false })
  @IsOptional()
  @IsString()
  reason?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsObject()
  metadata?: Record<string, any>;
}

// Payment Response DTO
export class PaymentResponseDto {
  @ApiProperty({ example: 'pay_1234567890' })
  paymentId: string;

  @ApiProperty({ example: 'order_123456' })
  orderId: string;

  @ApiProperty({ enum: PaymentStatus, example: PaymentStatus.COMPLETED })
  status: PaymentStatus;

  @ApiProperty({ example: 99.99 })
  amount: number;

  @ApiProperty({ enum: Currency, example: Currency.USD })
  currency: Currency;

  @ApiProperty({ example: 'STRIPE' })
  provider: string;

  @ApiProperty({ example: 'pi_1234567890', required: false })
  providerTransactionId?: string;

  @ApiProperty({ example: 'https://checkout.stripe.com/pay/...', required: false })
  redirectUrl?: string;

  @ApiProperty({ example: 'data:image/png;base64,...', required: false })
  qrCode?: string;

  @ApiProperty({ example: 'Please complete payment on your mobile device', required: false })
  instructions?: string;

  @ApiProperty({ required: false })
  expiresAt?: Date;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty({ required: false })
  metadata?: Record<string, any>;
}

// Refund Response DTO
export class RefundResponseDto {
  @ApiProperty({ example: 'ref_1234567890' })
  refundId: string;

  @ApiProperty({ example: 'pay_1234567890' })
  paymentId: string;

  @ApiProperty({ example: 50.00 })
  amount: number;

  @ApiProperty({ enum: Currency, example: Currency.USD })
  currency: Currency;

  @ApiProperty({ enum: PaymentStatus, example: PaymentStatus.REFUNDED })
  status: PaymentStatus;

  @ApiProperty({ example: 'STRIPE' })
  provider: string;

  @ApiProperty({ example: 're_1234567890', required: false })
  providerRefundId?: string;

  @ApiProperty({ example: 'Customer requested refund', required: false })
  reason?: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty({ required: false })
  metadata?: Record<string, any>;
}