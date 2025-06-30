// apps/ticket-service/src/inventory/inventory.controller.ts
import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { InventoryService } from './inventory.service';
import { 
  CheckAvailabilityDto, 
  UpdateInventoryDto 
} from './dto/inventory.dto';

@Controller()
export class InventoryController {
  constructor(private readonly inventoryService: InventoryService) {}

  @MessagePattern('inventory.check-availability')
  async checkAvailability(@Payload() checkAvailabilityDto: CheckAvailabilityDto) {
    try {
      const result = await this.inventoryService.checkAvailability(checkAvailabilityDto);
      
      return {
        success: true,
        data: result,
        message: 'Availability checked successfully',
      };
    } catch (error) {
      return {
        success: false,
        error: error.message,
        message: 'Failed to check availability',
      };
    }
  }

  @MessagePattern('inventory.get-by-ticket-type')
  async getInventoryByTicketType(@Payload() data: { ticketTypeId: string }) {
    try {
      const inventory = await this.inventoryService.getInventoryByTicketType(data.ticketTypeId);
      
      return {
        success: true,
        data: inventory,
        message: 'Inventory retrieved successfully',
      };
    } catch (error) {
      return {
        success: false,
        error: error.message,
        message: 'Failed to retrieve inventory',
      };
    }
  }

  @MessagePattern('inventory.get-by-event')
  async getInventoryByEvent(@Payload() data: { eventId: string }) {
    try {
      const inventories = await this.inventoryService.getInventoryByEvent(data.eventId);
      
      return {
        success: true,
        data: inventories,
        message: 'Event inventories retrieved successfully',
      };
    } catch (error) {
      return {
        success: false,
        error: error.message,
        message: 'Failed to retrieve event inventories',
      };
    }
  }

  @MessagePattern('inventory.reserve-tickets')
  async reserveTickets(@Payload() data: { ticketTypeId: string; quantity: number }) {
    try {
      const result = await this.inventoryService.reserveTickets(
        data.ticketTypeId, 
        data.quantity
      );
      
      return {
        success: result.success,
        data: result,
        message: result.message,
      };
    } catch (error) {
      return {
        success: false,
        error: error.message,
        message: 'Failed to reserve tickets',
      };
    }
  }

  @MessagePattern('inventory.release-reservation')
  async releaseReservation(@Payload() data: { ticketTypeId: string; quantity: number }) {
    try {
      const result = await this.inventoryService.releaseReservation(
        data.ticketTypeId, 
        data.quantity
      );
      
      return {
        success: result.success,
        data: result,
        message: result.message,
      };
    } catch (error) {
      return {
        success: false,
        error: error.message,
        message: 'Failed to release reservation',
      };
    }
  }

  @MessagePattern('inventory.confirm-purchase')
  async confirmPurchase(@Payload() data: { ticketTypeId: string; quantity: number }) {
    try {
      const result = await this.inventoryService.confirmPurchase(
        data.ticketTypeId, 
        data.quantity
      );
      
      return {
        success: result.success,
        data: result,
        message: result.message,
      };
    } catch (error) {
      return {
        success: false,
        error: error.message,
        message: 'Failed to confirm purchase',
      };
    }
  }

  @MessagePattern('inventory.get-low-stock-alerts')
  async getLowStockAlerts(@Payload() data: { threshold?: number }) {
    try {
      const alerts = await this.inventoryService.getLowStockAlerts(data.threshold);
      
      return {
        success: true,
        data: alerts,
        message: 'Low stock alerts retrieved successfully',
      };
    } catch (error) {
      return {
        success: false,
        error: error.message,
        message: 'Failed to retrieve low stock alerts',
      };
    }
  }

  @MessagePattern('inventory.get-stats')
  async getInventoryStats(@Payload() data: { eventId?: string }) {
    try {
      const stats = await this.inventoryService.getInventoryStats(data.eventId);
      
      return {
        success: true,
        data: stats,
        message: 'Inventory statistics retrieved successfully',
      };
    } catch (error) {
      return {
        success: false,
        error: error.message,
        message: 'Failed to retrieve inventory statistics',
      };
    }
  }

  @MessagePattern('inventory.update')
  async updateInventory(@Payload() updateInventoryDto: UpdateInventoryDto) {
    try {
      const inventory = await this.inventoryService.updateInventory(updateInventoryDto);
      
      return {
        success: true,
        data: inventory,
        message: 'Inventory updated successfully',
      };
    } catch (error) {
      return {
        success: false,
        error: error.message,
        message: 'Failed to update inventory',
      };
    }
  }
}