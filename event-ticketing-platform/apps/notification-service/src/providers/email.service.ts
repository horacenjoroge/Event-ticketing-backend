// =====================================================
// apps/notification-service/src/email/email.service.ts
// Fixed with correct return types
// =====================================================
import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { BrevoProvider } from './brevo.provider';
import { TemplateService } from './template.service';

export interface EmailServiceResponse {
  success: boolean;
  notificationId: string;
  messageId?: string;
  error?: string;
}

@Injectable()
export class EmailService {
  private readonly logger = new Logger(EmailService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly brevoProvider: BrevoProvider,
    private readonly templateService: TemplateService,
  ) {}

  async sendEmail(data: any): Promise<EmailServiceResponse> {
    this.logger.log(`Sending email to: ${data.recipient}`);
    
    // Create notification record
    const notification = await this.prisma.notification.create({
      data: {
        type: 'EMAIL',
        recipient: data.recipient,
        recipientName: data.recipientName,
        subject: data.subject,
        message: data.message || data.htmlContent,
        provider: 'BREVO',
        status: 'PENDING',
        eventType: data.eventType,
        orderId: data.orderId,
        metadata: data.metadata,
      },
    });

    try {
      const result = await this.brevoProvider.sendEmail({
        to: data.recipient,
        toName: data.recipientName,
        subject: data.subject,
        htmlContent: data.htmlContent,
        textContent: data.textContent,
        attachments: data.attachments,
      });

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

  async sendTemplateEmail(data: any): Promise<EmailServiceResponse> {
    this.logger.log(`Sending template email: ${data.templateId}`);
    
    const template = await this.templateService.getTemplate(data.templateId);
    if (!template) {
      throw new Error(`Template not found: ${data.templateId}`);
    }

    const htmlContent = await this.templateService.renderTemplate(data.templateId, data.templateData);
    
    return this.sendEmail({
      recipient: data.recipient,
      recipientName: data.recipientName,
      subject: template.subject,
      htmlContent,
      textContent: template.textContent,
      eventType: data.eventType,
      orderId: data.orderId,
    });
  }

  async sendPaymentConfirmation(data: any): Promise<EmailServiceResponse> {
    this.logger.log(`Sending payment confirmation for order: ${data.orderId}`);

    const result = await this.brevoProvider.sendPaymentConfirmation(
      data.recipientEmail,
      data.recipientName,
      {
        orderId: data.orderId,
        amount: data.amount,
        currency: data.currency,
        eventName: data.eventName,
      }
    );

    const notification = await this.prisma.notification.create({
      data: {
        type: 'EMAIL',
        recipient: data.recipientEmail,
        recipientName: data.recipientName,
        subject: `Payment confirmed for ${data.eventName}`,
        message: 'Payment confirmation email',
        provider: 'BREVO',
        status: result.success ? 'SENT' : 'FAILED',
        eventType: 'payment_confirmation',
        orderId: data.orderId,
        providerMessageId: result.messageId,
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
  }

  async sendTicketDelivery(data: any): Promise<EmailServiceResponse> {
    this.logger.log(`Sending ticket delivery for order: ${data.orderId}`);

    const result = await this.brevoProvider.sendTicketDelivery(
      data.recipientEmail,
      data.recipientName,
      {
        name: data.eventName,
        date: data.eventDate,
        venue: data.eventVenue,
        ticketCount: data.ticketCount,
      },
      data.ticketPdf
    );

    const notification = await this.prisma.notification.create({
      data: {
        type: 'EMAIL',
        recipient: data.recipientEmail,
        recipientName: data.recipientName,
        subject: `Your tickets for ${data.eventName}`,
        message: 'Ticket delivery email',
        provider: 'BREVO',
        status: result.success ? 'SENT' : 'FAILED',
        eventType: 'ticket_delivery',
        orderId: data.orderId,
        providerMessageId: result.messageId,
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
  }

  async sendEventReminder(data: any): Promise<EmailServiceResponse> {
    this.logger.log(`Sending event reminder: ${data.reminderType}`);

    const htmlContent = `
      <h2>📅 Event Reminder</h2>
      <p>Hi ${data.recipientName},</p>
      <p>This is a reminder that <strong>${data.eventName}</strong> is coming up!</p>
      
      <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3>📅 Event Details</h3>
        <p><strong>Event:</strong> ${data.eventName}</p>
        <p><strong>Date:</strong> ${data.eventDate}</p>
        <p><strong>Venue:</strong> ${data.eventVenue}</p>
      </div>
      
      <p>🎉 We can't wait to see you there!</p>
      
      <p>Best regards,<br>Event Team</p>
    `;

    return this.sendEmail({
      recipient: data.recipientEmail,
      recipientName: data.recipientName,
      subject: `Reminder: ${data.eventName} ${data.reminderType === '24h' ? 'tomorrow' : 'starting soon'}`,
      htmlContent,
      textContent: `Event reminder: ${data.eventName} on ${data.eventDate} at ${data.eventVenue}`,
      eventType: 'event_reminder',
    });
  }
}