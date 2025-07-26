// apps/api-gateway/src/users/users.module.ts
import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { MicroserviceClientModule } from '../common/microservice-client.module';

@Module({
  imports: [
    MicroserviceClientModule,  // Only need RabbitMQ client for USER_SERVICE
  ],
  controllers: [UsersController],
  // No AuthModule import needed
})
export class UsersModule {}