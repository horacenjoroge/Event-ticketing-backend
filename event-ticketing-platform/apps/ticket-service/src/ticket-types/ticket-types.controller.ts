// apps/ticket-service/src/ticket-types/ticket-types.controller.ts
import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { TicketTypesService } from './ticket-types.service';
import { 
  CreateTicketTypeDto, 
  UpdateTicketTypeDto, 
  TicketTypeSearchDto 
} from './dto/ticket-type.dto';

@Controller()
export class TicketTypesController {
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
      return {
        success: false,
        error: error.message,
        message: 'Failed to check availability',
      };
    }
  }
}