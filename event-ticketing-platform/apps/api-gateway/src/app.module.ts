// =====================================================
// apps/api-gateway/src/app.module.ts
// TESTING - Direct controller import
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
// import { NotificationsModule } from './notifications/notifications.module'; // ← Comment out
import { NotificationsController } from './notifications/notifications.controller'; // ← Add direct import
import { MicroserviceClientModule } from './common/microservice-client.module';

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
    // NotificationsModule, // ← Comment out
  ],
  controllers: [NotificationsController], // ← Add direct controller here
})
export class AppModule {}