FROM node:18.15-alpine AS bundler
RUN apk update && apk add --no-cache libc6-compat
WORKDIR /app

COPY . .

RUN corepack enable
RUN pnpm dlx turbo prune --scope=@template-react/trpc --docker

FROM node:18.15-alpine AS builder
RUN apk update && apk add --no-cache libc6-compat
WORKDIR /app

COPY --from=bundler /app/out/json/ .
COPY --from=bundler /app/out/pnpm-lock.yaml .

RUN corepack enable
RUN pnpm install --frozen-lockfile --ignore-scripts

COPY --from=bundler /app/out/full/ .

RUN pnpm install --frozen-lockfile
RUN pnpm dlx turbo run build --filter=trpc

FROM node:18.15-alpine AS runner
WORKDIR /app
USER node

COPY --from=builder --chown=node:node /app/apps/trpc/package.json .
COPY --from=builder --chown=node:node /app/node_modules ./node_modules
COPY --from=builder --chown=node:node /app/apps/trpc/node_modules ./apps/trpc/node_modules
COPY --from=builder --chown=node:node /app/apps/trpc/dist ./apps/trpc/dist

CMD node ./apps/trpc/dist/server.js