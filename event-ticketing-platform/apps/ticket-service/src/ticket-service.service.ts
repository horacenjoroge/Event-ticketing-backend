// apps/ticket-service/src/ticket-service.service.ts
import { Injectable, NotFoundException, BadRequestException, Logger } from '@nestjs/common';
import { PrismaService } from './database/prisma.service';

interface TicketItem {
  ticketTypeId: string;
  quantity: number;
}

@Injectable()
export class TicketServiceService {
  private readonly logger = new Logger(TicketServiceService.name);

  constructor(private readonly prisma: PrismaService) {}

  getHello(): string {
    return 'Hello World from Ticket Service!';
  }

  // ========== SAGA BUSINESS LOGIC METHODS ==========

  async reserveTickets(orderId: string, items: TicketItem[]) {
    // Start a database transaction for atomic operations
    return await this.prisma.$transaction(async (tx) => {
      const reservations: any[] = [];

      for (const item of items) {
        // Check if enough tickets are available
        const ticketType = await tx.ticketType.findUnique({
          where: { id: item.ticketTypeId },
        });

        if (!ticketType) {
          throw new NotFoundException(`Ticket type ${item.ticketTypeId} not found`);
        }

        if (ticketType.availableQuantity < item.quantity) {
          throw new BadRequestException(
            `Not enough tickets available. Requested: ${item.quantity}, Available: ${ticketType.availableQuantity}`
          );
        }

        // Reserve the tickets (reduce available quantity)
        await tx.ticketType.update({
          where: { id: item.ticketTypeId },
          data: {
            availableQuantity: {
              decrement: item.quantity,
            },
            reservedQuantity: {
              increment: item.quantity,
            },
          },
        });

        // Update inventory if it exists
        await tx.inventory.upsert({
          where: { ticketTypeId: item.ticketTypeId },
          update: {
            availableCount: {
              decrement: item.quantity,
            },
            reservedCount: {
              increment: item.quantity,
            },
            lastUpdated: new Date(),
          },
          create: {
            ticketTypeId: item.ticketTypeId,
            totalCount: ticketType.totalQuantity,
            availableCount: ticketType.availableQuantity - item.quantity,
            soldCount: ticketType.soldQuantity,
            reservedCount: item.quantity,
          },
        });

        // Create reservation record using your existing schema
        const reservation = await tx.reservation.create({
          data: {
            userId: orderId, // Using orderId as userId for saga context
            ticketTypeId: item.ticketTypeId,
            quantity: item.quantity,
            totalPrice: ticketType.price.mul(item.quantity),
            expiresAt: new Date(Date.now() + 15 * 60 * 1000), // 15 minutes
            status: 'ACTIVE',
          },
        });

        reservations.push(reservation);
      }

      return {
        orderId,
        reservations,
        totalTickets: items.reduce((sum, item) => sum + item.quantity, 0),
      };
    });
  }

  async confirmTickets(orderId: string) {
    return await this.prisma.$transaction(async (tx) => {
      // Find all reservations for this order (using userId as orderId)
      const reservations = await tx.reservation.findMany({
        where: { 
          userId: orderId, 
          status: 'ACTIVE' 
        },
      });

      if (reservations.length === 0) {
        throw new NotFoundException(`No reservations found for order ${orderId}`);
      }

      // Update reservations to completed
      await tx.reservation.updateMany({
        where: { 
          userId: orderId, 
          status: 'ACTIVE' 
        },
        data: {
          status: 'COMPLETED',
        },
      });

      // Update ticket types (move from reserved to sold)
      for (const reservation of reservations) {
        await tx.ticketType.update({
          where: { id: reservation.ticketTypeId },
          data: {
            reservedQuantity: {
              decrement: reservation.quantity,
            },
            soldQuantity: {
              increment: reservation.quantity,
            },
          },
        });

        // Update inventory
        await tx.inventory.updateMany({
          where: { ticketTypeId: reservation.ticketTypeId },
          data: {
            reservedCount: {
              decrement: reservation.quantity,
            },
            soldCount: {
              increment: reservation.quantity,
            },
            lastUpdated: new Date(),
          },
        });
      }

      return {
        orderId,
        confirmedReservations: reservations.length,
        totalTickets: reservations.reduce((sum, res) => sum + res.quantity, 0),
      };
    });
  }

  async releaseTickets(orderId: string) {
    return await this.prisma.$transaction(async (tx) => {
      // Find all reservations for this order
      const reservations = await tx.reservation.findMany({
        where: { 
          userId: orderId, 
          status: { in: ['ACTIVE', 'COMPLETED'] }
        },
      });

      if (reservations.length === 0) {
        // No reservations to release, return success
        return {
          orderId,
          releasedReservations: 0,
          totalTickets: 0,
        };
      }

      // Update reservations to cancelled
      await tx.reservation.updateMany({
        where: { 
          userId: orderId, 
          status: { in: ['ACTIVE', 'COMPLETED'] }
        },
        data: {
          status: 'CANCELLED',
        },
      });

      // Return tickets to available inventory
      for (const reservation of reservations) {
        if (reservation.status === 'ACTIVE') {
          // Return from reserved to available
          await tx.ticketType.update({
            where: { id: reservation.ticketTypeId },
            data: {
              reservedQuantity: {
                decrement: reservation.quantity,
              },
              availableQuantity: {
                increment: reservation.quantity,
              },
            },
          });

          // Update inventory
          await tx.inventory.updateMany({
            where: { ticketTypeId: reservation.ticketTypeId },
            data: {
              reservedCount: {
                decrement: reservation.quantity,
              },
              availableCount: {
                increment: reservation.quantity,
              },
              lastUpdated: new Date(),
            },
          });
        } else if (reservation.status === 'COMPLETED') {
          // Return from sold to available (refund case)
          await tx.ticketType.update({
            where: { id: reservation.ticketTypeId },
            data: {
              soldQuantity: {
                decrement: reservation.quantity,
              },
              availableQuantity: {
                increment: reservation.quantity,
              },
            },
          });

          // Update inventory
          await tx.inventory.updateMany({
            where: { ticketTypeId: reservation.ticketTypeId },
            data: {
              soldCount: {
                decrement: reservation.quantity,
              },
              availableCount: {
                increment: reservation.quantity,
              },
              lastUpdated: new Date(),
            },
          });
        }
      }

      return {
        orderId,
        releasedReservations: reservations.length,
        totalTickets: reservations.reduce((sum, res) => sum + res.quantity, 0),
      };
    });
  }
}