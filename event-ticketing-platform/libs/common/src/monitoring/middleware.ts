// libs/common/src/monitoring/middleware.ts
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { httpRequestDuration, httpRequestsTotal, activeConnections } from './metrics';

@Injectable()
export class PrometheusMiddleware implements NestMiddleware {
  private serviceName: string;

  constructor() {
    this.serviceName = process.env.SERVICE_NAME || 'unknown';
  }

  use(req: Request, res: Response, next: NextFunction) {
    const start = process.hrtime();
    
    // Track active connections
    activeConnections.inc({ service: this.serviceName });

    res.on('finish', () => {
      // Calculate duration
      const diff = process.hrtime(start);
      const duration = diff[0] + diff[1] * 1e-9;

      // Get route pattern (not the actual path with IDs)
      const route = req.route?.path || req.path;
      
      const labels = {
        method: req.method,
        route: this.normalizeRoute(route),
        status_code: res.statusCode.toString(),
        service: this.serviceName
      };

      // Record metrics
      httpRequestDuration.observe(labels, duration);
      httpRequestsTotal.inc(labels);
      
      // Decrement active connections
      activeConnections.dec({ service: this.serviceName });
    });

    next();
  }

  private normalizeRoute(route: string): string {
    // Replace dynamic segments with placeholders
    return route
      .replace(/\/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/gi, '/:id')
      .replace(/\/\d+/g, '/:id')
      .replace(/\/[^\/]+/g, '/:param');
  }
}