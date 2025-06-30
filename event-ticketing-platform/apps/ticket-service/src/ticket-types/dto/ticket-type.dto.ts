// apps/ticket-service/src/ticket-types/dto/ticket-type.dto.ts
import { IsString, IsOptional, IsNumber, IsBoolean, IsDateString, Min, Max } from 'class-validator';
import { Transform } from 'class-transformer';

export class CreateTicketTypeDto {
  @IsString()
  eventId: string;

  @IsString()
  name: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsNumber({ maxDecimalPlaces: 2 })
  @Min(0)
  price: number;

  @IsNumber()
  @Min(1)
  totalQuantity: number;

  @IsNumber()
  @Min(1)
  @Max(50)
  @IsOptional()
  maxPerUser?: number = 10;

  @IsDateString()
  @IsOptional()
  saleStartDate?: string;

  @IsDateString()
  @IsOptional()
  saleEndDate?: string;

  @IsBoolean()
  @IsOptional()
  isActive?: boolean = true;
}

export class UpdateTicketTypeDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsNumber({ maxDecimalPlaces: 2 })
  @Min(0)
  @IsOptional()
  price?: number;

  @IsNumber()
  @Min(1)
  @IsOptional()
  totalQuantity?: number;

  @IsNumber()
  @Min(1)
  @Max(50)
  @IsOptional()
  maxPerUser?: number;

  @IsDateString()
  @IsOptional()
  saleStartDate?: string;

  @IsDateString()
  @IsOptional()
  saleEndDate?: string;

  @IsBoolean()
  @IsOptional()
  isActive?: boolean;
}

export class TicketTypeSearchDto {
  @IsString()
  @IsOptional()
  eventId?: string;

  @IsBoolean()
  @IsOptional()
  @Transform(({ value }) => value === 'true')
  isActive?: boolean;

  @IsString()
  @IsOptional()
  name?: string;
}

export class TicketTypeResponseDto {
  id: string;
  eventId: string;
  name: string;
  description?: string;
  price: number;
  totalQuantity: number;
  availableQuantity: number;
  soldQuantity: number;
  reservedQuantity: number;
  maxPerUser: number;
  saleStartDate?: Date;
  saleEndDate?: Date;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}