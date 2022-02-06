import { render } from '@testing-library/react';
import { Provider } from 'urql';

import { Home } from '@/pages/index';

import { mockGraphQlClient } from '@/testing/mocks/client';

test('Index page matches snapshot', () => {
  const { asFragment } = render(
    // @ts-expect-error: Mock not fully fleshed out
    <Provider value={mockGraphQlClient}>
      <Home />{' '}
    </Provider>
  );
  expect(asFragment()).toMatchSnapshot();
});
