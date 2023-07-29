FROM node:18.17.0-alpine AS base


FROM base AS setup
RUN apk update && apk add --no-cache libc6-compat
WORKDIR /app

COPY . .

RUN corepack enable
RUN pnpm dlx turbo prune --scope=@template-react/keystone --docker


FROM base AS builder
RUN apk update && apk add --no-cache libc6-compat
WORKDIR /app

COPY --from=setup /app/out/json/ .
COPY --from=setup /app/out/pnpm-lock.yaml .

RUN corepack enable
RUN pnpm install --frozen-lockfile --ignore-scripts

COPY --from=setup /app/out/full/ .

RUN pnpm install --frozen-lockfile
RUN SKIP_ENV_REQUIRED=1 pnpm dlx turbo run build --filter=keystone


FROM base AS installer
RUN apk update && apk add --no-cache libc6-compat
WORKDIR /app

COPY --from=builder --chown=node:node /app/package.json .
COPY --from=builder --chown=node:node /app/pnpm-lock.yaml .
COPY --from=builder --chown=node:node /app/pnpm-workspace.yaml .
COPY --from=builder --chown=node:node /app/apps/keystone/package.json ./apps/keystone/

RUN corepack enable
RUN pnpm install --frozen-lockfile --ignore-scripts --prod --filter=keystone


FROM base AS runner
WORKDIR /app
USER node

COPY --from=installer --chown=node:node /app/node_modules ./node_modules
COPY --from=installer --chown=node:node /app/apps/keystone/node_modules ./apps/keystone/node_modules
COPY --from=builder --chown=node:node /app/apps/keystone/node_modules/prisma-client ./apps/keystone/node_modules/prisma-client
COPY --from=builder --chown=node:node /app/apps/keystone/package.json ./apps/keystone/
COPY --from=builder --chown=node:node /app/apps/keystone/.keystone ./apps/keystone/.keystone

WORKDIR /app/apps/keystone
CMD ["node", "./node_modules/@keystone-6/core/bin/cli.js", "start"]
