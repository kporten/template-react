# Template React

![license](https://img.shields.io/github/license/kporten/template-react?style=for-the-badge)
![tag](https://img.shields.io/github/v/tag/kporten/template-react?style=for-the-badge)
![last-commit](https://img.shields.io/github/last-commit/kporten/template-react?style=for-the-badge)

This monorepo template allows you to start immediately with a [React](https://reactjs.org) ([TypeScript](https://www.typescriptlang.org)) single-page app ([Vite](https://vitejs.dev)) or web app ([Next.js](https://nextjs.org)), but it can also be used for any other type of web app or service.

The template takes away the work of having to assemble and configure all the [tools](#tech-stack) for professional development yourself.

## Getting Started

> **Note**
> Prerequisite is the global installation of [pnpm](https://pnpm.io/installation) and [Turborepo](https://turbo.build/repo/docs/faq#should-i-install-turborepo-globally).

1. Clone the template: `npx degit kporten/template-react my-project`
2. Install dependencies: `pnpm install`
3. Follow the **setup** instructions in each app workspace that you want to use
4. Start development servers: `turbo dev`

:rocket: Now you can get up and running with your ideas!

## Workspaces

### Apps

- [Keystone Template](./apps/keystone/README.md) (`./apps/keystone`, 🔌 5171)
- [Next.js Template](./apps/next/README.md) (`./apps/next`, 🔌 5172)
- [tRPC Template](./apps/trpc/README.md) (`./apps/trpc`, 🔌 5173)
- [Vite (React) Template](./apps/vite/README.md) (`./apps/vite`, 🔌 5174)

### Packages

- [Shared ESLint Configurations](./packages/eslint-config/README.md) (`./packages/eslint-config`)
- [Shared TypeScript Configurations](./packages/ts-config/README.md) (`./packages/ts-config`)

## Documentation

- [Tasks](./docs/tasks.md)
- [Workflows](./docs/workflows.md)
- [Settings](./docs/settings.md)

## Tech Stack

### Languages

- [TypeScript](https://www.typescriptlang.org)

### Apps

- [Keystone](https://keystonejs.com) CMS
- [Next.js](https://nextjs.org) with [Tailwind CSS](https://tailwindcss.com)
- [tRPC](https://trpc.io) with [Express](https://expressjs.com) and [Prisma](https://www.prisma.io)
- [Vite](https://vitejs.dev) with [React](https://reactjs.org), [Tailwind CSS](https://tailwindcss.com) and [Testing Library](https://testing-library.com)

### Repository Management

- [pnpm](https://pnpm.io)
- [Turborepo](https://turborepo.org)
- [Changesets](https://github.com/changesets/changesets)

### Quality & Security

- [ESLint](https://eslint.org)
- [Commitlint](https://commitlint.js.org)
- [Prettier](https://prettier.io)
- [Fossa](https://fossa.com)
- [Snyk](https://snyk.io)

### Licenses

[![FOSSA Status](https://app.fossa.com/api/projects/custom%2B27173%2Fgithub.com%2Fkporten%2Ftemplate-react.svg?type=large)](https://app.fossa.com/projects/custom%2B27173%2Fgithub.com%2Fkporten%2Ftemplate-react?ref=badge_large)
