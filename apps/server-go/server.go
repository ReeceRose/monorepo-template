package main

import (
	"log"
	"net/http"
	"os"

	_ "github.com/joho/godotenv/autoload"

	"github.com/99designs/gqlgen/graphql/handler"
	"github.com/99designs/gqlgen/graphql/playground"
	"github.com/reecerose/monorepo-template/apps/server-go/graph"
	"github.com/reecerose/monorepo-template/apps/server-go/graph/generated"
)

const defaultPort = "3004"

func main() {
	port := os.Getenv("PORT")
	if port == "" {
		port = defaultPort
	}

	srv := handler.NewDefaultServer(generated.NewExecutableSchema(generated.Config{Resolvers: &graph.Resolver{}}))

	http.Handle("/", playground.Handler("GraphQL playground", "/query"))
	http.Handle("/query", srv)

	log.Printf("🚀 Go GraphQL server started at https://localhost:%s", port)
	log.Fatal(http.ListenAndServe(":"+port, nil))
}
