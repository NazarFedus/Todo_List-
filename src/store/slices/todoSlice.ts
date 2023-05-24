import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { TInitialState } from "../../types";

export const getTodos = createAsyncThunk(
  "todoSlice/getTodos",
  async (_, { dispatch }) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos`);
    dispatch(setTodos(await response.json()));
  }
);

const initialState: TInitialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todoSlice",
  initialState,
  reducers: {
    setTodos: (state, action) => {
      state.todos = action.payload;
    },
    addTodo: (state, action) => {
      state.todos = [...state.todos, action.payload];
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((task) => task.id !== action.payload);
    },
    toggleTodo: (state, action) => {
      state.todos = state.todos.map((task) =>
        task.id === action.payload
          ? { ...task, completed: !task.completed }
          : task
      );
    },
    deleteDoneTodos: (state, action) => {
      state.todos = state.todos.filter((task) => !task.completed);
    },
    deleteAllTodos: (state, action) => {
      state.todos = state.todos = [];
    },
  },
});

export const { setTodos, addTodo, deleteTodo, toggleTodo, deleteDoneTodos, deleteAllTodos } = todoSlice.actions;

export default todoSlice.reducer;
