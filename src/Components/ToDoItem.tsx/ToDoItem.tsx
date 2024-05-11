import { FaCircleCheck } from 'react-icons/fa6';
import { FaRegCircle } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { completeTodo, deleteTodo, editTodo } from '../../Store/ToDo.slice';
import { MdDelete } from 'react-icons/md';
import { MdModeEdit } from 'react-icons/md';
import './ToDoItem.css';
import { toast } from 'react-toastify';
import {
  JSXElementConstructor,
  ReactElement,
  ReactNode,
  ReactPortal,
  useState,
} from 'react';
import { MdOutlineDownloadDone } from 'react-icons/md';

const ToDoItem = (todo: {
  todo: {
    completed: any;
    id: any;
    todoText: string;
  };
}) => {
  console.log('...', todo);

  const dispatch = useDispatch();

  const completed = !todo.todo.completed;
  const id = todo.todo.id;

  const [edit, setEdit] = useState(false);
  const [editText, setEditText] = useState('');

  const handleComplete = () => {
    dispatch(completeTodo({ id, completed }));
    if (completed) {
      toast.success('ToDo Plan Completed!');
    } else {
      toast.error('Oops !! ToDo Plan Incomplete !');
    }
  };

  const handleDelete = () => {
    dispatch(deleteTodo(id));
    toast.error('ToDo Plan Deleted');
  };

  const handleEdit = () => {
    setEdit(true);
  };

  const handleEditDone = () => {
    setEdit(false);
    dispatch(editTodo({ id, editText }));
    toast.success('ToDo Plan Edited!');
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (edit) {
      if (event.key === 'Enter') {
        event.preventDefault();
        // Trigger form submission if Enter key is pressed
        handleEditDone();
      }
    }
  };

  return (
    <div className="tododItemContainer">
      {edit ? (
        <>
          <div className="editContainer">
            <input
              type="text"
              className="editInput"
              onChange={(e) => setEditText(e.target.value)}
              onKeyDown={handleKeyDown}
              autoFocus
            />
            <MdOutlineDownloadDone
              className="editDoneIcon"
              onClick={handleEditDone}
            />
          </div>
        </>
      ) : (
        <>
          <div className="todoItem">
            <button onClick={handleComplete} className="completeBTN">
              {todo.todo.completed ? <FaCircleCheck /> : <FaRegCircle />}
            </button>
            <p className="todoText">{todo.todo.todoText}</p>
          </div>
          <div className="todoAction">
            <MdDelete onClick={handleDelete} className="deleteIcon" />
            <MdModeEdit onClick={handleEdit} />
          </div>
        </>
      )}
    </div>
  );
};

export default ToDoItem;
