import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TodosType } from '../Interface/Todo';

const todos = localStorage.getItem('todos') || [];

let parsed;

if (typeof todos === 'string') {
  parsed = JSON.parse(todos);
}

const initialState: TodosType[] = parsed || [];

const TodoSlice = createSlice({
  name: 'todo',
  initialState: { value: initialState },
  reducers: {
    addTodo: (state, action) => {
      state.value.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.value = state.value.filter((item) => item.id != action.payload);
    },
    editTodo: (state, action) => {
      console.log('payload', action.payload);
      state.value.map((item) => {
        if (item.id == action.payload.id) {
          item.todoText = action.payload.editText;
        }
      });
    },
    completeTodo: (state, action) => {
      state.value.map((item) => {
        if (item.id == action.payload.id) {
          item.completed = !item.completed;
        }
      });
    },
    clearCompleted: (state) => {
      state.value = initialState;
    },
  },
});

export const { addTodo, deleteTodo, completeTodo, clearCompleted, editTodo } =
  TodoSlice.actions;

export default TodoSlice.reducer;
