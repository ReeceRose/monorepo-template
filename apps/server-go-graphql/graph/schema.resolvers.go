package graph

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"
	"fmt"

	"github.com/google/uuid"
	"github.com/reecerose/monorepo-template/apps/server-go-graphql/graph/generated"
	"github.com/reecerose/monorepo-template/apps/server-go-graphql/graph/model"
)

func (r *mutationResolver) CreateTodo(ctx context.Context, input model.InsertTodo) (*model.Todo, error) {
	if len(input.Description) == 0 {
		return nil, fmt.Errorf("description required")
	}

	todo := model.Todo{
		ID:          uuid.New().String(),
		Description: input.Description,
		Completed:   false,
	}

	r.todos = append(r.todos, &todo)

	return &todo, nil
}

func (r *mutationResolver) UpdateTodo(ctx context.Context, input model.UpdateTodo) (*model.Todo, error) {
	var todo *model.Todo
	for _, k := range r.todos {
		if k.ID != input.ID {
			continue
		}
		todo = k
	}
	if todo == nil {
		return nil, fmt.Errorf("uuid of %s does not match an existing uuid", input.ID)
	}
	if *input.Completed != todo.Completed {
		todo.Completed = *input.Completed
	}
	if input.Description != nil {
		todo.Description = *input.Description
	}

	return todo, nil
}

func (r *mutationResolver) DeleteTodo(ctx context.Context, id string) (*model.Todo, error) {
	var todo *model.Todo
	var index int
	for i, k := range r.todos {
		if k.ID != id {
			continue
		}
		index = i
		todo = k
	}
	if todo == nil {
		return nil, fmt.Errorf("uuid of %s does not match an existing uuid", id)
	}
	r.todos = append(r.todos[:index], r.todos[index+1:]...)
	return todo, nil
}

func (r *queryResolver) Todos(ctx context.Context) ([]*model.Todo, error) {
	return r.todos, nil
}

// Mutation returns generated.MutationResolver implementation.
func (r *Resolver) Mutation() generated.MutationResolver { return &mutationResolver{r} }

// Query returns generated.QueryResolver implementation.
func (r *Resolver) Query() generated.QueryResolver { return &queryResolver{r} }

type mutationResolver struct{ *Resolver }
type queryResolver struct{ *Resolver }
