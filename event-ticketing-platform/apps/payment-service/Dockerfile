FROM node:20-alpine

WORKDIR /usr/src/app

COPY package*.json ./
COPY tsconfig*.json ./
COPY nest-cli.json ./
RUN npm ci

# Copy the service and libs (IMPORTANT!)
COPY apps/payment-service ./apps/payment-service
COPY libs ./libs

# Generate Prisma client specifically for payment-service
WORKDIR /usr/src/app/apps/payment-service
RUN npx prisma generate

# Go back to root and build
WORKDIR /usr/src/app
RUN npm run build payment-service

EXPOSE 3005

CMD ["node", "dist/apps/payment-service/main"]