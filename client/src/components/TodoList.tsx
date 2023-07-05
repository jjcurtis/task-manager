import { useEffect, useState } from 'react';
import TodoItem from './TodoItem';
import { ITodo } from '../interfaces/ITodo';

export default function TodoList() {
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/todos')
      .then(res => res.json())
      .then(payload => setTodos(payload));
  }, [todos]);

  return (
    <>
      {todos.map(todo => {
        return <TodoItem key={todo.id} {...todo} />;
      })}
    </>
  );
}
