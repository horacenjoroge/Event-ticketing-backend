// apps/user-service/src/user-service.module.ts
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [
        '../../.env',
        '.env',
        '.env.local',
      ],
    }),
    DatabaseModule,
    AuthModule,
    UsersModule,
  ],
})
export class UserServiceModule {}