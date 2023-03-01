# Workspace: vite

This is a template for a single-page app with [Vite](https://vitejs.dev) ([React](https://reactjs.org)).

## Setup

- Copy `.env.example` and rename it to `.env`, then change the values if needed

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

# typecheck workspace
turbo typecheck --filter=vite

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

### UI

- [Tailwind CSS](https://tailwindcss.com)
- [Headless UI](https://headlessui.dev)
- [Heroicons](https://heroicons.com)
- [Format JS](https://formatjs.io)

### Testing

- [Vitest](https://vitest.dev)
- [Testing Library](https://testing-library.com)
- [Mock Service Worker](https://mswjs.io)

### Monitoring

- [Sentry](https://sentry.io)
- [Web Vitals](https://github.com/GoogleChrome/web-vitals)
