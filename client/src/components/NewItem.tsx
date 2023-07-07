import { FormEvent, useContext, useRef } from 'react';
import { TaskContext } from '../App';
import { ITodo } from '../interfaces/ITodo';
import getPreviousDay from '../functions/getPreviousDay';

export default function NewItem() {
  const setShowNewTask = useContext(TaskContext);
  const taskRef = useRef<HTMLInputElement>(null);
  const dueDayRef = useRef<HTMLInputElement>(null);
  const dueTimeRef = useRef<HTMLInputElement>(null);

  function handleSubmit(e: FormEvent) {
    const todo: ITodo = {
      task: taskRef.current!.value,
      completed: false,
      due: dueDayRef.current!.value,
      deadline: dueTimeRef.current!.value,
    };

    e.preventDefault();
    fetch('http://localhost:3000/api/todos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(todo),
    });
    setShowNewTask!(false);
  }

  return (
    <form
      className="flex gap-1 flex-col sm:w-2/3 md:w-1/2 lg:w-1/3 border-2 border-slate-400 p-8 mx-8 sm:mx-auto mt-8 text-lg"
      onSubmit={handleSubmit}
    >
      <label htmlFor="task">Task Name</label>
      <input
        className= "border-2 border-slate-400 px-1 invalid:text-red-500 valid:text-green-600"
        type="text"
        name="task"
        id="task"
        ref={taskRef}
        spellCheck="true"
        minLength={5}
        required
      />
      <label htmlFor="dueDay">Due By Date</label>
      <input
        className="border-2 border-slate-400 px-1"
        type="date"
        name="dueDay"
        id="dueDay"
        // Cant set a past due date
        min={getPreviousDay()}
        //
        ref={dueDayRef}
      />
      <label htmlFor="dueTime">Due At</label>
      <input
        className="border-2 border-slate-400 px-1 invalid:text-red-500 valid:text-green-600"
        type="time"
        name="dueTime"
        id="dueTime"
        ref={dueTimeRef}
      />
      <button
        className="border-2 border-black text-slate-50 bg-slate-400 mt-2 w-fit px-3 rounded-md"
        type="submit"
      >
        Create
      </button>
    </form>
  );
}
