import { useEffect, useState } from 'react';
import { useQuery, useMutation } from 'urql';
import { withUrqlClient } from 'next-urql';

import { SEO } from 'ui/components/';
import { TodoList } from 'ui/components/Todo/';
import { GenericNavbar } from 'ui/components/Navbars/';
import { ITodo } from 'lib/types';

import {
  TodosQueryDocument,
  UpdateTodoDocument,
  UpdateTodoMutation,
} from '@/generated/graphql';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default withUrqlClient((_ssrExchange, _ctx) => ({
  url: process.env.GRAPHQL_URL || 'http://localhost:3007/query',
}))(Home);

export function Home(): JSX.Element {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [result] = useQuery({
    query: TodosQueryDocument,
  });
  useEffect(() => {
    setTodos(result.data?.todos || []);
  }, [result.data?.todos]);

  const [updateTodoResult, sendUpdate] =
    useMutation<UpdateTodoMutation>(UpdateTodoDocument);

  if (updateTodoResult.error) {
    console.log('Failed to updated todo...');
  }

  const toggleCompleted = async (
    id: string,
    completed: boolean
  ): Promise<void> => {
    console.log('marking as done on ', id);

    const variables = {
      todo: {
        id: id,
        completed: completed,
      },
    };
    // Update GraphQL
    await sendUpdate(variables);
    // Update local state
    const todo = todos.find((todo) => todo.id == id);
    if (todo) {
      todo.completed = completed;
    } else {
      console.log('Failed to update todo');
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
        <div className="pt-20">
          <TodoList data={todos} toggleCompleted={toggleCompleted} />
        </div>
      </main>
    </>
  );
}
