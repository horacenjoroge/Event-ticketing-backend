// apps/order-service/src/order/order.service.ts
import { Injectable, Logger, BadRequestException, NotFoundException, ForbiddenException } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { ConfigService } from '@nestjs/config';
import { CartService } from '../cart/cart.service';
import { OrderStatus } from '../../prisma/generated/prisma';
import { Decimal } from '@prisma/client/runtime/library';

interface CreateOrderData {
  userId: string;
  eventId: string;
  notes?: string;
}

interface FindOrdersByUserData {
  userId: string;
  status?: string;
  eventId?: string;
  limit?: number;
  offset?: number;
}

interface OrderAnalyticsData {
  startDate?: string;
  endDate?: string;
  eventId?: string;
}

@Injectable()
export class OrderService {
  private readonly logger = new Logger(OrderService.name);
  private readonly orderTimeoutMinutes: number;

  constructor(
    private readonly prisma: PrismaService,
    private readonly configService: ConfigService,
    private readonly cartService: CartService,
  ) {
    this.orderTimeoutMinutes = parseInt(configService.get('ORDER_TIMEOUT_MINUTES', '30'));
  }

  async createOrder(data: CreateOrderData) {
    const { userId, eventId, notes } = data;

    this.logger.log(`Creating order for user ${userId}, event ${eventId}`);

    // Check if user has any pending orders for this event
    const existingOrder = await this.prisma.order.findFirst({
      where: {
        userId,
        eventId,
        status: {
          in: ['PENDING', 'PROCESSING', 'PAYMENT_PENDING'],
        },
      },
    });

    if (existingOrder) {
      throw new BadRequestException('You already have a pending order for this event');
    }

    // Get cart total
    const cartTotal = await this.cartService.getCartTotal(userId);
    if (cartTotal <= 0) {
      throw new BadRequestException('Cart is empty');
    }

    // Create order with expiration
    const expiresAt = new Date(Date.now() + this.orderTimeoutMinutes * 60 * 1000);

    const order = await this.prisma.order.create({
      data: {
        userId,
        eventId,
        totalAmount: new Decimal(cartTotal),
        status: OrderStatus.PENDING,
        expiresAt,
      },
      include: {
        items: true,
      },
    });

    // Convert cart items to order items
    await this.cartService.convertCartToOrderItems(userId, order.id);

    // Add order creation event
    await this.addOrderEvent(order.id, 'ORDER_CREATED', {
      totalAmount: cartTotal,
      eventId,
      notes,
    }, userId);

    this.logger.log(`Created order ${order.id} with total ${cartTotal}`);

    // Return order with items
    return this.findOrderById(order.id, userId);
  }

  async findOrderById(orderId: string, userId: string) {
    this.logger.log(`Finding order ${orderId} for user ${userId}`);

    const order = await this.prisma.order.findFirst({
      where: {
        id: orderId,
        userId,
      },
      include: {
        items: true,
        sagaExecution: {
          include: {
            steps: {
              orderBy: { stepNumber: 'asc' },
            },
          },
        },
        orderEvents: {
          orderBy: { occurredAt: 'desc' },
          take: 10,
        },
      },
    });

    if (!order) {
      throw new NotFoundException('Order not found');
    }

    return order;
  }

  async findOrdersByUser(data: FindOrdersByUserData) {
    const { userId, status, eventId, limit = 10, offset = 0 } = data;

    this.logger.log(`Finding orders for user ${userId}`);

    const where: any = { userId };

    if (status) {
      where.status = status;
    }

    if (eventId) {
      where.eventId = eventId;
    }

    const orders = await this.prisma.order.findMany({
      where,
      include: {
        items: true,
        sagaExecution: true,
      },
      orderBy: { createdAt: 'desc' },
      take: limit,
      skip: offset,
    });

    const total = await this.prisma.order.count({ where });

    return {
      orders,
      total,
      limit,
      offset,
      hasMore: total > offset + limit,
    };
  }

  async updateOrderStatus(orderId: string, status: OrderStatus, metadata?: any) {
    this.logger.log(`Updating order ${orderId} status to ${status}`);

    const order = await this.prisma.order.findUnique({
      where: { id: orderId },
    });

    if (!order) {
      throw new NotFoundException('Order not found');
    }

    const updatedOrder = await this.prisma.order.update({
      where: { id: orderId },
      data: {
        status,
        ...(status === OrderStatus.COMPLETED && { completedAt: new Date() }),
        updatedAt: new Date(),
      },
      include: {
        items: true,
        sagaExecution: true,
      },
    });

    // Add status change event
    await this.addOrderEvent(orderId, 'STATUS_CHANGED', {
      oldStatus: order.status,
      newStatus: status,
      metadata,
    });

    this.logger.log(`Updated order ${orderId} status from ${order.status} to ${status}`);

    return updatedOrder;
  }

  async cancelOrder(orderId: string, userId: string) {
    this.logger.log(`Cancelling order ${orderId} for user ${userId}`);

    const order = await this.prisma.order.findFirst({
      where: {
        id: orderId,
        userId,
      },
    });

    if (!order) {
      throw new NotFoundException('Order not found');
    }

    if (!this.canCancelOrder(order.status)) {
      throw new BadRequestException(`Cannot cancel order with status: ${order.status}`);
    }

    const cancelledOrder = await this.updateOrderStatus(orderId, OrderStatus.CANCELLED, {
      cancelledBy: userId,
      cancelledAt: new Date(),
    });

    await this.addOrderEvent(orderId, 'ORDER_CANCELLED', {
      reason: 'User cancellation',
      cancelledBy: userId,
    }, userId);

    return cancelledOrder;
  }

  async completeOrder(orderId: string) {
    this.logger.log(`Completing order ${orderId}`);

    const order = await this.updateOrderStatus(orderId, OrderStatus.COMPLETED);

    await this.addOrderEvent(orderId, 'ORDER_COMPLETED', {
      completedAt: new Date(),
    });

    return order;
  }

  async getOrderAnalytics(data: OrderAnalyticsData) {
    const { startDate, endDate, eventId } = data;

    this.logger.log(`Getting order analytics: ${JSON.stringify(data)}`);

    const where: any = {};

    if (startDate) {
      where.createdAt = { gte: new Date(startDate) };
    }

    if (endDate) {
      where.createdAt = { ...where.createdAt, lte: new Date(endDate) };
    }

    if (eventId) {
      where.eventId = eventId;
    }

    // Total orders and revenue
    const totalStats = await this.prisma.order.aggregate({
      where,
      _count: { id: true },
      _sum: { totalAmount: true },
      _avg: { totalAmount: true },
    });

    // Orders by status
    const ordersByStatus = await this.prisma.order.groupBy({
      by: ['status'],
      where,
      _count: { id: true },
      _sum: { totalAmount: true },
    });

    // Orders by date (last 30 days) - simplified version
    const ordersByDate = await this.prisma.$queryRaw`
      SELECT 
        DATE(created_at) as date,
        COUNT(*)::int as order_count,
        SUM(total_amount)::float as revenue
      FROM orders 
      WHERE created_at >= NOW() - INTERVAL '30 days'
      GROUP BY DATE(created_at)
      ORDER BY date DESC
    `;

    // Top events - simplified version without complex groupBy
    let topEvents: any[] = [];
    if (!eventId) {
      // Use a simpler approach for top events
      const eventStats = await this.prisma.$queryRaw`
        SELECT 
          event_id,
          COUNT(*)::int as order_count,
          SUM(total_amount)::float as revenue
        FROM orders 
        WHERE event_id IS NOT NULL
        GROUP BY event_id
        ORDER BY revenue DESC
        LIMIT 10
      `;
      topEvents = eventStats as any[];
    }

    return {
      totalOrders: totalStats._count.id || 0,
      totalRevenue: totalStats._sum.totalAmount?.toNumber() || 0,
      averageOrderValue: totalStats._avg.totalAmount?.toNumber() || 0,
      ordersByStatus: ordersByStatus.map(item => ({
        status: item.status,
        count: item._count.id,
        revenue: item._sum.totalAmount?.toNumber() || 0,
      })),
      ordersByDate,
      topEvents: topEvents.map((item: any) => ({
        eventId: item.event_id,
        orderCount: item.order_count,
        revenue: item.revenue || 0,
      })),
    };
  }

  async addOrderEvent(orderId: string, eventType: string, eventData: any, userId?: string) {
    this.logger.log(`Adding event ${eventType} to order ${orderId}`);

    return this.prisma.orderEvent.create({
      data: {
        orderId,
        eventType,
        eventData,
        userId,
      },
    });
  }

  async getOrderHistory(orderId: string, userId: string) {
    this.logger.log(`Getting order history for ${orderId}`);

    const order = await this.prisma.order.findFirst({
      where: {
        id: orderId,
        userId,
      },
    });

    if (!order) {
      throw new NotFoundException('Order not found');
    }

    const events = await this.prisma.orderEvent.findMany({
      where: { orderId },
      orderBy: { occurredAt: 'asc' },
    });

    return events;
  }

  async expireOrder(orderId: string) {
    this.logger.log(`Expiring order ${orderId}`);

    const order = await this.prisma.order.findUnique({
      where: { id: orderId },
    });

    if (!order) {
      throw new NotFoundException('Order not found');
    }

    if (order.status !== OrderStatus.PENDING) {
      this.logger.warn(`Cannot expire order ${orderId} with status ${order.status}`);
      return order;
    }

    const expiredOrder = await this.updateOrderStatus(orderId, OrderStatus.CANCELLED, {
      reason: 'Order expired',
      expiredAt: new Date(),
    });

    await this.addOrderEvent(orderId, 'ORDER_EXPIRED', {
      originalExpiresAt: order.expiresAt,
      expiredAt: new Date(),
    });

    return expiredOrder;
  }

  private canCancelOrder(status: OrderStatus): boolean {
    return [
      OrderStatus.PENDING,
      OrderStatus.PROCESSING,
      OrderStatus.PAYMENT_PENDING,
      OrderStatus.PAYMENT_FAILED,
    ].includes(status as any);
  }

  private canRefundOrder(status: OrderStatus): boolean {
    return [
      OrderStatus.CONFIRMED,
      OrderStatus.COMPLETED,
    ].includes(status as any);
  }
}