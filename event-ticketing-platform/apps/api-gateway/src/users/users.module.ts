// apps/api-gateway/src/users/users.module.ts
import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { MicroserviceClientModule } from '../common/microservice-client.module';

@Module({
  imports: [
    MicroserviceClientModule,  // ← Just need RabbitMQ client
  ],
  controllers: [UsersController],
})
export class UsersModule {}