// apps/order-service/src/order/order.controller.ts
import { Controller, Logger } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { OrderService } from './order.service';

interface CreateOrderPayload {
  userId: string;
  eventId: string;
  notes?: string;
}

interface FindOrderByIdPayload {
  orderId: string;
  userId: string;
}

interface FindOrdersByUserPayload {
  userId: string;
  status?: string;
  eventId?: string;
  limit?: number;
  offset?: number;
}

interface UpdateOrderStatusPayload {
  orderId: string;
  status: string;
  metadata?: any;
}

interface OrderAnalyticsPayload {
  startDate?: string;
  endDate?: string;
  eventId?: string;
}

@Controller()
export class OrderController {
  private readonly logger = new Logger(OrderController.name);

  constructor(private readonly orderService: OrderService) {}

  @MessagePattern('order.create')
  async createOrder(@Payload() payload: CreateOrderPayload) {
    try {
      this.logger.log(`Creating order for user ${payload.userId}, event ${payload.eventId}`);

      const order = await this.orderService.createOrder(payload);

      return {
        success: true,
        data: order,
        message: 'Order created successfully',
      };
    } catch (error) {
      this.logger.error(`Failed to create order: ${error.message}`, error.stack);
      return {
        success: false,
        error: error.message,
        message: 'Failed to create order',
      };
    }
  }

  @MessagePattern('order.find-by-id')
  async findOrderById(@Payload() payload: FindOrderByIdPayload) {
    try {
      this.logger.log(`Finding order ${payload.orderId} for user ${payload.userId}`);

      const order = await this.orderService.findOrderById(payload.orderId, payload.userId);

      return {
        success: true,
        data: order,
        message: 'Order retrieved successfully',
      };
    } catch (error) {
      this.logger.error(`Failed to find order: ${error.message}`, error.stack);
      return {
        success: false,
        error: error.message,
        message: 'Failed to retrieve order',
      };
    }
  }

  @MessagePattern('order.find-by-user')
  async findOrdersByUser(@Payload() payload: FindOrdersByUserPayload) {
    try {
      this.logger.log(`Finding orders for user ${payload.userId}`);

      const orders = await this.orderService.findOrdersByUser(payload);

      return {
        success: true,
        data: orders,
        message: 'Orders retrieved successfully',
      };
    } catch (error) {
      this.logger.error(`Failed to find orders: ${error.message}`, error.stack);
      return {
        success: false,
        error: error.message,
        message: 'Failed to retrieve orders',
      };
    }
  }

  @MessagePattern('order.update-status')
  async updateOrderStatus(@Payload() payload: UpdateOrderStatusPayload) {
    try {
      this.logger.log(`Updating order ${payload.orderId} status to ${payload.status}`);

      const order = await this.orderService.updateOrderStatus(
        payload.orderId,
        payload.status as any,
        payload.metadata,
      );

      return {
        success: true,
        data: order,
        message: 'Order status updated successfully',
      };
    } catch (error) {
      this.logger.error(`Failed to update order status: ${error.message}`, error.stack);
      return {
        success: false,
        error: error.message,
        message: 'Failed to update order status',
      };
    }
  }

  @MessagePattern('order.cancel')
  async cancelOrder(@Payload() payload: FindOrderByIdPayload) {
    try {
      this.logger.log(`Cancelling order ${payload.orderId} for user ${payload.userId}`);

      const order = await this.orderService.cancelOrder(payload.orderId, payload.userId);

      return {
        success: true,
        data: order,
        message: 'Order cancelled successfully',
      };
    } catch (error) {
      this.logger.error(`Failed to cancel order: ${error.message}`, error.stack);
      return {
        success: false,
        error: error.message,
        message: 'Failed to cancel order',
      };
    }
  }

  @MessagePattern('order.complete')
  async completeOrder(@Payload() payload: { orderId: string }) {
    try {
      this.logger.log(`Completing order ${payload.orderId}`);

      const order = await this.orderService.completeOrder(payload.orderId);

      return {
        success: true,
        data: order,
        message: 'Order completed successfully',
      };
    } catch (error) {
      this.logger.error(`Failed to complete order: ${error.message}`, error.stack);
      return {
        success: false,
        error: error.message,
        message: 'Failed to complete order',
      };
    }
  }

  @MessagePattern('order.analytics')
  async getOrderAnalytics(@Payload() payload: OrderAnalyticsPayload) {
    try {
      this.logger.log(`Getting order analytics: ${JSON.stringify(payload)}`);

      const analytics = await this.orderService.getOrderAnalytics(payload);

      return {
        success: true,
        data: analytics,
        message: 'Order analytics retrieved successfully',
      };
    } catch (error) {
      this.logger.error(`Failed to get order analytics: ${error.message}`, error.stack);
      return {
        success: false,
        error: error.message,
        message: 'Failed to retrieve order analytics',
      };
    }
  }

  @MessagePattern('order.add-event')
  async addOrderEvent(@Payload() payload: {
    orderId: string;
    eventType: string;
    eventData: any;
    userId?: string;
  }) {
    try {
      this.logger.log(`Adding event to order ${payload.orderId}: ${payload.eventType}`);

      const orderEvent = await this.orderService.addOrderEvent(
        payload.orderId,
        payload.eventType,
        payload.eventData,
        payload.userId,
      );

      return {
        success: true,
        data: orderEvent,
        message: 'Order event added successfully',
      };
    } catch (error) {
      this.logger.error(`Failed to add order event: ${error.message}`, error.stack);
      return {
        success: false,
        error: error.message,
        message: 'Failed to add order event',
      };
    }
  }
}