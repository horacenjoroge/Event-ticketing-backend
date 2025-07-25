// =====================================================
// apps/api-gateway/src/notifications/notifications.controller.ts
// DEBUG VERSION - With console logs to trace loading
// =====================================================

console.log('🔍 DEBUG: NotificationsController file being loaded');

import {
  Controller,
  Post,
  Get,
  Body,
  Param,
  HttpException,
  HttpStatus,
  Inject,
  Headers,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { firstValueFrom } from 'rxjs';
import { IsString, IsEmail, IsOptional, IsObject } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

console.log('🔍 DEBUG: All imports loaded successfully');

// DTOs following the same pattern as auth.controller.ts
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

console.log('🔍 DEBUG: DTOs defined, creating controller class');

@ApiTags('Notifications')
@Controller('notifications')
export class NotificationsController {
  constructor(
    @Inject('NOTIFICATION_SERVICE') private readonly notificationServiceClient: ClientProxy,
  ) {
    console.log('🔍 DEBUG: NotificationsController constructor called');
    console.log('🔍 DEBUG: NOTIFICATION_SERVICE client injected:', !!notificationServiceClient);
    console.log('🔍 DEBUG: notificationServiceClient type:', typeof notificationServiceClient);
    
    if (notificationServiceClient) {
      console.log('🔍 DEBUG: ✅ NOTIFICATION_SERVICE successfully injected');
    } else {
      console.log('🔍 DEBUG: ❌ NOTIFICATION_SERVICE injection FAILED');
    }
  }

  @Get('health')
  @ApiOperation({ summary: 'Notification service health check' })
  @ApiResponse({ status: 200, description: 'Notification service is healthy' })
  async healthCheck() {
    console.log('🔍 DEBUG: healthCheck method called');
    
    try {
      console.log('🔍 DEBUG: Attempting to send health check message');
      
      const result = await firstValueFrom(
        this.notificationServiceClient.send('notification.health', {}),
      );

      console.log('🔍 DEBUG: Health check result received:', result);

      if (!result.success) {
        throw new HttpException(
          result.error || 'Notification service is unhealthy',
          HttpStatus.SERVICE_UNAVAILABLE,
        );
      }

      return {
        message: result.message || 'Notification service is healthy',
        data: result.data,
      };
    } catch (error) {
      console.log('🔍 DEBUG: Health check error:', error.message);
      
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException(
        'Internal server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Post('send')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Send a notification (Admin)' })
  @ApiResponse({ status: 201, description: 'Notification sent successfully' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  async sendNotification(
    @Body() sendNotificationDto: SendNotificationDto,
    @Headers('authorization') authorization?: string,
  ) {
    console.log('🔍 DEBUG: sendNotification method called');
    
    try {
      if (!authorization) {
        throw new HttpException('Authorization header required', HttpStatus.UNAUTHORIZED);
      }

      // Extract user info from token (following events.controller.ts pattern)
      const token = authorization.replace('Bearer ', '');
      let userId: string;
      
      try {
        const base64Payload = token.split('.')[1];
        const payload = JSON.parse(Buffer.from(base64Payload, 'base64').toString());
        userId = payload.sub;
      } catch (error) {
        throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED);
      }

      console.log('🔍 DEBUG: Sending notification for user:', userId);

      const result = await firstValueFrom(
        this.notificationServiceClient.send('notification.send', {
          ...sendNotificationDto,
          sentBy: userId,
        }),
      );

      console.log('🔍 DEBUG: Notification result:', result);

      if (!result.success) {
        throw new HttpException(
          result.error || 'Failed to send notification',
          HttpStatus.BAD_REQUEST,
        );
      }

      return {
        message: result.message,
        data: result.data,
      };
    } catch (error) {
      console.log('🔍 DEBUG: sendNotification error:', error.message);
      
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException(
        'Internal server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Post('email/send')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Send email notification (Admin)' })
  @ApiResponse({ status: 201, description: 'Email sent successfully' })
  async sendEmail(
    @Body() sendEmailDto: SendEmailDto,
    @Headers('authorization') authorization?: string,
  ) {
    console.log('🔍 DEBUG: sendEmail method called');
    
    try {
      if (!authorization) {
        throw new HttpException('Authorization header required', HttpStatus.UNAUTHORIZED);
      }

      console.log('🔍 DEBUG: Sending email to:', sendEmailDto.recipient);

      const result = await firstValueFrom(
        this.notificationServiceClient.send('email.send', sendEmailDto),
      );

      console.log('🔍 DEBUG: Email result:', result);

      if (!result.success) {
        throw new HttpException(
          result.error || 'Failed to send email',
          HttpStatus.BAD_REQUEST,
        );
      }

      return {
        message: result.message,
        data: result.data,
      };
    } catch (error) {
      console.log('🔍 DEBUG: sendEmail error:', error.message);
      
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException(
        'Internal server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Post('resend/:orderId/tickets')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Resend tickets for an order (Support)' })
  @ApiResponse({ status: 200, description: 'Tickets resent successfully' })
  async resendTickets(
    @Param('orderId') orderId: string,
    @Headers('authorization') authorization?: string,
  ) {
    console.log('🔍 DEBUG: resendTickets method called for order:', orderId);
    
    try {
      if (!authorization) {
        throw new HttpException('Authorization header required', HttpStatus.UNAUTHORIZED);
      }

      const result = await firstValueFrom(
        this.notificationServiceClient.send('notification.ticket.delivery', {
          orderId,
        }),
      );

      console.log('🔍 DEBUG: Ticket resend result:', result);

      if (!result.success) {
        throw new HttpException(
          result.error || 'Failed to resend tickets',
          HttpStatus.BAD_REQUEST,
        );
      }

      return {
        message: result.message,
        data: result.data,
      };
    } catch (error) {
      console.log('🔍 DEBUG: resendTickets error:', error.message);
      
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException(
        'Internal server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get('analytics')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get notification analytics (Admin)' })
  @ApiResponse({ status: 200, description: 'Analytics retrieved successfully' })
  async getAnalytics(@Headers('authorization') authorization?: string) {
    console.log('🔍 DEBUG: getAnalytics method called');
    
    try {
      if (!authorization) {
        throw new HttpException('Authorization header required', HttpStatus.UNAUTHORIZED);
      }

      // For now, return static data (following the same pattern)
      const analyticsData = {
        message: 'Analytics endpoint working',
        timestamp: new Date().toISOString(),
        totalNotifications: 0,
        sentToday: 0,
        successRate: 100,
      };

      console.log('🔍 DEBUG: Analytics data:', analyticsData);

      return {
        message: 'Analytics retrieved successfully',
        data: analyticsData,
      };
    } catch (error) {
      console.log('🔍 DEBUG: getAnalytics error:', error.message);
      
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException(
        'Failed to retrieve analytics',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}

console.log('🔍 DEBUG: NotificationsController class definition completed');
console.log('🔍 DEBUG: NotificationsController export:', NotificationsController);