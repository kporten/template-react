# Template React

![license](https://img.shields.io/github/license/kporten/template-react)
![tag](https://img.shields.io/github/v/tag/kporten/template-react)
![last-commit](https://img.shields.io/github/last-commit/kporten/template-react)
![ci](https://github.com/kporten/template-react/workflows/CI/badge.svg?branch=main&event=push)

This template allows you to start immediately with a [React](https://reactjs.org) ([TypeScript](https://www.typescriptlang.org)) single-page application or library. The template takes away the work of having to assemble and configure all the tools for professional development yourself. Through [Vite](https://vitejs.dev) you get on demand file serving over native ESM and HMR out-of-the-box. [Jest](https://jestjs.io) uses an [esbuild-jest transformer](https://github.com/aelbore/esbuild-jest), so your test environment also benefits from the extremely high performance of [esbuild](https://esbuild.github.io).

The following tools are used and preconfigured in this template:

- [React](https://reactjs.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Vite](https://vitejs.dev)
- [TypeScript](https://www.typescriptlang.org)

Quality:

- [Husky](https://typicode.github.io/husky)
- [ESLint](https://eslint.org)
- [Prettier](https://prettier.io)
- [Commitlint](https://commitlint.js.org)
- [Snyk](https://snyk.io)

Tests:

- [Jest](https://jestjs.io)
- [Testing Library](https://testing-library.com)

## Getting Started

1. Clone this repository.

2. Decide if you want to develop a single-page application or a library:
   1. [Single-page application](#single-page-application-spa)
   2. [Library](#library)

3. Replace all occurrences of `template-react` with the name of your project.

4. Execute the following commands in your terminal:

```sh
yarn install
yarn start
```

🚀 Now you can get up and running with your ideas!

## Development Scripts

```sh
yarn start # start development server
yarn build # build for production
yarn serve # locally preview production build
yarn lint # lint code with eslint
yarn test # run jest tests and watch for file changes
```

## Publish

```sh
yarn version # create a new version, update changelog and push them
yarn build && yarn publish --non-interactive # build and publish your library to your preferred package registry
```

### Continuous Integration

The preconfigured [GitHub Actions](https://github.com/features/actions) workflow runs the following jobs:

- test (run `yarn tsc`, `yarn lint` and `yarn test:ci` )
- security (check for vulnerabilities in package dependencies)

You will need to define the following secrets in your repository settings to use this project with the initial workflow configuration (or you can remove the jobs you do not need):

```ini
# GitHub > Repository > Settings > Secrets
SNYK_TOKEN=... # https://support.snyk.io/hc/en-us/articles/360004037537-Authentication-for-third-party-tools
```

> It is recommended (but not required) to add a build step to the CI workflow if this is not already handled by the hosting platform of your choice. The other jobs should be defined as dependencies in this case, so that only tested changes are built.

## Modes

### Single-page application (SPA)

If you want to develop a SPA, you do not need to make any changes to the template configuration to start it.

The `yarn build` command creates a production-ready build of your code in the `/dist` folder. You can then publish the contents of this folder on a platform of your choice (e.g. in a CDN). Or you can add this job to the CI workflow.

### Library

If you want to build a library, uncomment the marked lines in the `vite.config.ts` file and remove the `index.html` file.

The `yarn build` command creates a production-ready build of your code in the `/dist` folder. You can then publish the contents of this folder as a package in a registry of your choice (e.g. npmjs.org) with `yarn publish --non-interactive`. Or you can add this job to the CI workflow.

The following adjustments are recommended if you want to ship type declarations with your library:

1. Create a new folder `./src/types` with a file `[your-package-name].d.ts`.
2. Define the [type declarations](https://www.typescriptlang.org/docs/handbook/declaration-files/templates/module-d-ts.html) you want there.
3. Modify the following sections in the `package.json`:

```json
// package.json
...
"types": "./dist/[your-package-name].d.ts",
...
"scripts": {
  "build": "vite build && cp ./src/types/[your-package-name].d.ts ./dist/[your-package-name].d.ts",
},
...
```

## License

MIT License

Copyright (c) 2021 Kevin Porten
