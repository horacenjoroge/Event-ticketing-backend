// apps/ticket-service/src/ticket-types/ticket-types.controller.ts
import { Controller, Logger } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { TicketTypesService } from './ticket-types.service';
import { 
  CreateTicketTypeDto, 
  UpdateTicketTypeDto, 
  TicketTypeSearchDto 
} from './dto/ticket-type.dto';
import { errors } from '@app/common';

@Controller()
export class TicketTypesController {
  private readonly logger = new Logger(TicketTypesController.name);

  constructor(private readonly ticketTypesService: TicketTypesService) {}

  @MessagePattern('ticket-type.create')
  async createTicketType(@Payload() data: { 
    createTicketTypeDto: CreateTicketTypeDto; 
    organizerId: string; 
  }) {
    try {
      const ticketType = await this.ticketTypesService.create(
        data.createTicketTypeDto, 
        data.organizerId
      );
      
      return {
        success: true,
        data: ticketType,
        message: 'Ticket type created successfully',
      };
    } catch (error) {
      this.logger.error(`Failed to create ticket type: ${error.message}`, error.stack);
      
      // Track error metric
      errors.inc({ 
        service: 'ticket-service', 
        error_type: 'ticket_type_create_failed', 
        route: 'ticket-type.create' 
      });
      
      return {
        success: false,
        error: error.message,
        message: 'Failed to create ticket type',
      };
    }
  }

  @MessagePattern('ticket-type.find-all')
  async findAllTicketTypes(@Payload() searchDto: TicketTypeSearchDto = {}) {
    try {
      const ticketTypes = await this.ticketTypesService.findAll(searchDto);
      
      return {
        success: true,
        data: ticketTypes,
        message: 'Ticket types retrieved successfully',
      };
    } catch (error) {
      this.logger.error(`Failed to retrieve ticket types: ${error.message}`, error.stack);
      
      // Track error metric
      errors.inc({ 
        service: 'ticket-service', 
        error_type: 'ticket_type_find_all_failed', 
        route: 'ticket-type.find-all' 
      });
      
      return {
        success: false,
        error: error.message,
        message: 'Failed to retrieve ticket types',
      };
    }
  }

  @MessagePattern('ticket-type.find-by-event')
  async findTicketTypesByEvent(@Payload() data: { eventId: string }) {
    try {
      const ticketTypes = await this.ticketTypesService.findByEventId(data.eventId);
      
      return {
        success: true,
        data: ticketTypes,
        message: 'Event ticket types retrieved successfully',
      };
    } catch (error) {
      this.logger.error(`Failed to retrieve event ticket types: ${error.message}`, error.stack);
      
      // Track error metric
      errors.inc({ 
        service: 'ticket-service', 
        error_type: 'ticket_type_find_by_event_failed', 
        route: 'ticket-type.find-by-event' 
      });
      
      return {
        success: false,
        error: error.message,
        message: 'Failed to retrieve event ticket types',
      };
    }
  }

  @MessagePattern('ticket-type.find-by-id')
  async findTicketTypeById(@Payload() data: { id: string }) {
    try {
      const ticketType = await this.ticketTypesService.findById(data.id);
      
      return {
        success: true,
        data: ticketType,
        message: 'Ticket type retrieved successfully',
      };
    } catch (error) {
      this.logger.error(`Failed to retrieve ticket type: ${error.message}`, error.stack);
      
      // Track error metric
      errors.inc({ 
        service: 'ticket-service', 
        error_type: 'ticket_type_find_by_id_failed', 
        route: 'ticket-type.find-by-id' 
      });
      
      return {
        success: false,
        error: error.message,
        message: 'Failed to retrieve ticket type',
      };
    }
  }

  @MessagePattern('ticket-type.update')
  async updateTicketType(@Payload() data: { 
    id: string; 
    updateTicketTypeDto: UpdateTicketTypeDto; 
    organizerId: string; 
  }) {
    try {
      const ticketType = await this.ticketTypesService.update(
        data.id, 
        data.updateTicketTypeDto, 
        data.organizerId
      );
      
      return {
        success: true,
        data: ticketType,
        message: 'Ticket type updated successfully',
      };
    } catch (error) {
      this.logger.error(`Failed to update ticket type: ${error.message}`, error.stack);
      
      // Track error metric
      errors.inc({ 
        service: 'ticket-service', 
        error_type: 'ticket_type_update_failed', 
        route: 'ticket-type.update' 
      });
      
      return {
        success: false,
        error: error.message,
        message: 'Failed to update ticket type',
      };
    }
  }

  @MessagePattern('ticket-type.delete')
  async deleteTicketType(@Payload() data: { id: string; organizerId: string }) {
    try {
      await this.ticketTypesService.delete(data.id, data.organizerId);
      
      return {
        success: true,
        data: null,
        message: 'Ticket type deleted successfully',
      };
    } catch (error) {
      this.logger.error(`Failed to delete ticket type: ${error.message}`, error.stack);
      
      // Track error metric
      errors.inc({ 
        service: 'ticket-service', 
        error_type: 'ticket_type_delete_failed', 
        route: 'ticket-type.delete' 
      });
      
      return {
        success: false,
        error: error.message,
        message: 'Failed to delete ticket type',
      };
    }
  }

  @MessagePattern('ticket-type.check-availability')
  async checkAvailability(@Payload() data: { ticketTypeId: string; quantity: number }) {
    try {
      const isAvailable = await this.ticketTypesService.checkAvailability(
        data.ticketTypeId, 
        data.quantity
      );
      
      return {
        success: true,
        data: { available: isAvailable },
        message: 'Availability checked successfully',
      };
    } catch (error) {
      this.logger.error(`Failed to check availability: ${error.message}`, error.stack);
      
      // Track error metric
      errors.inc({ 
        service: 'ticket-service', 
        error_type: 'ticket_type_availability_failed', 
        route: 'ticket-type.check-availability' 
      });
      
      return {
        success: false,
        error: error.message,
        message: 'Failed to check availability',
      };
    }
  }
}