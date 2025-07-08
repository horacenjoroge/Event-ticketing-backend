// apps/order-service/src/cart/cart.controller.ts
import { Controller, Logger } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CartService } from './cart.service';

interface AddToCartPayload {
  userId: string;
  itemId: string;
  itemType: string;
  quantity: number;
  itemName: string;
  unitPrice: number;
}

interface UpdateCartItemPayload {
  userId: string;
  itemId: string;
  quantity: number;
}

interface RemoveFromCartPayload {
  userId: string;
  itemId: string;
}

interface GetCartPayload {
  userId: string;
}

@Controller()
export class CartController {
  private readonly logger = new Logger(CartController.name);

  constructor(private readonly cartService: CartService) {}

  @MessagePattern('cart.get')
  async getCart(@Payload() payload: GetCartPayload) {
    try {
      this.logger.log(`Getting cart for user: ${payload.userId}`);

      const cart = await this.cartService.getCart(payload.userId);

      return {
        success: true,
        data: cart,
        message: 'Cart retrieved successfully',
      };
    } catch (error) {
      this.logger.error(`Failed to get cart: ${error.message}`, error.stack);
      return {
        success: false,
        error: error.message,
        message: 'Failed to retrieve cart',
      };
    }
  }

  @MessagePattern('cart.add-item')
  async addToCart(@Payload() payload: AddToCartPayload) {
    try {
      this.logger.log(`Adding item to cart: ${JSON.stringify(payload)}`);

      const cartItem = await this.cartService.addToCart(payload);

      return {
        success: true,
        data: cartItem,
        message: 'Item added to cart successfully',
      };
    } catch (error) {
      this.logger.error(`Failed to add item to cart: ${error.message}`, error.stack);
      return {
        success: false,
        error: error.message,
        message: 'Failed to add item to cart',
      };
    }
  }

  @MessagePattern('cart.update-item')
  async updateCartItem(@Payload() payload: UpdateCartItemPayload) {
    try {
      this.logger.log(`Updating cart item: ${JSON.stringify(payload)}`);

      const cartItem = await this.cartService.updateCartItem(
        payload.userId,
        payload.itemId,
        payload.quantity,
      );

      return {
        success: true,
        data: cartItem,
        message: 'Cart item updated successfully',
      };
    } catch (error) {
      this.logger.error(`Failed to update cart item: ${error.message}`, error.stack);
      return {
        success: false,
        error: error.message,
        message: 'Failed to update cart item',
      };
    }
  }

  @MessagePattern('cart.remove-item')
  async removeFromCart(@Payload() payload: RemoveFromCartPayload) {
    try {
      this.logger.log(`Removing item from cart: ${JSON.stringify(payload)}`);

      await this.cartService.removeFromCart(payload.userId, payload.itemId);

      return {
        success: true,
        data: null,
        message: 'Item removed from cart successfully',
      };
    } catch (error) {
      this.logger.error(`Failed to remove item from cart: ${error.message}`, error.stack);
      return {
        success: false,
        error: error.message,
        message: 'Failed to remove item from cart',
      };
    }
  }

  @MessagePattern('cart.clear')
  async clearCart(@Payload() payload: GetCartPayload) {
    try {
      this.logger.log(`Clearing cart for user: ${payload.userId}`);

      await this.cartService.clearCart(payload.userId);

      return {
        success: true,
        data: null,
        message: 'Cart cleared successfully',
      };
    } catch (error) {
      this.logger.error(`Failed to clear cart: ${error.message}`, error.stack);
      return {
        success: false,
        error: error.message,
        message: 'Failed to clear cart',
      };
    }
  }

  @MessagePattern('cart.get-total')
  async getCartTotal(@Payload() payload: GetCartPayload) {
    try {
      this.logger.log(`Getting cart total for user: ${payload.userId}`);

      const total = await this.cartService.getCartTotal(payload.userId);

      return {
        success: true,
        data: { total },
        message: 'Cart total calculated successfully',
      };
    } catch (error) {
      this.logger.error(`Failed to calculate cart total: ${error.message}`, error.stack);
      return {
        success: false,
        error: error.message,
        message: 'Failed to calculate cart total',
      };
    }
  }
}