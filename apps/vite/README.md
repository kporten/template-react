# Workspace: vite

This is a template for a single-page [Vite](https://vitejs.dev) app with [React](https://reactjs.org), [Tailwind CSS](https://tailwindcss.com), [Testing Library](https://testing-library.com) and [Clerk](https://clerk.com).

## Configuration

- Copy `.env.example` and rename it to `.env`, then change the values if needed

## Setup

- This project needs to be started together with the [Express](../express/README.md) api to connect to the [tRPC](https://trpc.io) server.

## Tasks

### Turborepo

```sh
# run development server
turbo dev --filter=vite

# build workspace
turbo build --filter=vite

# run preview server
turbo preview --filter=vite

# lint workspace
turbo lint --filter=vite

# test workspace
turbo test --filter=vite

# test workspace with coverage check
turbo test:coverage --filter=vite

# test workspace with browser UI
turbo test:ui --filter=vite

# test workspace with type check
turbo test:types --filter=vite

# extract and compile intl messages in workspace
turbo intl --filter=vite
```

> **Note**
> More information about filtering: https://turborepo.org/docs/core-concepts/filtering

## Tech Stack

### General

- [Vite](https://vitejs.dev)
- [React](https://reactjs.org)
- [React Router](https://reactrouter.com)

### State Management

- [Jotai](https://jotai.pmnd.rs)

### API

- [tRPC](https://trpc.io)
- [TanStack Query](https://tanstack.com/query)

### Auth

- [Clerk](https://clerk.com)

### UI

- [Radix](https://www.radix-ui.com) and [shadcn/ui](https://ui.shadcn.com)
- [Tailwind CSS](https://tailwindcss.com)
- [Format JS](https://formatjs.io)

### Testing

- [Vitest](https://vitest.dev)
- [Testing Library](https://testing-library.com)
- [Mock Service Worker](https://mswjs.io)

### Monitoring

- [Sentry](https://sentry.io)
- [Web Vitals](https://github.com/GoogleChrome/web-vitals)
