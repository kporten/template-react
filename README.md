# Template React

![license](https://img.shields.io/github/license/kporten/template-react)
![tag](https://img.shields.io/github/v/tag/kporten/template-react)
![last-commit](https://img.shields.io/github/last-commit/kporten/template-react)
![ci](https://github.com/kporten/template-react/workflows/ci/badge.svg?branch=main&event=push)

This monorepo template allows you to start immediately with a [React](https://reactjs.org) ([TypeScript](https://www.typescriptlang.org)) single-page application, but it can also be used for any other type of web app.

The template takes away the work of having to assemble and configure all the tools for professional development yourself.

## Tools

- [Turborepo](https://turborepo.org)
- [TypeScript](https://www.typescriptlang.org)
- [Changesets](https://github.com/changesets/changesets)
- [Commitlint](https://commitlint.js.org)
- [ESLint](https://eslint.org)
- [Fossa](https://fossa.com)
- [Husky](https://typicode.github.io/husky)
- [Lint Staged](https://github.com/okonet/lint-staged)
- [Prettier](https://prettier.io)
- [Snyk](https://snyk.io)
- ...and more in app templates:
  - [Next](./apps/next/README.md#tools)
  - [Vite](./apps/vite/README.md#tools)

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

- [next](./apps/next/README.md)
- [vite](./apps/vite/README.md)

### Packages

- [eslint-config](./packages/eslint-config/README.md)
- [ts-config](./packages/ts-config/README.md)

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
```

> See also https://pnpm.io/cli/run

## Workflows

### Continuous Integration (CI)

[See workflow](./.github/workflows/ci.yml)

#### Events

- `push`
- `pull_request`

#### Jobs

- `security`
  - run https://github.com/snyk/actions
- `licenses`
  - run https://github.com/fossas/fossa-action
- `test`
  - run typecheck
  - run lint
  - run tests and check coverage threshold
- `versioning`
  - _all previous jobs need to be successful_
  - _starts on `push` to `main` branch_
  - create pull request to update workspace versions and changelogs
  - create workspace version tags (requires merged pull request from step before)
- `vite-ignore`
  - _all previous jobs need to be successful_
  - _starts on `push` to `main` branch_
  - checks if app was changed
- `vite-build`
  - _all previous jobs need to be successful_
  - _starts on `push` to `main` branch and only when the app was changed_
  - build app
  - upload builded app as artifact

#### Secrets

- `FOSSA_API_KEY` see https://docs.fossa.com/docs/api-reference
- `SNYK_TOKEN` see https://docs.snyk.io/features/user-and-group-management/authentication/authentication-for-third-party-tools

### Pull Request (PR)

[See workflow](./.github/workflows/pr.yml)

#### Events

- `pull_request`

#### Jobs

- `lint`
  - run commitlint on pull request title
  - run changeset status report

## License

MIT License

Copyright (c) 2022 Kevin Porten

[![FOSSA Status](https://app.fossa.com/api/projects/custom%2B27173%2Fgithub.com%2Fkporten%2Ftemplate-react.svg?type=large)](https://app.fossa.com/projects/custom%2B27173%2Fgithub.com%2Fkporten%2Ftemplate-react?ref=badge_large)
