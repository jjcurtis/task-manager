import { useContext, useState } from 'react';
import { TaskContext } from '../App';
import Menu from './Menu';

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const setShowNewTask = useContext(TaskContext)

  function handleClick() {
    setShowNewTask!(showNewTask => !showNewTask)
  }

  return (
    <header className="flex justify-between items-center bg-slate-400 text-4xl px-8 py-4 shadow-white shadow-md">
      <h1 className="font-semibold">Todo List</h1>
      {showMenu && (
        <nav>
          <ul className="flex gap-8 text-2xl">
            <li className='hover:text-slate-50 transition-colors'>
              <button onClick={handleClick}>Create New Task</button>
            </li>
          </ul>
        </nav>
      )}
      <Menu showMenu={showMenu} setShowMenu={setShowMenu} />
    </header>
  );
}
