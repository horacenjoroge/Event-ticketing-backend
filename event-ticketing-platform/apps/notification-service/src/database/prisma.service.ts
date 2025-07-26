// =====================================================
// apps/notification-service/src/database/prisma.service.ts
// FIXED: Updated import path to match new schema output
// =====================================================
import { Injectable, OnModuleInit, OnModuleDestroy, Logger } from '@nestjs/common';
import { PrismaClient } from '../../prisma/generated/client'; // Fixed path

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  private readonly logger = new Logger(PrismaService.name);
  private isConnected = false;

  constructor() {
    super({
      log: ['warn', 'error'],
      datasources: {
        db: {
          url: process.env.NOTIFICATION_DATABASE_URL,
        },
      },
    });
  }

  async onModuleInit() {
    const maxRetries = 3;
    let retryCount = 0;

    while (retryCount < maxRetries && !this.isConnected) {
      try {
        this.logger.log(`🔌 Connecting to database (attempt ${retryCount + 1}/${maxRetries})...`);
        
        await this.$connect();
        
        // Simple test query
        await this.$queryRaw`SELECT 1 as test`;
        
        this.isConnected = true;
        this.logger.log('✅ Connected to Notification database successfully');
        
        break;
        
      } catch (error) {
        retryCount++;
        this.logger.error(`❌ Database connection attempt ${retryCount} failed: ${error.message}`);
        
        if (retryCount < maxRetries) {
          this.logger.log(`⏳ Retrying in 2 seconds...`);
          await new Promise(resolve => setTimeout(resolve, 2000));
        } else {
          this.logger.error('💥 Max database connection retries exceeded');
          
          // In development, continue without database
          if (process.env.NODE_ENV !== 'production') {
            this.logger.warn('⚠️  Continuing in development mode without database');
            return;
          }
          
          throw new Error(`Failed to connect to database: ${error.message}`);
        }
      }
    }
  }

  async onModuleDestroy() {
    if (this.isConnected) {
      try {
        await this.$disconnect();
        this.logger.log('📴 Disconnected from Notification database');
      } catch (error) {
        this.logger.error('❌ Error disconnecting:', error.message);
      }
    }
  }

  // Safe database operation wrapper
  async safeOperation<T>(operation: () => Promise<T>, fallback: T): Promise<T> {
    if (!this.isConnected) {
      this.logger.warn('⚠️  Database not connected, returning fallback');
      return fallback;
    }

    try {
      return await operation();
    } catch (error) {
      this.logger.error('Database operation failed:', error.message);
      return fallback;
    }
  }
}