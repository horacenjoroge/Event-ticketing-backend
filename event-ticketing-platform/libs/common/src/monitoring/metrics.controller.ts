// libs/common/src/monitoring/metrics.controller.ts
import { Controller, Get, Header } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { register } from './metrics';

@Controller()
export class MetricsController {
  @Get('metrics')
  @Header('Content-Type', register.contentType)
  @ApiOperation({ summary: 'Prometheus metrics endpoint' })
  async getMetrics() {
    return register.metrics();
  }

  @Get('health')
  @ApiOperation({ summary: 'Health check endpoint' })
  async getHealth() {
    return {
      status: 'healthy',
      timestamp: new Date().toISOString(),
      service: process.env.SERVICE_NAME || 'unknown',
      version: process.env.APP_VERSION || '1.0.0',
      uptime: process.uptime(),
      memory: process.memoryUsage(),
    };
  }
}