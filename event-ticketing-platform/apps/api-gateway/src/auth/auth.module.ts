// apps/api-gateway/src/auth/auth.module.ts
import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { MicroserviceClientModule } from '../common/microservice-client.module';

@Module({
  imports: [
    MicroserviceClientModule,  // ← Just need RabbitMQ client
  ],
  controllers: [AuthController],
})
export class AuthModule {}