// apps/order-service/src/cart/cart.service.ts
import { Injectable, NotFoundException, BadRequestException, Logger } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { ConfigService } from '@nestjs/config';
import { OrderItemType } from '../../prisma/generated/prisma';
import { Decimal } from '@prisma/client/runtime/library';

interface AddToCartData {
  userId: string;
  itemId: string;
  itemType: string;
  itemName: string;
  quantity: number;
  unitPrice: number;
}

@Injectable()
export class CartService {
  private readonly logger = new Logger(CartService.name);
  private readonly cartExpiryHours: number;

  constructor(
    private readonly prisma: PrismaService,
    private readonly configService: ConfigService,
  ) {
    this.cartExpiryHours = parseInt(configService.get('CART_EXPIRY_HOURS', '24'));
  }

  async getCart(userId: string) {
    this.logger.log(`Getting cart for user ${userId}`);

    const cart = await this.prisma.cart.findUnique({
      where: { userId },
      include: {
        items: {
          where: {
            expiresAt: {
              gt: new Date(),
            },
          },
          orderBy: { createdAt: 'desc' },
        },
      },
    });

    if (!cart) {
      return this.createCart(userId);
    }

    return this.calculateCartTotals(cart.id);
  }

  async addToCart(data: AddToCartData) {
    const { userId, itemId, itemType, itemName, quantity, unitPrice } = data;

    this.logger.log(`Adding ${quantity} x ${itemName} to cart for user ${userId}`);

    // Get or create cart
    let cart = await this.prisma.cart.findUnique({
      where: { userId },
      include: {
        items: {
          where: {
            expiresAt: {
              gt: new Date(),
            },
          },
        },
      },
    });

    if (!cart) {
      cart = await this.createCart(userId);
    }

    // Remove expired items from cart
    await this.removeExpiredItems(cart.id);

    // Check if item already exists in cart
    const existingItem = await this.prisma.cartItem.findFirst({
      where: {
        userId,
        itemId,
        itemType: itemType as OrderItemType,
        expiresAt: {
          gt: new Date(),
        },
      },
    });

    const totalPrice = new Decimal(unitPrice).mul(quantity);
    const expiresAt = new Date(Date.now() + this.cartExpiryHours * 60 * 60 * 1000);

    if (existingItem) {
      // Update existing item
      const newQuantity = existingItem.quantity + quantity;
      const newTotalPrice = new Decimal(unitPrice).mul(newQuantity);

      const updatedItem = await this.prisma.cartItem.update({
        where: { id: existingItem.id },
        data: {
          quantity: newQuantity,
          totalPrice: newTotalPrice,
          expiresAt,
        },
      });

      this.logger.log(`Updated cart item ${existingItem.id} quantity to ${newQuantity}`);
      return updatedItem;
    } else {
      // Create new item
      const cartItem = await this.prisma.cartItem.create({
        data: {
          cartId: cart.id,
          userId,
          itemType: itemType as OrderItemType,  // Cast to enum
          itemId,
          itemName,
          quantity,
          unitPrice: new Decimal(unitPrice),
          totalPrice,
          expiresAt,
        },
      });

      this.logger.log(`Added new cart item ${cartItem.id}`);
      return cartItem;
    }
  }

  async updateCartItem(userId: string, itemId: string, quantity: number) {
    return this.updateCartItemQuantity(userId, itemId, quantity);
  }

  async updateCartItemQuantity(userId: string, itemId: string, quantity: number) {
    this.logger.log(`Updating cart item ${itemId} quantity to ${quantity} for user ${userId}`);

    if (quantity <= 0) {
      throw new BadRequestException('Quantity must be greater than 0');
    }

    const cartItem = await this.prisma.cartItem.findFirst({
      where: {
        userId,
        itemId,
        expiresAt: {
          gt: new Date(),
        },
      },
    });

    if (!cartItem) {
      throw new NotFoundException('Cart item not found or expired');
    }

    const newTotalPrice = cartItem.unitPrice.mul(quantity);

    const updatedItem = await this.prisma.cartItem.update({
      where: { id: cartItem.id },
      data: {
        quantity,
        totalPrice: newTotalPrice,
      },
    });

    return updatedItem;
  }

  async removeFromCart(userId: string, itemId: string) {
    this.logger.log(`Removing item ${itemId} from cart for user ${userId}`);

    const cartItem = await this.prisma.cartItem.findFirst({
      where: {
        userId,
        itemId,
        expiresAt: {
          gt: new Date(),
        },
      },
    });

    if (!cartItem) {
      throw new NotFoundException('Cart item not found or expired');
    }

    await this.prisma.cartItem.delete({
      where: { id: cartItem.id },
    });

    return { message: 'Item removed from cart' };
  }

  async clearCart(userId: string) {
    this.logger.log(`Clearing cart for user ${userId}`);

    await this.prisma.cartItem.deleteMany({
      where: { userId },
    });

    return { message: 'Cart cleared' };
  }

  async getCartTotal(userId: string): Promise<number> {
    const result = await this.prisma.cartItem.aggregate({
      where: {
        userId,
        expiresAt: {
          gt: new Date(),
        },
      },
      _sum: {
        totalPrice: true,
      },
    });

    return result._sum.totalPrice?.toNumber() || 0;
  }

  async convertCartToOrderItems(userId: string, orderId: string) {
    this.logger.log(`Converting cart to order items for user ${userId}, order ${orderId}`);

    const cartItems = await this.prisma.cartItem.findMany({
      where: {
        userId,
        expiresAt: {
          gt: new Date(),
        },
      },
    });

    if (cartItems.length === 0) {
      throw new BadRequestException('Cart is empty or all items have expired');
    }

    // Create order items
    const orderItems = await Promise.all(
      cartItems.map(item =>
        this.prisma.orderItem.create({
          data: {
            orderId,
            itemType: item.itemType,
            itemId: item.itemId,
            itemName: item.itemName,
            quantity: item.quantity,
            unitPrice: item.unitPrice,
            totalPrice: item.totalPrice,
          },
        })
      )
    );

    // Update cart items to reference the order
    await this.prisma.cartItem.updateMany({
      where: {
        userId,
        id: {
          in: cartItems.map(item => item.id),
        },
      },
      data: {
        orderId,
      },
    });

    return orderItems;
  }

  private async createCart(userId: string) {
    this.logger.log(`Creating new cart for user ${userId}`);

    const expiresAt = new Date(Date.now() + this.cartExpiryHours * 60 * 60 * 1000);

    return this.prisma.cart.create({
      data: {
        userId,
        expiresAt,
      },
      include: {
        items: true,
      },
    });
  }

  private async removeExpiredItems(cartId: string) {
    const result = await this.prisma.cartItem.deleteMany({
      where: {
        cartId,
        expiresAt: {
          lt: new Date(),
        },
      },
    });

    if (result.count > 0) {
      this.logger.log(`Removed ${result.count} expired items from cart ${cartId}`);
    }
  }

  private async calculateCartTotals(cartId: string) {
    const cart = await this.prisma.cart.findUnique({
      where: { id: cartId },
      include: {
        items: {
          where: {
            expiresAt: {
              gt: new Date(),
            },
          },
        },
      },
    });

    if (!cart) {
      return null;
    }

    const totalItems = cart.items.reduce((sum, item) => sum + item.quantity, 0);
    const totalAmount = cart.items.reduce(
      (sum, item) => sum + item.totalPrice.toNumber(),
      0
    );

    return {
      ...cart,
      totalItems,
      totalAmount,
    };
  }
}