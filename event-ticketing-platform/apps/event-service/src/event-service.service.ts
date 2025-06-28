// apps/event-service/src/event-service.service.ts
import { Injectable } from '@nestjs/common';

@Injectable()
export class EventServiceService {
  getHello(): string {
    return 'Hello World from Event Service!';
  }
}