// apps/notification-service/src/notification-service.module.ts
import { Module, MiddlewareConsumer } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { NotificationServiceController } from './notification-service.controller';
import { PrometheusMiddleware, MetricsController } from '@app/common';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [
        '../../.env',
        '.env', 
        '.env.local'
      ],
    }),
  ],
  controllers: [
    NotificationServiceController, // Your existing controller already has HTTP endpoints
    MetricsController, // Add metrics controller from @app/common
  ],
  providers: [
    // No providers needed - everything handled in controller
  ],
  exports: [
    // Nothing to export
  ],
})
export class NotificationServiceModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(PrometheusMiddleware)
      .forRoutes('*');
  }
}