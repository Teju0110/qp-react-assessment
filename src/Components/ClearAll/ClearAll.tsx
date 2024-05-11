import { MdDeleteForever } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { clearCompleted } from '../../Store/ToDo.slice';
import './ClearAll.css';
import { RootState } from '../../Store';
import { toast } from 'react-toastify';

const ClearAll = () => {
  const dispatch = useDispatch();
  // const todos = useSelector((state: RootState) => state.todos.value);
  // console.log('todos', todos);
  const handleClearAll = () => {
    dispatch(clearCompleted());
    toast.success('Clear All ToDo Plans');
  };

  return (
    <div className="clearAll">
      <button onClick={handleClearAll}>
        <MdDeleteForever />
        Clear All
      </button>
    </div>
  );
};

export default ClearAll;
