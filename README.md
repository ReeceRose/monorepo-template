# Monorepo Template

[![Build](https://github.com/ReeceRose/monorepo-template/actions/workflows/build.yml/badge.svg)](https://github.com/ReeceRose/monorepo-template/actions/workflows/build.yml)
[![licence mit](https://img.shields.io/badge/licence-MIT-blue.svg?style=flat-square)](https://github.com/ReeceRose/next.js-template/blob/main/LICENSE)

Monorepo powered by [Turbo](https://turborepo.org/).

# Overview

One monorepo configured to handle multiple projects using various languages. Comes configured with ESLint, TailwindCSS, Jest, Prettier, Husky, and more.

## Apps

| Folder               | Description                                       |
|----------------------|---------------------------------------------------|
| `android`            | Empty folder for an android project               |
| `docs`               | Next.JS template project                          |
| `ios`                | Empty folder for an ios project                   |
| `mobile`             | Empty folder for a cross-platform mobile project  |
| `server-go`          | Golang TODO REST API                              |
| `server-go-graphql`  | Golang TODO GraphQL API                           |
| `server-graphql`     | TS TODO GraphQL API                               |
| `server-ts-prisma`   | TS TODO REST API with Prisma support              |
| `web`                | Next.JS template project                          |

## Packages

| Folder               | Description                                       |
|----------------------|---------------------------------------------------|
| `config`             | Common config (ESLint, Jest, TailwindCSS)         |
| `lib`                | Common TS code                                    |
| `tsconfig`           | TypeScript configuration                          |
| `ui`                 | Common React components                           |


# Installation

## Prerequisites
1. [pnpm](https://pnpm.io/installation): alternative to npm/yarn
2. [air](https://github.com/cosmtrek/air#installation): Live reload for Golang

## Setup

```bash
# clone repo 
git@github.com:ReeceRose/monorepo-template.git .
# install dependencies
pnpm install
```

# Run the monorepo

## All applications at once

```bash
pnpm dev
```

## One application

```bash
# replace <application> with your choice
cd apps/<application>
pnpm dev
```

# Build the monorepo

Note, there currently is not a great way to publish these all at once. A more ideal solution would to probably build docker containers and add a `pnpm publish` command which would push the containers to a repository.

## All applications at once

```bash
pnpm build
```

## One application

```bash
# replace <application> with your choice
cd apps/<application>
pnpm build
```

## Docker

Docker support thanks to Jon Lauridsen's article [here](https://dev.to/jonlauridsen/exploring-the-monorepo-5-perfect-docker-52aj).

Note, currently server-ts-prisma does not have Docker support due to prisma conflicts on [M1 Macs](https://github.com/prisma/prisma/issues/7755).

## Issues

Have any issue or suggestion? Feel free to open an issue [here](https://github.com/ReeceRose/monorepo-template/issues/new)
