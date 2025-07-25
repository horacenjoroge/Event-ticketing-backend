// apps/payment-service/src/payment-service.module.ts
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';

// Controllers
import { PaymentController } from './controllers/payment.controller';

// Services
import { PaymentService } from './services/payment.service';
import { PaymentProviderService } from './services/payment-provider.service';

// Providers
import { StripeProvider } from './providers/stripe.provider';
import { MpesaProvider } from './providers/mpesa.provider';
import { FlutterwaveProvider } from './providers/flutterwave.provider';

// Database
import { PrismaService } from './database/prisma.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['../../.env', '.env', '.env.local'],
    }),
    
    // RabbitMQ clients for communicating with other services
    ClientsModule.registerAsync([
      {
        name: 'ORDER_SERVICE',
        imports: [ConfigModule],
        useFactory: async (configService: ConfigService) => ({
          transport: Transport.RMQ,
          options: {
            urls: [
              configService.get<string>('RABBITMQ_URL') ||
                'amqp://admin:admin123@rabbitmq:5672',
            ],
            queue: 'order_queue',
            queueOptions: {
              durable: false,
            },
          },
        }),
        inject: [ConfigService],
      },
      {
        name: 'NOTIFICATION_SERVICE',
        imports: [ConfigModule],
        useFactory: async (configService: ConfigService) => ({
          transport: Transport.RMQ,
          options: {
            urls: [
              configService.get<string>('RABBITMQ_URL') ||
                'amqp://admin:admin123@rabbitmq:5672',
            ],
            queue: 'notification_queue',
            // ← Removed queueOptions - let notification service create the queue
          },
        }),
        inject: [ConfigService],
      },
    ]),
  ],
  controllers: [
    PaymentController,
  ],
  providers: [
    // Core services
    PaymentService,
    PaymentProviderService,
    PrismaService,
    
    // Payment providers
    StripeProvider,
    MpesaProvider,
    FlutterwaveProvider,
  ],
  exports: [
    PaymentService,
    PaymentProviderService,
    PrismaService,
  ],
})
export class PaymentServiceModule {}