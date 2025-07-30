// apps/event-service/src/event-service.module.ts
import { Module, MiddlewareConsumer } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { EventServiceController } from './event-service.controller';
import { EventServiceService } from './event-service.service';
import { DatabaseModule } from './database/database.module';
import { EventsModule } from './events/events.module';
import { VenuesModule } from './venues/venues.module';
import { CategoriesModule } from './categories/categories.module';
import { PrometheusMiddleware, MetricsController } from '@app/common';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [
        '../../.env',
        '.env', 
        '.env.local'
      ],
    }),
    DatabaseModule,
    EventsModule,
    VenuesModule,
    CategoriesModule,
  ],
  controllers: [
    EventServiceController,
    MetricsController, // Add metrics controller from @app/common
  ],
  providers: [EventServiceService],
})
export class EventServiceModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(PrometheusMiddleware)
      .forRoutes('*');
  }
}