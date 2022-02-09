import { render } from '@testing-library/react';

import { GenericNavbar } from '../../../components/Navbars';

test('GenericNavbar component matches snapshot', () => {
  const { asFragment } = render(<GenericNavbar />);
  expect(asFragment()).toMatchSnapshot();
});
