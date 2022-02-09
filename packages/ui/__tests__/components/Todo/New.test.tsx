import { render } from '@testing-library/react';

import { NewTodo } from '../../../components/Todo';

test('NewTodo component matches snapshot', () => {
  const { asFragment } = render(
    <NewTodo insertTodo={() => Promise.resolve()} />
  );
  expect(asFragment()).toMatchSnapshot();
});
