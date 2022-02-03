package main

import (
	"fmt"
	"net/http"

	"github.com/google/uuid"
	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
)

type Map map[string]interface{}

type Todo struct {
	ID          string `json:"id"`
	Description string `json:"description"`
	Completed   bool   `json:"completed"`
}

func main() {
	todoItems := []*Todo{}

	e := echo.New()
	e.Use(middleware.Logger())

	e.GET("/todo", func(c echo.Context) error {
		return c.JSON(http.StatusOK, Map{"data": todoItems})
	})

	e.POST("/todo", func(c echo.Context) error {

		todo := new(Todo)

		if err := c.Bind(todo); err != nil {
			return c.JSON(http.StatusBadRequest, Map{"error": err.Error()})
		}
		todo.ID = uuid.New().String()
		todo.Completed = false

		todoItems = append(todoItems, todo)

		return c.JSON(http.StatusOK, Map{"data": todo})
	})

	e.PUT("/todo", func(c echo.Context) error {

		todo := new(Todo)

		if err := c.Bind(todo); err != nil {
			return c.JSON(http.StatusBadRequest, Map{"error": err.Error()})
		}

		if todo.ID == "" {
			return c.JSON(http.StatusBadRequest, Map{"error": "uuid required"})
		}
		var original *Todo
		for _, k := range todoItems {
			if k.ID != todo.ID {
				continue
			}
			original = k
		}
		if original == nil {
			return c.JSON(http.StatusBadRequest, Map{"error": fmt.Sprintf("uuid of %s does not match an existing uuid", todo.ID)})
		}

		original.Completed = todo.Completed || original.Completed
		if todo.Description != "" {
			original.Description = todo.Description
		}

		return c.JSON(http.StatusOK, Map{"data": original})
	})

	fmt.Println("🚀 Go server started at https://localhost:3000")
	e.Logger.Fatal(e.Start(":3000"))
}
