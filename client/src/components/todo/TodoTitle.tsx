import { ITodo } from '../../interfaces/ITodo';
import EditIcon from '../../assets/icons8-edit.svg'

type Props = {
  handleChange: () => void;
  todo: ITodo;
};

export default function TodoTitle({
  handleChange,
  todo,
}: Props) {
  return (
    <div className="flex gap-2 items-center">
      <input
        className="hover:outline hover:outline-2 hover:outline-red-500 hover:rounded-md"
        id={`checkbox_id ${todo.id}`}
        type="checkbox"
        onChange={handleChange}
      />
      <h2 className="text-2xl font-medium">{todo.task}</h2>
      <button className="opacity-40 hover:opacity-100 hover:scale-110 focus:opacity-100">
        <img src={EditIcon} alt="edit button" />
      </button>
    </div>
  );
}
