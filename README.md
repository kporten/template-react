# Template React

![license](https://img.shields.io/github/license/kporten/template-react)
![tag](https://img.shields.io/github/v/tag/kporten/template-react)
![last-commit](https://img.shields.io/github/last-commit/kporten/template-react)
![ci](https://github.com/kporten/template-react/workflows/CI/badge.svg?branch=main&event=push)

This template allows you to start immediately with a [React](https://reactjs.org) ([TypeScript](https://www.typescriptlang.org)) single-page application or library. The template takes away the work of having to assemble and configure all the tools for professional development yourself. Through [Vite](https://vitejs.dev) you get on demand file serving over native ESM and HMR out-of-the-box.

## Tools

The following tools are used and preconfigured in this template.

### Environment

- [TypeScript](https://www.typescriptlang.org)
- [Vite](https://vitejs.dev)

### Libraries

- [React](https://reactjs.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Headless UI](https://headlessui.dev)
- [Heroicons](https://heroicons.com)
- [Jotai](https://jotai.pmnd.rs)
- [Format JS](https://formatjs.io)

### Quality

- [Commitlint](https://commitlint.js.org)
- [ESLint](https://eslint.org)
- [Prettier](https://prettier.io)
- [Husky](https://typicode.github.io/husky)
- [Snyk](https://snyk.io)

### Tests

- [Cypress](https://www.cypress.io)
- [Testing Library](https://testing-library.com)

## Getting Started

1. Clone this repository.

2. Decide if you want to develop a single-page application or a library:

   1. [Single-page application](#single-page-application-spa)
   2. [Library](#library)

3. Replace all occurrences of `template-react` with the name of your project.

4. Adjust the values in the `package.json` file (e.g. the author name)

5. Execute the following commands in your terminal:

```sh
npm install
npm start
```

:rocket: Now you can get up and running with your ideas!

## Scripts

```sh
npm start # start development server

npm run build # build for production
npm run serve # locally preview production build
npm run format . # format files with prettier
npm run lint . # lint files with eslint
npm run type-check # execute typescript compiler to check types

npm test # run all cypress component tests
npm run test:open # open cypress component testing interactive mode
npm run test:coverage # report test coverage as text and check coverage tresholds
npm run test:clean # clean test results (e.g. before `npm test`)

npm run intl:extract # extract messages and put them into a file
npm run intl:upload # upload extracted messages to translation vendor
npm run intl:download # download translations to project
npm run intl:compile # compile translations to use it with react-intl
npm run intl:clean # clean temporary translation files

npm run changelog # generate changelog based on Git commits
```

### Hooks

- `prepare` - setup husky
- `version` - update changelog
- `postversion` - push with tags

## Template

- **src** -> Contains source code
  - **components** -> Contains all UI components
    - `Hello.tsx` -> Component, displays headline
    - `Layout.tsx` -> Component, wrapper for page components
    - `Locale.tsx` -> Component, displays locale selection
  - messages -> Intl messages for each supported locale
    - `de.json`
    - `en.json`
  - **providers** -> Contains all context providers
    - `Intl.tsx` -> Component to provide intl context
    - `Store.tsx` -> Component to provide store with initial values
  - **store** -> Contains all global state definitions
    - `locale.tsx` -> Locale state definition (initialized with the best fitting locale)
  - **utils** -> Contains all utility functions
    - `reportWebVitals.ts` -> Optional web vitals report
  - `App.tsx` -> Root component (rendered by `ReactDOM` in `index.tsx`)
  - `Test.tsx` -> Wrapper to test components with providers (rendered by `mount` in test files)
  - `index.tsx` -> React entry point (imported from `index.html`)
  - `tailwind.css` -> Style entry point (imported from `App.tsx` and `Test.tsx`)

### Continuous Integration (CI)

The preconfigured [GitHub Actions](https://github.com/features/actions) workflow runs the following jobs:

- test (run `npm run type-check`, `npm run lint`, `npm test` and `npm run test:coverage`)
- security (check for vulnerabilities in package dependencies with [Snyk](https://snyk.io))

You will need to define the following secrets in your repository settings to use this project with the initial workflow configuration (or you can remove the jobs/steps you do not need):

```ini
# GitHub > Repository > Settings > Secrets
SNYK_TOKEN=... # https://support.snyk.io/hc/en-us/articles/360004037537-Authentication-for-third-party-tools
```

### Continuous Deployment (CD)

It is recommended (but not required) to add a build step to the CI workflow if this is not already handled by the hosting platform of your choice. The other jobs should be defined as dependencies in this case, so that only tested changes are built and deployed.

See also [SPA Deploy](#deploy) and [Library Publish](#publish).

### Internationalization (I18n)

[Format.JS](https://formatjs.io) is used to internationalize the project. You can easily customize translation files in the `src/messages` folder.

For larger projects it is recommended to use a translation provider and configure the scripts `npm run intl:upload` and `npm run intl:download`. These scripts (and the other `npm run intl:*` scripts) can then be integrated into the CI pipeline (see also https://formatjs.io/docs/getting-started/application-workflow#pipeline).

## Modes

### Single-page application (SPA)

If you want to develop a SPA, you do not need to make any changes to the template configuration to start it.

The marked lines in `vite.config.ts` are only needed in library mode and therefore these lines of code can be deleted.

#### Deploy

The `npm run build` command creates a production-ready build of your library code in the `/dist` folder.

Optional bump the package version with `npm version` (https://docs.npmjs.com/cli/v7/commands/npm-version).

You can deploy the contents of the `/dist` folder on a platform of your choice (e.g. in a CDN).

Or you can add these jobs to your CI/CD workflow.

### Library

If you want to build a library, uncomment and modify the marked lines in the `vite.config.ts`.

Note the configured entry point in `vite.config.ts`. Files that are not imported in the entry point will not be included in the library. These files and their dependencies can be removed (e.g. `index.html` or `src/index.tsx`).

#### Exports

Add the following lines to your `package.json` to restrict the exported files and set an entrypoint:

```json
"main": "./dist/template-react.umd.js",
"module": "./dist/template-react.es.js",
"exports": {
  ".": {
    "import": "./dist/template-react.es.js",
    "require": "./dist/template-react.umd.js"
  }
},
```

#### External Dependencies

Also check if you want to add some of your dependencies to `peerDependencies` (and `devDependencies`) instead of `dependencies`.

For example `react` should not be included in your package bundle to prevent version conflicts. It is also recommended to define a version range instead of a specific version:

```json
"peerDependencies": {
  "react": ">=17",
  "react-dom": ">=17"
}
```

#### Type Declarations

The following adjustments are recommended if you want to ship type declarations with your library:

1. Create a new folder `src/types` with a file `[your-package-name].d.ts`.
2. Define the [type declarations](https://www.typescriptlang.org/docs/handbook/declaration-files/templates/module-d-ts.html) you want there.
3. Modify the following sections in the `package.json`:

```json
// package.json
...
"types": "./dist/[your-package-name].d.ts",
...
"scripts": {
  "build": "vite build && cp src/types/[your-package-name].d.ts dist",
},
...
```

#### Publish

The `npm run build` command creates a production-ready build of your library code in the `/dist` folder.

Bump the package version with `npm version` (https://docs.npmjs.com/cli/v7/commands/npm-version).

You can then publish the contents of the `/dist` folder as a library in a package registry of your choice (e.g. npmjs.org) with `npm publish` (https://docs.npmjs.com/cli/v7/commands/npm-publish).

Or you can add these jobs to your CI/CD workflow.

## License

MIT License

Copyright (c) 2021 Kevin Porten

You are allowed to remove the LICENSE file in this project if you use the template for your project. A link to this template would be appreciated.
