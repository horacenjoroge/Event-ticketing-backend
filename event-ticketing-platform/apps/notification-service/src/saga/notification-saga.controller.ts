// =====================================================
// apps/notification-service/src/saga/notification-saga.controller.ts
// Integration with your existing saga architecture
// =====================================================
import { Controller, Logger } from '@nestjs/common';
import { MessagePattern, Payload, Ctx, RmqContext } from '@nestjs/microservices';
import { NotificationSagaService } from './notification-saga.service';

@Controller()
export class NotificationSagaController {
  private readonly logger = new Logger(NotificationSagaController.name);

  constructor(private readonly notificationSagaService: NotificationSagaService) {
    this.logger.log('🚀 NotificationSagaController initialized and ready to receive saga messages!');
  }

  // ========== SAGA STEP EXECUTION PATTERNS ==========

  @MessagePattern('notification.send.saga')
  async sendNotificationSaga(@Payload() payload: {
    sagaExecutionId: string;
    stepNumber: number;
    requestData: {
      type: string;
      recipient: string;
      recipientName?: string;
      subject: string;
      content: string;
      orderId?: string;
      paymentId?: string;
      eventId?: string;
      metadata?: any;
    };
  }, @Ctx() context: RmqContext) {
    const channel = context.getChannelRef();
    const originalMsg = context.getMessage();

    try {
      this.logger.log(`🔥 Processing saga notification: ${payload.sagaExecutionId} step ${payload.stepNumber}`);

      const result = await this.notificationSagaService.sendNotificationWithSaga(
        payload.sagaExecutionId,
        payload.stepNumber,
        payload.requestData
      );

      channel.ack(originalMsg);
      return {
        success: true,
        data: result,
        message: 'Notification saga step completed',
      };
    } catch (error) {
      this.logger.error(`Saga notification failed: ${error.message}`, error.stack);

      // Notify saga orchestrator of failure
      await this.notificationSagaService.notifySagaFailure(
        payload.sagaExecutionId,
        payload.stepNumber,
        error.message
      );

      channel.nack(originalMsg, false, false);
      return {
        success: false,
        error: error.message,
        message: 'Notification saga step failed',
      };
    }
  }

  @MessagePattern('notification.payment-confirmation.saga')
  async sendPaymentConfirmationSaga(@Payload() payload: {
    sagaExecutionId: string;
    stepNumber: number;
    requestData: {
      orderId: string;
      customerEmail: string;
      customerName: string;
      amount: number;
      currency: string;
      eventName: string;
      paymentMethod: string;
      transactionId: string;
    };
  }, @Ctx() context: RmqContext) {
    const channel = context.getChannelRef();
    const originalMsg = context.getMessage();

    try {
      this.logger.log(`🔥 Sending payment confirmation saga: ${payload.sagaExecutionId}`);

      const result = await this.notificationSagaService.sendPaymentConfirmationWithSaga(
        payload.sagaExecutionId,
        payload.stepNumber,
        payload.requestData
      );

      channel.ack(originalMsg);
      return {
        success: true,
        data: result,
        message: 'Payment confirmation sent successfully',
      };
    } catch (error) {
      this.logger.error(`Payment confirmation saga failed: ${error.message}`, error.stack);

      await this.notificationSagaService.notifySagaFailure(
        payload.sagaExecutionId,
        payload.stepNumber,
        error.message
      );

      channel.nack(originalMsg, false, false);
      return {
        success: false,
        error: error.message,
        message: 'Payment confirmation saga failed',
      };
    }
  }

  @MessagePattern('notification.ticket-delivery.saga')
  async sendTicketDeliverySaga(@Payload() payload: {
    sagaExecutionId: string;
    stepNumber: number;
    requestData: {
      orderId: string;
      customerEmail: string;
      customerName: string;
      eventName: string;
      eventDate: string;
      eventVenue: string;
      ticketCount: number;
      ticketPdf?: string;
    };
  }, @Ctx() context: RmqContext) {
    const channel = context.getChannelRef();
    const originalMsg = context.getMessage();

    try {
      this.logger.log(`🔥 Sending ticket delivery saga: ${payload.sagaExecutionId}`);

      const result = await this.notificationSagaService.sendTicketDeliveryWithSaga(
        payload.sagaExecutionId,
        payload.stepNumber,
        payload.requestData
      );

      channel.ack(originalMsg);
      return {
        success: true,
        data: result,
        message: 'Ticket delivery sent successfully',
      };
    } catch (error) {
      this.logger.error(`Ticket delivery saga failed: ${error.message}`, error.stack);

      await this.notificationSagaService.notifySagaFailure(
        payload.sagaExecutionId,
        payload.stepNumber,
        error.message
      );

      channel.nack(originalMsg, false, false);
      return {
        success: false,
        error: error.message,
        message: 'Ticket delivery saga failed',
      };
    }
  }

  // ========== MULTI-STEP NOTIFICATION SAGAS ==========

  @MessagePattern('notification.sequence.saga')
  async startNotificationSequenceSaga(@Payload() payload: {
    orderId: string;
    customerEmail: string;
    customerName: string;
    paymentDetails: any;
    eventDetails: any;
    ticketDetails: any;
  }) {
    try {
      this.logger.log(`🔥 Starting notification sequence saga for order: ${payload.orderId}`);

      const sagaExecution = await this.notificationSagaService.startNotificationSequence(payload);

      return {
        success: true,
        data: sagaExecution,
        message: 'Notification sequence saga started successfully',
      };
    } catch (error) {
      this.logger.error(`Failed to start notification sequence: ${error.message}`, error.stack);
      return {
        success: false,
        error: error.message,
        message: 'Failed to start notification sequence saga',
      };
    }
  }

  // ========== PROVIDER FAILOVER SAGA ==========

  @MessagePattern('notification.provider-failover.saga')
  async handleProviderFailoverSaga(@Payload() payload: {
    originalNotificationId: string;
    failedProvider: string;
    errorMessage: string;
    retryAttempt: number;
  }) {
    try {
      this.logger.log(`🔥 Handling provider failover: ${payload.originalNotificationId}`);

      const result = await this.notificationSagaService.handleProviderFailover(payload);

      return {
        success: true,
        data: result,
        message: 'Provider failover handled successfully',
      };
    } catch (error) {
      this.logger.error(`Provider failover failed: ${error.message}`, error.stack);
      return {
        success: false,
        error: error.message,
        message: 'Provider failover failed',
      };
    }
  }

  // ========== BULK NOTIFICATION SAGA ==========

  @MessagePattern('notification.bulk.saga')
  async startBulkNotificationSaga(@Payload() payload: {
    eventId: string;
    notificationType: string;
    subject: string;
    content: string;
    attendeeFilter?: any;
    scheduledFor?: Date;
  }) {
    try {
      this.logger.log(`🔥 Starting bulk notification saga for event: ${payload.eventId}`);

      const sagaExecution = await this.notificationSagaService.startBulkNotificationSaga(payload);

      return {
        success: true,
        data: sagaExecution,
        message: 'Bulk notification saga started successfully',
      };
    } catch (error) {
      this.logger.error(`Failed to start bulk notification saga: ${error.message}`, error.stack);
      return {
        success: false,
        error: error.message,
        message: 'Failed to start bulk notification saga',
      };
    }
  }

  // ========== REMINDER SAGA ==========

  @MessagePattern('notification.reminder.saga')
  async scheduleReminderSaga(@Payload() payload: {
    eventId: string;
    reminderType: '24h' | '1h' | 'custom';
    scheduledFor: Date;
    customMessage?: string;
  }) {
    try {
      this.logger.log(`🔥 Scheduling reminder saga for event: ${payload.eventId} (${payload.reminderType})`);

      const sagaExecution = await this.notificationSagaService.scheduleReminderSaga(payload);

      return {
        success: true,
        data: sagaExecution,
        message: 'Reminder saga scheduled successfully',
      };
    } catch (error) {
      this.logger.error(`Failed to schedule reminder saga: ${error.message}`, error.stack);
      return {
        success: false,
        error: error.message,
        message: 'Failed to schedule reminder saga',
      };
    }
  }

  // ========== SAGA COMPENSATION PATTERNS ==========

  @MessagePattern('notification.compensate.saga')
  async compensateNotificationSaga(@Payload() payload: {
    sagaExecutionId: string;
    stepNumber: number;
    reason: string;
  }) {
    try {
      this.logger.log(`🔥 Compensating notification saga: ${payload.sagaExecutionId} step ${payload.stepNumber}`);

      const result = await this.notificationSagaService.compensateNotificationStep(
        payload.sagaExecutionId,
        payload.stepNumber,
        payload.reason
      );

      return {
        success: true,
        data: result,
        message: 'Notification compensation completed successfully',
      };
    } catch (error) {
      this.logger.error(`Notification compensation failed: ${error.message}`, error.stack);
      return {
        success: false,
        error: error.message,
        message: 'Notification compensation failed',
      };
    }
  }

  // ========== EVENT HANDLERS FROM OTHER SERVICES ==========

  @MessagePattern('payment.completed')
  async handlePaymentCompletedForNotifications(@Payload() payload: {
    paymentId: string;
    orderId: string;
    amount: number;
    currency: string;
    customerEmail: string;
    eventName?: string;
  }) {
    try {
      this.logger.log(`🔥 Payment completed - triggering notification sequence: ${payload.orderId}`);

      // Start automatic notification sequence
      await this.notificationSagaService.triggerPaymentCompletedNotifications(payload);

      return { success: true };
    } catch (error) {
      this.logger.error(`Failed to trigger payment notifications: ${error.message}`, error.stack);
      return { success: false, error: error.message };
    }
  }

  @MessagePattern('order.confirmed')
  async handleOrderConfirmedForNotifications(@Payload() payload: {
    orderId: string;
    customerEmail: string;
    eventDetails: any;
    ticketDetails: any;
  }) {
    try {
      this.logger.log(`🔥 Order confirmed - triggering notification sequence: ${payload.orderId}`);

      await this.notificationSagaService.triggerOrderConfirmedNotifications(payload);

      return { success: true };
    } catch (error) {
      this.logger.error(`Failed to trigger order notifications: ${error.message}`, error.stack);
      return { success: false, error: error.message };
    }
  }

  // ========== SAGA MONITORING ==========

  @MessagePattern('notification.saga.status')
  async getNotificationSagaStatus(@Payload() payload: { sagaId: string }) {
    try {
      const status = await this.notificationSagaService.getSagaStatus(payload.sagaId);

      return {
        success: true,
        data: status,
        message: 'Notification saga status retrieved successfully',
      };
    } catch (error) {
      this.logger.error(`Failed to get saga status: ${error.message}`, error.stack);
      return {
        success: false,
        error: error.message,
        message: 'Failed to get notification saga status',
      };
    }
  }

  @MessagePattern('notification.saga.health')
  async getNotificationSagaHealth() {
    try {
      const health = await this.notificationSagaService.getHealthStatus();

      return {
        success: true,
        data: health,
        message: 'Notification saga health status retrieved successfully',
      };
    } catch (error) {
      this.logger.error(`Failed to get saga health: ${error.message}`, error.stack);
      return {
        success: false,
        error: error.message,
        message: 'Failed to get notification saga health',
      };
    }
  }
}