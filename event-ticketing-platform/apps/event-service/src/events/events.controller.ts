// apps/event-service/src/events/events.controller.ts
import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { EventsService } from './events.service';
import { 
  CreateEventDto, 
  UpdateEventDto, 
  EventSearchDto 
} from './dto/event.dto';
import { EventStatus } from '../../prisma/generated/prisma';

@Controller()
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @MessagePattern('event.create')
  async createEvent(@Payload() data: { 
    createEventDto: CreateEventDto; 
    organizerId: string; 
  }) {
    try {
      const event = await this.eventsService.create(
        data.createEventDto, 
        data.organizerId
      );
      
      return {
        success: true,
        data: event,
        message: 'Event created successfully',
      };
    } catch (error) {
      return {
        success: false,
        error: error.message,
        message: 'Failed to create event',
      };
    }
  }

  @MessagePattern('event.find-all')
  async findAllEvents(@Payload() searchDto: EventSearchDto = {}) {
    try {
      const events = await this.eventsService.findAll(searchDto);
      
      return {
        success: true,
        data: events,
        message: 'Events retrieved successfully',
      };
    } catch (error) {
      return {
        success: false,
        error: error.message,
        message: 'Failed to retrieve events',
      };
    }
  }

  @MessagePattern('event.find-by-id')
  async findEventById(@Payload() data: { id: string }) {
    try {
      const event = await this.eventsService.findById(data.id);
      
      return {
        success: true,
        data: event,
        message: 'Event retrieved successfully',
      };
    } catch (error) {
      return {
        success: false,
        error: error.message,
        message: 'Failed to retrieve event',
      };
    }
  }

  @MessagePattern('event.find-by-organizer')
  async findEventsByOrganizer(@Payload() data: { organizerId: string }) {
    try {
      const events = await this.eventsService.findByOrganizer(data.organizerId);
      
      return {
        success: true,
        data: events,
        message: 'Organizer events retrieved successfully',
      };
    } catch (error) {
      return {
        success: false,
        error: error.message,
        message: 'Failed to retrieve organizer events',
      };
    }
  }

  @MessagePattern('event.update')
  async updateEvent(@Payload() data: { 
    id: string; 
    updateEventDto: UpdateEventDto; 
    organizerId: string; 
  }) {
    try {
      const event = await this.eventsService.update(
        data.id, 
        data.updateEventDto, 
        data.organizerId
      );
      
      return {
        success: true,
        data: event,
        message: 'Event updated successfully',
      };
    } catch (error) {
      return {
        success: false,
        error: error.message,
        message: 'Failed to update event',
      };
    }
  }

  @MessagePattern('event.delete')
  async deleteEvent(@Payload() data: { id: string; organizerId: string }) {
    try {
      await this.eventsService.delete(data.id, data.organizerId);
      
      return {
        success: true,
        data: null,
        message: 'Event deleted successfully',
      };
    } catch (error) {
      return {
        success: false,
        error: error.message,
        message: 'Failed to delete event',
      };
    }
  }

  @MessagePattern('event.update-status')
  async updateEventStatus(@Payload() data: { 
    id: string; 
    status: EventStatus; 
    organizerId: string; 
  }) {
    try {
      const event = await this.eventsService.updateStatus(
        data.id, 
        data.status, 
        data.organizerId
      );
      
      return {
        success: true,
        data: event,
        message: 'Event status updated successfully',
      };
    } catch (error) {
      return {
        success: false,
        error: error.message,
        message: 'Failed to update event status',
      };
    }
  }

  @MessagePattern('event.get-venues')
  async getVenues() {
    try {
      const venues = await this.eventsService.getVenues();
      
      return {
        success: true,
        data: venues,
        message: 'Venues retrieved successfully',
      };
    } catch (error) {
      return {
        success: false,
        error: error.message,
        message: 'Failed to retrieve venues',
      };
    }
  }

  @MessagePattern('event.get-categories')
  async getCategories() {
    try {
      const categories = await this.eventsService.getCategories();
      
      return {
        success: true,
        data: categories,
        message: 'Categories retrieved successfully',
      };
    } catch (error) {
      return {
        success: false,
        error: error.message,
        message: 'Failed to retrieve categories',
      };
    }
  }
}