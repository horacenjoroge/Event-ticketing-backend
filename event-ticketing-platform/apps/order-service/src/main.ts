// apps/order-service/src/main.ts
import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { OrderServiceModule } from './order-service.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const logger = new Logger('OrderService');

  // Create application context to get config service
  const appContext = await NestFactory.createApplicationContext(
    OrderServiceModule,
  );
  const configService = appContext.get(ConfigService);

  // Create microservice
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    OrderServiceModule,
    {
      transport: Transport.RMQ,
      options: {
        urls: [
          configService.get<string>('RABBITMQ_URL') ||
            'amqp://admin:admin123@rabbitmq:5672',
        ],
        queue: 'order_queue',
        queueOptions: {
          durable: false,
        },
      },
    },
  );

  // Also create HTTP server for metrics endpoint
  const httpApp = await NestFactory.create(OrderServiceModule);
  
  // Global validation pipe for both apps
  const validationPipe = new ValidationPipe({
    whitelist: true,
    transform: true,
    forbidNonWhitelisted: true,
  });

  app.useGlobalPipes(validationPipe);
  httpApp.useGlobalPipes(validationPipe);

  // Start microservice
  await app.listen();
  
  // Start HTTP server for metrics
  const httpPort = process.env.ORDER_SERVICE_PORT || 3004;
  await httpApp.listen(httpPort);

  logger.log('Order Service is listening on RabbitMQ order_queue');
  logger.log(`HTTP server running on port ${httpPort} for metrics`);
  logger.log(`📊 Metrics available at http://localhost:${httpPort}/metrics`);
  logger.log(`💚 Health check at http://localhost:${httpPort}/health`);
  logger.log(
    `Database URL: ${
      configService.get<string>('DATABASE_URL') ? 'Found' : 'Not found'
    }`,
  );
}

bootstrap().catch((error) => {
  console.error('Error starting order service:', error);
});