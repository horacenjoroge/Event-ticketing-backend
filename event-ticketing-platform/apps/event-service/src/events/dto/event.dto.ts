// apps/event-service/src/events/dto/event.dto.ts
import { IsString, IsDateString, IsOptional, IsEnum, IsUUID } from 'class-validator';
import { EventStatus } from '../../prisma/generated/prisma';

export class CreateEventDto {
  @IsString()
  title: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsDateString()
  startDate: string;

  @IsDateString()
  endDate: string;

  @IsString()
  @IsOptional()
  imageUrl?: string;

  @IsUUID()
  organizerId: string; // User ID from User Service

  @IsUUID()
  venueId: string;

  @IsUUID()
  categoryId: string;
}

export class UpdateEventDto {
  @IsString()
  @IsOptional()
  title?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsDateString()
  @IsOptional()
  startDate?: string;

  @IsDateString()
  @IsOptional()
  endDate?: string;

  @IsEnum(EventStatus)
  @IsOptional()
  status?: EventStatus;

  @IsString()
  @IsOptional()
  imageUrl?: string;

  @IsUUID()
  @IsOptional()
  venueId?: string;

  @IsUUID()
  @IsOptional()
  categoryId?: string;
}

export class EventSearchDto {
  @IsString()
  @IsOptional()
  title?: string;

  @IsUUID()
  @IsOptional()
  categoryId?: string;

  @IsString()
  @IsOptional()
  city?: string;

  @IsDateString()
  @IsOptional()
  startDate?: string;

  @IsDateString()
  @IsOptional()
  endDate?: string;

  @IsEnum(EventStatus)
  @IsOptional()
  status?: EventStatus;
}

export class EventResponseDto {
  id: string;
  title: string;
  description?: string;
  startDate: Date;
  endDate: Date;
  status: EventStatus;
  imageUrl?: string;
  organizerId: string;
  venue?: {
    id: string;
    name: string;
    address: string;
    city: string;
    capacity: number;
  };
  category?: {
    id: string;
    name: string;
    color?: string;
    icon?: string;
  };
  createdAt: Date;
  updatedAt: Date;
}