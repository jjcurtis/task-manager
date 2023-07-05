import TodoDeadline from './TodoDeadline';
import TodoTitle from './TodoTitle';
import { ITodo } from '../../interfaces/ITodo';
import Card from '../ui/Card';
import { useEffect, useState } from 'react';

export default function TodoItem({ ...todo }: ITodo) {
  const [checked, setChecked] = useState(false);
  const [wait, setWait] = useState(false);

  useEffect(() => {
    if (wait === true) {
      setTimeout(() => {
        setChecked(true);
      }, 750);
    }
  }, [wait]);

  function handleChange() {
    fetch('http://localhost:3000/api/todos', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(todo),
    });
    setWait(true);
  }

  return (
    <>
      {!checked && (
        <Card>
          <TodoTitle todo={todo} handleChange={handleChange} />
          <TodoDeadline todo={todo}  />
        </Card>
      )}
    </>
  );
}
   