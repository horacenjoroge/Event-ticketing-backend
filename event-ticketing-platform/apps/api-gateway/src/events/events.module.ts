// apps/api-gateway/src/events/events.module.ts
import { Module } from '@nestjs/common';
import { EventsController } from './events.controller';
import { MicroserviceClientModule } from '../common/microservice-client.module';

@Module({
  imports: [
    MicroserviceClientModule,  // ← Just need RabbitMQ client
  ],
  controllers: [EventsController],
})
export class EventsModule {}