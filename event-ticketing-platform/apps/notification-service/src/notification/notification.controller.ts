// =====================================================
// apps/notification-service/src/notification/notification.controller.ts
// =====================================================
import { Controller, Logger } from '@nestjs/common';
import { MessagePattern, Payload, Ctx, RmqContext } from '@nestjs/microservices';
import { NotificationService } from './notification.service';

@Controller()
export class NotificationController {
  private readonly logger = new Logger(NotificationController.name);

  constructor(private readonly notificationService: NotificationService) {}

  @MessagePattern('notification.send')
  async sendNotification(@Payload() data: any, @Ctx() context: RmqContext) {
    const channel = context.getChannelRef();
    const originalMsg = context.getMessage();

    try {
      this.logger.log(`📧 Processing notification: ${data.type} to ${data.recipient}`);
      
      const result = await this.notificationService.sendNotification(data);
      
      channel.ack(originalMsg);
      this.logger.debug(`✅ Notification processed: ${data.type}`);
      
      return result;
    } catch (error) {
      this.logger.error(`❌ Notification failed: ${error.message}`, error.stack);
      channel.nack(originalMsg, false, false);
      throw error;
    }
  }

  @MessagePattern('notification.payment.confirmation')
  async sendPaymentConfirmation(@Payload() data: any, @Ctx() context: RmqContext) {
    const channel = context.getChannelRef();
    const originalMsg = context.getMessage();

    try {
      this.logger.log(`💳 Sending payment confirmation for order: ${data.orderId}`);
      
      const result = await this.notificationService.sendPaymentConfirmation(data);
      
      channel.ack(originalMsg);
      return result;
    } catch (error) {
      this.logger.error(`❌ Payment confirmation failed: ${error.message}`, error.stack);
      channel.nack(originalMsg, false, false);
      throw error;
    }
  }

  @MessagePattern('notification.ticket.delivery')
  async sendTicketDelivery(@Payload() data: any, @Ctx() context: RmqContext) {
    const channel = context.getChannelRef();
    const originalMsg = context.getMessage();

    try {
      this.logger.log(`🎫 Sending ticket delivery for order: ${data.orderId}`);
      
      const result = await this.notificationService.sendTicketDelivery(data);
      
      channel.ack(originalMsg);
      return result;
    } catch (error) {
      this.logger.error(`❌ Ticket delivery failed: ${error.message}`, error.stack);
      channel.nack(originalMsg, false, false);
      throw error;
    }
  }

  @MessagePattern('notification.health')
  async healthCheck(@Payload() data: any, @Ctx() context: RmqContext) {
    const channel = context.getChannelRef();
    const originalMsg = context.getMessage();

    try {
      const health = await this.notificationService.getHealthStatus();
      
      channel.ack(originalMsg);
      return {
        success: true,
        data: health,
      };
    } catch (error) {
      this.logger.error(`❌ Health check failed: ${error.message}`, error.stack);
      channel.nack(originalMsg, false, false);
      throw error;
    }
  }
}