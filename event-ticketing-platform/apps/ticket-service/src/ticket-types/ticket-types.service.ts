// apps/ticket-service/src/ticket-types/ticket-types.service.ts
import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { 
  CreateTicketTypeDto, 
  UpdateTicketTypeDto, 
  TicketTypeSearchDto, 
  TicketTypeResponseDto 
} from './dto/ticket-type.dto';

@Injectable()
export class TicketTypesService {
  constructor(private prisma: PrismaService) {}

  async create(createTicketTypeDto: CreateTicketTypeDto, organizerId: string): Promise<TicketTypeResponseDto> {
    // Validate sale dates
    if (createTicketTypeDto.saleStartDate && createTicketTypeDto.saleEndDate) {
      const startDate = new Date(createTicketTypeDto.saleStartDate);
      const endDate = new Date(createTicketTypeDto.saleEndDate);
      
      if (startDate >= endDate) {
        throw new BadRequestException('Sale start date must be before sale end date');
      }
    }

    // Create ticket type and its inventory in a transaction
    const result = await this.prisma.$transaction(async (tx) => {
      const ticketType = await tx.ticketType.create({
        data: {
          ...createTicketTypeDto,
          availableQuantity: createTicketTypeDto.totalQuantity,
          saleStartDate: createTicketTypeDto.saleStartDate 
            ? new Date(createTicketTypeDto.saleStartDate) 
            : undefined,
          saleEndDate: createTicketTypeDto.saleEndDate 
            ? new Date(createTicketTypeDto.saleEndDate) 
            : undefined,
        },
      });

      // Create corresponding inventory record
      await tx.inventory.create({
        data: {
          ticketTypeId: ticketType.id,
          totalCount: createTicketTypeDto.totalQuantity,
          availableCount: createTicketTypeDto.totalQuantity,
        },
      });

      return ticketType;
    });

    return this.formatTicketTypeResponse(result);
  }

  async findAll(searchDto: TicketTypeSearchDto = {}): Promise<TicketTypeResponseDto[]> {
    const where: any = {};

    if (searchDto.eventId) {
      where.eventId = searchDto.eventId;
    }

    if (searchDto.isActive !== undefined) {
      where.isActive = searchDto.isActive;
    }

    if (searchDto.name) {
      where.name = {
        contains: searchDto.name,
        mode: 'insensitive',
      };
    }

    // Only show active tickets by default for public queries
    if (searchDto.isActive === undefined && !searchDto.eventId) {
      where.isActive = true;
    }

    const ticketTypes = await this.prisma.ticketType.findMany({
      where,
      orderBy: { createdAt: 'desc' },
    });

    return ticketTypes.map(ticketType => this.formatTicketTypeResponse(ticketType));
  }

  async findByEventId(eventId: string): Promise<TicketTypeResponseDto[]> {
    const ticketTypes = await this.prisma.ticketType.findMany({
      where: { 
        eventId,
        isActive: true,
      },
      orderBy: { price: 'asc' },
    });

    return ticketTypes.map(ticketType => this.formatTicketTypeResponse(ticketType));
  }

  async findById(id: string): Promise<TicketTypeResponseDto> {
    const ticketType = await this.prisma.ticketType.findUnique({
      where: { id },
    });

    if (!ticketType) {
      throw new NotFoundException('Ticket type not found');
    }

    return this.formatTicketTypeResponse(ticketType);
  }

  async update(id: string, updateTicketTypeDto: UpdateTicketTypeDto, organizerId: string): Promise<TicketTypeResponseDto> {
    const existingTicketType = await this.prisma.ticketType.findUnique({
      where: { id },
    });

    if (!existingTicketType) {
      throw new NotFoundException('Ticket type not found');
    }

    // Validate sale dates if provided
    if (updateTicketTypeDto.saleStartDate && updateTicketTypeDto.saleEndDate) {
      const startDate = new Date(updateTicketTypeDto.saleStartDate);
      const endDate = new Date(updateTicketTypeDto.saleEndDate);
      
      if (startDate >= endDate) {
        throw new BadRequestException('Sale start date must be before sale end date');
      }
    }

    const updateData: any = { ...updateTicketTypeDto };

    if (updateTicketTypeDto.saleStartDate) {
      updateData.saleStartDate = new Date(updateTicketTypeDto.saleStartDate);
    }

    if (updateTicketTypeDto.saleEndDate) {
      updateData.saleEndDate = new Date(updateTicketTypeDto.saleEndDate);
    }

    // If updating total quantity, also update available quantity
    if (updateTicketTypeDto.totalQuantity !== undefined) {
      const quantityDiff = updateTicketTypeDto.totalQuantity - existingTicketType.totalQuantity;
      updateData.availableQuantity = existingTicketType.availableQuantity + quantityDiff;
      
      // Ensure available quantity doesn't go negative
      if (updateData.availableQuantity < 0) {
        throw new BadRequestException('Cannot reduce total quantity below sold/reserved tickets');
      }
    }

    const updatedTicketType = await this.prisma.ticketType.update({
      where: { id },
      data: updateData,
    });

    // Update inventory if quantity changed
    if (updateTicketTypeDto.totalQuantity !== undefined) {
      await this.prisma.inventory.update({
        where: { ticketTypeId: id },
        data: {
          totalCount: updateTicketTypeDto.totalQuantity,
          availableCount: updatedTicketType.availableQuantity,
        },
      });
    }

    return this.formatTicketTypeResponse(updatedTicketType);
  }

  async delete(id: string, organizerId: string): Promise<void> {
    const existingTicketType = await this.prisma.ticketType.findUnique({
      where: { id },
    });

    if (!existingTicketType) {
      throw new NotFoundException('Ticket type not found');
    }

    // Check if any tickets have been sold
    if (existingTicketType.soldQuantity > 0) {
      throw new BadRequestException('Cannot delete ticket type with sold tickets');
    }

    // Cancel any active reservations first
    await this.prisma.reservation.updateMany({
      where: { 
        ticketTypeId: id,
        status: 'ACTIVE',
      },
      data: { status: 'CANCELLED' },
    });

    // Delete ticket type (cascade will handle inventory)
    await this.prisma.ticketType.delete({
      where: { id },
    });
  }

  async checkAvailability(ticketTypeId: string, quantity: number): Promise<boolean> {
    const ticketType = await this.prisma.ticketType.findUnique({
      where: { id: ticketTypeId },
    });

    if (!ticketType || !ticketType.isActive) {
      return false;
    }

    // Check if sales period is active
    const now = new Date();
    if (ticketType.saleStartDate && now < ticketType.saleStartDate) {
      return false;
    }

    if (ticketType.saleEndDate && now > ticketType.saleEndDate) {
      return false;
    }

    return ticketType.availableQuantity >= quantity;
  }

  private formatTicketTypeResponse(ticketType: any): TicketTypeResponseDto {
    return {
      id: ticketType.id,
      eventId: ticketType.eventId,
      name: ticketType.name,
      description: ticketType.description,
      price: Number(ticketType.price),
      totalQuantity: ticketType.totalQuantity,
      availableQuantity: ticketType.availableQuantity,
      soldQuantity: ticketType.soldQuantity,
      reservedQuantity: ticketType.reservedQuantity,
      maxPerUser: ticketType.maxPerUser,
      saleStartDate: ticketType.saleStartDate,
      saleEndDate: ticketType.saleEndDate,
      isActive: ticketType.isActive,
      createdAt: ticketType.createdAt,
      updatedAt: ticketType.updatedAt,
    };
  }
}