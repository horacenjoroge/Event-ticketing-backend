// apps/order-service/src/saga/compensation.service.ts
import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class CompensationService {
  private readonly logger = new Logger(CompensationService.name);

  async compensateStep(step: any, reason: string) {
    this.logger.log(`Compensating step ${step.stepName}: ${reason}`);
    
    // Add your compensation logic here based on step type
    switch (step.stepName) {
      case 'RESERVE_TICKETS':
        return this.compensateTicketReservation(step, reason);
      case 'PROCESS_PAYMENT':
        return this.compensatePayment(step, reason);
      case 'CONFIRM_TICKETS':
        return this.compensateTicketConfirmation(step, reason);
      case 'SEND_CONFIRMATION':
        return this.compensateNotification(step, reason);
      default:
        return { compensated: true, reason, stepName: step.stepName };
    }
  }

  private async compensateTicketReservation(step: any, reason: string) {
    this.logger.log(`Compensating ticket reservation: ${reason}`);
    return { compensated: true, action: 'RELEASE_TICKETS', reason };
  }

  private async compensatePayment(step: any, reason: string) {
    this.logger.log(`Compensating payment: ${reason}`);
    return { compensated: true, action: 'REFUND_PAYMENT', reason };
  }

  private async compensateTicketConfirmation(step: any, reason: string) {
    this.logger.log(`Compensating ticket confirmation: ${reason}`);
    return { compensated: true, action: 'UNCONFIRM_TICKETS', reason };
  }

  private async compensateNotification(step: any, reason: string) {
    this.logger.log(`Compensating notification: ${reason}`);
    return { compensated: true, action: 'SEND_CANCELLATION_NOTICE', reason };
  }
}