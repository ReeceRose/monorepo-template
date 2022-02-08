import { useQuery } from 'urql';

import { withGraphQL } from '@/graphql/client';
import { SEO } from 'ui/components/';
import { GenericNavbar } from 'ui/components/Navbars/';

import { TodosQueryDocument } from '@/generated/graphql';
import { TodoListWrapper, NewTodoWrapper } from '@/components/Todo/';

export function Home(): JSX.Element {
  const UI = (): JSX.Element => {
    const [{ data }] = useQuery({
      query: TodosQueryDocument,
    });

    if (data) {
      return (
        <>
          <NewTodoWrapper />
          <TodoListWrapper data={data?.todos} />
        </>
      );
    } else {
      return <></>;
    }
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
        <div className="pt-20 mx-auto sm:w-full md:w-8/12">
          <UI />
        </div>
      </main>
    </>
  );
}

export default withGraphQL(Home);
