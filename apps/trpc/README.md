# Workspace: trpc

This is a template for a [tRPC](https://trpc.io) API with [Express](https://expressjs.com).

## Setup

- Copy `.env.example` and rename it to `.env`, then change the values if needed

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
```

## Tech Stack

- [tRPC](https://trpc.io)
- [Zod](https://zod.dev)
- [Express](https://expressjs.com)
- [Helmet](https://helmetjs.github.io)