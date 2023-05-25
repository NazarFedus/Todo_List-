import { configureStore } from '@reduxjs/toolkit';
import todoSlice from './slices/todoSlice';

const store = configureStore({
  reducer: {
    todosSlice: todoSlice
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch