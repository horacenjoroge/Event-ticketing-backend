// =====================================================
// apps/notification-service/src/sms/sms.service.ts (Updated)
// =====================================================
import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { SmsProvider } from './sms';

@Injectable()
export class SmsService {
  private readonly logger = new Logger(SmsService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly smsProvider: SmsProvider,
  ) {}

  async sendSms(data: any) {
    this.logger.log(`📱 Sending SMS to: ${data.recipient || data.phoneNumber}`);
    
    // Create notification record
    const notification = await this.prisma.notification.create({
      data: {
        type: 'SMS',
        recipient: data.recipient || data.phoneNumber,
        recipientName: data.recipientName,
        subject: 'SMS Notification',
        message: data.message,
        provider: 'MOCK_SMS',
        status: 'PENDING',
        eventType: data.eventType,
        orderId: data.orderId,
        metadata: data.metadata,
      },
    });

    try {
      const result = await this.smsProvider.sendSms({
        to: data.recipient || data.phoneNumber,
        message: data.message,
        from: process.env.SMS_FROM_NUMBER,
      });

      // Update notification status
      await this.prisma.notification.update({
        where: { id: notification.id },
        data: {
          status: result.success ? 'SENT' : 'FAILED',
          providerMessageId: result.messageId,
          providerResponse: result.providerResponse,
          sentAt: result.success ? new Date() : null,
          failedAt: result.success ? null : new Date(),
          errorMessage: result.error,
        },
      });

      return {
        success: result.success,
        notificationId: notification.id,
        messageId: result.messageId,
        error: result.error,
      };
    } catch (error) {
      // Update notification with error
      await this.prisma.notification.update({
        where: { id: notification.id },
        data: {
          status: 'FAILED',
          failedAt: new Date(),
          errorMessage: error.message,
        },
      });

      throw error;
    }
  }

  async sendEventReminderSms(data: any) {
    const message = `Reminder: ${data.eventName} is ${data.reminderType === '24h' ? 'tomorrow' : 'starting soon'}! Event details: ${data.eventDate} at ${data.eventVenue}`;
    
    return this.sendSms({
      recipient: data.phoneNumber,
      recipientName: data.recipientName,
      message,
      eventType: 'event_reminder_sms',
      orderId: data.orderId,
    });
  }
}