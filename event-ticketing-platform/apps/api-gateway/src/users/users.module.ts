// apps/api-gateway/src/users/users.module.ts
import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { AuthModule } from '../auth/auth.module';
import { MicroserviceClientModule } from '../common/microservice-client.module';

@Module({
  imports: [
    MicroserviceClientModule,  // ← Gets access to USER_SERVICE client
    AuthModule,                // ← Gets access to AuthGuard
  ],
  controllers: [UsersController],
})
export class UsersModule {}