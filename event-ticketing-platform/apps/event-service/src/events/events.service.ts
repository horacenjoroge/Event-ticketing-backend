// apps/event-service/src/events/events.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { CreateEventDto, UpdateEventDto, EventSearchDto, EventResponseDto } from './dto/event.dto';

@Injectable()
export class EventsService {
  constructor(private prisma: PrismaService) {}

  async create(createEventDto: CreateEventDto): Promise<EventResponseDto> {
    const event = await this.prisma.event.create({
      data: {
        ...createEventDto,
        startDate: new Date(createEventDto.startDate),
        endDate: new Date(createEventDto.endDate),
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
    if (searchDto?.status) {
      where.status = searchDto.status;
    }
    if (searchDto?.startDate) {
      where.startDate = { gte: new Date(searchDto.startDate) };
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

  async update(id: string, updateEventDto: UpdateEventDto): Promise<EventResponseDto> {
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

  async delete(id: string): Promise<void> {
    await this.prisma.event.delete({
      where: { id },
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