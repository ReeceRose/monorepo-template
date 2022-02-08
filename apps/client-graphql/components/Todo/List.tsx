import { TodoItemWrapper } from './Item';

import { TodoList } from 'ui/components/Todo/List';
import { TodoListOptionalProps } from 'lib/types/props/todo';

export const TodoListWrapper = ({
  data,
}: TodoListOptionalProps): JSX.Element => {
  return <TodoList data={data} TodoItem={TodoItemWrapper} />;
};
