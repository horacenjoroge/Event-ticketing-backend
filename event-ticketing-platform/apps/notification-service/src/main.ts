// =====================================================
// apps/notification-service/src/main.ts
// =====================================================
import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { ValidationPipe, Logger } from '@nestjs/common';
import { NotificationServiceModule } from './notification-service.module';

async function bootstrap() {
  const logger = new Logger('NotificationService');

  // Create pure microservice (RabbitMQ only - no HTTP)
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    NotificationServiceModule,
    {
      transport: Transport.RMQ,
      options: {
        urls: [
          process.env.RABBITMQ_URL || 'amqp://admin:admin123@rabbitmq:5672',
        ],
        queue: 'notification_queue',
        queueOptions: {
          durable: true,
        },
        prefetchCount: 10,
        noAck: false,
      },
    },
  );

  app.useGlobalPipes(new ValidationPipe({
    transform: true,
    whitelist: true,
    forbidNonWhitelisted: true,
  }));

  await app.listen();

  logger.log('🚀 Notification Service (Microservice) is running!');
  logger.log('📡 Listening on: notification_queue');
  logger.log('🔌 Transport: RabbitMQ');
  logger.log(`📧 Brevo: ${process.env.BREVO_API_KEY ? '✅ Enabled' : '❌ Disabled'}`);
  logger.log(`📱 SMS: ${process.env.SMS_PROVIDER ? '✅ Enabled' : '❌ Not configured'}`);
  logger.log(`🌍 Environment: ${process.env.NODE_ENV || 'development'}`);
  logger.log(`🗄️  Database: ${process.env.NOTIFICATION_DATABASE_URL ? '✅ Connected' : '❌ Not configured'}`);
}

bootstrap().catch(error => {
  console.error('❌ Failed to start Notification Service:', error);
  process.exit(1);
});

process.on('SIGTERM', () => {
  console.log('📴 Notification Service shutting down...');
  process.exit(0);
});

process.on('SIGINT', () => {
  console.log('📴 Notification Service interrupted...');
  process.exit(0);
});
