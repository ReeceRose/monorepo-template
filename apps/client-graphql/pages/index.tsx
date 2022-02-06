import { useQuery } from 'urql';
import { withUrqlClient } from 'next-urql';

import { SEO, Button } from 'ui/components/';

import { TodosQueryDocument } from '@/generated/graphql';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default withUrqlClient((_ssrExchange, _ctx) => ({
  url: process.env.GRAPHQL_URL || 'http://localhost:3007/query',
}))(Home);

export function Home(): JSX.Element {
  const [result] = useQuery({
    query: TodosQueryDocument,
  });

  return (
    <div>
      <SEO
        title="CHANGE_ME"
        description="CHANGE_ME"
        siteURL={process.env.SITE_URL || 'https://localhost:3001'}
      />
      <Button />

      {result.data &&
        result.data.todos.map((todo) => (
          <p key={todo.id}>{todo.description}</p>
        ))}
    </div>
  );
}
