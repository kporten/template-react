# Settings

## Repository

- **General**
  - Pull Requests
    - ✅ Allow squash merging
      - Default to pull request title
- **Branches**
  - Branch protection rules
    - `main`
      - ✅ Require a pull request before merging
      - ✅ Require status checks to pass before merging
        - ✅ Require branches to be up to date before merging
        - Status checks that are required.
          - `test`
          - `security`
          - `lint`
      - ✅ Require linear history
- **Actions**
  - General
    - Workflow permissions
      - ✅ Read and write permissions
      - ✅ Allow GitHub Actions to create and approve pull requests
