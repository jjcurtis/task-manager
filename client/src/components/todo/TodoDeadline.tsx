import formatDate from '../../functions/formatDate';
import getTime from '../../functions/getTime';
import EditIcon from '../../assets/icons8-edit.svg';
import { ITodo } from '../../interfaces/ITodo';
import { ChangeEvent, MouseEvent, useState } from 'react';

type Props = {
  todo: ITodo;
};

export default function TodoDeadline({ todo }: Props) {
  const [date, setDate] = useState(todo.due.slice(0, 10));
  const [deadline, setDeadline] = useState(todo.deadline);
  const [updating, setUpdating] = useState(false);

  function handleClick(e: MouseEvent<HTMLButtonElement>) {
    if (updating === true) {
      const [year, month, day] = date.split('-')
      console.log(year, month, day)
      fetch('http://localhost:3000/api/todos/deadline', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...todo, due: new Date(+(year), +(month) - 1, +(day)), deadline }),
      });
    }
    setUpdating(updating => !updating)
  }

  function handleDate(e: ChangeEvent<HTMLInputElement>) {
    setDate(e.currentTarget.value)
  }

  function handleDeadline(e: ChangeEvent<HTMLInputElement>) {
    setDeadline(e.currentTarget.value)
  }

  return (
    <div className="flex gap-2 items-start">
      Due{' '}
      <span className="font-semibold">
        {
        updating ?
        <input type="date" name="date" id="date" value={date}
        onChange={handleDate}
        />
        :
        formatDate(date
        )}
      </span>{' '}
      at{' '}
      <span className="font-semibold">
        {
        updating ?
        <input type='time' value={deadline}
        onChange={handleDeadline}
        />
        :
        getTime(deadline)
        }
      </span>
      <button className="opacity-40 hover:opacity-100 hover:scale-110 focus:opacity-100" onClick={handleClick}>
        <img src={EditIcon} alt="edit button" />
      </button>
    </div>
  );
}
