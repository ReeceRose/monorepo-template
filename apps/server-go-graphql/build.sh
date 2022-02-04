#!/bin/bash

GO111MODULE=on
CGO_ENABLED=0
GOOS=linux
GOARCH=amd64

go mod vendor

go build -ldflags="-w -s" .
upx -4 server-go-graphql