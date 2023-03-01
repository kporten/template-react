# Workspace: trpc

This is a template for a [tRPC](https://trpc.io) API with [Express](https://expressjs.com).

## Setup

- Copy `.env.example` and rename it to `.env`, then change the values if needed
- Run `pnpm --filter=trpc exec prisma migrate dev --name=init` to create the database and seed initial data

## Tasks

### Turborepo

```sh
# run development server
turbo dev --filter=trpc

# build workspace
turbo build --filter=trpc

# run preview server
turbo preview --filter=trpc

# lint workspace
turbo lint --filter=trpc

# typecheck workspace
turbo typecheck --filter=trpc
```

> **Note**
> More information about filtering: https://turborepo.org/docs/core-concepts/filtering

### Prisma

```sh
# exec prisma cli (database toolkit)
pnpm --filter=trpc exec prisma [command]
```

> **Note**
> More information about available commands: https://www.prisma.io/docs/reference/api-reference/command-reference

## Tech Stack

### General

- [Express](https://expressjs.com)
- [tRPC](https://trpc.io)

### Database

- [Prisma](https://www.prisma.io)

### Security

- [Helmet](https://helmetjs.github.io)
