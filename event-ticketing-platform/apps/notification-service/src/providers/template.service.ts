// =====================================================
// apps/notification-service/src/template/template.service.ts
// =====================================================
import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import * as Handlebars from 'handlebars';

@Injectable()
export class TemplateService {
  private readonly logger = new Logger(TemplateService.name);

  constructor(private readonly prisma: PrismaService) {}

  async renderTemplate(templateId: string, data: any): Promise<string> {
    const template = await this.prisma.notificationTemplate.findUnique({
      where: { id: templateId },
    });

    if (!template) {
      throw new Error(`Template not found: ${templateId}`);
    }

    const compiledTemplate = Handlebars.compile(template.htmlContent || template.textContent);
    return compiledTemplate(data);
  }

  async getTemplate(templateId: string) {
    return this.prisma.notificationTemplate.findUnique({
      where: { id: templateId },
    });
  }

  async createTemplate(templateData: any) {
    return this.prisma.notificationTemplate.create({
      data: templateData,
    });
  }
}