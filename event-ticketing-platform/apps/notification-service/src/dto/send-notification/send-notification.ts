// apps/notification-service/src/dto/send-notification/send-notification.ts
// =====================================================
import { IsString, IsEmail, IsOptional, IsEnum, IsObject, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export enum NotificationType {
  EMAIL = 'EMAIL',
  SMS = 'SMS',
  PUSH = 'PUSH',
  WEBHOOK = 'WEBHOOK',
}

export enum NotificationPriority {
  LOW = 'LOW',
  NORMAL = 'NORMAL',
  HIGH = 'HIGH',
  URGENT = 'URGENT',
}

export class SendNotificationDto {
  @ApiProperty({ enum: NotificationType, example: NotificationType.EMAIL })
  @IsEnum(NotificationType)
  type: NotificationType;

  @ApiProperty({ example: 'user@example.com', description: 'Recipient email or phone number' })
  @IsString()
  recipient: string;

  @ApiProperty({ example: 'John Doe', description: 'Recipient name', required: false })
  @IsOptional()
  @IsString()
  recipientName?: string;

  @ApiProperty({ example: 'Welcome to our platform', description: 'Notification subject (for emails)' })
  @IsString()
  subject: string;

  @ApiProperty({ example: 'Thank you for joining us!', description: 'Notification message content' })
  @IsString()
  message: string;

  @ApiProperty({ example: '<h1>Welcome</h1>', description: 'HTML content for emails', required: false })
  @IsOptional()
  @IsString()
  htmlContent?: string;

  @ApiProperty({ example: 'template_123', description: 'Template ID', required: false })
  @IsOptional()
  @IsString()
  templateId?: string;

  @ApiProperty({ description: 'Template data for dynamic content', required: false })
  @IsOptional()
  @IsObject()
  templateData?: any;

  @ApiProperty({ enum: NotificationPriority, example: NotificationPriority.NORMAL, required: false })
  @IsOptional()
  @IsEnum(NotificationPriority)
  priority?: NotificationPriority;

  @ApiProperty({ example: 'payment_confirmation', description: 'Event type', required: false })
  @IsOptional()
  @IsString()
  eventType?: string;

  @ApiProperty({ example: 'order_123', description: 'Related order ID', required: false })
  @IsOptional()
  @IsString()
  orderId?: string;

  @ApiProperty({ example: 'payment_456', description: 'Related payment ID', required: false })
  @IsOptional()
  @IsString()
  paymentId?: string;

  @ApiProperty({ example: 'event_789', description: 'Related event ID', required: false })
  @IsOptional()
  @IsString()
  eventId?: string;

  @ApiProperty({ description: 'Additional metadata', required: false })
  @IsOptional()
  @IsObject()
  metadata?: any;

  @ApiProperty({ example: '2025-07-22T10:00:00Z', description: 'Scheduled send time', required: false })
  @IsOptional()
  scheduledFor?: Date;
}

