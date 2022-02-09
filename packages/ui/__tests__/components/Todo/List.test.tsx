import { render } from '@testing-library/react';
import { ITodo } from 'lib/types';

import { TodoList, TodoItem as TodoItemUI } from '../../../components/Todo';

const todo: ITodo = {
  id: 'test',
  description: 'test',
  completed: false,
};

const todoItemWrapper = (): JSX.Element => {
  const deleteTodo = () => Promise.resolve();
  const toggleCompleted = () => Promise.resolve();
  return (
    <TodoItemUI
      data={todo}
      deleteTodo={deleteTodo}
      toggleCompleted={toggleCompleted}
    />
  );
};

test('TodoList component matches snapshot', () => {
  const { asFragment } = render(
    <TodoList TodoItem={todoItemWrapper} data={[todo]} />
  );
  expect(asFragment()).toMatchSnapshot();
});
