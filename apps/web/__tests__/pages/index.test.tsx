import { render } from '@testing-library/react';

import Home from '@/pages/index';

test('Index page matches snapshot', () => {
  const { asFragment } = render(<Home />);
  expect(asFragment()).toMatchSnapshot();
});
