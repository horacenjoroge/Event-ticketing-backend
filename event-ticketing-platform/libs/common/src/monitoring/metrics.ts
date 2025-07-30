// libs/common/src/monitoring/metrics.ts
import { Request, Response } from 'express';
import * as client from 'prom-client';

// Create a Registry to register the metrics
export const register = new client.Registry();

// Add default metrics (CPU, memory, etc.)
client.collectDefaultMetrics({
  register,
  prefix: 'eventify_',
});

// HTTP metrics
export const httpRequestDuration = new client.Histogram({
  name: 'eventify_http_request_duration_seconds',
  help: 'Duration of HTTP requests in seconds',
  labelNames: ['method', 'route', 'status_code', 'service'],
  buckets: [0.005, 0.01, 0.025, 0.05, 0.1, 0.25, 0.5, 1, 2.5, 5, 10],
  registers: [register],
});

export const httpRequestsTotal = new client.Counter({
  name: 'eventify_http_requests_total',
  help: 'Total number of HTTP requests',
  labelNames: ['method', 'route', 'status_code', 'service'],
  registers: [register],
});

export const activeConnections = new client.Gauge({
  name: 'eventify_active_connections',
  help: 'Number of active connections',
  labelNames: ['service'],
  registers: [register],
});

// Business metrics
export const eventsCreated = new client.Counter({
  name: 'eventify_events_created_total',
  help: 'Total number of events created',
  labelNames: ['service'],
  registers: [register],
});

export const usersRegistered = new client.Counter({
  name: 'eventify_users_registered_total',
  help: 'Total number of users registered',
  labelNames: ['service'],
  registers: [register],
});

export const ticketsPurchased = new client.Counter({
  name: 'eventify_tickets_purchased_total',
  help: 'Total number of tickets purchased',
  labelNames: ['service', 'event_id'],
  registers: [register],
});

export const ordersProcessed = new client.Counter({
  name: 'eventify_orders_processed_total',
  help: 'Total number of orders processed',
  labelNames: ['service', 'status'],
  registers: [register],
});

export const paymentsProcessed = new client.Counter({
  name: 'eventify_payments_processed_total',
  help: 'Total number of payments processed',
  labelNames: ['service', 'provider', 'status'],
  registers: [register],
});

export const notificationsSent = new client.Counter({
  name: 'eventify_notifications_sent_total',
  help: 'Total number of notifications sent',
  labelNames: ['service', 'type', 'provider'],
  registers: [register],
});

// Database metrics
export const databaseQueries = new client.Histogram({
  name: 'eventify_database_query_duration_seconds',
  help: 'Database query duration in seconds',
  labelNames: ['service', 'operation', 'table'],
  buckets: [0.001, 0.005, 0.01, 0.025, 0.05, 0.1, 0.25, 0.5, 1],
  registers: [register],
});

// Error tracking
export const errors = new client.Counter({
  name: 'eventify_errors_total',
  help: 'Total number of errors',
  labelNames: ['service', 'error_type', 'route'],
  registers: [register],
});