// src/payment-service.module.ts
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';

// Controllers
import { PaymentController } from './controllers/payment.controller';

// Services
import { PaymentService } from './services/payment.service';
import { PaymentProviderService } from './services/payment-provider.service';

// Providers
import { StripeProvider } from './providers/stripe.provider';
import { MpesaProvider } from './providers/mpesa.provider';

// Database
import { PrismaService } from './database/prisma.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['../../.env', '.env', '.env.local'],
    }),
    
    // RabbitMQ clients for communicating with other services
    ClientsModule.register([
      {
        name: 'ORDER_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: [process.env.RABBITMQ_URL || 'amqp://admin:admin123@rabbitmq:5672'],
          queue: 'order_queue',
          queueOptions: {
            durable: false,
          },
        },
      },
      {
        name: 'NOTIFICATION_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: [process.env.RABBITMQ_URL || 'amqp://admin:admin123@rabbitmq:5672'],
          queue: 'notification_queue',
          queueOptions: {
            durable: false,
          },
        },
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
  ],
  exports: [
    PaymentService,
    PaymentProviderService,
    PrismaService,
  ],
})
export class PaymentServiceModule {}
