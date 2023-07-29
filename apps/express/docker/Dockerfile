FROM node:18.17.0-alpine AS base


FROM base AS setup
RUN apk update && apk add --no-cache libc6-compat
WORKDIR /app

COPY . .

RUN corepack enable
RUN pnpm dlx turbo prune --scope=@template-react/express --docker


FROM base AS builder
RUN apk update && apk add --no-cache libc6-compat
WORKDIR /app

COPY --from=setup /app/out/json/ .

RUN corepack enable
RUN pnpm install --frozen-lockfile --ignore-scripts

COPY --from=setup /app/out/full/ .

RUN pnpm install --frozen-lockfile
RUN pnpm dlx turbo run build --filter=express


FROM base AS installer
RUN apk update && apk add --no-cache libc6-compat
WORKDIR /app

COPY --from=builder --chown=node:node /app/package.json .
COPY --from=builder --chown=node:node /app/pnpm-lock.yaml .
COPY --from=builder --chown=node:node /app/pnpm-workspace.yaml .
COPY --from=builder --chown=node:node /app/apps/express/package.json ./apps/express/

RUN corepack enable
RUN pnpm install --frozen-lockfile --ignore-scripts --prod --filter=express


FROM base AS runner
WORKDIR /app
USER node

COPY --from=installer --chown=node:node /app/node_modules ./node_modules
COPY --from=installer --chown=node:node /app/apps/express/node_modules ./apps/express/node_modules
COPY --from=builder --chown=node:node /app/apps/express/node_modules/prisma-client ./apps/express/node_modules/prisma-client
COPY --from=builder --chown=node:node /app/apps/express/package.json ./apps/express/
COPY --from=builder --chown=node:node /app/apps/express/dist ./apps/express/dist

WORKDIR /app/apps/express
CMD ["node", "./dist/server.js"]
