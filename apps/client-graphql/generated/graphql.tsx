import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type InsertTodo = {
  description: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createTodo: Todo;
  updateTodo: Todo;
};

export type MutationCreateTodoArgs = {
  input: InsertTodo;
};

export type MutationUpdateTodoArgs = {
  input: UpdateTodo;
};

export type Query = {
  __typename?: 'Query';
  todos: Array<Todo>;
};

export type Todo = {
  __typename?: 'Todo';
  completed: Scalars['Boolean'];
  description: Scalars['String'];
  id: Scalars['ID'];
};

export type UpdateTodo = {
  completed?: InputMaybe<Scalars['Boolean']>;
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
};

export type CreateTodoMutationVariables = Exact<{
  todo: InsertTodo;
}>;

export type CreateTodoMutation = {
  __typename?: 'Mutation';
  createTodo: { __typename?: 'Todo'; id: string; description: string };
};

export type UpdateTodoMutationVariables = Exact<{
  todo: UpdateTodo;
}>;

export type UpdateTodoMutation = {
  __typename?: 'Mutation';
  updateTodo: { __typename?: 'Todo'; id: string; description: string };
};

export type TodosQueryQueryVariables = Exact<{ [key: string]: never }>;

export type TodosQueryQuery = {
  __typename?: 'Query';
  todos: Array<{
    __typename?: 'Todo';
    id: string;
    description: string;
    completed: boolean;
  }>;
};

export const CreateTodoDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'createTodo' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'todo' } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'InsertTodo' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createTodo' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'todo' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'description' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CreateTodoMutation, CreateTodoMutationVariables>;
export const UpdateTodoDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'updateTodo' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'todo' } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'UpdateTodo' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'updateTodo' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'todo' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'description' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<UpdateTodoMutation, UpdateTodoMutationVariables>;
export const TodosQueryDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'todosQuery' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'todos' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                { kind: 'Field', name: { kind: 'Name', value: 'completed' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<TodosQueryQuery, TodosQueryQueryVariables>;
