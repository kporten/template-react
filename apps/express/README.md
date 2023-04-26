# Workspace: express

This is a template for an [Express](https://expressjs.com) API with [tRPC](https://trpc.io).

## Configuration

- Copy `.env.example` and rename it to `.env`, then change the values if needed

## Setup

- Start the database service with `docker compose up -d db`
- You can run `pnpm --filter=express exec prisma migrate dev --name=init` to create the database, an initial migration and to seed data

## Tasks

### Turborepo

```sh
# run development server
turbo dev --filter=express

# build workspace
turbo build --filter=express

# run preview server
turbo preview --filter=express

# lint workspace
turbo lint --filter=express

# typecheck workspace
turbo typecheck --filter=express
```

> **Note**
> More information about filtering: https://turborepo.org/docs/core-concepts/filtering

### Prisma

```sh
# exec prisma cli (database toolkit)
pnpm --filter=express exec prisma [command]
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
