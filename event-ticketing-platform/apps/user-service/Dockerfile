FROM node:20-alpine

WORKDIR /usr/src/app

COPY package*.json ./
COPY tsconfig*.json ./
COPY nest-cli.json ./
RUN npm ci

# Copy the service and libs
COPY apps/user-service ./apps/user-service
COPY libs ./libs

# 👇 Copy Prisma schema (important: *after* app code)
COPY apps/user-service/prisma ./apps/user-service/prisma

# 👇 Generate Prisma Client (after prisma folder exists)
RUN npx prisma generate --schema=apps/user-service/prisma/schema.prisma

# Build the service
RUN npm run build user-service

EXPOSE 3001

CMD ["node", "dist/apps/user-service/main"]
