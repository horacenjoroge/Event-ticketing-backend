# apps/payment-service/Dockerfile
FROM node:20-alpine

WORKDIR /usr/src/app

# Copy package files and configuration
COPY package*.json ./
COPY tsconfig*.json ./
COPY nest-cli.json ./

# Install dependencies
RUN npm ci

# Copy payment service source code
COPY apps/payment-service ./apps/payment-service

# Copy Prisma schema
COPY apps/payment-service/prisma ./apps/payment-service/prisma

# Generate Prisma client
RUN npx prisma generate --schema=apps/payment-service/prisma/schema.prisma

# Build the payment service
RUN npm run build payment-service

# Expose port
EXPOSE 3005

# Start the payment service
CMD ["node", "dist/apps/payment-service/main"]