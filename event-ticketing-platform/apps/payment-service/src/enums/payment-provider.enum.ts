
// =====================================================
// apps/payment-service/src/enums/payment-provider.enum.ts
// Updated with RefundStatus enum
// =====================================================
export enum PaymentProvider {
  STRIPE = 'STRIPE',
  MPESA = 'MPESA',
  PAYPAL = 'PAYPAL',
  BANK_TRANSFER = 'BANK_TRANSFER',
  FLUTTERWAVE = 'FLUTTERWAVE',
}

export enum RefundStatus {
  PENDING = 'PENDING',
  PROCESSING = 'PROCESSING',
  COMPLETED = 'COMPLETED',
  FAILED = 'FAILED',
  CANCELLED = 'CANCELLED',
}