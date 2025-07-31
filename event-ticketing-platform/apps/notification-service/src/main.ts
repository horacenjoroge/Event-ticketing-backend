// apps/notification-service/src/main.ts
import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { ValidationPipe, Logger } from '@nestjs/common';
import { NotificationServiceModule } from './notification-service.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const logger = new Logger('NotificationService');

  // Create application context to get config service
  const appContext = await NestFactory.createApplicationContext(
    NotificationServiceModule,
  );
  const configService = appContext.get(ConfigService);

  // Create microservice
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    NotificationServiceModule,
    {
      transport: Transport.RMQ,
      options: {
        urls: [
          configService.get<string>('RABBITMQ_URL') ||
            'amqp://admin:admin123@rabbitmq:5672',
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

  // Also create HTTP server for metrics endpoint
  const httpApp = await NestFactory.create(NotificationServiceModule);
  
  // Global validation pipe for both apps
  const validationPipe = new ValidationPipe({
    transform: true,
    whitelist: true,
    forbidNonWhitelisted: true,
  });

  app.useGlobalPipes(validationPipe);
  httpApp.useGlobalPipes(validationPipe);

  // Start microservice
  await app.listen();
  
  // Start HTTP server for metrics
  const httpPort = process.env.NOTIFICATION_SERVICE_PORT || 3006;
  await httpApp.listen(httpPort);

  logger.log('🚀 Notification Service (Microservice) is running!');
  logger.log('📡 Listening on: notification_queue');
  logger.log('🔌 Transport: RabbitMQ');
  logger.log(`HTTP server running on port ${httpPort} for metrics`);
  logger.log(`📊 Metrics available at http://localhost:${httpPort}/metrics`);
  logger.log(`💚 Health check at http://localhost:${httpPort}/health`);
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