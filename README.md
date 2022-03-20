# Template React

![license](https://img.shields.io/github/license/kporten/template-react)
![tag](https://img.shields.io/github/v/tag/kporten/template-react)
![last-commit](https://img.shields.io/github/last-commit/kporten/template-react)
![ci](https://github.com/kporten/template-react/workflows/ci/badge.svg?branch=main&event=push)

This monorepo template allows you to start immediately with a [React](https://reactjs.org) ([TypeScript](https://www.typescriptlang.org)) single-page application, but it can also be used for any other type of web app.

The template takes away the work of having to assemble and configure all the tools for professional development yourself.

## Getting Started

1. Clone the template: `npx degit kporten/template-react my-project`

2. Replace all occurrences of `template-react` and `Template React` with the name of your project.

3. Adjust the information (e.g. the author name) in the files `package.json`, `LICENSE`, `CHANGELOG.md` and `README.md`.

4. Execute the following commands in your terminal:

```sh
pnpm install
pnpm dev
```

:rocket: Now you can get up and running with your ideas!

## Scripts

### Root

```sh
# run all dev servers in parallel during development
pnpm dev

# build all workspaces
pnpm build

# run all preview servers in parallel
pnpm preview

# lint all workspaces
pnpm lint

# run tests for each workspace
pnpm test

# run tests and check coverage for each workspace
pnpm test:coverage

# run type checks for each workspace
pnpm typecheck

# format repo files
pnpm format

# describe a feat/fix changes and add the changeset
pnpm changeset

# update version and create tags
pnpm release
```

### Workspace: Next

[See README](./apps/next/README.md#scripts)

### Workspace: Vite

[See README](./apps/vite/README.md#scripts)

## Workflows

### CI

[See workflow](./.github/workflows/ci.yml)

#### Events

- `push`
- `pull_request`

#### Jobs

- `security` run https://github.com/snyk/actions
- `licenses` run https://github.com/fossas/fossa-action
- `test`
  - run typecheck
  - run lint
  - run tests and check coverage threshold
- `build`
  - needs all other **jobs** were **successful**
  - run on **push** and only for the **main** branch
  - build apps
  - upload builded apps as artifact

#### Secrets

- `FOSSA_API_KEY` see https://docs.fossa.com/docs/api-reference
- `SNYK_TOKEN` see https://docs.snyk.io/features/user-and-group-management/authentication/authentication-for-third-party-tools

## Tools

The following tools are used in this monorepo:

### Root

The root of the repository includes the following tools:

- [Changesets](https://github.com/changesets/changesets)
- [Commitlint](https://commitlint.js.org)
- [ESLint](https://eslint.org)
- [Fossa](https://fossa.com)
- [Husky](https://typicode.github.io/husky)
- [Lint Staged](https://github.com/okonet/lint-staged)
- [Prettier](https://prettier.io)
- [Snyk](https://snyk.io)
- [Turborepo](https://turborepo.org)
- [TypeScript](https://www.typescriptlang.org)

### Workspace: Next

[See README](./apps/next/README.md#tools)

### Workspace: Vite

[See README](./apps/vite/README.md#tools)

## License

MIT License

Copyright (c) 2022 Kevin Porten

[![FOSSA Status](https://app.fossa.com/api/projects/custom%2B27173%2Fgithub.com%2Fkporten%2Ftemplate-react.svg?type=large)](https://app.fossa.com/projects/custom%2B27173%2Fgithub.com%2Fkporten%2Ftemplate-react?ref=badge_large)
