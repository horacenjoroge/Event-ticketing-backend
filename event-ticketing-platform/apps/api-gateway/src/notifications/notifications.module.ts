// =====================================================
// apps/api-gateway/src/notifications/notifications.module.ts

// =====================================================
import { Module } from '@nestjs/common';
import { NotificationsController } from './notifications.controller';
import { MicroserviceClientModule } from '../common/microservice-client.module';

@Module({
  imports: [
    MicroserviceClientModule, // ← RabbitMQ clients including NOTIFICATION_SERVICE
  ],
  controllers: [NotificationsController],
})
export class NotificationsModule {}