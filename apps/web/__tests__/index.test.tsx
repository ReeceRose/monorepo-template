import { render } from '@testing-library/react';

import Home from '@/pages/index';

describe('Index page tests', () => {
  test('Index page matches snapshot', () => {
    const { asFragment } = render(<Home />);
    expect(asFragment()).toMatchSnapshot();
  });
});
