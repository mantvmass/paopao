FROM node:20-slim AS builder

RUN apt-get update -y && apt-get install -y openssl

WORKDIR /usr/src/app

COPY package.json ./

RUN yarn install

COPY . .

RUN npx prisma generate

RUN yarn build

FROM node:20-slim AS runner

RUN apt-get update -y && \
    apt-get install -y openssl && \
    apt-get install -y vim && \
    apt-get install -y wget

WORKDIR /usr/src/app

COPY --from=builder /usr/src/app/.next ./.next
COPY --from=builder /usr/src/app/public ./public
COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY --from=builder /usr/src/app/next.config.mjs ./
COPY --from=builder /usr/src/app/package.json ./

# hard copy env
COPY --from=builder /usr/src/app/.env ./

EXPOSE 3000

CMD ["yarn", "start"]