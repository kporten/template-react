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

- `security`
  - 🐾 Audit dependencies
- `test`
  - 🖍️ Check formatting
  - 🛡️ Typecheck projects
  - 🔦 Lint projects
  - 🧪 Test coverage

### Secrets

- `FOSSA_API_KEY` see https://docs.fossa.com/docs/api-reference
- `SNYK_TOKEN` see https://docs.snyk.io/features/user-and-group-management/authentication/authentication-for-third-party-tools

## Deployment

[.github/workflows/deployment.yml](../.github/workflows/deployment.yml)

### Events

- `push` with base branch `main`

### Jobs

- `versioning`
  - 📝 Process changesets
- `status` needs `versioning`
  - 🪄 Analyze vite app
  - 🪄 Analyze trpc app
  - 🪄 Analyze next app
- `keystone` needs `status`
  - 🏗️ Build
  - 🚀 Deploy (NOTE: Adjust this step according to your needs.)
- `next` needs `status`
  - 🏗️ Build
  - 🚀 Deploy (NOTE: Adjust this step according to your needs.)
- `trpc` needs `status`
  - 🏗️ Build
  - 🚀 Deploy (NOTE: Adjust this step according to your needs.)
- `vite` needs `status`
  - 🏗️ Build
  - 🚀 Deploy (NOTE: Adjust this step according to your needs.)

## Report

[.github/workflows/report.yml](../.github/workflows/report.yml)

### Events

- `schedule` with cron definition to run on a regular base
- `workflow_dispatch` to run the workflow manually

### Jobs

- `licenses`
  - 🔦 Scan licenses
  - 🔎 Validate licenses
- `security`
  - 🐾 Audit dependencies
