// apps/api-gateway/src/app.module.ts
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { EventsModule } from './events/events.module';
import { TicketsModule } from './tickets/tickets.module';
import { OrdersModule } from './orders/orders.module';         // ← Add this import
import { PaymentsModule } from './payments/payments.module';   // ← Add this import
import { NotificationsModule } from './notifications/notifications.module'; // ← Add this import
import { MicroserviceClientModule } from './common/microservice-client.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['../../.env'],
    }),
    MicroserviceClientModule,  // ← Provides RabbitMQ client for all services
    AuthModule,                // ← Auth endpoints
    UsersModule,               // ← User endpoints
    EventsModule,              // ← Event endpoints
    TicketsModule,             // ← Ticket endpoints
    OrdersModule,              // ← Order endpoints (Cart, Orders, Saga)
    PaymentsModule,            // ← Payment endpoints (Stripe, Refunds, Webhooks)
    NotificationsModule,       // ← Notification endpoints (Email, SMS, Push)
  ],
})
export class AppModule {}