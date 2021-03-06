import { ITodo } from 'lib/types';

import { TodoItemProps } from 'lib/types/props/todo/';

type Props = {
  data?: ITodo[];
  TodoItem: ({ data }: TodoItemProps) => JSX.Element;
};

export const TodoList = ({ data, TodoItem }: Props): JSX.Element => {
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden shadow-md sm:rounded-lg">
            <table className="min-w-full">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th
                    scope="col"
                    className="w-2/3 px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                  >
                    Description
                  </th>
                  <th
                    scope="col"
                    className="w-1/4 px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                  >
                    Completed
                  </th>
                  <th scope="col" className="relative px-6 py-3">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {data && data.length != 0 ? (
                  data?.map((todo: ITodo) => (
                    <TodoItem key={todo.id} data={todo} />
                  ))
                ) : (
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      No data
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
