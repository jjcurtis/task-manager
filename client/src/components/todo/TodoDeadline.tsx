import formatDate from "../../functions/formatDate";
import getTime from "../../functions/getTime";
import EditIcon from '../../assets/icons8-edit.svg'
import { ITodo } from "../../interfaces/ITodo";

type Props = {
  todo: ITodo
}

export default function TodoDeadline({ todo
}: Props) {
  return <div className="flex gap-2 items-start">
            Due{' '}
            <span className="font-semibold">
              {formatDate(todo.due)}
            </span>{' '}
            at{' '}
            <span className="font-semibold">
              {getTime(todo.deadline)}
            </span>
            <button className='opacity-40 hover:opacity-100 focus:opacity-100'>
              <img src={EditIcon} alt="edit button" />
            </button>
          </div>;
}
  