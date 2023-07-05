import { Dispatch, SetStateAction, useContext } from 'react';
import Icon from '../assets/icons8-menu.svg';
import { TaskContext } from '../App';

type Props = {
  showMenu: boolean,
  setShowMenu: Dispatch<SetStateAction<boolean>>
};

export default function Menu({ showMenu, setShowMenu }: Props) {
  const setShowNewTask = useContext(TaskContext);

  function handleClick() {
    if (showMenu === true) {
      setShowNewTask!(false)
    }
    
    setShowMenu(showMenu => !showMenu)
  }

  return (
    <menu role="menu">
      <button role="menubar" className="active:bg-slate-300" onClick={handleClick}>
        <img className="w-11" src={Icon} alt="menu icon" />
      </button>
    </menu>
  );
}
