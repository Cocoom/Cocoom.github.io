# Cocoom Help Center website

Pure VuePress project, but with a customized theme which derived both from default theme & vuepress-theme-book

## Quick start

- To start dev mode

> cdt start

- To build & run the project as it is in prod env.

> cdt build

> cdt service-dist

## Release new version

1. Build the app

> cdt build

2. Remove all "master" branch content

Master branch must be set as a worktree pointing to the docs/.vuepress/dist folder (Git worktree is used here to allow release only "dist" folder content to Github Pages)

2. Copy the docs/.vuepress/dist into "master"

3. Commit changes made to the "master" branch
