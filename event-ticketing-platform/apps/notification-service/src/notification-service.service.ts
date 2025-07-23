// =====================================================
// apps/notification-service/src/notification-service.service.ts
// Fixed syntax errors and proper typing
// =====================================================
import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from './database/prisma.service';
import { EmailService, EmailServiceResponse } from './email/email.service';
import { SmsService } from './sms/sms.service';
import { TemplateService } from './template/template.service';

@Injectable()
export class NotificationServiceService {
  private readonly logger = new Logger(NotificationServiceService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly emailService: EmailService,
    private readonly smsService: SmsService,
    private readonly templateService: TemplateService,
  ) {}

  async sendNotification(data: any): Promise<any> {
    this.logger.log(`Processing notification: ${data.type} to ${data.recipient}`);
    
    try {
      switch (data.type?.toUpperCase()) {
        case 'EMAIL':
          return await this.emailService.sendEmail(data);
        case 'SMS':
          return await this.smsService.sendSms(data);
        case 'PAYMENT_CONFIRMATION':
          return await this.sendPaymentConfirmation(data);
        case 'TICKET_DELIVERY':
          return await this.sendTicketDelivery(data);
        case 'EVENT_REMINDER':
          return await this.sendEventReminder(data);
        default:
          throw new Error(`Unknown notification type: ${data.type}`);
      }
    } catch (error) {
      this.logger.error(`Failed to send notification: ${error.message}`, error.stack);
      throw error;
    }
  }

  async sendPaymentConfirmation(data: any): Promise<EmailServiceResponse> {
    this.logger.log(`Sending payment confirmation for order: ${data.orderId}`);
    
    return this.emailService.sendPaymentConfirmation({
      recipientEmail: data.customerEmail || data.recipient,
      recipientName: data.customerName || data.recipientName,
      orderId: data.orderId,
      amount: data.amount,
      currency: data.currency,
      eventName: data.eventName || 'Event Ticket',
      paymentMethod: data.paymentMethod,
      transactionId: data.transactionId,
    });
  }

  async sendTicketDelivery(data: any): Promise<EmailServiceResponse> {
    this.logger.log(`Sending ticket delivery for order: ${data.orderId}`);
    
    return this.emailService.sendTicketDelivery({
      recipientEmail: data.customerEmail || data.recipient,
      recipientName: data.customerName || data.recipientName,
      orderId: data.orderId,
      eventName: data.eventName,
      eventDate: data.eventDate,
      eventVenue: data.eventVenue,
      ticketCount: data.ticketCount || 1,
      ticketPdf: data.ticketPdf,
    });
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
          reminderType: data.reminderType,
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
    try {
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
          successRate: totalNotifications > 0 ? Math.round((sentNotifications / totalNotifications) * 100) : 0,
        },
        providers: {
          email: process.env.BREVO_API_KEY ? 'brevo_configured' : 'not_configured',
          sms: process.env.SMS_PROVIDER || 'not_configured',
        },
        database: 'connected',
      };
    } catch (error) {
      this.logger.error(`Health check failed: ${error.message}`, error.stack);
      return {
        service: 'notification-service',
        status: 'unhealthy',
        timestamp: new Date().toISOString(),
        error: error.message,
      };
    }
  }
}