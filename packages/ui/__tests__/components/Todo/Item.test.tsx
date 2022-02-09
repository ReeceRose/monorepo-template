import { render } from '@testing-library/react';
import { ITodo } from 'lib/types';

import { TodoItem } from '../../../components/Todo';

test('TodoItem component matches snapshot', () => {
  const todo: ITodo = {
    id: 'test',
    description: 'test',
    completed: false,
  };
  const deleteTodo = () => Promise.resolve();
  const toggleCompleted = () => Promise.resolve();
  const { asFragment } = render(
    <table>
      <tbody>
        <TodoItem
          data={todo}
          deleteTodo={deleteTodo}
          toggleCompleted={toggleCompleted}
        />
      </tbody>
    </table>
  );
  expect(asFragment()).toMatchSnapshot();
});
