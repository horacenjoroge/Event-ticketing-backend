// apps/payment-service/src/main.ts
import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { ValidationPipe, Logger } from '@nestjs/common';
import { PaymentServiceModule } from './payment-service.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const logger = new Logger('PaymentService');

  // Create application context to get config service
  const appContext = await NestFactory.createApplicationContext(
    PaymentServiceModule,
  );
  const configService = appContext.get(ConfigService);

  // Create microservice
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    PaymentServiceModule,
    {
      transport: Transport.RMQ,
      options: {
        urls: [
          configService.get<string>('RABBITMQ_URL') ||
            'amqp://admin:admin123@rabbitmq:5672',
        ],
        queue: 'payment_queue',
        queueOptions: {
          durable: false,
        },
        // Prefetch count for better load balancing
        prefetchCount: 10,
        // Enable message acknowledgment
        noAck: true,
      },
    },
  );

  // Also create HTTP server for metrics endpoint
  const httpApp = await NestFactory.create(PaymentServiceModule);
  
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
  const httpPort = process.env.PAYMENT_SERVICE_PORT || 3005;
  await httpApp.listen(httpPort);

  logger.log('🚀 Payment Service (Microservice) is running!');
  logger.log('📡 Listening on: payment_queue');
  logger.log('🔌 Transport: RabbitMQ');
  logger.log(`HTTP server running on port ${httpPort} for metrics`);
  logger.log(`📊 Metrics available at http://localhost:${httpPort}/metrics`);
  logger.log(`💚 Health check at http://localhost:${httpPort}/health`);
  logger.log(`💳 Stripe: ${process.env.STRIPE_SECRET_KEY ? '✅ Enabled' : '❌ Disabled'}`);
  logger.log(`📱 M-Pesa: ${process.env.MPESA_CONSUMER_KEY ? '✅ Enabled' : '❌ Disabled'}`);
  logger.log(`🌍 Environment: ${process.env.NODE_ENV || 'development'}`);
  logger.log(`🗄️  Database: ${process.env.DATABASE_URL ? '✅ Connected' : '❌ Not configured'}`);
}

bootstrap().catch(error => {
  console.error('❌ Failed to start Payment Service:', error);
  process.exit(1);
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('📴 Payment Service shutting down...');
  process.exit(0);
});

process.on('SIGINT', () => {
  console.log('📴 Payment Service interrupted...');
  process.exit(0);
});