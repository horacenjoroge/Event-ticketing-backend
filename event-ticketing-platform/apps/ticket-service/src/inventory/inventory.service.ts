// apps/ticket-service/src/inventory/inventory.service.ts
import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { 
  CheckAvailabilityDto, 
  UpdateInventoryDto, 
  InventoryResponseDto,
  InventoryAlertDto 
} from './dto/inventory.dto';

@Injectable()
export class InventoryService {
  constructor(private prisma: PrismaService) {}

  async checkAvailability(checkAvailabilityDto: CheckAvailabilityDto): Promise<{ available: boolean; remainingCount: number }> {
    const { ticketTypeId, quantity } = checkAvailabilityDto;

    const inventory = await this.prisma.inventory.findUnique({
      where: { ticketTypeId },
      include: {
        ticketType: true,
      },
    });

    if (!inventory || !inventory.ticketType.isActive) {
      return { available: false, remainingCount: 0 };
    }

    // Check if sales period is active
    const now = new Date();
    const ticketType = inventory.ticketType;
    
    if (ticketType.saleStartDate && now < ticketType.saleStartDate) {
      return { available: false, remainingCount: inventory.availableCount };
    }

    if (ticketType.saleEndDate && now > ticketType.saleEndDate) {
      return { available: false, remainingCount: inventory.availableCount };
    }

    const isAvailable = inventory.availableCount >= quantity;
    
    return {
      available: isAvailable,
      remainingCount: inventory.availableCount,
    };
  }

  async getInventoryByTicketType(ticketTypeId: string): Promise<InventoryResponseDto> {
    const inventory = await this.prisma.inventory.findUnique({
      where: { ticketTypeId },
    });

    if (!inventory) {
      throw new NotFoundException('Inventory not found for this ticket type');
    }

    return this.formatInventoryResponse(inventory);
  }

  async getInventoryByEvent(eventId: string): Promise<InventoryResponseDto[]> {
    const inventories = await this.prisma.inventory.findMany({
      where: {
        ticketType: {
          eventId,
        },
      },
      include: {
        ticketType: true,
      },
    });

    return inventories.map(inventory => this.formatInventoryResponse(inventory));
  }

  async reserveTickets(ticketTypeId: string, quantity: number): Promise<{ success: boolean; message: string }> {
    try {
      // Use transaction to ensure atomicity
      const result = await this.prisma.$transaction(async (tx) => {
        // Lock the inventory record for update
        const inventory = await tx.inventory.findUnique({
          where: { ticketTypeId },
        });

        if (!inventory) {
          throw new NotFoundException('Inventory not found');
        }

        if (inventory.availableCount < quantity) {
          throw new BadRequestException('Insufficient tickets available');
        }

        // Update inventory counts
        const updatedInventory = await tx.inventory.update({
          where: { ticketTypeId },
          data: {
            availableCount: inventory.availableCount - quantity,
            reservedCount: inventory.reservedCount + quantity,
          },
        });

        // Update ticket type counts
        await tx.ticketType.update({
          where: { id: ticketTypeId },
          data: {
            availableQuantity: updatedInventory.availableCount,
            reservedQuantity: updatedInventory.reservedCount,
          },
        });

        return updatedInventory;
      });

      return {
        success: true,
        message: `Successfully reserved ${quantity} tickets`,
      };
    } catch (error) {
      return {
        success: false,
        message: error.message,
      };
    }
  }

  async releaseReservation(ticketTypeId: string, quantity: number): Promise<{ success: boolean; message: string }> {
    try {
      const result = await this.prisma.$transaction(async (tx) => {
        const inventory = await tx.inventory.findUnique({
          where: { ticketTypeId },
        });

        if (!inventory) {
          throw new NotFoundException('Inventory not found');
        }

        if (inventory.reservedCount < quantity) {
          throw new BadRequestException('Cannot release more tickets than reserved');
        }

        // Update inventory counts
        const updatedInventory = await tx.inventory.update({
          where: { ticketTypeId },
          data: {
            availableCount: inventory.availableCount + quantity,
            reservedCount: inventory.reservedCount - quantity,
          },
        });

        // Update ticket type counts
        await tx.ticketType.update({
          where: { id: ticketTypeId },
          data: {
            availableQuantity: updatedInventory.availableCount,
            reservedQuantity: updatedInventory.reservedCount,
          },
        });

        return updatedInventory;
      });

      return {
        success: true,
        message: `Successfully released ${quantity} tickets`,
      };
    } catch (error) {
      return {
        success: false,
        message: error.message,
      };
    }
  }

  async confirmPurchase(ticketTypeId: string, quantity: number): Promise<{ success: boolean; message: string }> {
    try {
      const result = await this.prisma.$transaction(async (tx) => {
        const inventory = await tx.inventory.findUnique({
          where: { ticketTypeId },
        });

        if (!inventory) {
          throw new NotFoundException('Inventory not found');
        }

        if (inventory.reservedCount < quantity) {
          throw new BadRequestException('Cannot confirm more tickets than reserved');
        }

        // Update inventory counts
        const updatedInventory = await tx.inventory.update({
          where: { ticketTypeId },
          data: {
            reservedCount: inventory.reservedCount - quantity,
            soldCount: inventory.soldCount + quantity,
          },
        });

        // Update ticket type counts
        await tx.ticketType.update({
          where: { id: ticketTypeId },
          data: {
            reservedQuantity: updatedInventory.reservedCount,
            soldQuantity: updatedInventory.soldCount,
          },
        });

        return updatedInventory;
      });

      return {
        success: true,
        message: `Successfully confirmed purchase of ${quantity} tickets`,
      };
    } catch (error) {
      return {
        success: false,
        message: error.message,
      };
    }
  }

  async getLowStockAlerts(threshold: number = 10): Promise<InventoryAlertDto[]> {
    const lowStockInventories = await this.prisma.inventory.findMany({
      where: {
        availableCount: {
          lte: threshold,
        },
        ticketType: {
          isActive: true,
        },
      },
      include: {
        ticketType: true,
      },
    });

    return lowStockInventories.map(inventory => ({
      ticketTypeId: inventory.ticketTypeId,
      eventId: inventory.ticketType.eventId,
      availableCount: inventory.availableCount,
      threshold,
      alertLevel: inventory.availableCount === 0 ? 'SOLD_OUT' : 
                  inventory.availableCount <= 5 ? 'CRITICAL' : 'LOW',
    }));
  }

  async getInventoryStats(eventId?: string): Promise<{
    totalEvents: number;
    totalTicketTypes: number;
    totalTickets: number;
    totalSold: number;
    totalReserved: number;
    totalAvailable: number;
  }> {
    const where = eventId ? { ticketType: { eventId } } : {};

    const inventories = await this.prisma.inventory.findMany({
      where,
      include: {
        ticketType: true,
      },
    });

    const uniqueEvents = new Set(inventories.map(inv => inv.ticketType.eventId));

    const stats = inventories.reduce((acc, inventory) => {
      acc.totalTickets += inventory.totalCount;
      acc.totalSold += inventory.soldCount;
      acc.totalReserved += inventory.reservedCount;
      acc.totalAvailable += inventory.availableCount;
      return acc;
    }, {
      totalEvents: uniqueEvents.size,
      totalTicketTypes: inventories.length,
      totalTickets: 0,
      totalSold: 0,
      totalReserved: 0,
      totalAvailable: 0,
    });

    return stats;
  }

  async updateInventory(updateInventoryDto: UpdateInventoryDto): Promise<InventoryResponseDto> {
    const { ticketTypeId, ...updateData } = updateInventoryDto;

    const inventory = await this.prisma.inventory.update({
      where: { ticketTypeId },
      data: updateData,
    });

    // Sync with ticket type
    await this.prisma.ticketType.update({
      where: { id: ticketTypeId },
      data: {
        availableQuantity: inventory.availableCount,
        soldQuantity: inventory.soldCount,
        reservedQuantity: inventory.reservedCount,
      },
    });

    return this.formatInventoryResponse(inventory);
  }

  private formatInventoryResponse(inventory: any): InventoryResponseDto {
    return {
      id: inventory.id,
      ticketTypeId: inventory.ticketTypeId,
      totalCount: inventory.totalCount,
      availableCount: inventory.availableCount,
      soldCount: inventory.soldCount,
      reservedCount: inventory.reservedCount,
      lastUpdated: inventory.lastUpdated,
    };
  }
}