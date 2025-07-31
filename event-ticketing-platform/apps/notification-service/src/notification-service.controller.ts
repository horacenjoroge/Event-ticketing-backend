// apps/notification-service/src/notification-service.controller.ts
import { Controller, Logger, Get, Post, Body, Headers } from '@nestjs/common';
import { MessagePattern, Payload, Ctx, RmqContext } from '@nestjs/microservices';
import { errors, notificationsSent } from '@app/common';

interface NotificationRequest {
  type: string;
  recipient: string;
  recipientName?: string;
  subject?: string;
  message?: string;
  eventType?: string;
  orderId?: string;
  paymentId?: string;
  eventId?: string;
  metadata?: any;
}

@Controller()
export class NotificationServiceController {
  private readonly logger = new Logger(NotificationServiceController.name);
  
  // In-memory storage for demo purposes
  private notifications: any[] = [];
  private notificationStats = {
    total: 25,
    sent: 22,
    failed: 3,
    successRate: 88
  };

  // ========== HTTP ENDPOINTS (for API Gateway) ==========

  @Get('health')
  async healthCheck() {
    this.logger.log('📊 Health check requested');
    
    return {
      message: "Notification service is healthy",
      data: {
        service: "notification-service",
        status: "healthy",
        timestamp: new Date().toISOString(),
        database: {
          status: "connected",
          totalNotifications: this.notificationStats.total,
          sentNotifications: this.notificationStats.sent,
          failedNotifications: this.notificationStats.failed,
          successRate: this.notificationStats.successRate
        },
        providers: {
          email: "mock_brevo",
          sms: "mock"
        },
        environment: "development"
      }
    };
  }

  @Post('send')
  async sendNotification(
    @Body() data: NotificationRequest,
    @Headers('authorization') auth: string
  ) {
    try {
      const result = await this.processNotification(data);
      return result;
    } catch (error) {
      // Track error metric
      errors.inc({ 
        service: 'notification-service', 
        error_type: 'http_send_failed', 
        route: 'POST /send' 
      });
      throw error;
    }
  }

  @Get('analytics')
  async getAnalytics() {
    try {
      this.logger.log('📊 Analytics requested');
      
      return {
        message: "Analytics retrieved successfully",
        data: {
          period: {
            startDate: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
            endDate: new Date().toISOString()
          },
          summary: {
            totalNotifications: this.notificationStats.total,
            sentNotifications: this.notificationStats.sent,
            failedNotifications: this.notificationStats.failed,
            successRate: this.notificationStats.successRate
          },
          breakdown: {
            byType: [
              { type: "EMAIL", count: this.notificationStats.sent },
              { type: "SMS", count: 3 }
            ],
            byProvider: [
              { provider: "MOCK_BREVO", count: this.notificationStats.sent },
              { provider: "MOCK_SMS", count: 3 }
            ]
          },
          recentNotifications: this.notifications.slice(-5),
          timestamp: new Date().toISOString()
        }
      };
    } catch (error) {
      // Track error metric
      errors.inc({ 
        service: 'notification-service', 
        error_type: 'analytics_failed', 
        route: 'GET /analytics' 
      });
      throw error;
    }
  }

  // ========== MICROSERVICE MESSAGE PATTERNS ==========

  @MessagePattern('notification.health')
  async messageHealthCheck() {
    try {
      const status = await this.healthCheck();
      return { success: true, data: status };
    } catch (error) {
      this.logger.error(`Health check failed: ${error.message}`);
      
      // Track error metric
      errors.inc({ 
        service: 'notification-service', 
        error_type: 'health_check_failed', 
        route: 'notification.health' 
      });
      
      return { success: false, error: error.message };
    }
  }

  @MessagePattern('notification.send')
  async messageSendNotification(@Payload() data: NotificationRequest, @Ctx() context?: RmqContext) {
    try {
      this.logger.log(`📧 Processing notification via message pattern: ${data.type} to ${data.recipient}`);
      
      const result = await this.processNotification(data);
      
      if (context) {
        const channel = context.getChannelRef();
        const originalMsg = context.getMessage();
        channel.ack(originalMsg);
      }
      
      return { success: true, data: result, message: 'Notification sent successfully' };
    } catch (error) {
      this.logger.error(`Notification failed: ${error.message}`, error.stack);
      
      // Track error metric
      errors.inc({ 
        service: 'notification-service', 
        error_type: 'notification_send_failed', 
        route: 'notification.send' 
      });
      
      if (context) {
        const channel = context.getChannelRef();
        const originalMsg = context.getMessage();
        channel.nack(originalMsg, false, false);
      }
      
      return { success: false, error: error.message };
    }
  }

  @MessagePattern('email.send')
  async sendEmail(@Payload() data: NotificationRequest) {
    try {
      this.logger.log(`📮 Sending email via message pattern to: ${data.recipient}`);
      
      const result = await this.processNotification({ ...data, type: 'email' });
      return { success: true, data: result, message: 'Email sent successfully' };
    } catch (error) {
      this.logger.error(`Email failed: ${error.message}`, error.stack);
      
      // Track error metric
      errors.inc({ 
        service: 'notification-service', 
        error_type: 'email_send_failed', 
        route: 'email.send' 
      });
      
      return { success: false, error: error.message };
    }
  }

  @MessagePattern('notification.payment.confirmation')
  async sendPaymentConfirmation(@Payload() data: any) {
    try {
      this.logger.log(`💳 Sending payment confirmation for order: ${data.orderId}`);
      
      const notificationData: NotificationRequest = {
        type: 'email',
        recipient: data.customerEmail || data.recipient,
        recipientName: data.customerName || data.recipientName,
        subject: `✅ Payment Confirmed - ${data.eventName || 'Your Order'}`,
        message: `Payment confirmed! Order: ${data.orderId}, Amount: ${data.currency} ${data.amount}`,
        eventType: 'payment_confirmation',
        orderId: data.orderId,
        paymentId: data.paymentId,
        metadata: data
      };
      
      const result = await this.processNotification(notificationData);
      return { success: true, data: result, message: 'Payment confirmation sent' };
    } catch (error) {
      this.logger.error(`Payment confirmation failed: ${error.message}`, error.stack);
      
      // Track error metric
      errors.inc({ 
        service: 'notification-service', 
        error_type: 'payment_confirmation_failed', 
        route: 'notification.payment.confirmation' 
      });
      
      return { success: false, error: error.message };
    }
  }

  @MessagePattern('notification.ticket.delivery')
  async sendTicketDelivery(@Payload() data: any) {
    try {
      this.logger.log(`🎫 Sending ticket delivery for order: ${data.orderId}`);
      
      const notificationData: NotificationRequest = {
        type: 'email',
        recipient: data.customerEmail || data.recipient,
        recipientName: data.customerName || data.recipientName,
        subject: `🎫 Your Tickets - ${data.eventName}`,
        message: `Your tickets for ${data.eventName} are ready! Event: ${data.eventDate} at ${data.eventVenue}`,
        eventType: 'ticket_delivery',
        orderId: data.orderId,
        eventId: data.eventId,
        metadata: data
      };
      
      const result = await this.processNotification(notificationData);
      return { success: true, data: result, message: 'Tickets delivered' };
    } catch (error) {
      this.logger.error(`Ticket delivery failed: ${error.message}`, error.stack);
      
      // Track error metric
      errors.inc({ 
        service: 'notification-service', 
        error_type: 'ticket_delivery_failed', 
        route: 'notification.ticket.delivery' 
      });
      
      return { success: false, error: error.message };
    }
  }

  @MessagePattern('notification.event.reminder')
  async sendEventReminder(@Payload() data: any) {
    try {
      this.logger.log(`📅 Sending event reminder for event: ${data.eventId}`);
      
      const notificationData: NotificationRequest = {
        type: 'email',
        recipient: data.recipient,
        recipientName: data.recipientName,
        subject: `📅 Reminder: ${data.eventName} ${data.reminderType === '24h' ? 'tomorrow' : 'starting soon'}`,
        message: `Don't forget! ${data.eventName} is ${data.reminderType === '24h' ? 'tomorrow' : 'starting soon'}. Event: ${data.eventDate} at ${data.eventVenue}`,
        eventType: 'event_reminder',
        eventId: data.eventId,
        metadata: data
      };
      
      const result = await this.processNotification(notificationData);
      return { success: true, data: result, message: 'Event reminder sent' };
    } catch (error) {
      this.logger.error(`Event reminder failed: ${error.message}`, error.stack);
      
      // Track error metric
      errors.inc({ 
        service: 'notification-service', 
        error_type: 'event_reminder_failed', 
        route: 'notification.event.reminder' 
      });
      
      return { success: false, error: error.message };
    }
  }

  // ========== SAGA PATTERN SUPPORT ==========

  @MessagePattern('payment.completed')
  async handlePaymentCompletedForNotifications(@Payload() payload: any) {
    try {
      this.logger.log(`🔥 Payment completed - triggering notification sequence: ${payload.orderId}`);

      // Trigger payment confirmation
      await this.sendPaymentConfirmation(payload);

      return { success: true, message: 'Payment notifications triggered' };
    } catch (error) {
      this.logger.error(`Failed to trigger payment notifications: ${error.message}`, error.stack);
      
      // Track error metric
      errors.inc({ 
        service: 'notification-service', 
        error_type: 'payment_completed_handler_failed', 
        route: 'payment.completed' 
      });
      
      return { success: false, error: error.message };
    }
  }

  @MessagePattern('order.confirmed')
  async handleOrderConfirmedForNotifications(@Payload() payload: any) {
    try {
      this.logger.log(`🔥 Order confirmed - triggering notification sequence: ${payload.orderId}`);

      // Trigger ticket delivery
      await this.sendTicketDelivery(payload);

      return { success: true, message: 'Order notifications triggered' };
    } catch (error) {
      this.logger.error(`Failed to trigger order notifications: ${error.message}`, error.stack);
      
      // Track error metric
      errors.inc({ 
        service: 'notification-service', 
        error_type: 'order_confirmed_handler_failed', 
        route: 'order.confirmed' 
      });
      
      return { success: false, error: error.message };
    }
  }

  // ========== CORE PROCESSING METHOD ==========

  private async processNotification(data: NotificationRequest) {
    this.logger.log(`📧 PROCESSING: ${data.type} notification to ${data.recipient}`);
    this.logger.log(`📧 Subject: ${data.subject}`);
    this.logger.log(`📧 Event Type: ${data.eventType}`);
    this.logger.log(`📦 Order ID: ${data.orderId}`);
    
    // Generate mock IDs
    const notificationId = `notif_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    const messageId = `msg_${Date.now()}_${Math.random().toString(36).substr(2, 6)}`;
    
    // Create notification record in memory
    const notification = {
      id: notificationId,
      type: data.type.toUpperCase(),
      status: 'SENT',
      recipient: data.recipient,
      recipientName: data.recipientName,
      subject: data.subject,
      message: data.message,
      provider: 'MOCK_BREVO',
      eventType: data.eventType,
      orderId: data.orderId,
      paymentId: data.paymentId,
      eventId: data.eventId,
      messageId: messageId,
      sentAt: new Date().toISOString(),
      createdAt: new Date().toISOString(),
      metadata: data.metadata
    };
    
    // Store in memory
    this.notifications.push(notification);
    
    // Update stats
    this.notificationStats.total++;
    this.notificationStats.sent++;
    this.notificationStats.successRate = Math.round(
      (this.notificationStats.sent / this.notificationStats.total) * 100
    );
    
    // Track business metric
    notificationsSent.inc({ 
      service: 'notification-service', 
      type: data.type?.toLowerCase() || 'email',
      provider: 'mock_brevo'
    });
    
    // Mock email sending logic
    await this.mockEmailSending(notification);
    
    this.logger.log(`✅ NOTIFICATION SENT SUCCESSFULLY`);
    this.logger.log(`📬 Message ID: ${messageId}`);
    this.logger.log(`📊 Total notifications: ${this.notificationStats.total}`);
    
    return {
      success: true,
      messageId: messageId,
      notificationId: notificationId,
      recipient: data.recipient,
      type: data.type,
      eventType: data.eventType,
      orderId: data.orderId,
      sentAt: new Date().toISOString(),
      provider: "MOCK_BREVO",
      status: "SENT"
    };
  }

  private async mockEmailSending(notification: any): Promise<void> {
    // Simulate email sending delay
    await new Promise(resolve => setTimeout(resolve, 100));
    
    this.logger.log(`📧 MOCK EMAIL DETAILS:`);
    this.logger.log(`   To: ${notification.recipient} (${notification.recipientName})`);
    this.logger.log(`   Subject: ${notification.subject}`);
    this.logger.log(`   Content: ${notification.message?.substring(0, 100)}...`);
    this.logger.log(`   Provider: ${notification.provider}`);
    this.logger.log(`   Event: ${notification.eventType}`);
    this.logger.log(`   Order: ${notification.orderId}`);
    
    // Log for ticket purchase confirmations
    if (notification.eventType === 'ticket_purchase_confirmation') {
      this.logger.log(`🎫 TICKET PURCHASE CONFIRMATION SENT!`);
      this.logger.log(`🎉 Order ${notification.orderId} notification complete!`);
    }
  }

  // ========== DEBUG ENDPOINTS ==========

  @Get('notifications')
  async getAllNotifications() {
    try {
      return {
        message: "Recent notifications retrieved",
        data: {
          notifications: this.notifications.slice(-10),
          total: this.notifications.length
        }
      };
    } catch (error) {
      // Track error metric
      errors.inc({ 
        service: 'notification-service', 
        error_type: 'get_notifications_failed', 
        route: 'GET /notifications' 
      });
      throw error;
    }
  }

  @Post('test')
  async testNotification() {
    try {
      return this.processNotification({
        type: 'email',
        recipient: 'test@example.com',
        recipientName: 'Test User',
        subject: 'Test Notification',
        message: 'This is a test notification',
        eventType: 'test',
        orderId: 'test-order-123'
      });
    } catch (error) {
      // Track error metric
      errors.inc({ 
        service: 'notification-service', 
        error_type: 'test_notification_failed', 
        route: 'POST /test' 
      });
      throw error;
    }
  }
}