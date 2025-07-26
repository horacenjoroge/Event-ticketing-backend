// apps/api-gateway/src/payments/payments.module.ts
import { Module } from '@nestjs/common';
import { PaymentsController } from './payments.controller';
import { MicroserviceClientModule } from '../common/microservice-client.module';

@Module({
  imports: [
    MicroserviceClientModule,  // Need both PAYMENT_SERVICE and USER_SERVICE
  ],
  controllers: [PaymentsController],
  // No AuthModule import needed
})
export class PaymentsModule {}