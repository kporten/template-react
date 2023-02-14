# Tasks

## Turbo

```sh
# run all development servers
pnpm turbo dev

# build all workspaces
pnpm turbo build

# run all preview servers
pnpm turbo preview

# lint all workspaces
pnpm turbo lint

# test all workspaces
pnpm turbo test

# test all workspaces with coverage check
pnpm turbo test:coverage

# test all workspaces with browser UI
pnpm turbo test:ui

# typecheck all workspaces
pnpm turbo typecheck

# extract and compile intl messages in all workspaces
pnpm turbo intl

# format files with prettier (root script)
pnpm turbo format

# check formatting of files with prettier (root script)
pnpm turbo format:check
```

> Use `--filter` to run a task only in specified workspaces (https://turborepo.org/docs/core-concepts/filtering)

> See also https://turborepo.org/docs/reference/command-line-reference

## Changeset

```sh
# create a changeset file (interactive)
pnpm changeset add

# update versions of workspaces
pnpm changeset version

# update tags of workspaces
pnpm changeset tag
```

> See also https://github.com/changesets/changesets/blob/main/packages/cli/README.md
