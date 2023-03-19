FROM node:18.15-alpine AS builder
RUN apk update && apk add --no-cache libc6-compat
WORKDIR /app

COPY . .
RUN corepack enable
RUN pnpm dlx turbo prune --scope=@template-react/trpc --docker

FROM node:18.15-alpine AS installer
RUN apk update && apk add --no-cache libc6-compat
WORKDIR /app

COPY --from=builder /app/out/json/ .
COPY --from=builder /app/out/pnpm-lock.yaml .
RUN corepack enable
RUN pnpm install --frozen-lockfile --ignore-scripts

COPY --from=builder /app/out/full/ .
RUN pnpm install --frozen-lockfile
RUN pnpm dlx turbo run build --filter=trpc
RUN rm -rf ./node_modules/.pnpm
RUN pnpm install --frozen-lockfile --ignore-scripts --prod

FROM node:18.15-alpine AS runner
WORKDIR /app
USER node

COPY --from=installer --chown=node:node /app/apps/trpc/package.json .
COPY --from=installer --chown=node:node /app/node_modules ./node_modules
COPY --from=installer --chown=node:node /app/apps/trpc/node_modules ./apps/trpc/node_modules
COPY --from=installer --chown=node:node /app/apps/trpc/dist ./apps/trpc/dist

WORKDIR /app/apps/trpc
CMD ["node", "./dist/server.js"]