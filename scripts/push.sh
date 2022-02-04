#!/bin/bash

# Push docker containers
# run `pnpm build:docker`` first

VERSION=1.0
# Docker username
USERNAME=reecerose

tag_and_push () {
  docker tag "$1" "${USERNAME}/$1:${VERSION}"
  docker push "${USERNAME}/$1:${VERSION}"
}

tag_and_push monorepo-template-docs
tag_and_push monorepo-template-server
tag_and_push monorepo-template-server-go
tag_and_push monorepo-template-server-go-graphql
tag_and_push monorepo-template-server-graphql
tag_and_push monorepo-template-web
