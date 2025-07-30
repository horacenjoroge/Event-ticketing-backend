// =====================================================
// apps/user-service/src/main.ts (UPDATED)
// =====================================================
import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { UserServiceModule } from './user-service.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const logger = new Logger('UserService');

  // Create application context to get config service
  const appContext = await NestFactory.createApplicationContext(
    UserServiceModule,
  );
  const configService = appContext.get(ConfigService);

  // Create microservice
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    UserServiceModule,
    {
      transport: Transport.RMQ,
      options: {
        urls: [
          configService.get<string>('RABBITMQ_URL') ||
            'amqp://admin:admin123@localhost:5672',
        ],
        queue: 'user_queue',
        queueOptions: {
          durable: false,
        },
      },
    },
  );

  // Also create HTTP server for metrics endpoint
  const httpApp = await NestFactory.create(UserServiceModule);
  
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
  const httpPort = process.env.USER_SERVICE_PORT || 3001;
  await httpApp.listen(httpPort);

  logger.log('User microservice is listening...');
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
  console.error('Error starting user service:', error);
});
