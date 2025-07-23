// apps/notification-service/src/sms/sms.ts
// =====================================================
import { Injectable, Logger } from '@nestjs/common';

export interface SmsRequest {
  to: string;
  message: string;
  from?: string;
}

export interface SmsResponse {
  success: boolean;
  messageId?: string;
  error?: string;
  providerResponse?: any;
}

@Injectable()
export class SmsProvider {
  private readonly logger = new Logger(SmsProvider.name);

  async sendSms(request: SmsRequest): Promise<SmsResponse> {
    this.logger.log(`📱 Mock SMS sent to ${request.to}: ${request.message}`);
    
    // TODO: Implement real SMS provider (Twilio, Africa's Talking, etc.)
    return {
      success: true,
      messageId: `mock_${Date.now()}`,
      providerResponse: { mock: true },
    };
  }
}