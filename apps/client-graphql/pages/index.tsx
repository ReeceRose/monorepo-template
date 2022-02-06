import { useQuery } from 'urql';
import { withUrqlClient } from 'next-urql';

import { SEO } from 'ui/components/';
import { TodoList } from 'ui/components/Todo/';
import { GenericNavbar } from 'ui/components/Navbars/';

import { TodosQueryDocument } from '@/generated/graphql';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default withUrqlClient((_ssrExchange, _ctx) => ({
  url: process.env.GRAPHQL_URL || 'http://localhost:3007/query',
}))(Home);

export function Home(): JSX.Element {
  const [result] = useQuery({
    query: TodosQueryDocument,
  });

  const markAsCompleted = (id: string): boolean => {
    console.log('marking as done on ', id);
    return true;
  };

  return (
    <>
      <SEO
        title="Todo list"
        description="Todo list powered by GraphQL"
        siteURL={process.env.SITE_URL || 'https://localhost:3001'}
      />
      <main>
        <GenericNavbar />
        <div className="pt-20">
          <TodoList
            data={result.data?.todos}
            markAsCompleted={markAsCompleted}
          />
        </div>
      </main>
    </>
  );
}
