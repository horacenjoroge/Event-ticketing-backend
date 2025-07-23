// =====================================================
// apps/notification-service/src/prisma/prisma.service.ts
// Create this missing file
// =====================================================
import { Injectable, OnModuleInit, OnModuleDestroy, Logger } from '@nestjs/common';
import { PrismaClient } from '../../prisma/generated/prisma'; 

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  private readonly logger = new Logger(PrismaService.name);

  constructor() {
    super({
      log: ['query', 'info', 'warn', 'error'],
      datasources: {
        db: {
          url: process.env.NOTIFICATION_DATABASE_URL,
        },
      },
    });
  }

  async onModuleInit() {
    try {
      await this.$connect();
      this.logger.log('✅ Connected to Notification database');
      
      // Test the connection
      await this.$queryRaw`SELECT 1`;
      this.logger.log('✅ Database connection test successful');
    } catch (error) {
      this.logger.error('❌ Failed to connect to Notification database', error);
      throw error;
    }
  }

  async onModuleDestroy() {
    await this.$disconnect();
    this.logger.log('📴 Disconnected from Notification database');
  }

  // Helper method to get notification stats
  async getNotificationStats() {
    const [total, sent, failed, pending] = await Promise.all([
      this.notification.count(),
      this.notification.count({ where: { status: 'SENT' } }),
      this.notification.count({ where: { status: 'FAILED' } }),
      this.notification.count({ where: { status: 'PENDING' } }),
    ]);

    return {
      total,
      sent,
      failed,
      pending,
      successRate: total > 0 ? Math.round((sent / total) * 100) : 0,
    };
  }
}