// =====================================================
// apps/notification-service/src/notification-service.module.ts
// =====================================================
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';

// Controllers
import { NotificationServiceController } from './notification-service.controller';
import { NotificationSagaController } from './saga/notification-saga.controller';

// Core service only (no duplicates)
import { NotificationService } from './core/notification.service';
import { NotificationSagaService } from './saga/notification-saga.service';

// Provider services
import { EmailService } from './providers/email.service';
import { SmsService } from './providers/sms.service';      // ← Keep this (existing file)
import { TemplateService } from './providers/template.service';

// SMS Provider (from sms folder)
import { SmsProvider } from './sms/sms';                  // ← ADD THIS LINE

// External providers
import { BrevoProvider } from './providers/brevo.provider';

// Database
import { PrismaService } from './database/prisma.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['../../.env', '.env', '.env.local'],
    }),
    
    ClientsModule.register([
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
    ]),
  ],
  controllers: [
    NotificationServiceController,
    NotificationSagaController,
  ],
  providers: [
    // Core services
    NotificationService,
    NotificationSagaService,
    
    // Provider services
    EmailService,
    SmsService,        // ← Keep this (from providers folder)
    TemplateService,
    
    // SMS Provider
    SmsProvider,       // ← ADD THIS LINE
    
    // Database
    PrismaService,
    
    // External providers
    BrevoProvider,
  ],
  exports: [
    NotificationService,
    EmailService,
    SmsService,
    PrismaService,
  ],
})
export class NotificationServiceModule {}