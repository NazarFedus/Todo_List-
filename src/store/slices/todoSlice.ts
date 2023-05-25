import { createSlice } from "@reduxjs/toolkit";
import { ITask, ITodoSlice } from "../../types";
import { fetchTodos } from "../api/todos";

const initialState: ITodoSlice = {
     todos: [],
     isLoading: false
};

export const todoSlice = createSlice({
     name: "todoSlice",
     initialState,
     reducers: {
       setTodos: (state: ITodoSlice, action) => {
         state.todos = action.payload;
       },
       addTodo: (state: ITodoSlice, action) => {
         state.todos = [...state.todos, action.payload];
       },
       deleteTodo: (state: ITodoSlice, action) => {
         state.todos = state.todos?.filter((task: ITask) => task?.id !== action?.payload);
       },
       toggleTodo: (state: ITodoSlice, action) => {
         state.todos = state.todos?.map((task: ITask) =>
           task?.id === action?.payload
             ? { ...task, completed: !task.completed }
             : task
         );
       },
       deleteDoneTodos: (state: ITodoSlice) => {
         state.todos = state.todos?.filter((task: ITask) => !task.completed);
       },
       deleteAllTodos: (state: ITodoSlice) => {
         state.todos = [];
       },
     },
     extraReducers: {
          [fetchTodos.pending]: (state: ITodoSlice) => {
               state.isLoading = true
          },
          [fetchTodos.fulfilled]: (state: ITodoSlice, {payload}) => {
               state.isLoading = false;
               state.todos = payload;
          },
          [fetchTodos.rejected]: (state: ITodoSlice) => {
               state.isLoading = false;
          }
       }
   });

   export const { setTodos, addTodo, deleteTodo, toggleTodo, deleteDoneTodos, deleteAllTodos } = todoSlice.actions;

   export default todoSlice.reducer;