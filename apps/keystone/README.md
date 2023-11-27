# Workspace: keystone

This is a template for the [Keystone](https://keystonejs.com) CMS.

## Configuration

- Copy `.env.example` and rename it to `.env`, then change the values if needed

## Setup

- Start the database service with `docker compose up -d db`

## Tasks

### Turborepo

```sh
# run development server
turbo dev --filter keystone

# build workspace
turbo build --filter keystone

# run preview server
turbo preview --filter keystone

# test workspace with type check
turbo test:types --filter keystone
```

> **Note**
> More information about filtering: https://turborepo.org/docs/core-concepts/filtering

### Keystone

```sh
# exec keystone cli
pnpm --filter keystone exec keystone [command]
```

> **Note**
> More information about available commands: https://keystonejs.com/docs/guides/cli

## Tech Stack

### General

- [Keystone](https://keystonejs.com)

### Database

- [Prisma](https://www.prisma.io)
