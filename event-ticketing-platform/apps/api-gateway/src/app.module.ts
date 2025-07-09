// apps/api-gateway/src/app.module.ts
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { EventsModule } from './events/events.module';
import { TicketsModule } from './tickets/tickets.module';
import { OrdersModule } from './orders/orders.module';
import { TestModule } from './test/test.module'; // ✅ Import TestModule
// import { PaymentsModule } from './payments/payments.module';   // ← Comment out
// import { NotificationsModule } from './notifications/notifications.module'; // ← Comment out
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
    TestModule, // ✅ Add TestModule here
    // PaymentsModule,            // ← Comment out
    // NotificationsModule,       // ← Comment out
  ],
})
export class AppModule {}