import { NewTodo } from 'ui/components/Todo/';

import { useMutation } from 'urql';
import { InsertTodoDocument, InsertTodoMutation } from '@/generated/graphql';

export const NewTodoWrapper = (): JSX.Element => {
  const [, sendInsert] = useMutation<InsertTodoMutation>(InsertTodoDocument);

  const insertTodo = async (description: string): Promise<void> => {
    const variables = {
      todo: {
        description,
      },
    };

    // Update GraphQL
    const { error } = await sendInsert(variables);
    // Update local state
    if (error) {
      console.log('Failed to insert todo');
    }
  };

  return <NewTodo insertTodo={insertTodo} />;
};
