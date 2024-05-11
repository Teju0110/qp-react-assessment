import { configureStore } from '@reduxjs/toolkit';
import ToDoSlice from './ToDo.slice';

export const store = configureStore({
  reducer: {
    todos: ToDoSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
