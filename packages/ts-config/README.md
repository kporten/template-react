# Workspace: ts-config

This package provides shared TypeScript configurations.

## Setup

Add the `ts-config` package to your workspace dev dependencies.

```sh
pnpm --filter=[workspace] add @template-react/ts-config --save-dev
```

## Usage

Add `ts-config` to your `tsconfig.json` config file.

```json
{
  "extends": "@template-react/ts-config/react"
}
```

The following configurations are available:

- [base](./base.json)
- [next](./next.json)
- [react](./react.json)
