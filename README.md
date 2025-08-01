# Event Ticketing Platform

[![Build Status](https://github.com/horacenjoroge/Event-ticketing-backend/workflows/CI/badge.svg)](https://github.com/horacenjoroge/Event-ticketing-backend/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen.svg)](https://nodejs.org/)
[![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=flat&logo=docker&logoColor=white)](https://www.docker.com/)
[![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

A comprehensive, production-ready event ticketing platform built with microservices architecture, featuring automated CI/CD, load balancing, and enterprise-grade monitoring.

## 🏗️ Architecture Overview

```mermaid
graph TB
    Client[Client Applications] --> LB[Nginx Load Balancer]
    LB --> AG1[API Gateway 1]
    LB --> AG2[API Gateway 2]
    
    AG1 --> US[User Service]
    AG1 --> ES[Event Service]
    AG1 --> TS[Ticket Service]
    AG1 --> OS[Order Service]
    AG1 --> PS[Payment Service]
    AG1 --> NS[Notification Service]
    
    AG2 --> US
    AG2 --> ES
    AG2 --> TS
    AG2 --> OS
    AG2 --> PS
    AG2 --> NS
    
    US --> DB1[(PostgreSQL User)]
    ES --> DB2[(PostgreSQL Event)]
    TS --> DB3[(PostgreSQL Ticket)]
    OS --> DB4[(PostgreSQL Order)]
    PS --> DB5[(PostgreSQL Payment)]
    NS --> DB6[(PostgreSQL Notification)]
    
    US --> Redis[(Redis Cache)]
    ES --> Redis
    TS --> Redis
    OS --> Redis
    PS --> Redis
    NS --> Redis
    
    US --> RMQ[RabbitMQ]
    ES --> RMQ
    TS --> RMQ
    OS --> RMQ
    PS --> RMQ
    NS --> RMQ
    
    Monitoring[Prometheus/Grafana] --> AG1
    Monitoring --> AG2
    Monitoring --> US
    Monitoring --> ES
    Monitoring --> TS
    Monitoring --> OS
    Monitoring --> PS
    Monitoring --> NS
```

## 🚀 Features

### Core Functionality
- **Multi-tenant Event Management** - Support for various event types and organizers
- **Real-time Ticket Inventory** - Live availability tracking with reservation system
- **Distributed Order Processing** - Saga pattern for reliable transactions
- **Multi-provider Payment Processing** - Stripe, M-Pesa, Flutterwave integration
- **Comprehensive Notification System** - Email, SMS, and push notifications
- **Role-based Access Control** - Admin, organizer, and customer roles

### Technical Excellence
- **Microservices Architecture** - 7 independent services with clear boundaries
- **Event-driven Communication** - RabbitMQ message queues for async processing
- **High Availability** - Load balanced instances with health monitoring
- **Zero-downtime Deployments** - Blue-green deployment strategy
- **Comprehensive Testing** - Unit, integration, and load testing (283 req/sec)
- **Enterprise Monitoring** - Prometheus metrics with Grafana dashboards

### DevOps & Infrastructure
- **CI/CD Pipeline** - Automated testing, building, and deployment
- **Multi-environment Support** - Development, staging, and production
- **Container Orchestration** - Docker Compose with scaling capabilities
- **Infrastructure as Code** - Environment-specific configurations
- **Security Integration** - Automated vulnerability scanning
- **Performance Validation** - Automated load testing in CI/CD

## 📋 Table of Contents

- [Quick Start](#-quick-start)
- [API Documentation](#-api-documentation)
- [Development Setup](#-development-setup)
- [Architecture Deep Dive](#-architecture-deep-dive)
- [CI/CD Pipeline](#-cicd-pipeline)
- [Monitoring & Observability](#-monitoring--observability)
- [Deployment Guide](#-deployment-guide)
- [Performance & Scaling](#-performance--scaling)
- [Contributing](#-contributing)
- [License](#-license)

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm
- Docker and Docker Compose
- Git

### 1. Clone and Setup
```bash
git clone https://github.com/horacenjoroge/Event-ticketing-backend.git
cd Event-ticketing-backend
cp .env.example .env  # Configure your environment variables
npm install
```

### 2. Start Infrastructure
```bash
# Start databases and message queues
npm run docker:infrastructure

# Generate Prisma clients
npm run prisma:generate

# Run database migrations
npm run migrate:dev
```

### 3. Launch Application
```bash
# Start all microservices with load balancing
npm run docker:full

# Health check
curl http://localhost/health
```

### 4. Access Services
- **API Gateway**: http://localhost (Load balanced)
- **Grafana Dashboard**: http://localhost:3010 (admin/admin123)
- **Prometheus Metrics**: http://localhost:9090
- **RabbitMQ Management**: http://localhost:15672 (admin/admin123)

## 📚 API Documentation

### Authentication Endpoints
```http
POST /auth/register          # User registration
POST /auth/login             # User authentication
GET  /users/profile          # Get user profile
```

### Event Management
```http
POST /events                 # Create event
GET  /events                 # List events
GET  /events/:id             # Get event details
POST /events/venues          # Create venue
GET  /events/venues          # List venues
POST /events/categories      # Create category
GET  /events/categories      # List categories
```

### Ticket Operations
```http
POST /tickets/types          # Create ticket type
GET  /tickets/types          # List ticket types
POST /tickets/purchase       # Purchase tickets
POST /tickets/reserve        # Reserve tickets
GET  /tickets/my-tickets     # Get user tickets
GET  /tickets/inventory/availability/:ticketTypeId  # Check availability
```

### Order Management
```http
GET  /orders/cart            # Get shopping cart
POST /orders/cart/add        # Add to cart
POST /orders/create          # Create order
POST /orders/checkout        # Process checkout
GET  /orders/my-orders       # Get user orders
POST /orders/:orderId/cancel # Cancel order
```

### Payment Processing
```http
POST /payments               # Process payment
GET  /payments/:paymentId    # Get payment details
POST /payments/:paymentId/refund  # Process refund
GET  /payments/providers/list     # List payment providers
POST /payments/webhooks/stripe    # Stripe webhook
POST /payments/webhooks/mpesa     # M-Pesa webhook
POST /payments/webhooks/flutterwave # Flutterwave webhook
```

### Notifications
```http
POST /notifications/send     # Send notification
POST /notifications/email/send  # Send email
GET  /notifications/analytics    # Get notification stats
```

### Example API Usage

#### Create an Event
```bash
curl -X POST http://localhost/events \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -d '{
    "title": "Tech Conference 2025",
    "description": "Annual technology conference",
    "startDate": "2025-09-15T09:00:00Z",
    "endDate": "2025-09-15T18:00:00Z",
    "venueId": "venue-uuid",
    "categoryId": "category-uuid"
  }'
```

#### Purchase Tickets
```bash
curl -X POST http://localhost/tickets/purchase \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -d '{
    "ticketTypeId": "ticket-type-uuid",
    "quantity": 2,
    "paymentMethod": "stripe"
  }'
```

## 🛠️ Development Setup

### Local Development (Recommended)
```bash
# Start infrastructure only
npm run docker:infrastructure

# Start services individually for development
npm run start:api-gateway
npm run start:user-service
npm run start:event-service
# ... other services
```

### Full Docker Development
```bash
# Start everything in containers
npm run docker:full

# Scale services for load testing
npm run scale:up
```

### Environment Configuration

Create `.env` file with required variables:

```bash
# Database URLs (one per service)
DATABASE_URL="postgresql://postgres:postgres@postgres-user:5432/user_service_db"
EVENT_DATABASE_URL="postgresql://postgres:postgres@postgres-event:5432/event_service_db"
# ... other database URLs

# Message Queue & Cache
RABBITMQ_URL="amqp://admin:admin123@rabbitmq:5672"
REDIS_URL="redis://redis:6379"

# Security
JWT_SECRET="your-super-secret-jwt-key-change-this-in-production"

# Payment Providers
STRIPE_SECRET_KEY="sk_test_your_stripe_secret_key_here"
MPESA_CONSUMER_KEY="your_mpesa_consumer_key"
FLUTTERWAVE_SECRET_KEY="your_flutterwave_secret_key"

# Notification Services
BREVO_API_KEY="your-brevo-api-key-here"
TWILIO_AUTH_TOKEN="your_twilio_auth_token"
```

### Development Commands

```bash
# Code Quality
npm run lint                 # ESLint with auto-fix
npm run format              # Prettier formatting

# Testing
npm run test                # Unit tests
npm run test:e2e            # End-to-end tests
npm run test:cov            # Test coverage

# Database Operations
npm run prisma:generate     # Generate Prisma clients
npm run migrate:dev         # Run development migrations

# Service Management
npm run build:all           # Build all services
npm run start:dev           # Start with hot reload
npm run logs:api-gateway    # View service logs
```

## 🏛️ Architecture Deep Dive

### Microservices Design Principles

#### Service Boundaries
Each service owns its data and business logic:

- **User Service**: Authentication, user management, profiles
- **Event Service**: Event creation, venue management, categorization
- **Ticket Service**: Inventory management, reservations, purchases
- **Order Service**: Shopping cart, order processing, saga coordination
- **Payment Service**: Multi-provider payment processing, refunds
- **Notification Service**: Email, SMS, push notifications

#### Communication Patterns
- **Synchronous**: Direct HTTP calls for real-time operations
- **Asynchronous**: RabbitMQ events for eventual consistency
- **Event Sourcing**: Order saga pattern for distributed transactions

#### Data Consistency
- **Strong Consistency**: Within service boundaries
- **Eventual Consistency**: Cross-service via events
- **Saga Pattern**: Distributed transaction management

### Technology Stack

#### Core Technologies
- **Runtime**: Node.js 18+ with TypeScript
- **Framework**: NestJS with dependency injection
- **Database**: PostgreSQL 15 with Prisma ORM
- **Message Queue**: RabbitMQ with management interface
- **Cache**: Redis for session and application caching
- **Load Balancer**: Nginx with health checks

#### External Integrations
- **Payment**: Stripe (global), M-Pesa (Kenya), Flutterwave (Africa)
- **Email**: Brevo (Sendinblue) for transactional emails
- **SMS**: Twilio for SMS notifications
- **Monitoring**: Prometheus + Grafana for observability

## 🔄 CI/CD Pipeline

### Pipeline Overview
Our GitHub Actions pipeline provides:
- **Automated Testing**: Unit, integration, and e2e tests
- **Security Scanning**: Dependency and container vulnerability scanning
- **Multi-service Builds**: Parallel Docker image builds
- **Environment Deployment**: Automated staging and production deployment
- **Performance Validation**: Load testing integration

### Pipeline Stages

#### 1. Continuous Integration
```yaml
# Triggered on: push to main/develop, pull requests
- Code Quality: ESLint, Prettier, TypeScript compilation
- Testing: Jest unit tests, e2e tests with test containers
- Security: npm audit, Trivy vulnerability scanning
- Build Validation: Prisma client generation, service builds
```

#### 2. Container Building
```yaml
# Matrix strategy for parallel builds
services: [api-gateway, user-service, event-service, 
          ticket-service, order-service, payment-service, 
          notification-service]
registry: GitHub Container Registry (ghcr.io)
caching: Multi-layer Docker caching for faster builds
```

#### 3. Deployment Automation
```yaml
staging:
  environment: Port-isolated staging environment (8081)
  validation: Health checks + load testing
  approval: Automatic on develop branch

production:
  environment: Blue-green deployment strategy
  validation: Extended health checks + performance validation
  approval: Manual approval required
```

### Environment Strategy

#### Development
```bash
npm run docker:dev          # Infrastructure only
npm run start:dev           # Hot reload development
```

#### Staging (Port 8081)
```bash
npm run staging:start       # Full staging environment
npm run staging:health      # Health validation
npm run load:test:staging   # Performance testing
```

#### Production (Port 80)
```bash
npm run deploy:production   # Blue-green deployment
npm run health:check        # Production health check
npm run loadtest:heavy      # Production load testing
```

## 📊 Monitoring & Observability

### Metrics Collection
- **Application Metrics**: Custom business metrics via Prometheus
- **Infrastructure Metrics**: Container resources, database performance
- **Request Metrics**: Response times, error rates, throughput
- **Business Metrics**: Orders processed, revenue, user activity

### Dashboards
Access Grafana at http://localhost:3010:
- **System Overview**: All services health and performance
- **Service Deep Dive**: Individual service metrics
- **Business Intelligence**: Revenue, orders, user engagement
- **Infrastructure**: Database, cache, message queue metrics

### Alerting
Configure alerts for:
- **Service Health**: Endpoint failures, high error rates
- **Performance**: Response time degradation, queue backlog
- **Business**: Failed payments, low inventory
- **Infrastructure**: Database connections, memory usage

### Log Aggregation
```bash
# Service-specific logs
npm run logs:api-gateway
npm run logs:user-service
npm run logs:payments

# Infrastructure logs
npm run logs:infrastructure
npm run logs:monitoring
```

## 🚀 Deployment Guide

### Production Deployment Checklist

#### Pre-deployment
- [ ] Environment variables configured
- [ ] SSL certificates installed
- [ ] Database migrations tested
- [ ] Load testing completed
- [ ] Security scanning passed
- [ ] Backup procedures verified

#### Deployment Process
```bash
# 1. Pre-deployment validation
npm run ci:test
npm run ci:security
npm run load:test:staging

# 2. Database migrations
npm run migrate:prod

# 3. Blue-green deployment
npm run deploy:production

# 4. Health verification
npm run health:check
npm run loadtest:medium

# 5. Traffic switch (manual approval)
# Configure load balancer to route to new version
```

#### Post-deployment
- [ ] Monitor error rates and response times
- [ ] Verify business metrics (orders, payments)
- [ ] Check notification delivery
- [ ] Validate payment processing
- [ ] Confirm monitoring and alerting

### Scaling Configuration

#### Horizontal Scaling
```bash
# Scale API gateways
npm run scale:up

# Scale specific services
docker-compose up --scale user-service-1=3 --scale user-service-2=3

# Database scaling (read replicas)
# Configure read/write split in Prisma
```

#### Performance Optimization
- **Database**: Connection pooling, query optimization, indexing
- **Cache**: Redis caching for frequent reads, session storage
- **Load Balancing**: Nginx with least-connection algorithm
- **CDN**: Static asset caching and geographic distribution

## 📈 Performance & Scaling

### Current Performance Metrics
```
Load Testing Results (Validated):
- Throughput: 283 requests/second
- Success Rate: 100%
- Average Response Time: 133ms (1000 concurrent requests)
- 95th Percentile: <195ms
- Zero downtime during deployments
```

### Scalability Features
- **Horizontal Scaling**: Stateless services with load balancing
- **Database Sharding**: Service-per-database pattern
- **Caching Strategy**: Multi-layer caching (Redis, application, CDN)
- **Queue Processing**: Async event handling with RabbitMQ
- **Connection Pooling**: Optimized database connections

### Performance Monitoring
```bash
# Real-time performance testing
npm run loadtest:light      # 100 requests, 5 concurrent
npm run loadtest:medium     # 1000 requests, 20 concurrent  
npm run loadtest:heavy      # 5000 requests, 50 concurrent

# Continuous monitoring
npm run ports:monitor       # Port usage monitoring
npm run health:services     # Service health dashboard
```

### Optimization Recommendations
- **Database**: Implement read replicas for heavy read workloads
- **Caching**: Add CDN for static assets and API response caching
- **Message Queue**: Configure clustering for high-throughput scenarios
- **Monitoring**: Add distributed tracing for request flow analysis

## 👥 Contributing

### Development Workflow
1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feature/amazing-feature`
3. **Develop** with tests: `npm run test:watch`
4. **Lint** and format: `npm run lint && npm run format`
5. **Test** thoroughly: `npm run test:all && npm run test:e2e`
6. **Commit** with conventional commits: `git commit -m "feat: add amazing feature"`
7. **Push** and create a **Pull Request**

### Code Standards
- **TypeScript**: Strict mode enabled
- **ESLint**: Enforced code quality rules
- **Prettier**: Consistent code formatting
- **Testing**: Minimum 80% code coverage
- **Documentation**: JSDoc for public APIs

### Pull Request Process
1. Ensure all tests pass: `npm run ci:test`
2. Update documentation if needed
3. Add tests for new functionality
4. Request review from maintainers
5. Address review feedback
6. Merge after approval

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Support

- **Documentation**: Check the `/docs` folder for detailed guides
- **Issues**: Create an issue on GitHub for bugs or feature requests
- **Discussions**: Use GitHub Discussions for questions and ideas
- **Security**: Report security issues to [security@yourcompany.com]

## 🎯 Roadmap

### Phase 1 (Current): Core Platform
- ✅ Microservices architecture
- ✅ CI/CD pipeline
- ✅ Multi-provider payments
- ✅ Comprehensive monitoring

### Phase 2 (Next): Enhanced Features
- [ ] Mobile app APIs (React Native ready)
- [ ] Advanced analytics and reporting
- [ ] Multi-language support
- [ ] Advanced fraud detection

### Phase 3 (Future): Enterprise Features
- [ ] Multi-tenant SaaS model
- [ ] Advanced integrations (CRM, ERP)
- [ ] AI-powered recommendations
- [ ] Blockchain ticket verification

---

**Built with ❤️ by [Horace Njoroge](https://github.com/horacenjoroge)**

*This platform demonstrates enterprise-grade microservices architecture, DevOps practices, and modern software development principles. Perfect for event management companies, concert venues, sports organizations, and any business requiring robust ticket sales infrastructure.*
