FROM node:20-alpine

WORKDIR /usr/src/app

COPY package*.json ./
COPY tsconfig*.json ./
COPY nest-cli.json ./
RUN npm ci

COPY apps/ticket-service ./apps/ticket-service

COPY apps/ticket-service/prisma ./apps/ticket-service/prisma

RUN npx prisma generate --schema=apps/ticket-service/prisma/schema.prisma

RUN npm run build ticket-service

EXPOSE 3003

CMD ["node", "dist/apps/ticket-service/main"]
