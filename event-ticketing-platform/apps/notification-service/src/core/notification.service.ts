// =====================================================
// apps/notification-service/src/core/notification.service.ts
// FIXED to match actual Prisma schema
// =====================================================
import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { EmailService } from '../providers/email.service';
import { SmsService } from '../providers/sms.service';
import { TemplateService } from '../providers/template.service';

export interface NotificationData {
  type: string;
  recipient: string;
  recipientName?: string;
  subject?: string;
  message?: string;
  htmlContent?: string;
  eventType?: string;
  orderId?: string;
  customerEmail?: string;
  customerName?: string;
  amount?: number;
  currency?: string;
  eventName?: string;
  eventDate?: string;
  eventVenue?: string;
  ticketCount?: number;
  ticketPdf?: string;
  paymentMethod?: string;
  transactionId?: string;
  reminderType?: string;
  eventId?: string;
  attendees?: Array<{ email: string; name: string }>;
  metadata?: any;
}

export interface NotificationResult {
  success: boolean;
  messageId?: string;
  error?: string;
  data?: any;
}

@Injectable()
export class NotificationService {
  private readonly logger = new Logger(NotificationService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly emailService: EmailService,
    private readonly smsService: SmsService,
    private readonly templateService: TemplateService,
  ) {}

  async sendNotification(data: NotificationData): Promise<NotificationResult> {
    this.logger.log(`📧 Processing notification: ${data.type} to ${data.recipient}`);
    
    try {
      // Save notification record with all required Prisma fields
      const notification = await this.prisma.notification.create({
        data: {
          type: data.type.toUpperCase() as any, // EMAIL, SMS, PUSH, WEBHOOK
          status: 'PENDING',
          priority: 'NORMAL',
          recipient: data.recipient,
          recipientName: data.recipientName,
          subject: data.subject || null,
          message: data.message || '',
          provider: this.getProviderForType(data.type),
          eventType: data.eventType,
          orderId: data.orderId,
          eventId: data.eventId,
          metadata: data.metadata || {},
        },
      });

      let result: NotificationResult;
      
      // Route to appropriate notification handler
      switch (data.type?.toUpperCase()) {
        case 'EMAIL':
          result = await this.sendEmail(data);
          break;
        case 'SMS':
          result = await this.sendSms(data);
          break;
        case 'PAYMENT_CONFIRMATION':
          result = await this.sendPaymentConfirmation(data);
          break;
        case 'TICKET_DELIVERY':
          result = await this.sendTicketDelivery(data);
          break;
        case 'EVENT_REMINDER':
          result = await this.sendEventReminder(data);
          break;
        default:
          throw new Error(`Unknown notification type: ${data.type}`);
      }

      // Update notification status in database
      await this.prisma.notification.update({
        where: { id: notification.id },
        data: {
          status: result.success ? 'SENT' : 'FAILED',
          sentAt: result.success ? new Date() : null,
          failedAt: result.success ? null : new Date(),
          errorMessage: result.success ? null : result.error,
          providerMessageId: result.messageId,
          metadata: {
            ...data.metadata,
            messageId: result.messageId,
          },
        },
      });

      this.logger.log(`✅ Notification ${result.success ? 'sent' : 'failed'}: ${data.type}`);
      return result;

    } catch (error) {
      this.logger.error(`❌ Notification failed: ${error.message}`, error.stack);
      throw error;
    }
  }

  async sendEmail(data: NotificationData): Promise<NotificationResult> {
    this.logger.log(`📮 Sending email to: ${data.recipient}`);
    
    try {
      const result = await this.emailService.sendEmail({
        recipient: data.recipient,
        recipientName: data.recipientName,
        subject: data.subject,
        htmlContent: data.htmlContent,
        textContent: data.message,
        templateId: data.metadata?.templateId,
        templateData: data.metadata?.templateData,
      });

      return {
        success: result.success,
        messageId: result.messageId,
        error: result.success ? undefined : result.error,
      };
    } catch (error) {
      return {
        success: false,
        error: error.message,
      };
    }
  }

  async sendSms(data: NotificationData): Promise<NotificationResult> {
    this.logger.log(`📱 Sending SMS to: ${data.recipient}`);
    
    try {
      const result = await this.smsService.sendSms({
        recipient: data.recipient,
        message: data.message,
        metadata: data.metadata,
      });

      return {
        success: result.success,
        messageId: result.messageId,
        error: result.success ? undefined : result.error,
      };
    } catch (error) {
      return {
        success: false,
        error: error.message,
      };
    }
  }

  async sendPaymentConfirmation(data: NotificationData): Promise<NotificationResult> {
    this.logger.log(`💳 Sending payment confirmation for order: ${data.orderId}`);
    
    try {
      const result = await this.emailService.sendPaymentConfirmation({
        recipientEmail: data.customerEmail || data.recipient,
        recipientName: data.customerName || data.recipientName,
        orderId: data.orderId,
        amount: data.amount,
        currency: data.currency,
        eventName: data.eventName || 'Event Ticket',
        paymentMethod: data.paymentMethod,
        transactionId: data.transactionId,
      });

      return {
        success: result.success,
        messageId: result.messageId,
        error: result.success ? undefined : result.error,
      };
    } catch (error) {
      return {
        success: false,
        error: error.message,
      };
    }
  }

  async sendTicketDelivery(data: NotificationData): Promise<NotificationResult> {
    this.logger.log(`🎫 Sending ticket delivery for order: ${data.orderId}`);
    
    try {
      const result = await this.emailService.sendTicketDelivery({
        recipientEmail: data.customerEmail || data.recipient,
        recipientName: data.customerName || data.recipientName,
        orderId: data.orderId,
        eventName: data.eventName,
        eventDate: data.eventDate,
        eventVenue: data.eventVenue,
        ticketCount: data.ticketCount || 1,
        ticketPdf: data.ticketPdf,
      });

      return {
        success: result.success,
        messageId: result.messageId,
        error: result.success ? undefined : result.error,
      };
    } catch (error) {
      return {
        success: false,
        error: error.message,
      };
    }
  }

  async sendEventReminder(data: NotificationData): Promise<NotificationResult> {
    this.logger.log(`📅 Sending event reminder for event: ${data.eventId}`);
    
    try {
      if (data.attendees && Array.isArray(data.attendees)) {
        // Bulk send to multiple attendees
        const results: any[] = [];
        
        for (const attendee of data.attendees) {
          const result = await this.emailService.sendEventReminder({
            recipientEmail: attendee.email,
            recipientName: attendee.name,
            eventName: data.eventName,
            eventDate: data.eventDate,
            eventVenue: data.eventVenue,
            reminderType: data.reminderType || '24_hour',
          });
          results.push(result);
        }
        
        const successCount = results.filter(r => r.success).length;
        const failureCount = results.filter(r => !r.success).length;
        
        return {
          success: successCount > 0,
          data: {
            totalSent: successCount,
            totalFailed: failureCount,
            results,
          },
        };
      } else {
        // Single recipient
        const result = await this.emailService.sendEventReminder({
          recipientEmail: data.recipient || data.customerEmail,
          recipientName: data.recipientName || data.customerName,
          eventName: data.eventName,
          eventDate: data.eventDate,
          eventVenue: data.eventVenue,
          reminderType: data.reminderType || '24_hour',
        });

        return {
          success: result.success,
          messageId: result.messageId,
          error: result.success ? undefined : result.error,
        };
      }
    } catch (error) {
      return {
        success: false,
        error: error.message,
      };
    }
  }

  async getHealthStatus(): Promise<any> {
    try {
      // Database health check
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
        database: {
          status: 'connected',
          totalNotifications,
          sentNotifications,
          failedNotifications,
          successRate: totalNotifications > 0 
            ? Math.round((sentNotifications / totalNotifications) * 100) 
            : 0,
        },
        providers: {
          email: process.env.BREVO_API_KEY ? 'configured' : 'not_configured',
          sms: process.env.SMS_PROVIDER || 'not_configured',
        },
        environment: process.env.NODE_ENV || 'development',
      };
    } catch (error) {
      this.logger.error(`❌ Health check failed: ${error.message}`, error.stack);
      return {
        service: 'notification-service',
        status: 'unhealthy',
        timestamp: new Date().toISOString(),
        error: error.message,
        database: 'disconnected',
      };
    }
  }

  /**
   * Get provider name based on notification type
   */
  private getProviderForType(type: string): string {
    switch (type?.toUpperCase()) {
      case 'EMAIL':
        return 'BREVO';
      case 'SMS':
        return 'TWILIO';
      case 'PUSH':
        return 'FCM';
      default:
        return 'BREVO';
    }
  }

  /**
   * Get notification analytics (for admin dashboard)
   */
  async getAnalytics(startDate?: Date, endDate?: Date): Promise<any> {
    try {
      const whereClause = {
        ...(startDate && endDate ? {
          createdAt: {
            gte: startDate,
            lte: endDate,
          }
        } : {})
      };

      const [
        totalNotifications,
        sentNotifications,
        failedNotifications,
        notificationsByType,
        notificationsByProvider,
      ] = await Promise.all([
        this.prisma.notification.count({ where: whereClause }),
        this.prisma.notification.count({ 
          where: { ...whereClause, status: 'SENT' } 
        }),
        this.prisma.notification.count({ 
          where: { ...whereClause, status: 'FAILED' } 
        }),
        this.prisma.notification.groupBy({
          by: ['type'],
          where: whereClause,
          _count: { id: true },
        }),
        this.prisma.notification.groupBy({
          by: ['provider'],
          where: whereClause,
          _count: { id: true },
        }),
      ]);

      return {
        period: {
          startDate: startDate?.toISOString(),
          endDate: endDate?.toISOString(),
        },
        summary: {
          totalNotifications,
          sentNotifications,
          failedNotifications,
          successRate: totalNotifications > 0 
            ? Math.round((sentNotifications / totalNotifications) * 100) 
            : 0,
        },
        breakdown: {
          byType: notificationsByType.map(item => ({
            type: item.type,
            count: item._count.id,
          })),
          byProvider: notificationsByProvider.map(item => ({
            provider: item.provider,
            count: item._count.id,
          })),
        },
        timestamp: new Date().toISOString(),
      };
    } catch (error) {
      this.logger.error(`Failed to get analytics: ${error.message}`, error.stack);
      throw error;
    }
  }
}