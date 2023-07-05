import { ITodo } from '../interfaces/ITodo';
import formatDate from '../functions/formatDate';
import getTime from '../functions/getTime';
import Card from './ui/Card';

export default function TodoItem({ ...todo }: ITodo) {
  return (
    <Card>
      <div className="flex gap-2">
        <input
          id={`checkbox_id ${todo.id}`}
          type="checkbox"
          defaultChecked={todo.completed}
        />
        <h2 className="text-2xl font-medium">
          {todo.task}
        </h2>
      </div>
      <h4>
        Due {formatDate(todo.due)} at {getTime(todo.deadline)}
      </h4>
    </Card>
  );
}
