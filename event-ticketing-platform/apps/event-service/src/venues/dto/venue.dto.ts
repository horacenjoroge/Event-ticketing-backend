// apps/event-service/src/venues/dto/venue.dto.ts
import { IsString, IsNumber, IsOptional, Min } from 'class-validator';

export class CreateVenueDto {
  @IsString()
  name: string;

  @IsString()
  address: string;

  @IsString()
  city: string;

  @IsString()
  @IsOptional()
  state?: string;

  @IsString()
  @IsOptional()
  country?: string;

  @IsString()
  @IsOptional()
  zipCode?: string;

  @IsNumber()
  @Min(1)
  capacity: number;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsOptional()
  imageUrl?: string;

  @IsString()
  @IsOptional()
  seatingMap?: string; // JSON string or URL to seating chart
}

export class UpdateVenueDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  address?: string;

  @IsString()
  @IsOptional()
  city?: string;

  @IsString()
  @IsOptional()
  state?: string;

  @IsString()
  @IsOptional()
  country?: string;

  @IsString()
  @IsOptional()
  zipCode?: string;

  @IsNumber()
  @Min(1)
  @IsOptional()
  capacity?: number;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsOptional()
  imageUrl?: string;

  @IsString()
  @IsOptional()
  seatingMap?: string;
}

export class VenueSearchDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  city?: string;

  @IsString()
  @IsOptional()
  state?: string;

  @IsNumber()
  @IsOptional()
  minCapacity?: number;

  @IsNumber()
  @IsOptional()
  maxCapacity?: number;
}

export class VenueResponseDto {
  id: string;
  name: string;
  address: string;
  city: string;
  state?: string;
  country?: string;
  zipCode?: string;
  capacity: number;
  description?: string;
  imageUrl?: string;
  seatingMap?: string;
  createdAt: Date;
  updatedAt: Date;
}