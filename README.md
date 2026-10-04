# Git Pro Workflow Practice

A tiny JavaScript project for practicing CI, rebasing, pull requests, and Git
history recovery.

## Run the tests

Requires Node.js 20 or newer. No package installation is needed.

```sh
node --test
```

GitHub Actions runs the same test command on pushes to `main` and on pull
requests targeting `main`.

## Inspecting the history

```sh
git log --oneline --all --graph
git reflog
```

The feature branch is rebased locally before it is pushed. The reflog records
recent local branch movements and can help locate a commit after a reset.
