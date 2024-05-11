import React, { useEffect, useState } from 'react';
import './AddTodo.css';
import { IoAddCircle } from 'react-icons/io5';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../Store/ToDo.slice';

const AddTodo = () => {
  const [todoText, setToDoText] = useState('');
  const dispatch = useDispatch();

  const handleClick = () => {
    if (!todoText) {
      toast.error('Please Enter Your Todo Plan');
    } else {
      dispatch(
        addTodo({
          id: Math.floor(Math.random() * 100000),
          todoText,
          completed: false,
        })
      );
      setToDoText('');
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      // Trigger form submission if Enter key is pressed
      handleClick();
    }
  };

  return (
    <div className="addContainer">
      <div className="addToDo">
        <input
          required
          type="text"
          autoFocus
          placeholder="Create a new todo"
          onChange={(e) => {
            setToDoText(e.target.value);
          }}
          onKeyDown={handleKeyDown}
          value={todoText}
        />
        <IoAddCircle className="addIcon" onClick={handleClick} />
      </div>
    </div>
  );
};

export default AddTodo;
