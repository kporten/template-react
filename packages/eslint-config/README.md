# Workspace: eslint-config

This package provides shared [ESLint](https://eslint.org) configurations.

## Setup

Add the `eslint-config` package to your workspace dev dependencies.

```sh
pnpm --filter=[workspace] add @template-react/eslint-config --save-dev
```

## Usage

Add `eslint-config` to your `.eslintrc` config file.

```json
{
  "root": true,
  "extends": "@template-react/eslint-config/vite"
}
```

The following configurations are available:

- [base](./base.json) - Base rules (includes parser config for TypeScript)
- [react](./react.json) - React rules (extends `base` config)
- [next](./next.json) - Next.js project default rules (extends `react` config)
- [storybook](./storybook.json) - Storybook project default rules (extends `react` config)
- [vite](./vite.json) - Vite project default rules (extends `react` config)

## Parser

- TypeScript (included in `base`)

## Configs

- Prettier (included in `next` and `vite`)
- Turbo (included in `base`)

## Rule Plugins

- Format.js
- Import
- Next.js
- Promise
- React
- SonarJS
- Storybook
- Unicorn
