FROM node:20-alpine

WORKDIR /usr/src/app

COPY package*.json ./
COPY tsconfig*.json ./
COPY nest-cli.json ./
RUN npm ci

COPY apps/event-service ./apps/event-service
COPY libs ./libs

COPY apps/event-service/prisma ./apps/event-service/prisma

RUN npx prisma generate --schema=apps/event-service/prisma/schema.prisma

RUN npm run build event-service

EXPOSE 3002

CMD ["node", "dist/apps/event-service/main"]
