// apps/event-service/src/venues/venues.controller.ts
import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { VenuesService } from './venues.service';
import {
  CreateVenueDto,
  UpdateVenueDto,
  VenueSearchDto,
} from './dto/venue.dto';

@Controller()
export class VenuesController {
  constructor(private readonly venuesService: VenuesService) {}

  @MessagePattern('venue.create')
  async createVenue(@Payload() createVenueDto: CreateVenueDto) {
    try {
      const venue = await this.venuesService.create(createVenueDto);
      
      return {
        success: true,
        data: venue,
        message: 'Venue created successfully',
      };
    } catch (error) {
      return {
        success: false,
        error: error.message,
        message: 'Failed to create venue',
      };
    }
  }

  @MessagePattern('venue.find-all')
  async findAllVenues(@Payload() searchDto: VenueSearchDto = {}) {
    try {
      const venues = await this.venuesService.findAll(searchDto);
      
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

  @MessagePattern('venue.find-by-id')
  async findVenueById(@Payload() data: { id: string }) {
    try {
      const venue = await this.venuesService.findById(data.id);
      
      return {
        success: true,
        data: venue,
        message: 'Venue retrieved successfully',
      };
    } catch (error) {
      return {
        success: false,
        error: error.message,
        message: 'Failed to retrieve venue',
      };
    }
  }

  @MessagePattern('venue.update')
  async updateVenue(@Payload() data: { id: string; updateVenueDto: UpdateVenueDto }) {
    try {
      const venue = await this.venuesService.update(data.id, data.updateVenueDto);
      
      return {
        success: true,
        data: venue,
        message: 'Venue updated successfully',
      };
    } catch (error) {
      return {
        success: false,
        error: error.message,
        message: 'Failed to update venue',
      };
    }
  }

  @MessagePattern('venue.delete')
  async deleteVenue(@Payload() data: { id: string }) {
    try {
      await this.venuesService.delete(data.id);
      
      return {
        success: true,
        data: null,
        message: 'Venue deleted successfully',
      };
    } catch (error) {
      return {
        success: false,
        error: error.message,
        message: 'Failed to delete venue',
      };
    }
  }
}