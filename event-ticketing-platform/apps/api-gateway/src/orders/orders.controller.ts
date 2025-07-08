// apps/api-gateway/src/orders/orders.controller.ts
import {
    Controller,
    Get,
    Post,
    Put,
    Delete,
    Body,
    Param,
    Query,
    HttpException,
    HttpStatus,
    Inject,
    Headers,
  } from '@nestjs/common';
  import { ClientProxy } from '@nestjs/microservices';
  import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
  import { firstValueFrom } from 'rxjs';
  import { IsString, IsOptional, IsNumber, IsEnum, Min, IsUUID } from 'class-validator';
  import { ApiProperty } from '@nestjs/swagger';
  
  // Cart DTOs
  export class AddToCartDto {
    @ApiProperty({ example: 'ticket-type-cuid-123' })
    @IsString()
    itemId: string;
  
    @ApiProperty({ example: 'TICKET', enum: ['TICKET', 'MERCHANDISE', 'SERVICE'] })
    @IsEnum(['TICKET', 'MERCHANDISE', 'SERVICE'])
    itemType: string;
  
    @ApiProperty({ example: 2 })
    @IsNumber()
    @Min(1)
    quantity: number;
  
    @ApiProperty({ example: 'VIP Ticket' })
    @IsString()
    itemName: string;
  
    @ApiProperty({ example: 199.99 })
    @IsNumber()
    @Min(0)
    unitPrice: number;
  }
  
  export class UpdateCartItemDto {
    @ApiProperty({ example: 3 })
    @IsNumber()
    @Min(1)
    quantity: number;
  }
  
  // Order DTOs
  export class CreateOrderDto {
    @ApiProperty({ example: 'event-cuid-123' })
    @IsString()
    eventId: string;
  
    @ApiProperty({ example: 'Convert cart to order', required: false })
    @IsString()
    @IsOptional()
    notes?: string;
  }
  
  export class CheckoutDto {
    @ApiProperty({ example: 'order-cuid-123' })
    @IsString()
    orderId: string;
  
    @ApiProperty({ example: 'pm_1234567890', description: 'Stripe payment method ID' })
    @IsString()
    paymentMethodId: string;
  
    @ApiProperty({ example: 'john.doe@example.com' })
    @IsString()
    billingEmail: string;
  
    @ApiProperty({ 
      example: {
        name: 'John Doe',
        address: {
          line1: '123 Main St',
          city: 'New York',
          state: 'NY',
          postal_code: '10001',
          country: 'US'
        }
      }
    })
    @IsOptional()
    billingDetails?: any;
  }
  
  export class OrderSearchDto {
    @ApiProperty({ example: 'CONFIRMED', required: false })
    @IsString()
    @IsOptional()
    status?: string;
  
    @ApiProperty({ example: 'event-cuid-123', required: false })
    @IsString()
    @IsOptional()
    eventId?: string;
  
    @ApiProperty({ example: 10, required: false })
    @IsNumber()
    @IsOptional()
    limit?: number;
  
    @ApiProperty({ example: 0, required: false })
    @IsNumber()
    @IsOptional()
    offset?: number;
  }
  
  @ApiTags('Orders Management')
  @Controller('orders')
  export class OrdersController {
    constructor(
      @Inject('ORDER_SERVICE') private readonly orderServiceClient: ClientProxy,
      @Inject('TICKET_SERVICE') private readonly ticketServiceClient: ClientProxy,
      @Inject('PAYMENT_SERVICE') private readonly paymentServiceClient: ClientProxy,
    ) {}
  
    // ================================
    // CART ENDPOINTS
    // ================================
  
    @Get('cart')
    @ApiBearerAuth()
    @ApiOperation({ summary: 'Get current user cart' })
    @ApiResponse({ status: 200, description: 'Cart retrieved successfully' })
    async getCart(@Headers('authorization') authorization?: string) {
      try {
        if (!authorization) {
          throw new HttpException('Authorization header required', HttpStatus.UNAUTHORIZED);
        }
  
        const userId = this.extractUserIdFromToken(authorization);
  
        const result = await firstValueFrom(
          this.orderServiceClient.send('cart.get', { userId }),
        );
  
        if (!result.success) {
          throw new HttpException(
            result.error || 'Failed to retrieve cart',
            HttpStatus.BAD_REQUEST,
          );
        }
  
        return {
          message: result.message,
          cart: result.data,
        };
      } catch (error) {
        if (error instanceof HttpException) {
          throw error;
        }
        throw new HttpException(
          'Internal server error',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
    }
  
    @Post('cart/add')
    @ApiBearerAuth()
    @ApiOperation({ summary: 'Add item to cart' })
    @ApiResponse({ status: 201, description: 'Item added to cart successfully' })
    async addToCart(
      @Body() addToCartDto: AddToCartDto,
      @Headers('authorization') authorization?: string,
    ) {
      try {
        if (!authorization) {
          throw new HttpException('Authorization header required', HttpStatus.UNAUTHORIZED);
        }
  
        const userId = this.extractUserIdFromToken(authorization);
  
        const result = await firstValueFrom(
          this.orderServiceClient.send('cart.add-item', {
            userId,
            ...addToCartDto,
          }),
        );
  
        if (!result.success) {
          throw new HttpException(
            result.error || 'Failed to add item to cart',
            HttpStatus.BAD_REQUEST,
          );
        }
  
        return {
          message: result.message,
          cartItem: result.data,
        };
      } catch (error) {
        if (error instanceof HttpException) {
          throw error;
        }
        throw new HttpException(
          'Internal server error',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
    }
  
    @Put('cart/items/:itemId')
    @ApiBearerAuth()
    @ApiOperation({ summary: 'Update cart item quantity' })
    @ApiResponse({ status: 200, description: 'Cart item updated successfully' })
    async updateCartItem(
      @Param('itemId') itemId: string,
      @Body() updateCartItemDto: UpdateCartItemDto,
      @Headers('authorization') authorization?: string,
    ) {
      try {
        if (!authorization) {
          throw new HttpException('Authorization header required', HttpStatus.UNAUTHORIZED);
        }
  
        const userId = this.extractUserIdFromToken(authorization);
  
        const result = await firstValueFrom(
          this.orderServiceClient.send('cart.update-item', {
            userId,
            itemId,
            ...updateCartItemDto,
          }),
        );
  
        if (!result.success) {
          throw new HttpException(
            result.error || 'Failed to update cart item',
            HttpStatus.BAD_REQUEST,
          );
        }
  
        return {
          message: result.message,
          cartItem: result.data,
        };
      } catch (error) {
        if (error instanceof HttpException) {
          throw error;
        }
        throw new HttpException(
          'Internal server error',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
    }
  
    @Delete('cart/items/:itemId')
    @ApiBearerAuth()
    @ApiOperation({ summary: 'Remove item from cart' })
    @ApiResponse({ status: 200, description: 'Item removed from cart successfully' })
    async removeFromCart(
      @Param('itemId') itemId: string,
      @Headers('authorization') authorization?: string,
    ) {
      try {
        if (!authorization) {
          throw new HttpException('Authorization header required', HttpStatus.UNAUTHORIZED);
        }
  
        const userId = this.extractUserIdFromToken(authorization);
  
        const result = await firstValueFrom(
          this.orderServiceClient.send('cart.remove-item', {
            userId,
            itemId,
          }),
        );
  
        if (!result.success) {
          throw new HttpException(
            result.error || 'Failed to remove item from cart',
            HttpStatus.BAD_REQUEST,
          );
        }
  
        return {
          message: result.message,
        };
      } catch (error) {
        if (error instanceof HttpException) {
          throw error;
        }
        throw new HttpException(
          'Internal server error',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
    }
  
    @Delete('cart/clear')
    @ApiBearerAuth()
    @ApiOperation({ summary: 'Clear entire cart' })
    @ApiResponse({ status: 200, description: 'Cart cleared successfully' })
    async clearCart(@Headers('authorization') authorization?: string) {
      try {
        if (!authorization) {
          throw new HttpException('Authorization header required', HttpStatus.UNAUTHORIZED);
        }
  
        const userId = this.extractUserIdFromToken(authorization);
  
        const result = await firstValueFrom(
          this.orderServiceClient.send('cart.clear', { userId }),
        );
  
        if (!result.success) {
          throw new HttpException(
            result.error || 'Failed to clear cart',
            HttpStatus.BAD_REQUEST,
          );
        }
  
        return {
          message: result.message,
        };
      } catch (error) {
        if (error instanceof HttpException) {
          throw error;
        }
        throw new HttpException(
          'Internal server error',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
    }
  
    // ================================
    // ORDER ENDPOINTS
    // ================================
  
    @Post('create')
    @ApiBearerAuth()
    @ApiOperation({ summary: 'Create order from cart' })
    @ApiResponse({ status: 201, description: 'Order created successfully' })
    async createOrder(
      @Body() createOrderDto: CreateOrderDto,
      @Headers('authorization') authorization?: string,
    ) {
      try {
        if (!authorization) {
          throw new HttpException('Authorization header required', HttpStatus.UNAUTHORIZED);
        }
  
        const userId = this.extractUserIdFromToken(authorization);
  
        const result = await firstValueFrom(
          this.orderServiceClient.send('order.create', {
            userId,
            ...createOrderDto,
          }),
        );
  
        if (!result.success) {
          throw new HttpException(
            result.error || 'Failed to create order',
            HttpStatus.BAD_REQUEST,
          );
        }
  
        return {
          message: result.message,
          order: result.data,
        };
      } catch (error) {
        if (error instanceof HttpException) {
          throw error;
        }
        throw new HttpException(
          'Internal server error',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
    }
  
    @Post('checkout')
    @ApiBearerAuth()
    @ApiOperation({ summary: 'Process order checkout with payment (Saga)' })
    @ApiResponse({ status: 200, description: 'Checkout initiated successfully' })
    async checkout(
      @Body() checkoutDto: CheckoutDto,
      @Headers('authorization') authorization?: string,
    ) {
      try {
        if (!authorization) {
          throw new HttpException('Authorization header required', HttpStatus.UNAUTHORIZED);
        }
  
        const userId = this.extractUserIdFromToken(authorization);
  
        // Start the checkout saga
        const result = await firstValueFrom(
          this.orderServiceClient.send('saga.checkout', {
            userId,
            ...checkoutDto,
          }),
        );
  
        if (!result.success) {
          throw new HttpException(
            result.error || 'Failed to process checkout',
            HttpStatus.BAD_REQUEST,
          );
        }
  
        return {
          message: result.message,
          saga: result.data,
        };
      } catch (error) {
        if (error instanceof HttpException) {
          throw error;
        }
        throw new HttpException(
          'Internal server error',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
    }
  
    @Get('my-orders')
    @ApiBearerAuth()
    @ApiOperation({ summary: 'Get current user orders' })
    @ApiResponse({ status: 200, description: 'Orders retrieved successfully' })
    async getMyOrders(
      @Query() searchDto: OrderSearchDto,
      @Headers('authorization') authorization?: string,
    ) {
      try {
        if (!authorization) {
          throw new HttpException('Authorization header required', HttpStatus.UNAUTHORIZED);
        }
  
        const userId = this.extractUserIdFromToken(authorization);
  
        const result = await firstValueFrom(
          this.orderServiceClient.send('order.find-by-user', {
            userId,
            ...searchDto,
          }),
        );
  
        if (!result.success) {
          throw new HttpException(
            result.error || 'Failed to retrieve orders',
            HttpStatus.BAD_REQUEST,
          );
        }
  
        return {
          message: result.message,
          orders: result.data,
        };
      } catch (error) {
        if (error instanceof HttpException) {
          throw error;
        }
        throw new HttpException(
          'Internal server error',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
    }
  
    @Get(':orderId')
    @ApiBearerAuth()
    @ApiOperation({ summary: 'Get order by ID' })
    @ApiResponse({ status: 200, description: 'Order retrieved successfully' })
    async getOrder(
      @Param('orderId') orderId: string,
      @Headers('authorization') authorization?: string,
    ) {
      try {
        if (!authorization) {
          throw new HttpException('Authorization header required', HttpStatus.UNAUTHORIZED);
        }
  
        const userId = this.extractUserIdFromToken(authorization);
  
        const result = await firstValueFrom(
          this.orderServiceClient.send('order.find-by-id', {
            orderId,
            userId,
          }),
        );
  
        if (!result.success) {
          throw new HttpException(
            result.error || 'Order not found',
            HttpStatus.NOT_FOUND,
          );
        }
  
        return {
          message: result.message,
          order: result.data,
        };
      } catch (error) {
        if (error instanceof HttpException) {
          throw error;
        }
        throw new HttpException(
          'Internal server error',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
    }
  
    @Post(':orderId/cancel')
    @ApiBearerAuth()
    @ApiOperation({ summary: 'Cancel order (Saga compensation)' })
    @ApiResponse({ status: 200, description: 'Order cancellation initiated' })
    async cancelOrder(
      @Param('orderId') orderId: string,
      @Headers('authorization') authorization?: string,
    ) {
      try {
        if (!authorization) {
          throw new HttpException('Authorization header required', HttpStatus.UNAUTHORIZED);
        }
  
        const userId = this.extractUserIdFromToken(authorization);
  
        const result = await firstValueFrom(
          this.orderServiceClient.send('saga.cancel-order', {
            orderId,
            userId,
          }),
        );
  
        if (!result.success) {
          throw new HttpException(
            result.error || 'Failed to cancel order',
            HttpStatus.BAD_REQUEST,
          );
        }
  
        return {
          message: result.message,
          cancellation: result.data,
        };
      } catch (error) {
        if (error instanceof HttpException) {
          throw error;
        }
        throw new HttpException(
          'Internal server error',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
    }
  
    // ================================
    // SAGA STATUS ENDPOINTS
    // ================================
  
    @Get('saga/:sagaId/status')
    @ApiBearerAuth()
    @ApiOperation({ summary: 'Get saga execution status' })
    @ApiResponse({ status: 200, description: 'Saga status retrieved successfully' })
    async getSagaStatus(
      @Param('sagaId') sagaId: string,
      @Headers('authorization') authorization?: string,
    ) {
      try {
        if (!authorization) {
          throw new HttpException('Authorization header required', HttpStatus.UNAUTHORIZED);
        }
  
        const result = await firstValueFrom(
          this.orderServiceClient.send('saga.get-status', { sagaId }),
        );
  
        if (!result.success) {
          throw new HttpException(
            result.error || 'Saga not found',
            HttpStatus.NOT_FOUND,
          );
        }
  
        return {
          message: result.message,
          saga: result.data,
        };
      } catch (error) {
        if (error instanceof HttpException) {
          throw error;
        }
        throw new HttpException(
          'Internal server error',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
    }
  
    // ================================
    // ADMIN/ANALYTICS ENDPOINTS
    // ================================
  
    @Get('admin/analytics')
    @ApiBearerAuth()
    @ApiOperation({ summary: 'Get order analytics (admin only)' })
    @ApiResponse({ status: 200, description: 'Analytics retrieved successfully' })
    async getOrderAnalytics(
      @Query('startDate') startDate?: string,
      @Query('endDate') endDate?: string,
      @Query('eventId') eventId?: string,
      @Headers('authorization') authorization?: string,
    ) {
      try {
        if (!authorization) {
          throw new HttpException('Authorization header required', HttpStatus.UNAUTHORIZED);
        }
  
        const result = await firstValueFrom(
          this.orderServiceClient.send('order.analytics', {
            startDate,
            endDate,
            eventId,
          }),
        );
  
        if (!result.success) {
          throw new HttpException(
            result.error || 'Failed to retrieve analytics',
            HttpStatus.BAD_REQUEST,
          );
        }
  
        return {
          message: result.message,
          analytics: result.data,
        };
      } catch (error) {
        if (error instanceof HttpException) {
          throw error;
        }
        throw new HttpException(
          'Internal server error',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
    }
  
    // ================================
    // HELPER METHODS
    // ================================
  
    private extractUserIdFromToken(authorization: string): string {
      try {
        const token = authorization.replace('Bearer ', '');
        const base64Payload = token.split('.')[1];
        const payload = JSON.parse(Buffer.from(base64Payload, 'base64').toString());
        return payload.sub;
      } catch (error) {
        throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED);
      }
    }
  }