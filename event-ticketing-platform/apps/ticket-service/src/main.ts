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
            'amqp://admin:admin123@rabbitmq:5672',
        ],
        queue: 'ticket_queue',
        queueOptions: {
          durable: false,
        },
      },
    },
  );

  // Also create HTTP server for metrics endpoint
  const httpApp = await NestFactory.create(TicketServiceModule);
  
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
  const httpPort = process.env.TICKET_SERVICE_PORT || 3003;
  await httpApp.listen(httpPort);

  logger.log('Ticket Service is listening on RabbitMQ ticket_queue');
  logger.log(`HTTP server running on port ${httpPort} for metrics`);
  logger.log(`📊 Metrics available at http://localhost:${httpPort}/metrics`);
  logger.log(`💚 Health check at http://localhost:${httpPort}/health`);
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