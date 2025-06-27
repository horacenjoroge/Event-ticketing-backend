# apps/user-service/Dockerfile
FROM node:18-alpine

WORKDIR /usr/src/app

# Copy package files
COPY package*.json ./
COPY nest-cli.json ./
COPY tsconfig*.json ./

# Install dependencies
RUN npm ci --only=production && npm cache clean --force

# Copy source code
COPY apps/user-service ./apps/user-service
COPY libs ./libs

# Build the service
RUN npm run build user-service

# Expose port (not really needed for microservice, but good for debugging)
EXPOSE 3001

# Start the service
CMD ["node", "dist/apps/user-service/main"]