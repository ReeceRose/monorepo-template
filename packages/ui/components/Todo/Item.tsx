import { ITodo } from 'lib/types';

type Props = {
  data: ITodo;
  markAsCompleted: (id: string) => boolean;
};

export const TodoItem = ({ data, markAsCompleted }: Props): JSX.Element => {
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
            markAsCompleted(data.id);
          }}
          className="text-blue-600 dark:text-blue-500 hover:underline"
        >
          Mark as completed
        </button>
      </td>
    </tr>
  );
};
