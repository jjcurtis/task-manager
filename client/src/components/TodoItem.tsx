import { ITodo } from '../interfaces/ITodo';
import formatDate from '../functions/formatDate';
import getTime from '../functions/getTime';
import Card from './ui/Card';
import { useEffect, useState } from 'react';

export default function TodoItem({ ...todo }: ITodo) {
  const [checked, setChecked] = useState(false);
  const [wait, setWait] = useState(false)
  
  useEffect(() => {
    if (wait === true) {
      setTimeout(() => {
        setChecked(true)
      }, 750)
    }
  }, [wait])

  function handleChange() {
    fetch('http://localhost:3000/api/todos', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(todo),
    });
    setWait(true)
  }

  return (
    <>
      {!checked && (
        <Card>
          <div className="flex gap-2">
            <input
              id={`checkbox_id ${todo.id}`}
              type="checkbox"
              onChange={handleChange}
            />
            <h2 className="text-2xl font-medium">
              {todo.task}
            </h2>
          </div>
          <h4>
            Due {formatDate(todo.due)} at{' '}
            {getTime(todo.deadline)}
          </h4>
        </Card>
      )}
    </>
  );
}
