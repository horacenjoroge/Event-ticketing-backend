// =====================================================
// apps/notification-service/src/notification/notification.service.ts
// Fixed with proper typing for results array
// =====================================================
import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { EmailService, EmailServiceResponse } from '../email/email.service';

@Injectable()
export class NotificationService {
  private readonly logger = new Logger(NotificationService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly emailService: EmailService,
  ) {}

  async sendNotification(data: any): Promise<any> {
    this.logger.log(`Processing notification: ${data.type}`);
    
    switch (data.type) {
      case 'email':
        return this.emailService.sendEmail(data);
      case 'payment_confirmation':
        return this.sendPaymentConfirmation(data);
      case 'ticket_delivery':
        return this.sendTicketDelivery(data);
      default:
        throw new Error(`Unknown notification type: ${data.type}`);
    }
  }

  async sendEmail(data: any): Promise<EmailServiceResponse> {
    return this.emailService.sendEmail(data);
  }

  async sendPaymentConfirmation(data: any): Promise<EmailServiceResponse> {
    return this.emailService.sendPaymentConfirmation(data);
  }

  async sendTicketDelivery(data: any): Promise<EmailServiceResponse> {
    return this.emailService.sendTicketDelivery(data);
  }

  async sendEventReminder(data: any): Promise<any> {
    this.logger.log(`Sending event reminder for event: ${data.eventId}`);
    
    if (data.attendees && Array.isArray(data.attendees)) {
      // Send to multiple attendees
      const results: EmailServiceResponse[] = [];
      
      for (const attendee of data.attendees) {
        const result = await this.emailService.sendEventReminder({
          recipientEmail: attendee.email,
          recipientName: attendee.name,
          eventName: data.eventName,
          eventDate: data.eventDate,
          eventVenue: data.eventVenue,
          reminderType: data.reminderType, // '24h', '1h', 'custom'
        });
        results.push(result);
      }
      
      return {
        success: true,
        totalSent: results.filter(r => r.success).length,
        totalFailed: results.filter(r => !r.success).length,
        results,
      };
    } else {
      // Send to single recipient
      return this.emailService.sendEventReminder({
        recipientEmail: data.recipient || data.customerEmail,
        recipientName: data.recipientName || data.customerName,
        eventName: data.eventName,
        eventDate: data.eventDate,
        eventVenue: data.eventVenue,
        reminderType: data.reminderType,
      });
    }
  }

  async getHealthStatus(): Promise<any> {
    const totalNotifications = await this.prisma.notification.count();
    const sentNotifications = await this.prisma.notification.count({
      where: { status: 'SENT' },
    });
    const failedNotifications = await this.prisma.notification.count({
      where: { status: 'FAILED' },
    });

    return {
      service: 'notification-service',
      status: 'healthy',
      timestamp: new Date().toISOString(),
      metrics: {
        totalNotifications,
        sentNotifications,
        failedNotifications,
        successRate: totalNotifications > 0 ? (sentNotifications / totalNotifications) * 100 : 0,
      },
      providers: {
        email: 'brevo',
        sms: 'not_configured',
      },
    };
  }
}