// event-ticketing-platform/apps/api-gateway/src/notifications/dto/send-notification.dto.ts
// =====================================================

import { IsString, IsEmail, IsOptional, IsObject } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class SendNotificationDto {
  @ApiProperty({ example: 'email', description: 'Notification type' })
  @IsString()
  type: string;

  @ApiProperty({ example: 'user@example.com', description: 'Recipient email' })
  @IsEmail()
  recipient: string;

  @ApiProperty({ example: 'John Doe', description: 'Recipient name', required: false })
  @IsOptional()
  @IsString()
  recipientName?: string;

  @ApiProperty({ example: 'Welcome to our platform', description: 'Notification subject' })
  @IsString()
  subject: string;

  @ApiProperty({ example: 'Thank you for joining...', description: 'Notification message' })
  @IsString()
  message: string;

  @ApiProperty({ example: '<h1>Welcome</h1>', description: 'HTML content', required: false })
  @IsOptional()
  @IsString()
  htmlContent?: string;

  @ApiProperty({ example: 'event_announcement', description: 'Event type', required: false })
  @IsOptional()
  @IsString()
  eventType?: string;

  @ApiProperty({ example: 'order_123', description: 'Related order ID', required: false })
  @IsOptional()
  @IsString()
  orderId?: string;

  @ApiProperty({ description: 'Additional metadata', required: false })
  @IsOptional()
  @IsObject()
  metadata?: any;
}

export class SendEmailDto {
  @ApiProperty({ example: 'user@example.com', description: 'Recipient email' })
  @IsEmail()
  recipient: string;

  @ApiProperty({ example: 'John Doe', description: 'Recipient name', required: false })
  @IsOptional()
  @IsString()
  recipientName?: string;

  @ApiProperty({ example: 'Welcome Email', description: 'Email subject' })
  @IsString()
  subject: string;

  @ApiProperty({ example: '<h1>Welcome</h1>', description: 'HTML content', required: false })
  @IsOptional()
  @IsString()
  htmlContent?: string;

  @ApiProperty({ example: 'Welcome to our platform...', description: 'Text content', required: false })
  @IsOptional()
  @IsString()
  textContent?: string;

  @ApiProperty({ example: 'template_123', description: 'Template ID', required: false })
  @IsOptional()
  @IsString()
  templateId?: string;

  @ApiProperty({ description: 'Template data for rendering', required: false })
  @IsOptional()
  @IsObject()
  templateData?: any;
}