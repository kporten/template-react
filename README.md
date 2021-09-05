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

4. Adjust the values in the `package.json` file (e.g. the autor name)

5. Execute the following commands in your terminal:

```sh
yarn install
yarn start
```

:rocket: Now you can get up and running with your ideas!

## Scripts

```sh
yarn start # start development server
yarn build # build for production
yarn serve # locally preview production build
yarn format . # format files with prettier
yarn lint . # lint files with eslint
yarn test # run all cypress component tests
yarn test:open # open cypress component testing interactive mode
yarn test:coverage # report test coverage as text and check coverage tresholds
yarn test:clean # clean test results (e.g. before `yarn test`)
yarn intl:extract # extract messages and put them into a file
yarn intl:upload # upload extracted messages to translation vendor
yarn intl:download # download translations to project
yarn intl:compile # compile translations to use it with react-intl
yarn intl:clean # clean temporary translation files
yarn changelog # generate changelog based on Git commits
```

## Initial Source Code

- **src** -> Contains source code
  - **components** -> Contains all UI components
    - `App.tsx` -> Root UI component (imported from `index.tsx`)
    - `Hello.tsx` -> UI component, displays headline
    - `Layout.tsx` -> UI component, wrapper for page components
    - `Locale.tsx` -> UI component, displays locale selection
  - **providers** -> Contains all context providers
    - **Intl** -> Contains intl provider files
      - messages -> Intl messages for each supported locale
        - `de.json`
        - `en.json`
      - `Intl.tsx` -> Component to provide intl context
    - `Test.tsx` -> Component to provide context for components in test mounts
  - **store** -> Contains all global state definitions
    - `locale.tsx` -> Locale state definition (initialized with the best fitting locale)
  - **utils** -> Contains all utility functions
    - `reportWebVitals.ts` -> Optional web vitals report
  - `index.css` -> CSS entry point (imported from `index.tsx`)
  - `index.tsx` -> React entry point (imported from `index.html`)

## Publish

```sh
yarn version # create a new version, update changelog and push them
yarn build && yarn publish --non-interactive # build and publish your library to your preferred package registry
```

### Continuous Integration

The preconfigured [GitHub Actions](https://github.com/features/actions) workflow runs the following jobs:

- test (run `yarn tsc`, `yarn lint`, `yarn test` and `yarn test:coverage`)
- security (check for vulnerabilities in package dependencies with [Snyk](https://snyk.io))

You will need to define the following secrets in your repository settings to use this project with the initial workflow configuration (or you can remove the jobs/steps you do not need):

```ini
# GitHub > Repository > Settings > Secrets
SNYK_TOKEN=... # https://support.snyk.io/hc/en-us/articles/360004037537-Authentication-for-third-party-tools
```

### Continuous Deployment

It is recommended (but not required) to add a build step to the CI workflow if this is not already handled by the hosting platform of your choice. The other jobs should be defined as dependencies in this case, so that only tested changes are built and deployed.

### Internationalization (I18n)

[Format.JS](https://formatjs.io) is used to internationalize the project. You can easily customize translation files in the `src/providers/Intl/messages` folder.

For larger projects it is recommended to use a translation provider and configure the scripts `yarn intl:upload` and `yarn intl:download`. These scripts (and the other `yarn intl:*` scripts) can then be integrated into the CI pipeline (see also https://formatjs.io/docs/getting-started/application-workflow#pipeline).

## Modes

### Single-page application (SPA)

If you want to develop a SPA, you do not need to make any changes to the template configuration to start it.

The marked lines in `vite.config.ts` are only needed in library mode and therefore these lines of code can be deleted.

The `yarn build` command creates a production-ready build of your code in the `/dist` folder. You can then publish the contents of this folder on a platform of your choice (e.g. in a CDN) or add this job to the CI workflow.

### Library

If you want to build a library, uncomment and modify the marked lines in the `vite.config.ts`.

Note the configured entry point in `vite.config.ts`. Files that are not imported in the entry point will not be included in the library. These files and their dependencies can be removed (e.g. `index.html` or `src/index.tsx`).

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

Also check if you want to add some of your dependencies to `peerDependencies` (and `devDependencies`) instead of `dependencies`.

For example `react` should not be included in your package bundle to prevent version conflicts. It is also recommended to define a version range instead of a specific version:

```json
"peerDependencies": {
  "react": ">=17",
  "react-dom": ">=17"
}
```

The `yarn build` command creates a production-ready build of your library code in the `/dist` folder. You can then publish the contents of this folder as a library in a package registry of your choice (e.g. npmjs.org) with `yarn publish --non-interactive`. Or you can add this job to the CI workflow.

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

## License

MIT License

Copyright (c) 2021 Kevin Porten

You are allowed to remove the LICENSE file in this project if you use the template for your project. A link to this template would be appreciated.
