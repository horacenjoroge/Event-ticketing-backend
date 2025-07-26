// =====================================================
// apps/notification-service/src/notification-service.module.ts
// CLEAN SIMPLE VERSION - Only what we need for the working solution
// =====================================================
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { NotificationServiceController } from './notification-service.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['../../.env', '.env', '.env.local'],
    }),
  ],
  controllers: [
    NotificationServiceController, // Only controller we need
  ],
  providers: [
    // No providers needed - everything handled in controller
  ],
  exports: [
    // Nothing to export
  ],
})
export class NotificationServiceModule {}