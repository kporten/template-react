# Workspace: vite

This is a template for a single-page app with [Vite](https://vitejs.dev) ([React](https://reactjs.org)).

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

# test (with coverage check) workspace
pnpm turbo test:coverage --filter=vite

# typecheck workspace
pnpm turbo typecheck --filter=vite
```

### Scripts

```sh
# extract and compile intl messages
pnpm --filter=vite intl

# extract intl messages
pnpm --filter=vite intl:extract

# compile extracted intl messages
pnpm --filter=vite intl:compile

# clean extracted intl messages
pnpm --filter=vite intl:clean

# open test ui and watch
pnpm --filter=vite test:ui
```
