// =====================================================
// apps/notification-service/src/email/email.controller.ts
// =====================================================
import { Controller, Logger } from '@nestjs/common';
import { MessagePattern, Payload, Ctx, RmqContext } from '@nestjs/microservices';
import { EmailService } from './email.service';

@Controller()
export class EmailController {
  private readonly logger = new Logger(EmailController.name);

  constructor(private readonly emailService: EmailService) {}

  @MessagePattern('email.send')
  async sendEmail(@Payload() data: any, @Ctx() context: RmqContext) {
    const channel = context.getChannelRef();
    const originalMsg = context.getMessage();

    try {
      this.logger.log(`📧 Sending email to: ${data.recipient}`);
      
      const result = await this.emailService.sendEmail(data);
      
      channel.ack(originalMsg);
      return result;
    } catch (error) {
      this.logger.error(`❌ Email sending failed: ${error.message}`, error.stack);
      channel.nack(originalMsg, false, false);
      throw error;
    }
  }

  @MessagePattern('email.template.send')
  async sendTemplateEmail(@Payload() data: any, @Ctx() context: RmqContext) {
    const channel = context.getChannelRef();
    const originalMsg = context.getMessage();

    try {
      this.logger.log(`📄 Sending template email: ${data.templateId} to ${data.recipient}`);
      
      const result = await this.emailService.sendTemplateEmail(data);
      
      channel.ack(originalMsg);
      return result;
    } catch (error) {
      this.logger.error(`❌ Template email failed: ${error.message}`, error.stack);
      channel.nack(originalMsg, false, false);
      throw error;
    }
  }
}
