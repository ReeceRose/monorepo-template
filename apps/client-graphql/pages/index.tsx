import { useQuery, useMutation } from 'urql';
import { withUrqlClient } from 'next-urql';

import { SEO } from 'ui/components/';
import { TodoList, NewTodo } from 'ui/components/Todo/';
import { GenericNavbar } from 'ui/components/Navbars/';
import { ITodo } from 'lib/types';

import {
  DeleteTodoDocument,
  DeleteTodoMutation,
  InsertTodoDocument,
  InsertTodoMutation,
  TodosQueryDocument,
  UpdateTodoDocument,
  UpdateTodoMutation,
} from '@/generated/graphql';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default withUrqlClient((_ssrExchange, _ctx) => ({
  url: process.env.GRAPHQL_URL || 'http://localhost:3007/query',
}))(Home);

export function Home(): JSX.Element {
  const [result] = useQuery({
    query: TodosQueryDocument,
  });

  const [updateTodoResult, sendUpdate] =
    useMutation<UpdateTodoMutation>(UpdateTodoDocument);

  if (updateTodoResult.error) {
    console.log('Failed to updated todo...');
  }

  const [deleteTodoResult, sendDelete] =
    useMutation<DeleteTodoMutation>(DeleteTodoDocument);

  if (deleteTodoResult.error) {
    console.log('Failed to delete todo...');
  }

  const [insertTodoResult, sendInsert] =
    useMutation<InsertTodoMutation>(InsertTodoDocument);
  if (insertTodoResult.error) {
    console.log('Failed to delete todo...');
  }
  // This is an interesting problem. I don't want this logic in the UI library, I think in a "realistic"
  // project it would be better to create a wrapper for that UI component which adds this logic.
  const toggleCompleted = async (todo: ITodo): Promise<void> => {
    const variables = {
      todo: {
        id: todo.id,
        description: todo.description,
        completed: !todo.completed,
      },
    };
    // Update GraphQL
    await sendUpdate(variables);
    // Update local state
    const original = result.data?.todos.find((todo) => todo.id == todo.id);
    if (original) {
      original.completed = !todo.completed;
    } else {
      console.log('Failed to update todo');
    }
  };

  const deleteTodo = async (id: string): Promise<void> => {
    const variables = {
      id,
    };
    // Update GraphQL
    await sendDelete(variables);
    // Update local state
    if (result.data?.todos) {
      result.data.todos = result.data?.todos.filter(
        (todo) => todo.id == todo.id
      );
    } else {
      console.log('Failed to update todo');
    }
  };

  const insertTodo = async (description: string): Promise<void> => {
    const variables = {
      todo: {
        description,
      },
    };

    // Update GraphQL
    const res = await sendInsert(variables);
    // Update local state
    if (res.data) {
      result.data?.todos.push({
        id: res.data.createTodo.id,
        description: description,
        completed: false,
      });
    } else {
      console.log('Failed to insert todo');
    }
  };

  return (
    <>
      <SEO
        title="Todo list"
        description="Todo list powered by GraphQL"
        siteURL={process.env.SITE_URL || 'https://localhost:3001'}
      />
      <main>
        <GenericNavbar />
        <div className="pt-20 mx-auto sm:w-full md:w-8/12">
          <NewTodo insertTodo={insertTodo} />
          <TodoList
            data={result.data?.todos}
            toggleCompleted={toggleCompleted}
            deleteTodo={deleteTodo}
          />
        </div>
      </main>
    </>
  );
}
