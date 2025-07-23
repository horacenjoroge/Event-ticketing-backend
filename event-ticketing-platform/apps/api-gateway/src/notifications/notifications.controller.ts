// =====================================================
// apps/api-gateway/src/notifications/notifications.controller.ts
// Following the EXACT pattern of auth.controller.ts and events.controller.ts
// =====================================================
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

@ApiTags('Notifications')
@Controller('notifications')
export class NotificationsController {
  constructor(
    @Inject('NOTIFICATION_SERVICE') private readonly notificationServiceClient: ClientProxy,
  ) {}

  @Get('health')
  @ApiOperation({ summary: 'Notification service health check' })
  @ApiResponse({ status: 200, description: 'Notification service is healthy' })
  async healthCheck() {
    try {
      const result = await firstValueFrom(
        this.notificationServiceClient.send('notification.health', {}),
      );

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

      const result = await firstValueFrom(
        this.notificationServiceClient.send('notification.send', {
          ...sendNotificationDto,
          sentBy: userId,
        }),
      );

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
    try {
      if (!authorization) {
        throw new HttpException('Authorization header required', HttpStatus.UNAUTHORIZED);
      }

      const result = await firstValueFrom(
        this.notificationServiceClient.send('email.send', sendEmailDto),
      );

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
    try {
      if (!authorization) {
        throw new HttpException('Authorization header required', HttpStatus.UNAUTHORIZED);
      }

      const result = await firstValueFrom(
        this.notificationServiceClient.send('notification.ticket.delivery', {
          orderId,
        }),
      );

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
    try {
      if (!authorization) {
        throw new HttpException('Authorization header required', HttpStatus.UNAUTHORIZED);
      }

      // For now, return static data (following the same pattern)
      return {
        message: 'Analytics retrieved successfully',
        data: {
          message: 'Analytics endpoint working',
          timestamp: new Date().toISOString(),
          totalNotifications: 0,
          sentToday: 0,
          successRate: 100,
        },
      };
    } catch (error) {
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