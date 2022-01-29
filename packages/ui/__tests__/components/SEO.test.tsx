import { render } from '@testing-library/react';

import { SEO } from '../../components';

jest.mock('next/head', () => {
  return {
    __esModule: true,
    // eslint-disable-next-line react/display-name
    default: ({ children }: { children: Array<React.ReactElement> }) => {
      return <>{children}</>;
    },
  };
});

test('SEO component matches snapshot', () => {
  const { asFragment } = render(
    <SEO
      title="SEO Test"
      description="This is a test description"
      siteURL={process.env.SITE_URL || ''}
    />
  );
  expect(asFragment()).toMatchSnapshot();
});

test('SEO component metadata content matches passed props', async () => {
  const title: string = 'SEO Test';
  const description: string = 'This is a test description';
  render(
    <div>
      <SEO
        title={title}
        description={description}
        siteURL={process.env.SITE_URL || ''}
      />
    </div>
  );

  expect(document.title).toBe(title);

  expect(
    document.querySelector('meta[name="description"]')?.getAttribute('content')
  ).toBe(description);
  expect(
    document
      .querySelector('meta[name="twitter:description"]')
      ?.getAttribute('content')
  ).toBe(description);
  expect(
    document
      .querySelector('meta[name="og:description"]')
      ?.getAttribute('content')
  ).toBe(description);
});
