// apps/event-service/src/main.ts
import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { EventServiceModule } from './event-service.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const logger = new Logger('EventService');

  // Create application context to get config service
  const appContext = await NestFactory.createApplicationContext(
    EventServiceModule,
  );
  const configService = appContext.get(ConfigService);

  // Create microservice
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    EventServiceModule,
    {
      transport: Transport.RMQ,
      options: {
        urls: [
          configService.get<string>('RABBITMQ_URL') ||
            'amqp://admin:admin123@rabbitmq:5672',
        ],
        queue: 'event_queue',
        queueOptions: {
          durable: false,
        },
      },
    },
  );

  // Also create HTTP server for metrics endpoint
  const httpApp = await NestFactory.create(EventServiceModule);
  
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
  const httpPort = process.env.EVENT_SERVICE_PORT || 3002;
  await httpApp.listen(httpPort);

  logger.log('Event microservice is listening...');
  logger.log(`HTTP server running on port ${httpPort} for metrics`);
  logger.log(`📊 Metrics available at http://localhost:${httpPort}/metrics`);
  logger.log(`💚 Health check at http://localhost:${httpPort}/health`);
  logger.log(
    `Database URL: ${
      configService.get<string>('EVENT_DATABASE_URL') ? 'Found' : 'Not found'
    }`,
  );
}

bootstrap().catch((error) => {
  console.error('Error starting event service:', error);
});