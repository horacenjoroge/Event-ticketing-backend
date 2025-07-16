// apps/order-service/src/saga/compensation.service.ts
import { Injectable, Logger, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class CompensationService {
  private readonly logger = new Logger(CompensationService.name);

  constructor(
    @Inject('TICKET_SERVICE') private readonly ticketClient: ClientProxy,
    @Inject('PAYMENT_SERVICE') private readonly paymentClient: ClientProxy,
    @Inject('NOTIFICATION_SERVICE') private readonly notificationClient: ClientProxy,
  ) {}

  async compensateStep(step: any, reason: string) {
    this.logger.log(`Compensating step ${step.stepName}: ${reason}`);
    
    try {
      switch (step.stepName) {
        case 'RESERVE_TICKETS':
          return await this.compensateTicketReservation(step, reason);
        case 'PROCESS_PAYMENT':
          return await this.compensatePayment(step, reason);
        case 'CONFIRM_TICKETS':
          return await this.compensateTicketConfirmation(step, reason);
        case 'SEND_CONFIRMATION':
          return await this.compensateNotification(step, reason);
        default:
          this.logger.warn(`No compensation handler for step: ${step.stepName}`);
          return { compensated: true, reason, stepName: step.stepName };
      }
    } catch (error) {
      this.logger.error(`Compensation failed for step ${step.stepName}: ${error.message}`, error.stack);
      throw error;
    }
  }

  private async compensateTicketReservation(step: any, reason: string) {
    this.logger.log(`Compensating ticket reservation for order: ${step.requestData.orderId}`);
    
    try {
      // Send release tickets command
      const releaseMessage = {
        sagaExecutionId: step.sagaExecutionId,
        stepNumber: step.stepNumber,
        requestData: {
          orderId: step.requestData.orderId,
          userId: step.requestData.userId,
          reason: reason,
          compensationType: 'RELEASE_RESERVATION',
        },
      };

      await this.ticketClient.emit('ticket.release', releaseMessage);
      
      this.logger.log(`Successfully sent ticket release compensation for order: ${step.requestData.orderId}`);
      
      return { 
        compensated: true, 
        action: 'RELEASE_TICKETS', 
        reason,
        orderId: step.requestData.orderId,
        timestamp: new Date(),
      };
    } catch (error) {
      this.logger.error(`Failed to compensate ticket reservation: ${error.message}`);
      throw new Error(`Ticket reservation compensation failed: ${error.message}`);
    }
  }

  private async compensatePayment(step: any, reason: string) {
    this.logger.log(`Compensating payment for order: ${step.requestData.orderId}`);
    
    try {
      // Send refund payment command
      const refundMessage = {
        sagaExecutionId: step.sagaExecutionId,
        stepNumber: step.stepNumber,
        requestData: {
          paymentId: step.responseData?.paymentId, // From the completed payment step
          orderId: step.requestData.orderId,
          amount: step.requestData.amount, // Full refund
          reason: reason,
          metadata: {
            compensationType: 'SAGA_COMPENSATION',
            originalSagaId: step.sagaExecutionId,
          },
        },
      };

      await this.paymentClient.emit('payment.refund', refundMessage);
      
      this.logger.log(`Successfully sent payment refund compensation for order: ${step.requestData.orderId}`);
      
      return { 
        compensated: true, 
        action: 'REFUND_PAYMENT', 
        reason,
        orderId: step.requestData.orderId,
        amount: step.requestData.amount,
        timestamp: new Date(),
      };
    } catch (error) {
      this.logger.error(`Failed to compensate payment: ${error.message}`);
      throw new Error(`Payment compensation failed: ${error.message}`);
    }
  }

  private async compensateTicketConfirmation(step: any, reason: string) {
    this.logger.log(`Compensating ticket confirmation for order: ${step.requestData.orderId}`);
    
    try {
      // Send unconfirm tickets command (revert to reserved state)
      const unconfirmMessage = {
        sagaExecutionId: step.sagaExecutionId,
        stepNumber: step.stepNumber,
        requestData: {
          orderId: step.requestData.orderId,
          userId: step.requestData.userId,
          reason: reason,
          compensationType: 'UNCONFIRM_TICKETS',
        },
      };

      await this.ticketClient.emit('ticket.unconfirm', unconfirmMessage);
      
      this.logger.log(`Successfully sent ticket unconfirm compensation for order: ${step.requestData.orderId}`);
      
      return { 
        compensated: true, 
        action: 'UNCONFIRM_TICKETS', 
        reason,
        orderId: step.requestData.orderId,
        timestamp: new Date(),
      };
    } catch (error) {
      this.logger.error(`Failed to compensate ticket confirmation: ${error.message}`);
      throw new Error(`Ticket confirmation compensation failed: ${error.message}`);
    }
  }

  private async compensateNotification(step: any, reason: string) {
    this.logger.log(`Compensating notification for order: ${step.requestData.orderId}`);
    
    try {
      // Send cancellation notice
      const cancellationMessage = {
        sagaExecutionId: step.sagaExecutionId,
        stepNumber: step.stepNumber,
        requestData: {
          userId: step.requestData.userId,
          orderId: step.requestData.orderId,
          templateType: 'ORDER_CANCELLATION',
          recipientEmail: step.requestData.recipientEmail,
          reason: reason,
          metadata: {
            compensationType: 'CANCELLATION_NOTICE',
            originalSagaId: step.sagaExecutionId,
          },
        },
      };

      await this.notificationClient.emit('notification.send', cancellationMessage);
      
      this.logger.log(`Successfully sent cancellation notice for order: ${step.requestData.orderId}`);
      
      return { 
        compensated: true, 
        action: 'SEND_CANCELLATION_NOTICE', 
        reason,
        orderId: step.requestData.orderId,
        timestamp: new Date(),
      };
    } catch (error) {
      this.logger.error(`Failed to compensate notification: ${error.message}`);
      // Don't throw error for notification compensation failure - it's not critical
      return { 
        compensated: false, 
        action: 'SEND_CANCELLATION_NOTICE', 
        reason,
        error: error.message,
        timestamp: new Date(),
      };
    }
  }
}