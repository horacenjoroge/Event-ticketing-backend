// =====================================================
// apps/api-gateway/src/app.module.ts
// FIXED - Removed console.log from imports array
// =====================================================
import { Module } from '@nestjs/common';
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

console.log('🔍 DEBUG: Loading NotificationsModule...', NotificationsModule); // ✅ Outside the decorator

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
    NotificationsModule, // ✅ Clean import, no console.log here
  ],
})
export class AppModule {
  constructor() {
    console.log('🔍 DEBUG: AppModule constructor called');
    console.log('🔍 DEBUG: NotificationsModule loaded:', !!NotificationsModule); // ✅ In constructor
  }
}