import { useEffect, useState } from "react"
import TodoItem, { ITodo } from "./TodoItem";

export default function TodoList() {
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/todos')
    .then(res => res.json())
    .then(payload => setTodos(payload))
  }, [todos])

  return (
    <main className="grid md:grid-cols-2 lg:grid-cols-3 p-8">
      {todos.map(todo => {
        return <TodoItem key={todo.id} {...todo} />
      })}
    </main>
  )
}