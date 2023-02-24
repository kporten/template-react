# Workspace: trpc

This is a template for a [tRPC](https://trpc.io) API with [Express](https://expressjs.com).

## Setup

- Copy `.env.example` and rename it to `.env`, then change the values if needed
- Run `pnpm --filter=trpc exec prisma migrate dev --name=init` to create the database and seed initial data

## Tasks

### Turbo

```sh
# run development server
pnpm turbo dev --filter=trpc

# build workspace
pnpm turbo build --filter=trpc

# run preview server
pnpm turbo preview --filter=trpc

# lint workspace
pnpm turbo lint --filter=trpc

# typecheck workspace
pnpm turbo typecheck --filter=trpc

# generate dependencies in workspace
pnpm turbo generate --filter=trpc
```

### Prisma

```sh
# exec prisma cli (database toolkit)
pnpm --filter=trpc exec prisma
```

> **Note**
> See also https://www.prisma.io/docs/reference/api-reference/command-reference

## Tech Stack

- [tRPC](https://trpc.io)
- [Zod](https://zod.dev)
- [Express](https://expressjs.com)
- [Helmet](https://helmetjs.github.io)
- [Prisma](https://www.prisma.io)
