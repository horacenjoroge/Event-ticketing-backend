// apps/notification-service/src/dto/email-request/email-request.ts
// =====================================================
import { IsString, IsEmail, IsOptional, IsArray, IsObject } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class EmailRequestDto {
  @ApiProperty({ example: 'user@example.com', description: 'Recipient email address' })
  @IsEmail()
  to: string;

  @ApiProperty({ example: 'John Doe', description: 'Recipient name', required: false })
  @IsOptional()
  @IsString()
  toName?: string;

  @ApiProperty({ example: 'Welcome to our platform', description: 'Email subject' })
  @IsString()
  subject: string;

  @ApiProperty({ example: '<h1>Welcome</h1><p>Thank you for joining us!</p>', description: 'HTML content', required: false })
  @IsOptional()
  @IsString()
  htmlContent?: string;

  @ApiProperty({ example: 'Welcome! Thank you for joining us!', description: 'Plain text content', required: false })
  @IsOptional()
  @IsString()
  textContent?: string;

  @ApiProperty({ example: 123, description: 'Brevo template ID', required: false })
  @IsOptional()
  templateId?: number;

  @ApiProperty({ description: 'Template variables for dynamic content', required: false })
  @IsOptional()
  @IsObject()
  templateData?: any;

  @ApiProperty({ description: 'Email attachments', required: false })
  @IsOptional()
  @IsArray()
  attachments?: Array<{
    name: string;
    content: string; // base64 encoded
    contentType: string;
  }>;
}
