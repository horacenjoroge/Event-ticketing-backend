// =====================================================
// apps/notification-service/src/notification-service.module.ts
// Updated with saga integration
// =====================================================
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';

// Controllers
import { NotificationServiceController } from './notification-service.controller';
import { NotificationController } from './notification/notification.controller';
import { EmailController } from './email/email.controller';
import { NotificationSagaController } from './saga/notification-saga.controller';

// Services
import { NotificationServiceService } from './notification-service.service';
import { NotificationService } from './notification/notification.service';
import { EmailService } from './email/email.service';
import { TemplateService } from './template/template.service';
import { SmsService } from './sms/sms.service';
import { NotificationSagaService } from './saga/notification-saga.service';

// Providers
import { BrevoProvider } from './brevo/brevo.provider';
import { SmsProvider } from './sms/sms';

// Database
import { PrismaService } from './database/prisma.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['../../.env', '.env', '.env.local'],
    }),
    
    // RabbitMQ clients for communicating with other services
    ClientsModule.register([
      {
        name: 'PAYMENT_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: [process.env.RABBITMQ_URL || 'amqp://admin:admin123@rabbitmq:5672'],
          queue: 'payment_queue',
          queueOptions: {
            durable: false,
          },
        },
      },
      {
        name: 'ORDER_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: [process.env.RABBITMQ_URL || 'amqp://admin:admin123@rabbitmq:5672'],
          queue: 'order_queue',
          queueOptions: {
            durable: false,
          },
        },
      },
      {
        name: 'TICKET_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: [process.env.RABBITMQ_URL || 'amqp://admin:admin123@rabbitmq:5672'],
          queue: 'ticket_queue',
          queueOptions: {
            durable: false,
          },
        },
      },
    ]),
  ],
  controllers: [
    // Main service controller
    NotificationServiceController,
    
    // Feature controllers
    NotificationController,
    EmailController,
    
    // Saga integration controller
    NotificationSagaController,
  ],
  providers: [
    // Core services
    NotificationServiceService,
    NotificationService,
    EmailService,
    TemplateService,
    SmsService,
    PrismaService,
    
    // Saga integration service
    NotificationSagaService,
    
    // Notification providers
    BrevoProvider,
    SmsProvider,
  ],
  exports: [
    // Export main services for potential use by other modules
    NotificationServiceService,
    NotificationService,
    EmailService,
    TemplateService,
    SmsService,
    PrismaService,
    
    // Export saga service for integration
    NotificationSagaService,
  ],
})
export class NotificationServiceModule {}