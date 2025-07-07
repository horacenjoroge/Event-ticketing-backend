// apps/api-gateway/src/tickets/tickets.module.ts
import { Module } from '@nestjs/common';
import { TicketsController } from './tickets.controller';
import { MicroserviceClientModule } from '../common/microservice-client.module';

@Module({
  imports: [
    MicroserviceClientModule, // ← RabbitMQ client for microservice communication
  ],
  controllers: [TicketsController],
})
export class TicketsModule {}