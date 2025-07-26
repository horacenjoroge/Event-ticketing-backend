//apps/api-gateway/src/payments/payments.controller.ts
import {
  Controller,
  Post,
  Get,
  Body,
  Param,
  Headers,
  HttpStatus,
  HttpException,
  UnauthorizedException,
  Inject,
  Logger,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { firstValueFrom } from 'rxjs';
import { CreatePaymentDto, RefundPaymentDto } from './dto';

@ApiTags('Payments')
@Controller('payments')
export class PaymentsController {
  private readonly logger = new Logger(PaymentsController.name);

  constructor(
    @Inject('PAYMENT_SERVICE') private readonly paymentClient: ClientProxy,
    @Inject('USER_SERVICE') private readonly userClient: ClientProxy,
  ) {}

  // Helper method to validate authentication with User Service
  private async validateAuth(authHeader: string) {
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      throw new UnauthorizedException('No valid authorization token provided');
    }

    const token = authHeader.replace('Bearer ', '');
    this.logger.log(`🔥 PAYMENTS: Validating token with User Service...`);

    try {
      const authResult = await firstValueFrom(
        this.userClient.send('auth.validate-token', { token })
      );

      if (!authResult.success) {
        this.logger.warn(`🔥 PAYMENTS: Token validation failed: ${authResult.message}`);
        throw new UnauthorizedException('Invalid or expired token');
      }

      this.logger.log(`🔥 PAYMENTS: Token validation successful for user: ${authResult.data.email}`);
      return authResult.data;
    } catch (error) {
      this.logger.error(`🔥 PAYMENTS: Auth validation error: ${error.message}`);
      throw new UnauthorizedException('Token validation failed');
    }
  }

  @Post()
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Process a payment' })
  @ApiResponse({ status: 201, description: 'Payment initiated successfully' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  async createPayment(
    @Headers('authorization') authHeader: string,
    @Body() createPaymentDto: CreatePaymentDto,
  ) {
    // Validate authentication with User Service
    const user = await this.validateAuth(authHeader);

    this.logger.log(`🔥 PAYMENTS: Processing payment for order ${createPaymentDto.orderId} by user ${user.id}`);

    // Include user info in payment request
    const paymentRequest = {
      ...createPaymentDto,
      userId: user.id,
      userEmail: user.email,
      customerName: `${user.firstName} ${user.lastName}`,
    };

    try {
      const result = await firstValueFrom(
        this.paymentClient.send('payment.process', {
          sagaExecutionId: null, // Direct payment, not saga
          stepNumber: 1,
          requestData: paymentRequest,
        })
      );

      if (!result.success) {
        throw new HttpException(result.message, HttpStatus.BAD_REQUEST);
      }

      return {
        message: 'Payment initiated successfully',
        data: result.data,
      };
    } catch (error) {
      this.logger.error(`🔥 PAYMENTS: Payment creation failed: ${error.message}`);
      throw new HttpException(
        'Payment processing failed',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get(':paymentId')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get payment by ID' })
  @ApiResponse({ status: 200, description: 'Payment retrieved successfully' })
  @ApiResponse({ status: 404, description: 'Payment not found' })
  async getPayment(
    @Headers('authorization') authHeader: string,
    @Param('paymentId') paymentId: string,
  ) {
    // Validate authentication
    const user = await this.validateAuth(authHeader);

    try {
      const result = await firstValueFrom(
        this.paymentClient.send('payment.status', { 
          paymentId,
          userId: user.id // Include user context for security
        })
      );

      if (!result.success) {
        throw new HttpException(result.message, HttpStatus.NOT_FOUND);
      }

      return {
        message: 'Payment retrieved successfully',
        data: result.data,
      };
    } catch (error) {
      throw new HttpException(
        'Payment not found',
        HttpStatus.NOT_FOUND,
      );
    }
  }

  @Get('order/:orderId')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get payment by order ID' })
  @ApiResponse({ status: 200, description: 'Payment retrieved successfully' })
  @ApiResponse({ status: 404, description: 'Payment not found' })
  async getPaymentByOrder(
    @Headers('authorization') authHeader: string,
    @Param('orderId') orderId: string,
  ) {
    // Validate authentication
    const user = await this.validateAuth(authHeader);

    try {
      const result = await firstValueFrom(
        this.paymentClient.send('payment.status', { 
          orderId,
          userId: user.id // Include user context for security
        })
      );

      if (!result.success) {
        throw new HttpException(result.message, HttpStatus.NOT_FOUND);
      }

      return {
        message: 'Payment retrieved successfully',
        data: result.data,
      };
    } catch (error) {
      throw new HttpException(
        'Payment not found',
        HttpStatus.NOT_FOUND,
      );
    }
  }

  @Post(':paymentId/refund')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Refund a payment' })
  @ApiResponse({ status: 200, description: 'Refund processed successfully' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 404, description: 'Payment not found' })
  async refundPayment(
    @Headers('authorization') authHeader: string,
    @Param('paymentId') paymentId: string,
    @Body() refundDto: RefundPaymentDto,
  ) {
    // Validate authentication
    const user = await this.validateAuth(authHeader);

    try {
      const refundRequest = {
        ...refundDto,
        paymentId,
        userId: user.id,
        refundedBy: user.email,
      };

      const result = await firstValueFrom(
        this.paymentClient.send('payment.refund', {
          requestData: refundRequest,
        })
      );

      if (!result.success) {
        throw new HttpException(result.message, HttpStatus.BAD_REQUEST);
      }

      return {
        message: 'Refund processed successfully',
        data: result.data,
      };
    } catch (error) {
      throw new HttpException(
        'Refund processing failed',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  // ========== PUBLIC ENDPOINTS (No Auth Required) ==========

  @Post('webhooks/stripe')
  @ApiOperation({ summary: 'Handle Stripe webhooks' })
  @ApiResponse({ status: 200, description: 'Webhook processed successfully' })
  async handleStripeWebhook(
    @Body() body: any,
    @Headers('stripe-signature') signature: string,
  ) {
    try {
      const result = await firstValueFrom(
        this.paymentClient.send('payment.webhook', {
          provider: 'stripe',
          eventType: body.type,
          eventData: body,
          signature,
        })
      );

      return { 
        message: 'Webhook processed successfully',
        success: result.success 
      };
    } catch (error) {
      throw new HttpException(
        'Webhook processing failed',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Post('webhooks/mpesa')
  @ApiOperation({ summary: 'Handle M-Pesa webhooks' })
  @ApiResponse({ status: 200, description: 'Webhook processed successfully' })
  async handleMpesaWebhook(@Body() body: any) {
    try {
      const result = await firstValueFrom(
        this.paymentClient.send('payment.webhook', {
          provider: 'mpesa',
          eventType: 'payment_status_update',
          eventData: body,
        })
      );

      return {
        ResultCode: 0,
        ResultDesc: 'Success',
      };
    } catch (error) {
      return {
        ResultCode: 1,
        ResultDesc: 'Failed',
      };
    }
  }

  @Post('webhooks/flutterwave')
  @ApiOperation({ summary: 'Handle Flutterwave webhooks' })
  @ApiResponse({ status: 200, description: 'Webhook processed successfully' })
  async handleFlutterwaveWebhook(
    @Body() body: any,
    @Headers('verif-hash') signature: string,
  ) {
    try {
      const result = await firstValueFrom(
        this.paymentClient.send('payment.webhook', {
          provider: 'flutterwave',
          eventType: body.event,
          eventData: body,
          signature,
        })
      );

      return { 
        message: 'Webhook processed successfully',
        success: result.success 
      };
    } catch (error) {
      throw new HttpException(
        'Webhook processing failed',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get('providers/list')
  @ApiOperation({ summary: 'Get supported payment providers' })
  @ApiResponse({ status: 200, description: 'Providers retrieved successfully' })
  async getSupportedProviders() {
    try {
      const result = await firstValueFrom(
        this.paymentClient.send('payment.providers.list', {})
      );

      return {
        message: 'Providers retrieved successfully',
        data: result.data,
      };
    } catch (error) {
      throw new HttpException(
        'Failed to retrieve providers',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get('providers/:provider/capabilities')
  @ApiOperation({ summary: 'Get payment provider capabilities' })
  @ApiResponse({ status: 200, description: 'Capabilities retrieved successfully' })
  async getProviderCapabilities(@Param('provider') provider: string) {
    try {
      const result = await firstValueFrom(
        this.paymentClient.send('payment.providers.capabilities', { provider })
      );

      return {
        message: 'Capabilities retrieved successfully',
        data: result.data,
      };
    } catch (error) {
      throw new HttpException(
        'Failed to retrieve capabilities',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get('health')
  @ApiOperation({ summary: 'Payment service health check' })
  @ApiResponse({ status: 200, description: 'Service is healthy' })
  async getHealth() {
    try {
      const result = await firstValueFrom(
        this.paymentClient.send('payment.health', {})
      );

      return {
        message: 'Payment service is healthy',
        data: result.data,
      };
    } catch (error) {
      return {
        message: 'Payment service is unhealthy',
        error: error.message,
      };
    }
  }
}