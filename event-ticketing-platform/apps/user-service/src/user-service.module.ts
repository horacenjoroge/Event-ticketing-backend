// =====================================================
// apps/user-service/src/user-service.module.ts (UPDATED)
// =====================================================
import { Module, MiddlewareConsumer } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from './database/database.module';
import { PrometheusMiddleware, MetricsController } from '@app/common';

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
  controllers: [MetricsController], // Add metrics controller
})
export class UserServiceModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(PrometheusMiddleware)
      .forRoutes('*');
  }
}