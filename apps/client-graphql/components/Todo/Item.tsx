import { useMutation } from 'urql';
import {
  DeleteTodoDocument,
  DeleteTodoMutation,
  UpdateTodoDocument,
  UpdateTodoMutation,
} from '@/generated/graphql';
import { ITodo } from 'lib/types';

import { TodoItem } from 'ui/components/Todo';
import { TodoItemProps } from 'lib/types/props/todo';

export const TodoItemWrapper = ({ data }: TodoItemProps): JSX.Element => {
  const [, sendUpdate] = useMutation<UpdateTodoMutation>(UpdateTodoDocument);
  const [, sendDelete] = useMutation<DeleteTodoMutation>(DeleteTodoDocument);

  const toggleCompleted = async (todo: ITodo): Promise<void> => {
    const { error } = await sendUpdate({
      todo: {
        id: todo.id,
        description: todo.description,
        completed: !todo.completed,
      },
    });
    if (error) {
      console.log('Failed to fetch and udpdate todo with GraphQL');
    }
  };

  const deleteTodo = async (id: string): Promise<void> => {
    const { error } = await sendDelete({
      id,
    });
    if (error) {
      console.log('Failed to delete todo from GraphQL');
    }
  };

  return (
    <TodoItem
      data={data}
      deleteTodo={deleteTodo}
      toggleCompleted={toggleCompleted}
    />
  );
};
