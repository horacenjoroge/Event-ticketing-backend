// apps/ticket-service/src/inventory/dto/inventory.dto.ts
import { IsString, IsNumber, Min, IsOptional } from 'class-validator';

export class CheckAvailabilityDto {
  @IsString()
  ticketTypeId: string;

  @IsNumber()
  @Min(1)
  quantity: number;
}

export class UpdateInventoryDto {
  @IsString()
  ticketTypeId: string;

  @IsNumber()
  @IsOptional()
  soldCount?: number;

  @IsNumber()
  @IsOptional()
  reservedCount?: number;

  @IsNumber()
  @IsOptional()
  availableCount?: number;
}

export class InventoryResponseDto {
  id: string;
  ticketTypeId: string;
  totalCount: number;
  availableCount: number;
  soldCount: number;
  reservedCount: number;
  lastUpdated: Date;
}

export class InventoryAlertDto {
  ticketTypeId: string;
  eventId: string;
  availableCount: number;
  threshold: number;
  alertLevel: 'LOW' | 'CRITICAL' | 'SOLD_OUT';
}