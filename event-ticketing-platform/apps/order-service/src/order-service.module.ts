// apps/order-service/src/order-service.module.ts
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { DatabaseModule } from './database/database.module';
import { CartController } from './cart/cart.controller';
import { CartService } from './cart/cart.service';
import { OrderController } from './order/order.controller';
import { OrderService } from './order/order.service';
import { SagaController } from './saga/saga.controller';
import { SagaService } from './saga/saga.service';
import { CompensationService } from './saga/compensation.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['../../.env'],
    }),
    DatabaseModule,
    ClientsModule.registerAsync([
      {
        name: 'TICKET_SERVICE',
        useFactory: () => ({
          transport: Transport.RMQ,
          options: {
            urls: [process.env.RABBITMQ_URL || 'amqp://admin:admin123@rabbitmq:5672'],
            queue: 'ticket_queue',
            queueOptions: {
              durable: false,
            },
          },
        }),
      },
      {
        name: 'PAYMENT_SERVICE',
        useFactory: () => ({
          transport: Transport.RMQ,
          options: {
            urls: [process.env.RABBITMQ_URL || 'amqp://admin:admin123@rabbitmq:5672'],
            queue: 'payment_queue',
            queueOptions: {
              durable: false,
            },
          },
        }),
      },
      {
        name: 'NOTIFICATION_SERVICE',
        useFactory: () => ({
          transport: Transport.RMQ,
          options: {
            urls: [process.env.RABBITMQ_URL || 'amqp://admin:admin123@rabbitmq:5672'],
            queue: 'notification_queue',
            queueOptions: {
              durable: false,
            },
          },
        }),
      },
    ]),
  ],
  controllers: [CartController, OrderController, SagaController],
  providers: [CartService, OrderService, SagaService, CompensationService],
})
export class OrderServiceModule {}