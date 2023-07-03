import formatDate from "../functions/formatDate"
import getTime from "../functions/getTime"

export interface ITodo {
  id: number,
  task: string,
  due: string,
  completed: boolean
}

export default function TodoItem ({...todo}: ITodo) {
  return (
    <article className="p-4 text-lg border-slate-400 bg-slate-200 border-2">
      <div className="flex gap-2">
        <input type="checkbox" defaultChecked={todo.completed} />
        <h2>{todo.task}</h2>
      </div>
      <h4>{formatDate(todo.due)} at {getTime(todo.due)}</h4>
    </article>
  )
}