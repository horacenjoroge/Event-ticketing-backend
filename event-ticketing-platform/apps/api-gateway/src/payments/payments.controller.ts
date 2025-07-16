// apps/api-gateway/src/payments/payments.controller.ts
import {
    Controller,
    Post,
    Get,
    Body,
    Param,
    Headers,
    Req,
    UseGuards,
    HttpStatus,
    HttpException,
    Logger,
    ValidationPipe,
    UsePipes,
  } from '@nestjs/common';
  import { ClientProxy } from '@nestjs/microservices';
  import { Inject } from '@nestjs/common';
  import { Request } from 'express';
  import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
  import { JwtAuthGuard } from '../auth/jwt-auth.guard';
  import { GetUser } from '../auth/get-user.decorator';
  import {
    CreatePaymentDto,
    RefundPaymentDto,
    PaymentResponseDto,
    RefundResponseDto,
  } from './dto';
  
  @ApiTags('payments')
  @Controller('payments')
  export class PaymentsController {
    private readonly logger = new Logger(PaymentsController.name);
  
    constructor(
      @Inject('PAYMENT_SERVICE') private readonly paymentClient: ClientProxy,
    ) {}
  
    // ========== PAYMENT PROCESSING ==========
  
    @Post()
    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth()
    @ApiOperation({ summary: 'Process a payment' })
    @ApiResponse({ status: 201, description: 'Payment initiated successfully' })
    @ApiResponse({ status: 400, description: 'Bad request' })
    @ApiResponse({ status: 401, description: 'Unauthorized' })
    @UsePipes(new ValidationPipe({ transform: true, whitelist: true }))
    async createPayment(
      @Body() createPaymentDto: CreatePaymentDto,
      @GetUser() user: any,
    ): Promise<{
      success: boolean;
      data?: PaymentResponseDto;
      message: string;
    }> {
      try {
        this.logger.log(`Processing payment for order ${createPaymentDto.orderId} by user ${user.userId}`);
  
        // Add user context to the payment request
        const paymentRequest = {
          ...createPaymentDto,
          userId: user.userId,
          customerEmail: createPaymentDto.customerEmail || user.email,
        };
  
        const response = await this.paymentClient
          .send('payment.process', {
            requestData: paymentRequest,
          })
          .toPromise();
  
        if (response.success) {
          return {
            success: true,
            data: response.data,
            message: 'Payment initiated successfully',
          };
        } else {
          throw new HttpException(
            response.message || 'Payment processing failed',
            HttpStatus.BAD_REQUEST,
          );
        }
      } catch (error) {
        this.logger.error(`Payment creation failed: ${error.message}`, error.stack);
        
        if (error instanceof HttpException) {
          throw error;
        }
        
        throw new HttpException(
          'Internal server error during payment processing',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
    }
  
    @Get(':paymentId')
    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth()
    @ApiOperation({ summary: 'Get payment by ID' })
    @ApiResponse({ status: 200, description: 'Payment retrieved successfully' })
    @ApiResponse({ status: 404, description: 'Payment not found' })
    async getPayment(
      @Param('paymentId') paymentId: string,
      @GetUser() user: any,
    ): Promise<{
      success: boolean;
      data?: PaymentResponseDto;
      message: string;
    }> {
      try {
        this.logger.log(`Getting payment ${paymentId} for user ${user.userId}`);
  
        const response = await this.paymentClient
          .send('payment.status', {
            paymentId,
            userId: user.userId, // For security - ensure user can only access their payments
          })
          .toPromise();
  
        if (response.success) {
          return {
            success: true,
            data: response.data,
            message: 'Payment retrieved successfully',
          };
        } else {
          throw new HttpException(
            response.message || 'Payment not found',
            HttpStatus.NOT_FOUND,
          );
        }
      } catch (error) {
        this.logger.error(`Failed to get payment: ${error.message}`, error.stack);
        
        if (error instanceof HttpException) {
          throw error;
        }
        
        throw new HttpException(
          'Internal server error',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
    }
  
    @Get('order/:orderId')
    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth()
    @ApiOperation({ summary: 'Get payment by order ID' })
    @ApiResponse({ status: 200, description: 'Payment retrieved successfully' })
    @ApiResponse({ status: 404, description: 'Payment not found' })
    async getPaymentByOrder(
      @Param('orderId') orderId: string,
      @GetUser() user: any,
    ): Promise<{
      success: boolean;
      data?: PaymentResponseDto;
      message: string;
    }> {
      try {
        this.logger.log(`Getting payment for order ${orderId} by user ${user.userId}`);
  
        const response = await this.paymentClient
          .send('payment.status', {
            orderId,
            userId: user.userId,
          })
          .toPromise();
  
        if (response.success) {
          return {
            success: true,
            data: response.data,
            message: 'Payment retrieved successfully',
          };
        } else {
          throw new HttpException(
            response.message || 'Payment not found',
            HttpStatus.NOT_FOUND,
          );
        }
      } catch (error) {
        this.logger.error(`Failed to get payment by order: ${error.message}`, error.stack);
        
        if (error instanceof HttpException) {
          throw error;
        }
        
        throw new HttpException(
          'Internal server error',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
    }
  
    @Post(':paymentId/refund')
    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth()
    @ApiOperation({ summary: 'Refund a payment' })
    @ApiResponse({ status: 200, description: 'Refund processed successfully' })
    @ApiResponse({ status: 400, description: 'Bad request' })
    @ApiResponse({ status: 404, description: 'Payment not found' })
    @UsePipes(new ValidationPipe({ transform: true, whitelist: true }))
    async refundPayment(
      @Param('paymentId') paymentId: string,
      @Body() refundDto: Omit<RefundPaymentDto, 'paymentId'>,
      @GetUser() user: any,
    ): Promise<{
      success: boolean;
      data?: RefundResponseDto;
      message: string;
    }> {
      try {
        this.logger.log(`Processing refund for payment ${paymentId} by user ${user.userId}`);
  
        const response = await this.paymentClient
          .send('payment.refund', {
            requestData: {
              ...refundDto,
              paymentId,
              userId: user.userId, // For security
            },
          })
          .toPromise();
  
        if (response.success) {
          return {
            success: true,
            data: response.data,
            message: 'Refund processed successfully',
          };
        } else {
          throw new HttpException(
            response.message || 'Refund processing failed',
            HttpStatus.BAD_REQUEST,
          );
        }
      } catch (error) {
        this.logger.error(`Refund failed: ${error.message}`, error.stack);
        
        if (error instanceof HttpException) {
          throw error;
        }
        
        throw new HttpException(
          'Internal server error during refund processing',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
    }
  
    // ========== PAYMENT PROVIDER INFORMATION ==========
  
    @Get('providers/list')
    @ApiOperation({ summary: 'Get supported payment providers' })
    @ApiResponse({ status: 200, description: 'Providers retrieved successfully' })
    async getSupportedProviders(): Promise<{
      success: boolean;
      data?: any;
      message: string;
    }> {
      try {
        const response = await this.paymentClient
          .send('payment.providers.list', {})
          .toPromise();
  
        return {
          success: true,
          data: response.data,
          message: 'Supported providers retrieved successfully',
        };
      } catch (error) {
        this.logger.error(`Failed to get providers: ${error.message}`, error.stack);
        throw new HttpException(
          'Failed to retrieve payment providers',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
    }
  
    @Get('providers/:provider/capabilities')
    @ApiOperation({ summary: 'Get payment provider capabilities' })
    @ApiResponse({ status: 200, description: 'Provider capabilities retrieved successfully' })
    async getProviderCapabilities(
      @Param('provider') provider: string,
    ): Promise<{
      success: boolean;
      data?: any;
      message: string;
    }> {
      try {
        const response = await this.paymentClient
          .send('payment.providers.capabilities', {
            provider,
          })
          .toPromise();
  
        return {
          success: true,
          data: response.data,
          message: 'Provider capabilities retrieved successfully',
        };
      } catch (error) {
        this.logger.error(`Failed to get provider capabilities: ${error.message}`, error.stack);
        throw new HttpException(
          'Failed to retrieve provider capabilities',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
    }
  
    // ========== WEBHOOK HANDLERS ==========
  
    @Post('webhooks/stripe')
    @ApiOperation({ summary: 'Handle Stripe webhooks' })
    @ApiResponse({ status: 200, description: 'Webhook processed successfully' })
    async handleStripeWebhook(
      @Req() request: Request,
      @Headers('stripe-signature') signature: string,
    ): Promise<{ received: boolean }> {
      try {
        this.logger.log('Received Stripe webhook');
  
        if (!signature) {
          throw new HttpException('Missing Stripe signature', HttpStatus.BAD_REQUEST);
        }
  
        // Get raw body for signature verification
        const payload = request.body;
  
        // Forward to payment service for processing
        const response = await this.paymentClient
          .send('payment.webhook', {
            provider: 'STRIPE',
            eventType: payload.type,
            eventData: payload,
            signature,
          })
          .toPromise();
  
        if (response.success) {
          return { received: true };
        } else {
          throw new HttpException(
            'Webhook processing failed',
            HttpStatus.INTERNAL_SERVER_ERROR,
          );
        }
      } catch (error) {
        this.logger.error(`Stripe webhook failed: ${error.message}`, error.stack);
        
        if (error instanceof HttpException) {
          throw error;
        }
        
        throw new HttpException(
          'Webhook processing failed',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
    }
  
    @Post('webhooks/mpesa')
    @ApiOperation({ summary: 'Handle M-Pesa webhooks' })
    @ApiResponse({ status: 200, description: 'Webhook processed successfully' })
    async handleMpesaWebhook(@Body() body: any): Promise<{
      ResultCode: number;
      ResultDesc: string;
    }> {
      try {
        this.logger.log('Received M-Pesa webhook');
  
        // Determine event type from M-Pesa webhook structure
        let eventType = 'unknown';
        
        if (body.Body?.stkCallback) {
          eventType = 'stkpush_callback';
        } else if (body.Body?.resultType) {
          eventType = 'reversal_callback';
        } else if (body.TransactionType) {
          eventType = 'c2b_confirmation';
        }
  
        // Forward to payment service for processing
        const response = await this.paymentClient
          .send('payment.webhook', {
            provider: 'MPESA',
            eventType,
            eventData: body,
          })
          .toPromise();
  
        // M-Pesa expects specific response format
        if (response.success) {
          return {
            ResultCode: 0,
            ResultDesc: 'Success',
          };
        } else {
          return {
            ResultCode: 1,
            ResultDesc: 'Failed to process webhook',
          };
        }
      } catch (error) {
        this.logger.error(`M-Pesa webhook failed: ${error.message}`, error.stack);
        
        // M-Pesa expects error response in specific format
        return {
          ResultCode: 1,
          ResultDesc: 'Failed to process webhook',
        };
      }
    }
  
    // ========== HEALTH CHECK ==========
  
    @Get('health')
    @ApiOperation({ summary: 'Payment service health check' })
    @ApiResponse({ status: 200, description: 'Payment service is healthy' })
    async healthCheck(): Promise<{
      success: boolean;
      data?: any;
      message: string;
    }> {
      try {
        const response = await this.paymentClient
          .send('payment.health', {})
          .toPromise();
  
        return {
          success: true,
          data: response.data,
          message: 'Payment service is healthy',
        };
      } catch (error) {
        this.logger.error(`Payment health check failed: ${error.message}`, error.stack);
        throw new HttpException(
          'Payment service is unhealthy',
          HttpStatus.SERVICE_UNAVAILABLE,
        );
      }
    }
  }