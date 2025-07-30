// apps/order-service/src/order-service.module.ts
import { Module, MiddlewareConsumer } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { DatabaseModule } from './database/database.module';
import { CartController } from './cart/cart.controller';
import { CartService } from './cart/cart.service';
import { OrderController } from './order/order.controller';
import { OrderService } from './order/order.service';
import { SagaController } from './saga/saga.controller';
import { SagaService } from './saga/saga.service';
import { CompensationService } from './saga/compensation.service';
import { PrometheusMiddleware, MetricsController } from '@app/common';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [
        '../../.env',
        '.env',
        '.env.local',
      ],
    }),
    DatabaseModule,
    ClientsModule.registerAsync([
      {
        name: 'TICKET_SERVICE',
        imports: [ConfigModule],
        useFactory: async (configService: ConfigService) => ({
          transport: Transport.RMQ,
          options: {
            urls: [
              configService.get<string>('RABBITMQ_URL') ||
                'amqp://admin:admin123@rabbitmq:5672',
            ],
            queue: 'ticket_queue',
            queueOptions: {
              durable: false,
            },
          },
        }),
        inject: [ConfigService],
      },
      {
        name: 'PAYMENT_SERVICE',
        imports: [ConfigModule],
        useFactory: async (configService: ConfigService) => ({
          transport: Transport.RMQ,
          options: {
            urls: [
              configService.get<string>('RABBITMQ_URL') ||
                'amqp://admin:admin123@rabbitmq:5672',
            ],
            queue: 'payment_queue',
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
          },
        }),
        inject: [ConfigService],
      },
    ]),
  ],
  controllers: [
    CartController, 
    OrderController, 
    SagaController,
    MetricsController, // Add metrics controller from @app/common
  ],
  providers: [CartService, OrderService, SagaService, CompensationService],
})
export class OrderServiceModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(PrometheusMiddleware)
      .forRoutes('*');
  }
}