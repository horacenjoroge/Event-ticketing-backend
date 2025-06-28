// apps/event-service/src/events/events.service.ts
import {
  Injectable,
  NotFoundException,
  ForbiddenException,
} from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import {
  CreateEventDto,
  UpdateEventDto,
  EventSearchDto,
  EventResponseDto,
} from './dto/event.dto';
import { EventStatus } from '../../prisma/generated/prisma';

@Injectable()
export class EventsService {
  constructor(private prisma: PrismaService) {}

  async create(createEventDto: CreateEventDto, organizerId: string): Promise<EventResponseDto> {
    // Verify venue exists
    const venue = await this.prisma.venue.findUnique({
      where: { id: createEventDto.venueId },
    });

    if (!venue) {
      throw new NotFoundException('Venue not found');
    }

    // Verify category exists
    const category = await this.prisma.category.findUnique({
      where: { id: createEventDto.categoryId },
    });

    if (!category) {
      throw new NotFoundException('Category not found');
    }

    const event = await this.prisma.event.create({
      data: {
        ...createEventDto,
        organizerId, // Use organizerId from JWT token
        startDate: new Date(createEventDto.startDate),
        endDate: new Date(createEventDto.endDate),
        status: EventStatus.DRAFT, // Default status
      },
      include: {
        venue: true,
        category: true,
      },
    });

    return this.formatEventResponse(event);
  }

  async findAll(searchDto?: EventSearchDto) {
    const where: any = {};

    if (searchDto?.title) {
      where.title = { contains: searchDto.title, mode: 'insensitive' };
    }
    if (searchDto?.categoryId) {
      where.categoryId = searchDto.categoryId;
    }
    if (searchDto?.city) {
      where.venue = {
        city: {
          contains: searchDto.city,
          mode: 'insensitive',
        },
      };
    }
    if (searchDto?.startDate) {
      where.startDate = { gte: new Date(searchDto.startDate) };
    }
    if (searchDto?.endDate) {
      where.endDate = { lte: new Date(searchDto.endDate) };
    }
    if (searchDto?.status) {
      where.status = searchDto.status;
    } else {
      // Default: only show LIVE events for public search
      where.status = EventStatus.LIVE;
    }

    const events = await this.prisma.event.findMany({
      where,
      include: {
        venue: true,
        category: true,
      },
      orderBy: { startDate: 'asc' },
    });

    return events.map(event => this.formatEventResponse(event));
  }

  async findById(id: string): Promise<EventResponseDto> {
    const event = await this.prisma.event.findUnique({
      where: { id },
      include: {
        venue: true,
        category: true,
      },
    });

    if (!event) {
      throw new NotFoundException('Event not found');
    }

    return this.formatEventResponse(event);
  }

  async findByOrganizer(organizerId: string): Promise<EventResponseDto[]> {
    const events = await this.prisma.event.findMany({
      where: { organizerId },
      include: {
        venue: true,
        category: true,
      },
      orderBy: { createdAt: 'desc' },
    });

    return events.map(event => this.formatEventResponse(event));
  }

  async update(id: string, updateEventDto: UpdateEventDto, organizerId: string): Promise<EventResponseDto> {
    // Find event first
    const existingEvent = await this.prisma.event.findUnique({
      where: { id },
    });

    if (!existingEvent) {
      throw new NotFoundException('Event not found');
    }

    // Check if user owns this event
    if (existingEvent.organizerId !== organizerId) {
      throw new ForbiddenException('You can only update your own events');
    }

    // Verify venue exists if updating
    if (updateEventDto.venueId) {
      const venue = await this.prisma.venue.findUnique({
        where: { id: updateEventDto.venueId },
      });

      if (!venue) {
        throw new NotFoundException('Venue not found');
      }
    }

    // Verify category exists if updating
    if (updateEventDto.categoryId) {
      const category = await this.prisma.category.findUnique({
        where: { id: updateEventDto.categoryId },
      });

      if (!category) {
        throw new NotFoundException('Category not found');
      }
    }

    const updateData: any = { ...updateEventDto };
    
    if (updateEventDto.startDate) {
      updateData.startDate = new Date(updateEventDto.startDate);
    }
    if (updateEventDto.endDate) {
      updateData.endDate = new Date(updateEventDto.endDate);
    }

    const event = await this.prisma.event.update({
      where: { id },
      data: updateData,
      include: {
        venue: true,
        category: true,
      },
    });

    return this.formatEventResponse(event);
  }

  async delete(id: string, organizerId: string): Promise<void> {
    // Find event first
    const existingEvent = await this.prisma.event.findUnique({
      where: { id },
    });

    if (!existingEvent) {
      throw new NotFoundException('Event not found');
    }

    // Check if user owns this event
    if (existingEvent.organizerId !== organizerId) {
      throw new ForbiddenException('You can only delete your own events');
    }

    // Soft delete by updating status to CANCELLED
    await this.prisma.event.update({
      where: { id },
      data: { status: EventStatus.CANCELLED },
    });
  }

  async updateStatus(id: string, status: EventStatus, organizerId: string): Promise<EventResponseDto> {
    // Find event first
    const existingEvent = await this.prisma.event.findUnique({
      where: { id },
    });

    if (!existingEvent) {
      throw new NotFoundException('Event not found');
    }

    // Check if user owns this event
    if (existingEvent.organizerId !== organizerId) {
      throw new ForbiddenException('You can only update your own events');
    }

    const event = await this.prisma.event.update({
      where: { id },
      data: { status },
      include: {
        venue: true,
        category: true,
      },
    });

    return this.formatEventResponse(event);
  }

  // Helper methods for dropdowns
  async getVenues() {
    return this.prisma.venue.findMany({
      orderBy: { name: 'asc' },
    });
  }

  async getCategories() {
    return this.prisma.category.findMany({
      orderBy: { name: 'asc' },
    });
  }

  private formatEventResponse(event: any): EventResponseDto {
    return {
      id: event.id,
      title: event.title,
      description: event.description,
      startDate: event.startDate,
      endDate: event.endDate,
      status: event.status,
      imageUrl: event.imageUrl,
      organizerId: event.organizerId,
      venue: event.venue ? {
        id: event.venue.id,
        name: event.venue.name,
        address: event.venue.address,
        city: event.venue.city,
        capacity: event.venue.capacity,
      } : undefined,
      category: event.category ? {
        id: event.category.id,
        name: event.category.name,
        color: event.category.color,
        icon: event.category.icon,
      } : undefined,
      createdAt: event.createdAt,
      updatedAt: event.updatedAt,
    };
  }
}