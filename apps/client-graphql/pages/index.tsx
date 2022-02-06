import { useQuery } from 'urql';
import { withUrqlClient } from 'next-urql';

import { SEO, Button } from 'ui/components/';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default withUrqlClient((_ssrExchange, _ctx) => ({
  url: process.env.GRAPHQL_URL || 'http://localhost:3007/query',
}))(Home);

export function Home(): JSX.Element {
  const [result] = useQuery({
    query: '{ todos { description } }',
  });
  console.log(result);
  return (
    <div>
      <SEO
        title="CHANGE_ME"
        description="CHANGE_ME"
        siteURL={process.env.SITE_URL || 'https://localhost:3001'}
      />
      <Button />
      {result.data && <p>{JSON.stringify(result.data)}</p>}
    </div>
  );
}
