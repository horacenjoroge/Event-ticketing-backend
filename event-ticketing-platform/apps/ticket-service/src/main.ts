// apps/ticket-service/src/main.ts
import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { TicketServiceModule } from './ticket-service.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const logger = new Logger('TicketService');

  // Create application context to get config service
  const appContext = await NestFactory.createApplicationContext(TicketServiceModule);
  const configService = appContext.get(ConfigService);

  // Create microservice
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    TicketServiceModule,
    {
      transport: Transport.RMQ,
      options: {
        urls: [
          configService.get<string>('RABBITMQ_URL') ||
            'amqp://admin:admin123@localhost:5672',
        ],
        queue: 'ticket_queue',
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
  logger.log('Ticket microservice is listening...');
  logger.log(`Service configured for port: ${configService.get<string>('TICKET_SERVICE_PORT') || '3003'}`);
  logger.log(
    `Database URL: ${
      configService.get<string>('TICKET_DATABASE_URL') ? 'Found' : 'Not found'
    }`,
  );
  logger.log(
    `RabbitMQ URL: ${
      configService.get<string>('RABBITMQ_URL') ? 'Connected' : 'Not connected'
    }`,
  );
  logger.log(
    `Redis URL: ${
      configService.get<string>('REDIS_URL') ? 'Connected' : 'Not connected'
    }`,
  );
}

bootstrap().catch((error) => {
  console.error('Error starting ticket service:', error);
});