FROM node:20-alpine

WORKDIR /usr/src/app

COPY package*.json ./
COPY tsconfig*.json ./
COPY nest-cli.json ./
RUN npm ci

# Copy the service and libs
COPY apps/ticket-service ./apps/ticket-service
COPY libs ./libs

# Generate Prisma client specifically for ticket-service
WORKDIR /usr/src/app/apps/ticket-service
RUN npx prisma generate

# Go back to root and build
WORKDIR /usr/src/app
RUN npm run build ticket-service

EXPOSE 3003

CMD ["node", "dist/apps/ticket-service/main"]