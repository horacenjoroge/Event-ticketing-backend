// apps/ticket-service/src/ticket-service.service.ts
import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from './database/prisma.service';

interface TicketItem {
  ticketTypeId: string;
  quantity: number;
}

@Injectable()
export class TicketServiceService {
  constructor(private readonly prisma: PrismaService) {}

  getHello(): string {
    return 'Hello World from Ticket Service!';
  }

  // ========== SAGA BUSINESS LOGIC METHODS ==========

  async reserveTickets(orderId: string, items: TicketItem[]) {
    // Start a database transaction for atomic operations
    return await this.prisma.$transaction(async (tx) => {
      const reservations = [];

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

        // Create reservation record
        const reservation = await tx.ticketReservation.create({
          data: {
            orderId,
            ticketTypeId: item.ticketTypeId,
            quantity: item.quantity,
            status: 'RESERVED',
            expiresAt: new Date(Date.now() + 15 * 60 * 1000), // 15 minutes
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
      // Find all reservations for this order
      const reservations = await tx.ticketReservation.findMany({
        where: { orderId, status: 'RESERVED' },
      });

      if (reservations.length === 0) {
        throw new NotFoundException(`No reservations found for order ${orderId}`);
      }

      // Update reservations to confirmed
      await tx.ticketReservation.updateMany({
        where: { orderId, status: 'RESERVED' },
        data: {
          status: 'CONFIRMED',
          confirmedAt: new Date(),
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
      const reservations = await tx.ticketReservation.findMany({
        where: { 
          orderId, 
          status: { in: ['RESERVED', 'CONFIRMED'] }
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
      await tx.ticketReservation.updateMany({
        where: { 
          orderId, 
          status: { in: ['RESERVED', 'CONFIRMED'] }
        },
        data: {
          status: 'CANCELLED',
          cancelledAt: new Date(),
        },
      });

      // Return tickets to available inventory
      for (const reservation of reservations) {
        if (reservation.status === 'RESERVED') {
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
        } else if (reservation.status === 'CONFIRMED') {
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