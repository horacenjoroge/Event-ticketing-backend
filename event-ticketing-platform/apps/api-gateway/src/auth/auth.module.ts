// apps/api-gateway/src/auth/auth.module.ts
import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { MicroserviceClientModule } from '../common/microservice-client.module';

@Module({
  imports: [
    MicroserviceClientModule,  // Only need RabbitMQ client for USER_SERVICE
  ],
  controllers: [AuthController],
  // No providers needed - no JWT Guard, no local auth logic
})
export class AuthModule {}