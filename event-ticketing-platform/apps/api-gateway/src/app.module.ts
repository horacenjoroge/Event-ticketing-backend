// =====================================================
// apps/api-gateway/src/app.module.ts (UPDATED)
// =====================================================
import { Module, MiddlewareConsumer } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { EventsModule } from './events/events.module';
import { TicketsModule } from './tickets/tickets.module';
import { OrdersModule } from './orders/orders.module';
import { TestModule } from './test/test.module';
import { PaymentsModule } from './payments/payments.module';
import { NotificationsModule } from './notifications/notifications.module';
import { MicroserviceClientModule } from './common/microservice-client.module';
import { PrometheusMiddleware, MetricsController } from '@app/common';

console.log('🔍 DEBUG: Loading NotificationsModule...', NotificationsModule);

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['../../.env'],
    }),
    MicroserviceClientModule,
    AuthModule,
    UsersModule,
    EventsModule,
    TicketsModule,
    OrdersModule,
    TestModule,
    PaymentsModule,
    NotificationsModule,
  ],
  controllers: [MetricsController], // Add metrics controller
})
export class AppModule {
  constructor() {
    console.log('🔍 DEBUG: AppModule constructor called');
    console.log('🔍 DEBUG: NotificationsModule loaded:', !!NotificationsModule);
  }

  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(PrometheusMiddleware)
      .forRoutes('*');
  }
}