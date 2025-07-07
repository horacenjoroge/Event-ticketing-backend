// apps/api-gateway/src/tickets/tickets.controller.ts
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
import { IsString, IsOptional, IsNumber, IsBoolean, IsDateString, Min, Max } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';

// Ticket Type DTOs
export class CreateTicketTypeDto {
  @ApiProperty({ example: 'event-cuid-123' })
  @IsString()
  eventId: string;

  @ApiProperty({ example: 'VIP Ticket' })
  @IsString()
  name: string;

  @ApiProperty({ example: 'Premium VIP experience with backstage access' })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty({ example: 199.99 })
  @IsNumber({ maxDecimalPlaces: 2 })
  @Min(0)
  price: number;

  @ApiProperty({ example: 100 })
  @IsNumber()
  @Min(1)
  totalQuantity: number;

  @ApiProperty({ example: 5 })
  @IsNumber()
  @Min(1)
  @Max(50)
  @IsOptional()
  maxPerUser?: number = 10;

  @ApiProperty({ example: '2024-11-01T00:00:00Z' })
  @IsDateString()
  @IsOptional()
  saleStartDate?: string;

  @ApiProperty({ example: '2024-12-01T23:59:59Z' })
  @IsDateString()
  @IsOptional()
  saleEndDate?: string;

  @ApiProperty({ example: true })
  @IsBoolean()
  @IsOptional()
  isActive?: boolean = true;
}

export class UpdateTicketTypeDto {
  @ApiProperty({ example: 'Updated VIP Ticket' })
  @IsString()
  @IsOptional()
  name?: string;

  @ApiProperty({ example: 'Updated premium experience' })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty({ example: 249.99 })
  @IsNumber({ maxDecimalPlaces: 2 })
  @Min(0)
  @IsOptional()
  price?: number;

  @ApiProperty({ example: 150 })
  @IsNumber()
  @Min(1)
  @IsOptional()
  totalQuantity?: number;

  @ApiProperty({ example: 3 })
  @IsNumber()
  @Min(1)
  @Max(50)
  @IsOptional()
  maxPerUser?: number;

  @ApiProperty({ example: '2024-11-01T00:00:00Z' })
  @IsDateString()
  @IsOptional()
  saleStartDate?: string;

  @ApiProperty({ example: '2024-12-01T23:59:59Z' })
  @IsDateString()
  @IsOptional()
  saleEndDate?: string;

  @ApiProperty({ example: false })
  @IsBoolean()
  @IsOptional()
  isActive?: boolean;
}

// Purchase Ticket DTOs
export class PurchaseTicketDto {
  @ApiProperty({ example: 'ticket-type-cuid-123' })
  @IsString()
  ticketTypeId: string;

  @ApiProperty({ example: 2 })
  @IsNumber()
  @Min(1)
  quantity: number;

  @ApiProperty({ example: 'John Doe' })
  @IsString()
  attendeeName: string;

  @ApiProperty({ example: 'john.doe@example.com' })
  @IsString()
  attendeeEmail: string;

  @ApiProperty({ example: '+1234567890' })
  @IsString()
  @IsOptional()
  attendeePhone?: string;
}

// Reserve Ticket DTOs
export class ReserveTicketDto {
  @ApiProperty({ example: 'ticket-type-cuid-123' })
  @IsString()
  ticketTypeId: string;

  @ApiProperty({ example: 2 })
  @IsNumber()
  @Min(1)
  quantity: number;
}

// Inventory Operation DTOs
export class InventoryOperationDto {
  @ApiProperty({ example: 'ticket-type-cuid-123' })
  @IsString()
  ticketTypeId: string;

  @ApiProperty({ example: 2 })
  @IsNumber()
  @Min(1)
  quantity: number;
}

@ApiTags('Tickets Management')
@Controller('tickets')
export class TicketsController {
  constructor(
    @Inject('TICKET_SERVICE') private readonly ticketServiceClient: ClientProxy,
  ) {}

  // ================================
  // TICKET TYPES ENDPOINTS
  // ================================

  @Post('types')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Create a new ticket type (organizers only)' })
  @ApiResponse({ status: 201, description: 'Ticket type created successfully' })
  async createTicketType(
    @Body() createTicketTypeDto: CreateTicketTypeDto,
    @Headers('authorization') authorization?: string,
  ) {
    try {
      if (!authorization) {
        throw new HttpException('Authorization header required', HttpStatus.UNAUTHORIZED);
      }

      // Extract organizer ID from token
      const token = authorization.replace('Bearer ', '');
      let organizerId: string;
      
      try {
        const base64Payload = token.split('.')[1];
        const payload = JSON.parse(Buffer.from(base64Payload, 'base64').toString());
        organizerId = payload.sub;
      } catch (error) {
        throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED);
      }

      const result = await firstValueFrom(
        this.ticketServiceClient.send('ticket-type.create', {
          createTicketTypeDto,
          organizerId,
        }),
      );

      if (!result.success) {
        throw new HttpException(
          result.error || 'Failed to create ticket type',
          HttpStatus.BAD_REQUEST,
        );
      }

      return {
        message: result.message,
        ticketType: result.data,
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

  @Get('types')
  @ApiOperation({ summary: 'Get ticket types with optional filters' })
  @ApiResponse({ status: 200, description: 'Ticket types retrieved successfully' })
  async getTicketTypes(
    @Query('eventId') eventId?: string,
    @Query('isActive') isActive?: boolean,
    @Query('name') name?: string,
  ) {
    try {
      const searchDto = {
        eventId,
        isActive: isActive !== undefined ? isActive === true : undefined,
        name,
      };

      const result = await firstValueFrom(
        this.ticketServiceClient.send('ticket-type.find-all', searchDto),
      );

      if (!result.success) {
        throw new HttpException(
          result.error || 'Failed to retrieve ticket types',
          HttpStatus.BAD_REQUEST,
        );
      }

      return {
        message: result.message,
        ticketTypes: result.data,
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

  @Get('types/:id')
  @ApiOperation({ summary: 'Get ticket type by ID' })
  @ApiResponse({ status: 200, description: 'Ticket type retrieved successfully' })
  async getTicketTypeById(@Param('id') id: string) {
    try {
      const result = await firstValueFrom(
        this.ticketServiceClient.send('ticket-type.find-by-id', { id }),
      );

      if (!result.success) {
        throw new HttpException(
          result.error || 'Ticket type not found',
          HttpStatus.NOT_FOUND,
        );
      }

      return {
        message: result.message,
        ticketType: result.data,
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

  @Put('types/:id')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Update ticket type (organizers only)' })
  @ApiResponse({ status: 200, description: 'Ticket type updated successfully' })
  async updateTicketType(
    @Param('id') id: string,
    @Body() updateTicketTypeDto: UpdateTicketTypeDto,
    @Headers('authorization') authorization?: string,
  ) {
    try {
      if (!authorization) {
        throw new HttpException('Authorization header required', HttpStatus.UNAUTHORIZED);
      }

      // Extract organizer ID from token
      const token = authorization.replace('Bearer ', '');
      let organizerId: string;
      
      try {
        const base64Payload = token.split('.')[1];
        const payload = JSON.parse(Buffer.from(base64Payload, 'base64').toString());
        organizerId = payload.sub;
      } catch (error) {
        throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED);
      }

      const result = await firstValueFrom(
        this.ticketServiceClient.send('ticket-type.update', {
          id,
          updateTicketTypeDto,
          organizerId,
        }),
      );

      if (!result.success) {
        throw new HttpException(
          result.error || 'Failed to update ticket type',
          HttpStatus.BAD_REQUEST,
        );
      }

      return {
        message: result.message,
        ticketType: result.data,
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

  @Delete('types/:id')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Delete ticket type (organizers only)' })
  @ApiResponse({ status: 200, description: 'Ticket type deleted successfully' })
  async deleteTicketType(
    @Param('id') id: string,
    @Headers('authorization') authorization?: string,
  ) {
    try {
      if (!authorization) {
        throw new HttpException('Authorization header required', HttpStatus.UNAUTHORIZED);
      }

      // Extract organizer ID from token
      const token = authorization.replace('Bearer ', '');
      let organizerId: string;
      
      try {
        const base64Payload = token.split('.')[1];
        const payload = JSON.parse(Buffer.from(base64Payload, 'base64').toString());
        organizerId = payload.sub;
      } catch (error) {
        throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED);
      }

      const result = await firstValueFrom(
        this.ticketServiceClient.send('ticket-type.delete', {
          id,
          organizerId,
        }),
      );

      if (!result.success) {
        throw new HttpException(
          result.error || 'Failed to delete ticket type',
          HttpStatus.BAD_REQUEST,
        );
      }

      return {
        message: result.message,
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
  // TICKET PURCHASE ENDPOINTS
  // ================================

  @Post('purchase')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Purchase tickets' })
  @ApiResponse({ status: 201, description: 'Tickets purchased successfully' })
  async purchaseTickets(
    @Body() purchaseTicketDto: PurchaseTicketDto,
    @Headers('authorization') authorization?: string,
  ) {
    try {
      if (!authorization) {
        throw new HttpException('Authorization header required', HttpStatus.UNAUTHORIZED);
      }

      // Extract user ID from token
      const token = authorization.replace('Bearer ', '');
      let userId: string;
      
      try {
        const base64Payload = token.split('.')[1];
        const payload = JSON.parse(Buffer.from(base64Payload, 'base64').toString());
        userId = payload.sub;
      } catch (error) {
        throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED);
      }

      const result = await firstValueFrom(
        this.ticketServiceClient.send('ticket.purchase', {
          purchaseTicketDto,
          userId,
        }),
      );

      if (!result.success) {
        throw new HttpException(
          result.error || 'Failed to purchase tickets',
          HttpStatus.BAD_REQUEST,
        );
      }

      return {
        message: result.message,
        purchase: result.data,
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

  @Post('reserve')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Reserve tickets temporarily' })
  @ApiResponse({ status: 201, description: 'Tickets reserved successfully' })
  async reserveTickets(
    @Body() reserveTicketDto: ReserveTicketDto,
    @Headers('authorization') authorization?: string,
  ) {
    try {
      if (!authorization) {
        throw new HttpException('Authorization header required', HttpStatus.UNAUTHORIZED);
      }

      // Extract user ID from token
      const token = authorization.replace('Bearer ', '');
      let userId: string;
      
      try {
        const base64Payload = token.split('.')[1];
        const payload = JSON.parse(Buffer.from(base64Payload, 'base64').toString());
        userId = payload.sub;
      } catch (error) {
        throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED);
      }

      const result = await firstValueFrom(
        this.ticketServiceClient.send('ticket.reserve', {
          reserveTicketDto,
          userId,
        }),
      );

      if (!result.success) {
        throw new HttpException(
          result.error || 'Failed to reserve tickets',
          HttpStatus.BAD_REQUEST,
        );
      }

      return {
        message: result.message,
        reservation: result.data,
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
  // USER TICKETS ENDPOINTS
  // ================================

  @Get('my-tickets')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get current user tickets' })
  @ApiResponse({ status: 200, description: 'User tickets retrieved successfully' })
  async getMyTickets(
    @Headers('authorization') authorization?: string,
    @Query('eventId') eventId?: string,
    @Query('status') status?: string,
  ) {
    try {
      if (!authorization) {
        throw new HttpException('Authorization header required', HttpStatus.UNAUTHORIZED);
      }

      // Extract user ID from token
      const token = authorization.replace('Bearer ', '');
      let userId: string;
      
      try {
        const base64Payload = token.split('.')[1];
        const payload = JSON.parse(Buffer.from(base64Payload, 'base64').toString());
        userId = payload.sub;
      } catch (error) {
        throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED);
      }

      const result = await firstValueFrom(
        this.ticketServiceClient.send('ticket.find-by-user', {
          userId,
          eventId,
          status,
        }),
      );

      if (!result.success) {
        throw new HttpException(
          result.error || 'Failed to retrieve user tickets',
          HttpStatus.BAD_REQUEST,
        );
      }

      return {
        message: result.message,
        tickets: result.data,
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

  @Get('my-tickets/:ticketId')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get specific user ticket' })
  @ApiResponse({ status: 200, description: 'User ticket retrieved successfully' })
  async getMyTicket(
    @Param('ticketId') ticketId: string,
    @Headers('authorization') authorization?: string,
  ) {
    try {
      if (!authorization) {
        throw new HttpException('Authorization header required', HttpStatus.UNAUTHORIZED);
      }

      // Extract user ID from token
      const token = authorization.replace('Bearer ', '');
      let userId: string;
      
      try {
        const base64Payload = token.split('.')[1];
        const payload = JSON.parse(Buffer.from(base64Payload, 'base64').toString());
        userId = payload.sub;
      } catch (error) {
        throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED);
      }

      const result = await firstValueFrom(
        this.ticketServiceClient.send('ticket.find-by-id', {
          ticketId,
          userId,
        }),
      );

      if (!result.success) {
        throw new HttpException(
          result.error || 'Ticket not found',
          HttpStatus.NOT_FOUND,
        );
      }

      return {
        message: result.message,
        ticket: result.data,
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
  // INVENTORY ENDPOINTS
  // ================================

  @Get('inventory/availability/:ticketTypeId')
  @ApiOperation({ summary: 'Check ticket availability' })
  @ApiResponse({ status: 200, description: 'Availability checked successfully' })
  async checkAvailability(
    @Param('ticketTypeId') ticketTypeId: string,
    @Query('quantity') quantity?: number,
  ) {
    try {
      const result = await firstValueFrom(
        this.ticketServiceClient.send('inventory.check-availability', {
          ticketTypeId,
          quantity: quantity || 1,
        }),
      );

      if (!result.success) {
        throw new HttpException(
          result.error || 'Failed to check availability',
          HttpStatus.BAD_REQUEST,
        );
      }

      return {
        message: result.message,
        availability: result.data,
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

  @Get('inventory/event/:eventId')
  @ApiOperation({ summary: 'Get inventory for all ticket types of an event' })
  @ApiResponse({ status: 200, description: 'Event inventory retrieved successfully' })
  async getEventInventory(@Param('eventId') eventId: string) {
    try {
      const result = await firstValueFrom(
        this.ticketServiceClient.send('inventory.get-by-event', {
          eventId,
        }),
      );

      if (!result.success) {
        throw new HttpException(
          result.error || 'Failed to retrieve event inventory',
          HttpStatus.BAD_REQUEST,
        );
      }

      return {
        message: result.message,
        inventory: result.data,
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

  @Post('inventory/reserve')
  @ApiOperation({ summary: 'Reserve tickets via inventory' })
  @ApiResponse({ status: 201, description: 'Tickets reserved successfully' })
  async reserveTicketsViaInventory(
    @Body() reserveData: InventoryOperationDto,
  ) {
    try {
      const result = await firstValueFrom(
        this.ticketServiceClient.send('inventory.reserve-tickets', reserveData),
      );

      if (!result.success) {
        throw new HttpException(
          result.error || 'Failed to reserve tickets',
          HttpStatus.BAD_REQUEST,
        );
      }

      return {
        message: result.message,
        reservation: result.data,
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

  @Post('inventory/release')
  @ApiOperation({ summary: 'Release reserved tickets' })
  @ApiResponse({ status: 200, description: 'Reservation released successfully' })
  async releaseReservation(
    @Body() releaseData: InventoryOperationDto,
  ) {
    try {
      const result = await firstValueFrom(
        this.ticketServiceClient.send('inventory.release-reservation', releaseData),
      );

      if (!result.success) {
        throw new HttpException(
          result.error || 'Failed to release reservation',
          HttpStatus.BAD_REQUEST,
        );
      }

      return {
        message: result.message,
        result: result.data,
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

  @Post('inventory/confirm')
  @ApiOperation({ summary: 'Confirm ticket purchase' })
  @ApiResponse({ status: 200, description: 'Purchase confirmed successfully' })
  async confirmPurchase(
    @Body() confirmData: InventoryOperationDto,
  ) {
    try {
      const result = await firstValueFrom(
        this.ticketServiceClient.send('inventory.confirm-purchase', confirmData),
      );

      if (!result.success) {
        throw new HttpException(
          result.error || 'Failed to confirm purchase',
          HttpStatus.BAD_REQUEST,
        );
      }

      return {
        message: result.message,
        result: result.data,
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
  // ADMIN/ORGANIZER ENDPOINTS
  // ================================

  @Get('admin/low-stock-alerts')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get low stock alerts (admin/organizers only)' })
  @ApiResponse({ status: 200, description: 'Low stock alerts retrieved successfully' })
  async getLowStockAlerts(
    @Headers('authorization') authorization?: string,
    @Query('threshold') threshold?: number,
  ) {
    try {
      if (!authorization) {
        throw new HttpException('Authorization header required', HttpStatus.UNAUTHORIZED);
      }

      const result = await firstValueFrom(
        this.ticketServiceClient.send('inventory.get-low-stock-alerts', {
          threshold: threshold || 10,
        }),
      );

      if (!result.success) {
        throw new HttpException(
          result.error || 'Failed to retrieve low stock alerts',
          HttpStatus.BAD_REQUEST,
        );
      }

      return {
        message: result.message,
        alerts: result.data,
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

  @Get('admin/stats')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get ticket statistics (admin/organizers only)' })
  @ApiResponse({ status: 200, description: 'Ticket statistics retrieved successfully' })
  async getTicketStats(
    @Headers('authorization') authorization?: string,
    @Query('eventId') eventId?: string,
  ) {
    try {
      if (!authorization) {
        throw new HttpException('Authorization header required', HttpStatus.UNAUTHORIZED);
      }

      const result = await firstValueFrom(
        this.ticketServiceClient.send('inventory.get-stats', {
          eventId,
        }),
      );

      if (!result.success) {
        throw new HttpException(
          result.error || 'Failed to retrieve ticket statistics',
          HttpStatus.BAD_REQUEST,
        );
      }

      return {
        message: result.message,
        stats: result.data,
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