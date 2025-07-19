// src/main.ts
import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { ValidationPipe, Logger } from '@nestjs/common';
import { PaymentServiceModule } from './payment-service.module';

async function bootstrap() {
  const logger = new Logger('PaymentService');

  // Create pure microservice (RabbitMQ only - no HTTP)
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    PaymentServiceModule,
    {
      transport: Transport.RMQ,
      options: {
        urls: [
          process.env.RABBITMQ_URL || 'amqp://admin:admin123@rabbitmq:5672',
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

  // Global validation pipe for incoming messages
  app.useGlobalPipes(new ValidationPipe({
    transform: true,
    whitelist: true,
    forbidNonWhitelisted: true,
  }));

  // Start the microservice
  await app.listen();

  logger.log('🚀 Payment Service (Microservice) is running!');
  logger.log('📡 Listening on: payment_queue');
  logger.log('🔌 Transport: RabbitMQ');
  logger.log(`💳 Stripe: ${process.env.STRIPE_SECRET_KEY ? '✅ Enabled' : '❌ Disabled'}`);
  logger.log(`📱 M-Pesa: ${process.env.MPESA_CONSUMER_KEY ? '✅ Enabled' : '❌ Disabled'}`);
  
  // Log environment
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