// apps/api-gateway/src/orders/orders.module.ts
import { Module } from '@nestjs/common';
import { OrdersController } from './orders.controller';
import { MicroserviceClientModule } from '../common/microservice-client.module';

@Module({
  imports: [
    MicroserviceClientModule, // ← RabbitMQ clients for ORDER_SERVICE, TICKET_SERVICE, PAYMENT_SERVICE
  ],
  controllers: [OrdersController],
})
export class OrdersModule {}