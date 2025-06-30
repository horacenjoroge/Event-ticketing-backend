// apps/ticket-service/src/ticket-service.service.ts
import { Injectable } from '@nestjs/common';

@Injectable()
export class TicketServiceService {
  getHello(): string {
    return 'Hello World from Ticket Service!';
  }
}