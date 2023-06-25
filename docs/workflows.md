# Workflows

## Pull Request

[.github/workflows/pull-request.yml](../.github/workflows/pull-request.yml)

### Events

- `pull_request` with base branch `main`

### Jobs

- `lint`
  - 🔦 Lint pull request title
  - 📝 Check changeset status

## Integration

[.github/workflows/integration.yml](../.github/workflows/integration.yml)

### Events

- `pull_request` with base branch `main`

### Jobs

- `audit`
  - 🐾 Audit dependencies
- `test`
  - 🖍️ Check formatting
  - 🛡️ Test types
  - 🔦 Lint code
  - 🧪 Test coverage

### Secrets

- `SNYK_TOKEN` see https://docs.snyk.io/features/user-and-group-management/authentication/authentication-for-third-party-tools
- `TURBO_TOKEN` see https://turbo.build/repo/docs/ci/github-actions#remote-caching or https://ducktors.github.io/turborepo-remote-cache/custom-remote-caching.html#local-environment-variables

### Variables

- `TURBO_API` required only for custom remote, see https://ducktors.github.io/turborepo-remote-cache/custom-remote-caching.html#local-environment-variables
- `TURBO_TEAM` see https://turbo.build/repo/docs/ci/github-actions#remote-caching or https://ducktors.github.io/turborepo-remote-cache/custom-remote-caching.html#local-environment-variables

## Deployment

[.github/workflows/deployment.yml](../.github/workflows/deployment.yml)

### Events

- `push` with base branch `main`

### Jobs

- `versioning`
  - 📝 Process changesets
- `status` needs `versioning`
  - 🪄 Analyze express app
  - 🪄 Analyze keystone app
  - 🪄 Analyze vite app
  - 🪄 Analyze next app
- `express` needs `status`
  - 🏗️ Build
  - 🚀 Deploy (NOTE: Adjust this step according to your needs.)
- `keystone` needs `status`
  - 🏗️ Build
  - 🚀 Deploy (NOTE: Adjust this step according to your needs.)
- `next` needs `status`
  - 🏗️ Build
  - 🚀 Deploy (NOTE: Adjust this step according to your needs.)
- `vite` needs `status`
  - 🏗️ Build
  - 🚀 Deploy (NOTE: Adjust this step according to your needs.)

### Secrets

- `TURBO_TOKEN` see https://turbo.build/repo/docs/ci/github-actions#remote-caching or https://ducktors.github.io/turborepo-remote-cache/custom-remote-caching.html#local-environment-variables

### Variables

- `TURBO_API` required only for custom remote, see https://ducktors.github.io/turborepo-remote-cache/custom-remote-caching.html#local-environment-variables
- `TURBO_TEAM` see https://turbo.build/repo/docs/ci/github-actions#remote-caching or https://ducktors.github.io/turborepo-remote-cache/custom-remote-caching.html#local-environment-variables

## Report

[.github/workflows/report.yml](../.github/workflows/report.yml)

### Events

- `schedule` with cron definition to run on a regular base
- `workflow_dispatch` to run the workflow manually

### Jobs

- `audit`
  - 🐾 Audit dependencies

> **Note**
> Some workflow jobs are using [Turborepo](https://turborepo.org). The `TURBO_*` secrets and variables can be configured to enable remote caching. See https://turbo.build/repo/docs/core-concepts/remote-caching or https://ducktors.github.io/turborepo-remote-cache.
