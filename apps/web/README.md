# Workspace: Web

This is an example web app with [React](https://reactjs.org) ([TypeScript](https://www.typescriptlang.org)) and [more](#tools).

## Scripts

```sh
# run dev server
pnpm --filter @template-react/web dev

# build app
pnpm --filter @template-react/web build

# run preview server
pnpm --filter @template-react/web preview

# extract and compile intl messages
pnpm --filter @template-react/web intl

# extract intl messages
pnpm --filter @template-react/web intl:extract

# compile extracted intl messages
pnpm --filter @template-react/web intl:compile

# clean extracted intl messages
pnpm --filter @template-react/web intl:clean

# lint app files
pnpm --filter @template-react/web lint

# run tests
pnpm --filter @template-react/web test

# run tests and check coverage
pnpm --filter @template-react/web test:coverage

# open test ui and watch
pnpm --filter @template-react/web test:ui

# run type checks
pnpm --filter @template-react/web typecheck
```

## Environment Variables

- `VITE_SENTRY_DSN` optionally used for error monitoring (https://docs.sentry.io/product/sentry-basics/dsn-explainer/#where-to-find-your-dsn)

## Tools

- [Format JS](https://formatjs.io)
- [Headless UI](https://headlessui.dev)
- [Heroicons](https://heroicons.com)
- [Jotai](https://jotai.pmnd.rs)
- [Mock Service Worker](https://mswjs.io)
- [React Helmet](https://github.com/nfl/react-helmet)
- [React Router](https://reactrouter.com)
- [React](https://reactjs.org)
- [Sentry](https://sentry.io)
- [Tailwind CSS](https://tailwindcss.com)
- [Testing Library](https://testing-library.com)
- [Vite](https://vitejs.dev)
- [Vitest](https://vitest.dev)
- [Web Vitals](https://github.com/GoogleChrome/web-vitals)
