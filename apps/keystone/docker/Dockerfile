FROM node:18.15-alpine AS builder
RUN apk update && apk add --no-cache libc6-compat
WORKDIR /app

COPY . .
RUN corepack enable
RUN pnpm dlx turbo prune --scope=@template-react/keystone --docker

FROM node:18.15-alpine AS installer
RUN apk update && apk add --no-cache libc6-compat
WORKDIR /app

# install all dependencies
COPY --from=builder /app/out/json/ .
COPY --from=builder /app/out/pnpm-lock.yaml .
RUN corepack enable
RUN pnpm install --frozen-lockfile --ignore-scripts

# run scripts and build app
COPY --from=builder /app/out/full/ .
RUN pnpm install --frozen-lockfile
RUN pnpm dlx turbo run build --filter=keystone

# install only prod dependencies
RUN pnpm dlx rimraf --glob './**/node_modules/{*,.bin,.pnpm,.*.yaml}'
RUN pnpm install --frozen-lockfile --ignore-scripts --prod --filter=keystone

FROM node:18.15-alpine AS runner
WORKDIR /app
USER node

COPY --from=installer --chown=node:node /app/apps/keystone/package.json .
COPY --from=installer --chown=node:node /app/node_modules ./node_modules
COPY --from=installer --chown=node:node /app/apps/keystone/node_modules ./apps/keystone/node_modules
COPY --from=installer --chown=node:node /app/apps/keystone/.keystone ./apps/keystone/.keystone

WORKDIR /app/apps/keystone
CMD ["node", "./node_modules/@keystone-6/core/bin/cli.js", "start"]
