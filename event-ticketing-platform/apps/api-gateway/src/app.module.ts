// apps/api-gateway/src/app.module.ts
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { MicroserviceClientModule } from './common/microservice-client.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['../../.env'],
    }),
    MicroserviceClientModule,  // ← Provides RabbitMQ client
    AuthModule,                // ← Auth endpoints
    UsersModule,               // ← User endpoints
  ],
})
export class AppModule {}