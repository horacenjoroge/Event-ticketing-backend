// src/dto/payment-request.dto.ts
import { IsString, IsNumber, IsEmail, IsEnum, IsOptional, Min } from 'class-validator';
import { Currency, PaymentMethod } from '../enums';

export class CreatePaymentDto {
  @IsString()
  orderId: string;

  @IsNumber()
  @Min(0.01)
  amount: number;

  @IsEnum(Currency)
  currency: Currency;

  @IsEnum(PaymentMethod)
  paymentMethod: PaymentMethod;

  @IsString()
  paymentMethodId: string;

  @IsEmail()
  customerEmail: string;

  @IsOptional()
  @IsString()
  customerPhone?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  metadata?: Record<string, any>;

  @IsOptional()
  @IsString()
  returnUrl?: string;
}

export class RefundPaymentDto {
  @IsString()
  paymentId: string;

  @IsOptional()
  @IsNumber()
  @Min(0.01)
  amount?: number;

  @IsOptional()
  @IsString()
  reason?: string;

  @IsOptional()
  metadata?: Record<string, any>;
}
