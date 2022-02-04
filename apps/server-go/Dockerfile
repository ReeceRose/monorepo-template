# base image (no upx support on arm64 from alpine)
FROM --platform=amd64 golang:1.17.6-alpine3.15 as base
WORKDIR /builder
RUN apk add upx

ENV GO111MODULE=on CGO_ENABLED=0 GOOS=linux GOARCH=amd64

COPY go.mod go.sum /builder/
RUN go mod download

COPY . .
RUN go build -ldflags="-w -s" .
RUN upx -4 server-go

# runner image
FROM gcr.io/distroless/static:latest

COPY --from=base /builder/server-go /usr/bin/

EXPOSE 3000
ENTRYPOINT ["server-go"]