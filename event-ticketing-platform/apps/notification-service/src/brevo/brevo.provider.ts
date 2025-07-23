// =====================================================
// apps/notification-service/src/brevo/brevo.provider.ts
// Simplified working version using fetch API
// =====================================================
import { Injectable, Logger } from '@nestjs/common';

export interface EmailRequest {
  to: string;
  toName?: string;
  subject: string;
  htmlContent?: string;
  textContent?: string;
  templateId?: number;
  templateData?: any;
  attachments?: Array<{
    name: string;
    content: string;
    contentType: string;
  }>;
}

export interface EmailResponse {
  success: boolean;
  messageId?: string;
  error?: string;
  providerResponse?: any;
}

@Injectable()
export class BrevoProvider {
  private readonly logger = new Logger(BrevoProvider.name);
  private readonly baseUrl = 'https://api.brevo.com/v3';

  constructor() {
    this.logger.log('🚀 Brevo Provider initialized');
    this.logger.debug(`📧 API Key configured: ${process.env.BREVO_API_KEY ? 'Yes' : 'No'}`);
  }

  async sendEmail(request: EmailRequest): Promise<EmailResponse> {
    try {
      this.logger.log(`📧 Sending email to ${request.to}: ${request.subject}`);

      const payload: any = {
        to: [{
          email: request.to,
          name: request.toName || request.to.split('@')[0]
        }],
        sender: {
          name: process.env.FROM_NAME || 'Event Ticketing Platform',
          email: process.env.FROM_EMAIL || 'noreply@your-domain.com'
        }
      };

      // Template or custom content
      if (request.templateId) {
        payload.templateId = request.templateId;
        payload.params = request.templateData || {};
        this.logger.debug(`📄 Using Brevo template: ${request.templateId}`);
      } else {
        payload.subject = request.subject;
        payload.htmlContent = request.htmlContent;
        payload.textContent = request.textContent;
        this.logger.debug(`📝 Using custom content`);
      }

      // Add attachments if provided
      if (request.attachments && request.attachments.length > 0) {
        payload.attachment = request.attachments.map(att => ({
          name: att.name,
          content: att.content, // Keep as base64 string
        }));
        this.logger.debug(`📎 Added ${request.attachments.length} attachments`);
      }

      // Send email via Brevo API
      const response = await fetch(`${this.baseUrl}/smtp/email`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'api-key': process.env.BREVO_API_KEY || ''
        },
        body: JSON.stringify(payload)
      });

      const responseData = await response.json();

      if (response.ok) {
        const messageId = responseData.messageId || `brevo_${Date.now()}`;
        this.logger.log(`✅ Email sent successfully to ${request.to}`);
        this.logger.debug(`📬 Brevo Message ID: ${messageId}`);

        return {
          success: true,
          messageId: messageId,
          providerResponse: responseData
        };
      } else {
        this.logger.error(`❌ Failed to send email: ${responseData.message || response.statusText}`);
        return {
          success: false,
          error: responseData.message || response.statusText,
          providerResponse: responseData
        };
      }

    } catch (error) {
      this.logger.error(`❌ Failed to send email to ${request.to}: ${error.message}`);
      return {
        success: false,
        error: error.message,
        providerResponse: error
      };
    }
  }

  async sendTemplateEmail(
    to: string,
    templateId: number,
    templateData: any,
    toName?: string
  ): Promise<EmailResponse> {
    return this.sendEmail({
      to,
      toName,
      subject: '', // Not needed for templates
      templateId,
      templateData
    });
  }

  async testConnection(): Promise<boolean> {
    try {
      const response = await fetch(`${this.baseUrl}/account`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'api-key': process.env.BREVO_API_KEY || ''
        }
      });

      if (response.ok) {
        this.logger.log('✅ Brevo connection test successful');
        return true;
      } else {
        this.logger.error('❌ Brevo connection test failed');
        return false;
      }
    } catch (error) {
      this.logger.error('❌ Brevo connection test failed');
      return false;
    }
  }

  // Helper method to create ticket delivery email
  async sendTicketDelivery(
    recipientEmail: string,
    recipientName: string,
    eventDetails: {
      name: string;
      date: string;
      venue: string;
      ticketCount: number;
    },
    ticketPdf?: string // base64 encoded PDF
  ): Promise<EmailResponse> {
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #007bff;">🎫 Your tickets are ready!</h2>
        <p>Hi ${recipientName},</p>
        <p>Thank you for your purchase! Your tickets for <strong>${eventDetails.name}</strong> are ${ticketPdf ? 'attached' : 'being prepared'}.</p>
        
        <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3>📅 Event Details</h3>
          <p><strong>Event:</strong> ${eventDetails.name}</p>
          <p><strong>Date:</strong> ${eventDetails.date}</p>
          <p><strong>Venue:</strong> ${eventDetails.venue}</p>
          <p><strong>Tickets:</strong> ${eventDetails.ticketCount}</p>
        </div>
        
        <p>🎉 We can't wait to see you at the event!</p>
        <p>If you have any questions, please don't hesitate to contact us.</p>
        
        <p>Best regards,<br>Event Ticketing Team</p>
      </div>
    `;

    const attachments = ticketPdf ? [{
      name: `tickets-${eventDetails.name.replace(/\s+/g, '-')}.pdf`,
      content: ticketPdf,
      contentType: 'application/pdf'
    }] : undefined;

    return this.sendEmail({
      to: recipientEmail,
      toName: recipientName,
      subject: `🎫 Your tickets for ${eventDetails.name}`,
      htmlContent,
      textContent: `Your tickets for ${eventDetails.name} are ready! Event: ${eventDetails.date} at ${eventDetails.venue}`,
      attachments
    });
  }

  // Helper method for payment confirmation
  async sendPaymentConfirmation(
    recipientEmail: string,
    recipientName: string,
    paymentDetails: {
      orderId: string;
      amount: number;
      currency: string;
      eventName: string;
    }
  ): Promise<EmailResponse> {
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #28a745;">✅ Payment Confirmation</h2>
        <p>Hi ${recipientName},</p>
        <p>Your payment has been successfully processed!</p>
        
        <div style="background: #d4edda; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #28a745;">
          <h3>💳 Payment Details</h3>
          <p><strong>Order ID:</strong> ${paymentDetails.orderId}</p>
          <p><strong>Amount:</strong> ${paymentDetails.currency} ${paymentDetails.amount}</p>
          <p><strong>Event:</strong> ${paymentDetails.eventName}</p>
          <p><strong>Status:</strong> ✅ Confirmed</p>
        </div>
        
        <p>🎫 Your tickets will be delivered shortly in a separate email.</p>
        
        <p>Thank you for your purchase!</p>
        <p>Best regards,<br>Event Ticketing Team</p>
      </div>
    `;

    return this.sendEmail({
      to: recipientEmail,
      toName: recipientName,
      subject: `✅ Payment confirmed for ${paymentDetails.eventName}`,
      htmlContent,
      textContent: `Payment confirmed! Order: ${paymentDetails.orderId}, Amount: ${paymentDetails.currency} ${paymentDetails.amount} for ${paymentDetails.eventName}`
    });
  }
}