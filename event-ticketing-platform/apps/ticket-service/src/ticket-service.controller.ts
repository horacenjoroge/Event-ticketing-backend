// apps/ticket-service/src/ticket-service.controller.ts
import { Controller, Get, Logger, Inject } from '@nestjs/common';
import { MessagePattern, Payload, ClientProxy } from '@nestjs/microservices';
import { TicketServiceService } from './ticket-service.service';

@Controller()
export class TicketServiceController {
  private readonly logger = new Logger(TicketServiceController.name);

  constructor(
    private readonly ticketServiceService: TicketServiceService,
    @Inject('ORDER_SERVICE') private readonly orderClient: ClientProxy,
  ) {}

  @Get()
  getHello(): string {
    return this.ticketServiceService.getHello();
  }

  // ========== SAGA MESSAGE PATTERNS ==========

  @MessagePattern('ticket.reserve')
  async reserveTickets(@Payload() payload: {
    sagaExecutionId: string;
    stepNumber: number;
    requestData: {
      orderId: string;
      userId: string;
      items: Array<{
        ticketTypeId: string;
        quantity: number;
      }>;
    };
  }) {
    try {
      this.logger.log(`Reserving tickets for order ${payload.requestData.orderId}`);

      // Call your business logic
      const reservationResult = await this.ticketServiceService.reserveTickets(
        payload.requestData.orderId,
        payload.requestData.items
      );

      // Send success back to saga orchestrator
      this.orderClient.emit('saga.step.completed', {
        sagaExecutionId: payload.sagaExecutionId,
        stepNumber: payload.stepNumber,
        responseData: reservationResult,
      });

      return {
        success: true,
        message: 'Tickets reserved successfully',
        data: reservationResult,
      };
    } catch (error) {
      this.logger.error(`Failed to reserve tickets: ${error.message}`, error.stack);

      // Send failure back to saga orchestrator
      this.orderClient.emit('saga.step.failed', {
        sagaExecutionId: payload.sagaExecutionId,
        stepNumber: payload.stepNumber,
        errorMessage: error.message,
      });

      return {
        success: false,
        error: error.message,
        message: 'Failed to reserve tickets',
      };
    }
  }

  @MessagePattern('ticket.confirm')
  async confirmTickets(@Payload() payload: {
    sagaExecutionId: string;
    stepNumber: number;
    requestData: {
      orderId: string;
      userId: string;
    };
  }) {
    try {
      this.logger.log(`Confirming tickets for order ${payload.requestData.orderId}`);

      // Call your business logic
      const confirmationResult = await this.ticketServiceService.confirmTickets(
        payload.requestData.orderId
      );

      // Send success back to saga orchestrator
      this.orderClient.emit('saga.step.completed', {
        sagaExecutionId: payload.sagaExecutionId,
        stepNumber: payload.stepNumber,
        responseData: confirmationResult,
      });

      return {
        success: true,
        message: 'Tickets confirmed successfully',
        data: confirmationResult,
      };
    } catch (error) {
      this.logger.error(`Failed to confirm tickets: ${error.message}`, error.stack);

      // Send failure back to saga orchestrator
      this.orderClient.emit('saga.step.failed', {
        sagaExecutionId: payload.sagaExecutionId,
        stepNumber: payload.stepNumber,
        errorMessage: error.message,
      });

      return {
        success: false,
        error: error.message,
        message: 'Failed to confirm tickets',
      };
    }
  }

  @MessagePattern('ticket.release')
  async releaseTickets(@Payload() payload: {
    sagaExecutionId: string;
    stepNumber: number;
    requestData: {
      orderId: string;
      userId: string;
    };
  }) {
    try {
      this.logger.log(`Releasing tickets for order ${payload.requestData.orderId}`);

      // Call your compensation business logic
      const releaseResult = await this.ticketServiceService.releaseTickets(
        payload.requestData.orderId
      );

      // Send success back to saga orchestrator (optional for compensation)
      this.orderClient.emit('saga.step.completed', {
        sagaExecutionId: payload.sagaExecutionId,
        stepNumber: payload.stepNumber,
        responseData: releaseResult,
      });

      return {
        success: true,
        message: 'Tickets released successfully',
        data: releaseResult,
      };
    } catch (error) {
      this.logger.error(`Failed to release tickets: ${error.message}`, error.stack);

      return {
        success: false,
        error: error.message,
        message: 'Failed to release tickets',
      };
    }
  }
}