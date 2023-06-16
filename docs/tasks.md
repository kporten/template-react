# Tasks

## Turborepo

```sh
# run all development servers
turbo dev

# build all workspaces
turbo build

# run all preview servers
turbo preview

# lint all workspaces
turbo lint

# test all workspaces
turbo test

# test all workspaces with coverage check
turbo test:coverage

# test all workspaces with browser UI
turbo test:ui

# test all workspaces with types
turbo test:types

# extract and compile intl messages in all workspaces
turbo intl

# format files with prettier (root script)
turbo format

# check formatting of files with prettier (root script)
turbo format:check
```

> **Note**
> Use `--filter` to run a task only in specified workspaces: https://turborepo.org/docs/core-concepts/filtering

> **Note**
> More information about available commands: https://turborepo.org/docs/reference/command-line-reference

## Changeset

```sh
# exec changeset cli (manage versioning and changelogs)
pnpm exec changeset [command]
```

> **Note**
> More information about available commands: https://github.com/changesets/changesets/blob/main/packages/cli/README.md
