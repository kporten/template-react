# Template React

![license](https://img.shields.io/github/license/kporten/template-react)
![tag](https://img.shields.io/github/v/tag/kporten/template-react)
![last-commit](https://img.shields.io/github/last-commit/kporten/template-react)
![ci](https://github.com/kporten/template-react/workflows/ci/badge.svg?branch=main&event=push)

This monorepo template allows you to start immediately with a [React](https://reactjs.org) ([TypeScript](https://www.typescriptlang.org)) single-page app ([Vite](https://vitejs.dev)) or web app ([Next.js](https://nextjs.org)), but it can also be used for any other type of web app or service.

The template takes away the work of having to assemble and configure all the tools for professional development yourself.

## Tech Stack

- Language:
  - [TypeScript](https://www.typescriptlang.org)
- Repository Management:
  - [Pnpm](https://pnpm.io)
  - [Turborepo](https://turborepo.org)
  - [Changesets](https://github.com/changesets/changesets)
- Quality & Security:
  - [ESLint](https://eslint.org)
  - [Commitlint](https://commitlint.js.org)
  - [Prettier](https://prettier.io)
  - [Fossa](https://fossa.com)
  - [Snyk](https://snyk.io)
- App Templates:
  - [Next.js](https://nextjs.org) with [Tailwind CSS](https://tailwindcss.com)
  - [Vite](https://vitejs.dev) with [React](https://reactjs.org), [Tailwind CSS](https://tailwindcss.com) and [Testing Library](https://testing-library.com)

## Getting Started

1. Clone the template: `npx degit kporten/template-react my-project`

2. Replace all occurrences of `template-react` and `Template React` with the name of your project.

3. Adjust the information (e.g. the author name) in the files `package.json`, `LICENSE` and `README.md`.

4. Execute the following commands in your terminal:

```sh
pnpm install
pnpm turbo dev
```

:rocket: Now you can get up and running with your ideas!

## Workspaces

### Apps

- [Next.js Template](./apps/next/README.md) (`./apps/next`)
- [Vite (React) Template](./apps/vite/README.md) (`./apps/vite`)

### Packages

- [Shared ESLint Configuration](./packages/eslint-config/README.md) (`./packages/eslint-config`)
- [Shared TypeScript Configuration](./packages/ts-config/README.md) (`./packages/ts-config`)

## Tasks

### Turbo

```sh
# run all development servers
pnpm turbo dev

# build all workspaces
pnpm turbo build

# run all preview servers
pnpm turbo preview

# lint all workspaces
pnpm turbo lint

# test all workspaces
pnpm turbo test

# test (with coverage check) all workspaces
pnpm turbo test:coverage

# typecheck all workspaces
pnpm turbo typecheck
```

> Use `--filter` to run a task only in specified workspaces (https://turborepo.org/docs/core-concepts/filtering)

> See also https://turborepo.org/docs/reference/command-line-reference

### Changeset

```sh
# create a changeset file (interactive)
pnpm changeset add

# update versions of workspaces
pnpm changeset version

# update tags of workspaces
pnpm changeset tag
```

> See also https://github.com/changesets/changesets/blob/main/packages/cli/README.md

### Scripts

```sh
# format files with prettier
pnpm run format

# check formatting of files with prettier
pnpm run format:check
```

> See also https://pnpm.io/cli/run

## Workflows

### Pull Request

[.github/workflows/pull-request.yml](./.github/workflows/pull-request.yml)

#### Events

- `pull_request` with base branch `main`

#### Jobs

- `lint`
  - 🔦 Lint pull request title
  - 📝 Check changeset status

### Integration

[.github/workflows/integration.yml](./.github/workflows/integration.yml)

#### Events

- `pull_request` with base branch `main`

#### Jobs

- `security`
  - 🐾 Audit dependencies
- `licenses`
  - 🔦 Scan licenses
  - 🧪 Validate licenses
- `test`
  - 🖍️ Check formatting
  - 🛡️ Typecheck projects
  - 🔦 Lint projects
  - 🧪 Test coverage

#### Secrets

- `FOSSA_API_KEY` see https://docs.fossa.com/docs/api-reference
- `SNYK_TOKEN` see https://docs.snyk.io/features/user-and-group-management/authentication/authentication-for-third-party-tools

### Deployment

[.github/workflows/deployment.yml](./.github/workflows/deployment.yml)

#### Events

- `push` with base branch `main`

#### Jobs

- `versioning`
  - 📝 Process changesets
- `status` needs `versioning`
  - 🪄 Analyze vite
- `vite` needs `status`
  - 🏗️ Build
  - 🚀 Upload

## Licenses

[![FOSSA Status](https://app.fossa.com/api/projects/custom%2B27173%2Fgithub.com%2Fkporten%2Ftemplate-react.svg?type=large)](https://app.fossa.com/projects/custom%2B27173%2Fgithub.com%2Fkporten%2Ftemplate-react?ref=badge_large)
