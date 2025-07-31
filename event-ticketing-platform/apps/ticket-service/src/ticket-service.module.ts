// apps/ticket-service/src/ticket-service.module.ts
import { Module, MiddlewareConsumer } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { TicketServiceController } from './ticket-service.controller';
import { TicketServiceService } from './ticket-service.service';
import { DatabaseModule } from './database/database.module';
import { TicketTypesModule } from './ticket-types/ticket-types.module';
import { InventoryModule } from './inventory/inventory.module';
import { PrometheusMiddleware, MetricsController } from '@app/common';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['../../.env', '.env', '.env.local'],
    }),
    DatabaseModule,
    TicketTypesModule,
    InventoryModule,
    // Add the ClientsModule to register ORDER_SERVICE
    ClientsModule.register([
      {
        name: 'ORDER_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: [process.env.RABBITMQ_URL || 'amqp://localhost:5672'],
          queue: 'order_queue',
          queueOptions: {
            durable: false,
          },
        },
      },
    ]),
  ],
  controllers: [
    TicketServiceController,
    MetricsController, // Add metrics controller from @app/common
  ],
  providers: [TicketServiceService],
})
export class TicketServiceModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(PrometheusMiddleware)
      .forRoutes('*');
  }
}