package main

import (
	"log"
	"net/http"

	"github.com/99designs/gqlgen/graphql/handler"
	"github.com/99designs/gqlgen/graphql/playground"
	"github.com/reecerose/monorepo-template/apps/server-go-graphql/graph"
	"github.com/reecerose/monorepo-template/apps/server-go-graphql/graph/generated"
)

func main() {
	srv := handler.NewDefaultServer(generated.NewExecutableSchema(generated.Config{Resolvers: &graph.Resolver{}}))

	http.Handle("/", playground.Handler("GraphQL playground", "/query"))
	http.Handle("/query", srv)

	log.Println("🚀 Go GraphQL server started at https://localhost:%3000")
	log.Fatal(http.ListenAndServe(":3000", nil))
}
