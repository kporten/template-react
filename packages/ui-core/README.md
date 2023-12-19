# Workspace: ui-core

This package provides shared UI components, utils and presets.

## Setup

Add the `ui-core` package to your workspace dependencies.

```sh
pnpm --filter [workspace] add @template-react/ui-core
```

Then use the preset in your `tailwind.config` file.

```js
import path from 'node:path';

import { defaultPreset } from '@template-react/ui-core';

export default {
  presets: [defaultPreset],
  content: [
    path.join(path.dirname(require.resolve('@template-react/ui-core')), '*.js'),
  ],
};
```

## Tasks

### Turborepo

```sh
# run development server
turbo dev --filter ui-core

# build workspace
turbo build --filter ui-core

# lint workspace
turbo lint --filter ui-core

# test workspace
turbo test --filter ui-core

# test workspace with coverage check
turbo test:coverage --filter ui-core

# test workspace with browser UI
turbo test:ui --filter ui-core

# test workspace with type check
turbo test:types --filter ui-core
```

> **Note**
> More information about filtering: https://turborepo.org/docs/core-concepts/filtering

## Tech Stack

### General

- [Storybook](https://storybook.js.org)
- [React](https://reactjs.org)

### UI

- [Radix](https://www.radix-ui.com) and [shadcn/ui](https://ui.shadcn.com)
- [Tailwind CSS](https://tailwindcss.com)

### Testing

- [Vitest](https://vitest.dev)
- [Testing Library](https://testing-library.com)
