# Monorepo Template

[![Build](https://github.com/ReeceRose/monorepo-template/actions/workflows/build.yml/badge.svg)](https://github.com/ReeceRose/monorepo-template/actions/workflows/build.yml)
[![licence mit](https://img.shields.io/badge/licence-MIT-blue.svg?style=flat-square)](https://github.com/ReeceRose/next.js-template/blob/main/LICENSE)

Monorepo powered by [Turbo](https://turborepo.org/).

## Overview

One monorepo configured to handle multiple projects using various languages. Comes configured with ESLint, TailwindCSS, Jest, Prettier, Husky, and more.

### Apps

| Folder               | Description                                       | Port |
|----------------------|---------------------------------------------------|------|
| `android`            | Empty folder for an android project               | N/A  |
| `client-graphql`     | Next.JS project using GraphQL client              | 3001 |
| `ios`                | Empty folder for an ios project                   | N/A  |
| `mobile`             | Empty folder for a cross-platform mobile project  | N/A  |
| `server-go`          | Golang TODO REST API                              | 3003 |
| `server-go-graphql`  | Golang TODO GraphQL API                           | 3007 |
| `server-graphql`     | TS TODO GraphQL API                               | 3005 |
| `server-ts-prisma`   | TS TODO REST API with Prisma support              | 3006 |
| `web`                | Next.JS template project                          | 3000 |

### Packages

| Folder               | Description                                       |
|----------------------|---------------------------------------------------|
| `config`             | Common config (ESLint, Jest, TailwindCSS)         |
| `lib`                | Common TS code                                    |
| `tsconfig`           | TypeScript configuration                          |
| `ui`                 | Common React components                           |


## Installation

### Prerequisites
1. [pnpm](https://pnpm.io/installation): alternative to npm/yarn
2. [air](https://github.com/cosmtrek/air#installation): Live reload for Golang
3. [upx](https://upx.github.io/): high-performance executable packer

### Setup

```bash
# clone repo 
git@github.com:ReeceRose/monorepo-template.git .
# install dependencies
pnpm install
```

In each repository, copy .env.example to .env and fill in appropriately.

## What to change after cloning

1. I would start by removing any applications in which you do not intend on using.
2. Remove all React components from the ui package. I would remove the `components/` folder and the corresponding tests.
2. Remove the `todo` type in the lib package.
3. Any remaining applications should be renamed. Do a global search for the previous application name and refactor accordingly.
4. Any remaining code should be removed in the applications you have kept.
5. Do a global search for `CHANGE_ME` and replace any occurrences with the appropriate values.
6. Update any remaining README files.
7. Delete pnpm-lock.yaml and run `pnpm install` to regenerate it. This will remove any old applications.
8. Continue to refactor as you notice anything left from the template.


## Run the monorepo

### All applications at once

```bash
pnpm dev
```

### One application

```bash
# replace <application> with your choice
cd apps/<application>
pnpm dev
```

## Build the monorepo

Note, there currently is not a great way to publish these all at once. A more ideal solution would to probably build docker containers and add a `pnpm publish` command which would push the containers to a repository.

### All applications at once

```bash
pnpm build
```

### One application

```bash
# replace <application> with your choice
cd apps/<application>
pnpm build
```

## Docker

Docker support thanks to Jon Lauridsen's article [here](https://dev.to/jonlauridsen/exploring-the-monorepo-5-perfect-docker-52aj).

Note, currently server-ts-prisma does not have Docker support due to prisma conflicts on [M1 Macs](https://github.com/prisma/prisma/issues/7755).

### Build containers

Can be run in root folder or in apps/<APP>

```bash
pnpm build:docker
```

### Start all containers

Can be run in root folder or in apps/<APP>

```bash
pnpm start:docker
```

### Stop all containers

Can be run in root folder or in apps/<APP>
Most containers should be stopped when you exit, this will kill any remaining. 
```bash
pnpm stop:docker
```

### Push all containers

```bash
# From root directory
cd scripts
./push.sh
```

## Issues

Have any issue or suggestion? Feel free to open an issue [here](https://github.com/ReeceRose/monorepo-template/issues/new)
