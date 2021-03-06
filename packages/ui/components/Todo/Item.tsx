import { ITodo } from 'lib/types';

type Props = {
  data: ITodo;
  toggleCompleted: (todo: ITodo) => Promise<void>;
  deleteTodo: (id: string) => Promise<void>;
};

export const TodoItem = ({
  data,
  toggleCompleted,
  deleteTodo,
}: Props): JSX.Element => {
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
        {data.description}
      </td>
      <td className="px-6 py-4 text-sm text-gray-500 capitalize whitespace-nowrap dark:text-gray-400">
        {data.completed.toString()}
      </td>
      <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
        <button
          onClick={(e) => {
            e.preventDefault();
            toggleCompleted(data);
          }}
          className="text-blue-600 dark:text-blue-500 hover:underline"
        >
          Toggle completed
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            deleteTodo(data.id);
          }}
          className="ml-4 text-red-600 hover:underline"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};
