import { Todo } from '../interfaces';

interface Props {
  todos: Todo[]
}
const ListTodos = ({ todos }: Props) => {
  return (
    <div className="max-w-md mx-auto mt-8">
      <ul className="grid gap-4">
        {todos.map(todo => (
          <li key={todo.id} className="p-4 border rounded-md shadow-md flex items-center justify-between">
            <div className={`text-lg font-semibold ${todo.status === 'finish'
                ? 'text-green-600'
                : todo.status === 'pending'
                  ? 'text-yellow-600'
                  : 'text-blue-600'
              }`}>
              {todo.status === 'finish'
                ? '✔️'
                : todo.status === 'pending'
                  ? '⏳'
                  : '➡️'}
            </div>
            <div className="ml-4">{todo.description}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListTodos;