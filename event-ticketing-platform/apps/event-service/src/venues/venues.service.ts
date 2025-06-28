// apps/event-service/src/venues/venues.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import {
  CreateVenueDto,
  UpdateVenueDto,
  VenueSearchDto,
  VenueResponseDto,
} from './dto/venue.dto';

@Injectable()
export class VenuesService {
  constructor(private prisma: PrismaService) {}

  async create(createVenueDto: CreateVenueDto): Promise<VenueResponseDto> {
    const venue = await this.prisma.venue.create({
      data: createVenueDto,
    });

    return this.formatVenueResponse(venue);
  }

  async findAll(searchDto?: VenueSearchDto) {
    const where: any = {};

    if (searchDto?.name) {
      where.name = { contains: searchDto.name, mode: 'insensitive' };
    }
    if (searchDto?.city) {
      where.city = { contains: searchDto.city, mode: 'insensitive' };
    }
    if (searchDto?.state) {
      where.state = { contains: searchDto.state, mode: 'insensitive' };
    }
    if (searchDto?.minCapacity) {
      where.capacity = { gte: searchDto.minCapacity };
    }
    if (searchDto?.maxCapacity) {
      where.capacity = {
        ...where.capacity,
        lte: searchDto.maxCapacity,
      };
    }

    const venues = await this.prisma.venue.findMany({
      where,
      orderBy: { name: 'asc' },
    });

    return venues.map((venue) => this.formatVenueResponse(venue));
  }

  async findById(id: string): Promise<VenueResponseDto> {
    const venue = await this.prisma.venue.findUnique({
      where: { id },
    });

    if (!venue) {
      throw new NotFoundException('Venue not found');
    }

    return this.formatVenueResponse(venue);
  }

  async update(
    id: string,
    updateVenueDto: UpdateVenueDto,
  ): Promise<VenueResponseDto> {
    const venue = await this.prisma.venue.update({
      where: { id },
      data: updateVenueDto,
    });

    return this.formatVenueResponse(venue);
  }

  async delete(id: string): Promise<void> {
    await this.prisma.venue.delete({
      where: { id },
    });
  }

  private formatVenueResponse(venue: any): VenueResponseDto {
    return {
      id: venue.id,
      name: venue.name,
      address: venue.address,
      city: venue.city,
      state: venue.state,
      country: venue.country,
      zipCode: venue.zipCode,
      capacity: venue.capacity,
      description: venue.description,
      imageUrl: venue.imageUrl,
      seatingMap: venue.seatingMap,
      createdAt: venue.createdAt,
      updatedAt: venue.updatedAt,
    };
  }
}
