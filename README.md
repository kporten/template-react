# Template React

![license](https://img.shields.io/github/license/kporten/template-react?style=for-the-badge)
![tag](https://img.shields.io/github/v/tag/kporten/template-react?style=for-the-badge)
![last-commit](https://img.shields.io/github/last-commit/kporten/template-react?style=for-the-badge)

This monorepo template allows you to start immediately with a [React](https://reactjs.org) ([TypeScript](https://www.typescriptlang.org)) single-page app ([Vite](https://vitejs.dev)) or web app ([Next.js](https://nextjs.org)), but it can also be used for any other type of web app or service.

The template takes away the work of having to assemble and configure all the [tools](#tech-stack) for professional development yourself.

## Getting Started

> **Note**
> Prerequisite is the global installation of [pnpm](https://pnpm.io/installation), [Turborepo](https://turbo.build/repo/docs/faq#should-i-install-turborepo-globally) and [Docker](https://docs.docker.com/get-docker/) if you want to use certain applications with a database.

1. Clone the template: `npx degit kporten/template-react my-project`
2. Follow the instructions in each app workspace that you want to use
3. Install required dependencies: `pnpm install`
4. Start the development servers: `turbo dev`

:rocket: Now you can get up and running with your ideas!

## Workspaces

### Apps

- [Keystone Template](./apps/keystone/README.md) (`./apps/keystone`, 🔌 5171)
- [Next.js Template](./apps/next/README.md) (`./apps/next`, 🔌 5172)
- [Express Template](./apps/express/README.md) (`./apps/express`, 🔌 5173)
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

- [Express](https://expressjs.com) api with [tRPC](https://trpc.io), [Prisma](https://www.prisma.io) and [Clerk](https://clerk.com)
- [Keystone](https://keystonejs.com) cms
- [Next.js](https://nextjs.org) with [Tailwind CSS](https://tailwindcss.com)
- [Vite](https://vitejs.dev) app with [React](https://reactjs.org), [Tailwind CSS](https://tailwindcss.com), [Testing Library](https://testing-library.com) and [Clerk](https://clerk.com)

### Repository Management

- [pnpm](https://pnpm.io)
- [Turborepo](https://turborepo.org)
- [Changesets](https://github.com/changesets/changesets)

### Quality & Security

- [ESLint](https://eslint.org)
- [Commitlint](https://commitlint.js.org)
- [Prettier](https://prettier.io)
- [Snyk](https://snyk.io)
