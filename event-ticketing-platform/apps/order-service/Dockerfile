FROM node:20-alpine

WORKDIR /usr/src/app

COPY package*.json ./
COPY tsconfig*.json ./
COPY nest-cli.json ./
RUN npm ci

# Copy the service and libs (THIS WAS MISSING!)
COPY apps/order-service ./apps/order-service
COPY libs ./libs

# Generate Prisma client specifically for order-service
WORKDIR /usr/src/app/apps/order-service
RUN npx prisma generate

# Go back to root and build
WORKDIR /usr/src/app
RUN npm run build order-service

EXPOSE 3004

CMD ["node", "dist/apps/order-service/main"]