// apps/event-service/src/main.ts
import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { EventServiceModule } from './event-service.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const logger = new Logger('EventService');

  // Create application context to get config service
  const appContext =
    await NestFactory.createApplicationContext(EventServiceModule);
  const configService = appContext.get(ConfigService);

  // Create microservice
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    EventServiceModule,
    {
      transport: Transport.RMQ,
      options: {
        urls: [
          configService.get<string>('RABBITMQ_URL') ||
            'amqp://admin:admin123@localhost:5672',
        ],
        queue: 'event_queue',  // ← Different queue for Event Service
        queueOptions: {
          durable: false,
        },
      },
    },
  );

  // Global validation pipe
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
    }),
  );

  await app.listen();
  logger.log('Event microservice is listening...');
  logger.log(
    `Database URL: ${
      configService.get<string>('EVENT_DATABASE_URL') ? 'Found' : 'Not found'
    }`,
  );
}

bootstrap().catch((error) => {
  console.error('Error starting event service:', error);
});