import { ChangeEvent, useState } from 'react';
import { ITodo } from '../../interfaces/ITodo';
import EditIcon from '../../assets/icons8-edit.svg';

type Props = {
  handleChange: () => void;
  todo: ITodo;
};

export default function TodoTitle({
  handleChange,
  todo,
}: Props) {
  const [title, setTitle] = useState(todo.task);
  const [updateTitle, setUpdateTitle] = useState(false);

  function handleClick() {
    // Doesn't fetch if title isn't updated
    if (updateTitle === true && title !== todo.task) {
      fetch('http://localhost:3000/api/todos', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...todo, task: title }),
      });
    }
    setUpdateTitle(updateTitle => !updateTitle);
  }

  function handleTitle(e: ChangeEvent<HTMLInputElement>) {
    setTitle(e.target.value);
  }

  return (
    <div className="flex gap-2 items-center">
      <input
        className="hover:bg-red-500 hover:rounded-md"
        id={`checkbox_id ${todo.id}`}
        type="checkbox"
        onChange={handleChange}
      />
      {updateTitle ? (
        <input
          className="text-2xl font-medium"
          type="text"
          name="title"
          id="title"
          onChange={handleTitle}
          value={title}
        />
      ) : (
        <h2 className="text-2xl font-medium">{title}</h2>
      )}
      <button
        onClick={handleClick}
        className={`${updateTitle && 'bg-green-400 border-white border-2 rounded-md animate-pulse opacity-100'} opacity-40 hover:opacity-100 hover:scale-110 active:opacity-100`}
      >
        <img src={EditIcon} alt="edit button" />
      </button>
    </div>
  );
}
