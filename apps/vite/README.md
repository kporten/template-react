# Workspace: vite

This is a template for a single-page app with [Vite](https://vitejs.dev) ([React](https://reactjs.org)).

## Setup

- Copy `.env.example` and rename it to `.env`, then change the values if needed

## Tasks

### Turbo

```sh
# run development server
pnpm turbo dev --filter=vite

# build workspace
pnpm turbo build --filter=vite

# run preview server
pnpm turbo preview --filter=vite

# lint workspace
pnpm turbo lint --filter=vite

# test workspace
pnpm turbo test --filter=vite

# test workspace with coverage check
pnpm turbo test:coverage --filter=vite

# test workspace with browser UI
pnpm turbo test:ui --filter=vite

# typecheck workspace
pnpm turbo typecheck --filter=vite

# extract and compile intl messages in workspace
pnpm turbo intl --filter=vite
```

### Scripts

```sh
# extract intl messages
pnpm --filter=vite intl:extract

# compile extracted intl messages
pnpm --filter=vite intl:compile

# clean extracted intl messages
pnpm --filter=vite intl:clean
```

## Tech Stack

- [Vite](https://vitejs.dev)
- [React](https://reactjs.org)
- [React Router](https://reactrouter.com)
- [Tailwind CSS](https://tailwindcss.com)
- [React Helmet](https://github.com/nfl/react-helmet)
- [Format JS](https://formatjs.io)
- [Headless UI](https://headlessui.dev)
- [Heroicons](https://heroicons.com)
- [Jotai](https://jotai.pmnd.rs)
- [Vitest](https://vitest.dev)
- [Testing Library](https://testing-library.com)
- [Sentry](https://sentry.io)
- [Web Vitals](https://github.com/GoogleChrome/web-vitals)
