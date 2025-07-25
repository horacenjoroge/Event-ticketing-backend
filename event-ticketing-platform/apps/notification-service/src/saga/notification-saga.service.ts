// =====================================================
// apps/notification-service/src/saga/notification-saga.service.ts
// NEW FILE - Create this file
// =====================================================
import { Injectable, Logger, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { PrismaService } from '../database/prisma.service';
import { EmailService } from '../providers/email.service';
import { SmsService } from '../providers/sms.service';

@Injectable()
export class NotificationSagaService {
  private readonly logger = new Logger(NotificationSagaService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly emailService: EmailService,
    private readonly smsService: SmsService,
    @Inject('ORDER_SERVICE') private readonly orderClient: ClientProxy,
  ) {}

  async sendNotificationWithSaga(
    sagaExecutionId: string,
    stepNumber: number,
    requestData: any
  ): Promise<any> {
    try {
      this.logger.log(`Processing saga notification: ${sagaExecutionId} step ${stepNumber}`);

      let result;
      switch (requestData.type?.toUpperCase()) {
        case 'EMAIL':
          result = await this.emailService.sendEmail(requestData);
          break;
        case 'SMS':
          result = await this.smsService.sendSms(requestData);
          break;
        default:
          result = await this.emailService.sendEmail(requestData);
      }

      // Notify saga orchestrator of success
      await this.notifySagaSuccess(sagaExecutionId, stepNumber, result);

      return result;
    } catch (error) {
      this.logger.error(`Saga notification failed: ${error.message}`, error.stack);
      throw error;
    }
  }

  async sendPaymentConfirmationWithSaga(
    sagaExecutionId: string,
    stepNumber: number,
    requestData: any
  ): Promise<any> {
    try {
      this.logger.log(`Sending payment confirmation saga: ${sagaExecutionId}`);

      const result = await this.emailService.sendPaymentConfirmation(requestData);

      // Notify saga orchestrator of success
      await this.notifySagaSuccess(sagaExecutionId, stepNumber, {
        notificationId: result.notificationId,
        messageId: result.messageId,
        type: 'payment_confirmation',
        recipient: requestData.customerEmail,
        completedAt: new Date(),
      });

      return result;
    } catch (error) {
      this.logger.error(`Payment confirmation saga failed: ${error.message}`, error.stack);
      throw error;
    }
  }

  async sendTicketDeliveryWithSaga(
    sagaExecutionId: string,
    stepNumber: number,
    requestData: any
  ): Promise<any> {
    try {
      this.logger.log(`Sending ticket delivery saga: ${sagaExecutionId}`);

      const result = await this.emailService.sendTicketDelivery(requestData);

      // Notify saga orchestrator of success
      await this.notifySagaSuccess(sagaExecutionId, stepNumber, {
        notificationId: result.notificationId,
        messageId: result.messageId,
        type: 'ticket_delivery',
        recipient: requestData.customerEmail,
        completedAt: new Date(),
      });

      return result;
    } catch (error) {
      this.logger.error(`Ticket delivery saga failed: ${error.message}`, error.stack);
      throw error;
    }
  }

  async startNotificationSequence(payload: any): Promise<any> {
    try {
      this.logger.log(`Starting notification sequence for order: ${payload.orderId}`);

      // This would create a new saga execution for notification sequence
      // For now, just trigger the notifications directly
      
      // Step 1: Payment confirmation
      await this.emailService.sendPaymentConfirmation({
        recipientEmail: payload.customerEmail,
        recipientName: payload.customerName,
        orderId: payload.orderId,
        amount: payload.paymentDetails.amount,
        currency: payload.paymentDetails.currency,
        eventName: payload.eventDetails.name,
      });

      // Step 2: Ticket delivery (with delay)
      setTimeout(async () => {
        await this.emailService.sendTicketDelivery({
          recipientEmail: payload.customerEmail,
          recipientName: payload.customerName,
          orderId: payload.orderId,
          eventName: payload.eventDetails.name,
          eventDate: payload.eventDetails.date,
          eventVenue: payload.eventDetails.venue,
          ticketCount: payload.ticketDetails.count,
        });
      }, 5000); // 5 second delay

      return { success: true, sequenceStarted: true };
    } catch (error) {
      this.logger.error(`Failed to start notification sequence: ${error.message}`, error.stack);
      throw error;
    }
  }

  async triggerPaymentCompletedNotifications(payload: any): Promise<void> {
    try {
      this.logger.log(`Triggering payment completed notifications for order: ${payload.orderId}`);

      // Send immediate payment confirmation
      await this.emailService.sendPaymentConfirmation({
        recipientEmail: payload.customerEmail,
        recipientName: payload.customerEmail.split('@')[0],
        orderId: payload.orderId,
        amount: payload.amount,
        currency: payload.currency,
        eventName: payload.eventName || 'Event Ticket',
      });

      this.logger.log(`✅ Payment confirmation sent for order: ${payload.orderId}`);
    } catch (error) {
      this.logger.error(`Failed to trigger payment notifications: ${error.message}`, error.stack);
    }
  }

  async triggerOrderConfirmedNotifications(payload: any): Promise<void> {
    try {
      this.logger.log(`Triggering order confirmed notifications for order: ${payload.orderId}`);

      // Send ticket delivery notification
      await this.emailService.sendTicketDelivery({
        recipientEmail: payload.customerEmail,
        recipientName: payload.customerEmail.split('@')[0],
        orderId: payload.orderId,
        eventName: payload.eventDetails.name,
        eventDate: payload.eventDetails.date,
        eventVenue: payload.eventDetails.venue,
        ticketCount: payload.ticketDetails.count,
      });

      this.logger.log(`✅ Ticket delivery sent for order: ${payload.orderId}`);
    } catch (error) {
      this.logger.error(`Failed to trigger order notifications: ${error.message}`, error.stack);
    }
  }

  async notifySagaSuccess(
    sagaExecutionId: string,
    stepNumber: number,
    responseData: any
  ): Promise<void> {
    try {
      this.orderClient.emit('saga.step.completed', {
        sagaExecutionId,
        stepNumber,
        responseData,
      });

      this.logger.log(`✅ Notified saga ${sagaExecutionId} step ${stepNumber} completed`);
    } catch (error) {
      this.logger.error(`Failed to notify saga success: ${error.message}`, error.stack);
    }
  }

  async notifySagaFailure(
    sagaExecutionId: string,
    stepNumber: number,
    errorMessage: string
  ): Promise<void> {
    try {
      this.orderClient.emit('saga.step.failed', {
        sagaExecutionId,
        stepNumber,
        errorMessage,
      });

      this.logger.log(`❌ Notified saga ${sagaExecutionId} step ${stepNumber} failed`);
    } catch (error) {
      this.logger.error(`Failed to notify saga failure: ${error.message}`, error.stack);
    }
  }

  async compensateNotificationStep(
    sagaExecutionId: string,
    stepNumber: number,
    reason: string
  ): Promise<any> {
    try {
      this.logger.log(`Compensating notification step: ${sagaExecutionId} step ${stepNumber}`);

      // For notifications, compensation might involve:
      // - Logging the compensation action
      // - Sending a cancellation email (if applicable)
      // - Marking notifications as cancelled in database

      // Update notification status to compensated
      await this.prisma.notification.updateMany({
        where: {
          metadata: {
            path: ['sagaExecutionId'],
            equals: sagaExecutionId,
          },
        },
        data: {
          status: 'FAILED',
          errorMessage: `Compensated: ${reason}`,
        },
      });

      return { compensated: true, reason };
    } catch (error) {
      this.logger.error(`Failed to compensate notification: ${error.message}`, error.stack);
      throw error;
    }
  }

  async getSagaStatus(sagaId: string): Promise<any> {
    // Implementation depends on how you store saga state
    return { sagaId, status: 'active' };
  }

  async getHealthStatus(): Promise<any> {
    const totalNotifications = await this.prisma.notification.count();
    const sentNotifications = await this.prisma.notification.count({
      where: { status: 'SENT' },
    });

    return {
      service: 'notification-saga-service',
      status: 'healthy',
      totalNotifications,
      sentNotifications,
      successRate: totalNotifications > 0 ? (sentNotifications / totalNotifications) * 100 : 0,
    };
  }

  // Placeholder methods for other saga operations
  async handleProviderFailover(payload: any): Promise<any> {
    // TODO: Implement provider failover logic
    return { failoverHandled: true };
  }

  async startBulkNotificationSaga(payload: any): Promise<any> {
    // TODO: Implement bulk notification saga
    return { bulkSagaStarted: true };
  }

  async scheduleReminderSaga(payload: any): Promise<any> {
    // TODO: Implement reminder scheduling saga
    return { reminderScheduled: true };
  }
}