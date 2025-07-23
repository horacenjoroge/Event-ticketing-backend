// =====================================================
// apps/notification-service/src/notification-service.controller.ts
// =====================================================
import { Controller, Get, Post, Body, Param, Logger, UseGuards, ValidationPipe, UsePipes } from '@nestjs/common';
import { MessagePattern, Payload, Ctx, RmqContext } from '@nestjs/microservices';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { NotificationServiceService } from './notification-service.service';
import { SendNotificationDto } from './dto/send-notification/send-notification';

@ApiTags('notification-service')
@Controller('notification-service')
export class NotificationServiceController {
  private readonly logger = new Logger(NotificationServiceController.name);

  constructor(private readonly notificationServiceService: NotificationServiceService) {}

  // RabbitMQ Message Handlers
  @MessagePattern('notification.send')
  async handleSendNotification(@Payload() data: any, @Ctx() context: RmqContext) {
    const channel = context.getChannelRef();
    const originalMsg = context.getMessage();

    try {
      this.logger.log(`📧 Processing notification: ${data.type} to ${data.recipient}`);
      
      const result = await this.notificationServiceService.sendNotification(data);
      
      channel.ack(originalMsg);
      return result;
    } catch (error) {
      this.logger.error(`❌ Notification failed: ${error.message}`, error.stack);
      channel.nack(originalMsg, false, false);
      throw error;
    }
  }

  @MessagePattern('notification.health')
  async handleHealthCheck(@Payload() data: any, @Ctx() context: RmqContext) {
    const channel = context.getChannelRef();
    const originalMsg = context.getMessage();

    try {
      const health = await this.notificationServiceService.getHealthStatus();
      channel.ack(originalMsg);
      return health;
    } catch (error) {
      this.logger.error(`❌ Health check failed: ${error.message}`, error.stack);
      channel.nack(originalMsg, false, false);
      throw error;
    }
  }

  // HTTP Endpoints (for testing/debugging)
  @Get('health')
  @ApiOperation({ summary: 'Get service health status' })
  @ApiResponse({ status: 200, description: 'Service health information' })
  async getHealth() {
    return this.notificationServiceService.getHealthStatus();
  }

  @Post('test-email')
  @ApiOperation({ summary: 'Send test email (development only)' })
  @ApiResponse({ status: 201, description: 'Test email sent' })
  @UsePipes(new ValidationPipe({ transform: true, whitelist: true }))
  async sendTestEmail(@Body() sendNotificationDto: SendNotificationDto) {
    return this.notificationServiceService.sendNotification(sendNotificationDto);
  }
}
