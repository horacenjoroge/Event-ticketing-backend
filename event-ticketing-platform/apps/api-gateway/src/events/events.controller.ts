// apps/api-gateway/src/events/events.controller.ts
import {
    Controller,
    Get,
    Post,
    Put,
    Delete,
    Body,
    Param,
    Query,
    HttpException,
    HttpStatus,
    Inject,
    Headers,
  } from '@nestjs/common';
  import { ClientProxy } from '@nestjs/microservices';
  import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
  import { firstValueFrom } from 'rxjs';
  import { IsString, IsDateString, IsOptional, IsUUID, IsNumber, Min } from 'class-validator';
  import { ApiProperty } from '@nestjs/swagger';
  
  // Event DTOs
  export class CreateEventDto {
    @ApiProperty({ example: 'Rock Concert 2024' })
    @IsString()
    title: string;
  
    @ApiProperty({ example: 'Amazing rock concert experience' })
    @IsString()
    @IsOptional()
    description?: string;
  
    @ApiProperty({ example: '2024-12-01T20:00:00Z' })
    @IsDateString()
    startDate: string;
  
    @ApiProperty({ example: '2024-12-01T23:00:00Z' })
    @IsDateString()
    endDate: string;
  
    @ApiProperty({ example: 'https://example.com/image.jpg' })
    @IsString()
    @IsOptional()
    imageUrl?: string;
  
    @ApiProperty({ example: 'venue-cuid' })
    @IsString()
    venueId: string;
  
    @ApiProperty({ example: 'category-cuid' })
    @IsString()
    categoryId: string;
  }
  
  export class UpdateEventDto {
    @ApiProperty({ example: 'Updated Concert Title' })
    @IsString()
    @IsOptional()
    title?: string;
  
    @ApiProperty({ example: 'Updated description' })
    @IsString()
    @IsOptional()
    description?: string;
  
    @ApiProperty({ example: '2024-12-01T20:00:00Z' })
    @IsDateString()
    @IsOptional()
    startDate?: string;
  
    @ApiProperty({ example: '2024-12-01T23:00:00Z' })
    @IsDateString()
    @IsOptional()
    endDate?: string;
  
    @ApiProperty({ example: 'https://example.com/new-image.jpg' })
    @IsString()
    @IsOptional()
    imageUrl?: string;
  
    @ApiProperty({ example: 'venue-cuid' })
    @IsString()
    @IsOptional()
    venueId?: string;
  
    @ApiProperty({ example: 'category-cuid' })
    @IsString()
    @IsOptional()
    categoryId?: string;
  }
  
  // Venue DTOs
  export class CreateVenueDto {
    @ApiProperty({ example: 'Madison Square Garden' })
    @IsString()
    name: string;
  
    @ApiProperty({ example: '4 Pennsylvania Plaza' })
    @IsString()
    address: string;
  
    @ApiProperty({ example: 'New York' })
    @IsString()
    city: string;
  
    @ApiProperty({ example: 20000 })
    @IsNumber()
    @Min(1)
    capacity: number;
  
    @ApiProperty({ example: 'Iconic venue in the heart of NYC' })
    @IsString()
    @IsOptional()
    description?: string;
  
    @ApiProperty({ example: 'https://example.com/venue.jpg' })
    @IsString()
    @IsOptional()
    imageUrl?: string;
  }
  
  // Category DTOs
  export class CreateCategoryDto {
    @ApiProperty({ example: 'Music' })
    @IsString()
    name: string;
  
    @ApiProperty({ example: 'Live music events and concerts' })
    @IsString()
    @IsOptional()
    description?: string;
  
    @ApiProperty({ example: '#FF5733' })
    @IsString()
    @IsOptional()
    color?: string;
  
    @ApiProperty({ example: 'music-note' })
    @IsString()
    @IsOptional()
    icon?: string;
  }
  
  @ApiTags('Events Management')
  @Controller('events')
  export class EventsController {
    constructor(
      @Inject('EVENT_SERVICE') private readonly eventServiceClient: ClientProxy,
    ) {}
  
    // ================================
    // EVENTS ENDPOINTS
    // ================================
  
    @Post()
    @ApiBearerAuth()
    @ApiOperation({ summary: 'Create a new event (organizers only)' })
    async createEvent(
      @Body() createEventDto: CreateEventDto,
      @Headers('authorization') authorization?: string,
    ) {
      try {
        if (!authorization) {
          throw new HttpException('Authorization header required', HttpStatus.UNAUTHORIZED);
        }
  
        // Extract token and decode it to get user ID
        const token = authorization.replace('Bearer ', '');
        let organizerId: string;
        
        try {
          // Simple JWT decode (in production, you'd validate the signature)
          const base64Payload = token.split('.')[1];
          const payload = JSON.parse(Buffer.from(base64Payload, 'base64').toString());
          organizerId = payload.sub; // 'sub' contains the user ID
        } catch (error) {
          throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED);
        }
  
        const result = await firstValueFrom(
          this.eventServiceClient.send('event.create', {
            createEventDto: {
              ...createEventDto,
              organizerId, // Add the organizerId from the token
            },
            organizerId, // Also send separately for validation
          }),
        );
  
        if (!result.success) {
          throw new HttpException(
            result.error || 'Failed to create event',
            HttpStatus.BAD_REQUEST,
          );
        }
  
        return {
          message: result.message,
          event: result.data,
        };
      } catch (error) {
        if (error instanceof HttpException) {
          throw error;
        }
        throw new HttpException(
          'Internal server error',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
    }
  
    @Get()
    @ApiOperation({ summary: 'Get all events (public)' })
    async getEvents(
      @Query('title') title?: string,
      @Query('categoryId') categoryId?: string,
      @Query('city') city?: string,
      @Query('startDate') startDate?: string,
      @Query('endDate') endDate?: string,
    ) {
      try {
        const searchDto = {
          title,
          categoryId,
          city,
          startDate,
          endDate,
        };
  
        const result = await firstValueFrom(
          this.eventServiceClient.send('event.find-all', searchDto),
        );
  
        if (!result.success) {
          throw new HttpException(
            result.error || 'Failed to retrieve events',
            HttpStatus.BAD_REQUEST,
          );
        }
  
        return {
          message: result.message,
          events: result.data,
        };
      } catch (error) {
        if (error instanceof HttpException) {
          throw error;
        }
        throw new HttpException(
          'Internal server error',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
    }
  
    // ================================
    // VENUES ENDPOINTS (Must come before :id routes)
    // ================================
  
    @Post('venues')
    @ApiBearerAuth()
    @ApiOperation({ summary: 'Create a new venue' })
    async createVenue(
      @Body() createVenueDto: CreateVenueDto,
      @Headers('authorization') authorization?: string,
    ) {
      try {
        if (!authorization) {
          throw new HttpException('Authorization header required', HttpStatus.UNAUTHORIZED);
        }
  
        const result = await firstValueFrom(
          this.eventServiceClient.send('venue.create', createVenueDto),
        );
  
        if (!result.success) {
          throw new HttpException(
            result.error || 'Failed to create venue',
            HttpStatus.BAD_REQUEST,
          );
        }
  
        return {
          message: result.message,
          venue: result.data,
        };
      } catch (error) {
        if (error instanceof HttpException) {
          throw error;
        }
        throw new HttpException(
          'Internal server error',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
    }
  
    @Get('venues')
    @ApiOperation({ summary: 'Get all venues' })
    async getVenues(
      @Query('name') name?: string,
      @Query('city') city?: string,
    ) {
      try {
        const searchDto = { name, city };
  
        const result = await firstValueFrom(
          this.eventServiceClient.send('venue.find-all', searchDto),
        );
  
        if (!result.success) {
          throw new HttpException(
            result.error || 'Failed to retrieve venues',
            HttpStatus.BAD_REQUEST,
          );
        }
  
        return {
          message: result.message,
          venues: result.data,
        };
      } catch (error) {
        if (error instanceof HttpException) {
          throw error;
        }
        throw new HttpException(
          'Internal server error',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
    }
  
    @Get('venues/:id')
    @ApiOperation({ summary: 'Get venue by ID' })
    async getVenueById(@Param('id') id: string) {
      try {
        const result = await firstValueFrom(
          this.eventServiceClient.send('venue.find-by-id', { id }),
        );
  
        if (!result.success) {
          throw new HttpException(
            result.error || 'Venue not found',
            HttpStatus.NOT_FOUND,
          );
        }
  
        return {
          message: result.message,
          venue: result.data,
        };
      } catch (error) {
        if (error instanceof HttpException) {
          throw error;
        }
        throw new HttpException(
          'Internal server error',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
    }
  
    // ================================
    // CATEGORIES ENDPOINTS (Must come before :id routes)
    // ================================
  
    @Post('categories')
    @ApiBearerAuth()
    @ApiOperation({ summary: 'Create a new category' })
    async createCategory(
      @Body() createCategoryDto: CreateCategoryDto,
      @Headers('authorization') authorization?: string,
    ) {
      try {
        if (!authorization) {
          throw new HttpException('Authorization header required', HttpStatus.UNAUTHORIZED);
        }
  
        const result = await firstValueFrom(
          this.eventServiceClient.send('category.create', createCategoryDto),
        );
  
        if (!result.success) {
          throw new HttpException(
            result.error || 'Failed to create category',
            HttpStatus.BAD_REQUEST,
          );
        }
  
        return {
          message: result.message,
          category: result.data,
        };
      } catch (error) {
        if (error instanceof HttpException) {
          throw error;
        }
        throw new HttpException(
          'Internal server error',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
    }
  
    @Get('categories')
    @ApiOperation({ summary: 'Get all categories' })
    async getCategories(@Query('name') name?: string) {
      try {
        const searchDto = { name };
  
        const result = await firstValueFrom(
          this.eventServiceClient.send('category.find-all', searchDto),
        );
  
        if (!result.success) {
          throw new HttpException(
            result.error || 'Failed to retrieve categories',
            HttpStatus.BAD_REQUEST,
          );
        }
  
        return {
          message: result.message,
          categories: result.data,
        };
      } catch (error) {
        if (error instanceof HttpException) {
          throw error;
        }
        throw new HttpException(
          'Internal server error',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
    }
  
    @Get('categories/:id')
    @ApiOperation({ summary: 'Get category by ID' })
    async getCategoryById(@Param('id') id: string) {
      try {
        const result = await firstValueFrom(
          this.eventServiceClient.send('category.find-by-id', { id }),
        );
  
        if (!result.success) {
          throw new HttpException(
            result.error || 'Category not found',
            HttpStatus.NOT_FOUND,
          );
        }
  
        return {
          message: result.message,
          category: result.data,
        };
      } catch (error) {
        if (error instanceof HttpException) {
          throw error;
        }
        throw new HttpException(
          'Internal server error',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
    }
  
    // ================================
    // EVENTS ENDPOINTS (Parameterized routes LAST)
    // ================================
  
    @Get(':id')
    @ApiOperation({ summary: 'Get event by ID' })
    async getEventById(@Param('id') id: string) {
      try {
        const result = await firstValueFrom(
          this.eventServiceClient.send('event.find-by-id', { id }),
        );
  
        if (!result.success) {
          throw new HttpException(
            result.error || 'Event not found',
            HttpStatus.NOT_FOUND,
          );
        }
  
        return {
          message: result.message,
          event: result.data,
        };
      } catch (error) {
        if (error instanceof HttpException) {
          throw error;
        }
        throw new HttpException(
          'Internal server error',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
    }
  }