import { createSlice } from "@reduxjs/toolkit";
import { IFetchTodos, ITask, ITodoSlice } from "../../types";
import { fetchTodos } from "../api/todos";

const initialState: ITodoSlice = {
     todos: [],
     isLoading: false
};

export const todoSlice = createSlice({
     name: "todo",
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
          [fetchTodos.pending.type]: (state: ITodoSlice) => {
               state.isLoading = true
          },
          [fetchTodos.fulfilled.type]: (state: ITodoSlice, {payload}: {payload: IFetchTodos[]}) => {
               state.isLoading = false;
               state.todos = payload;
          },
          [fetchTodos.rejected.type]: (state: ITodoSlice) => {
               state.isLoading = false;
          }
       }
   });

   export const { setTodos, addTodo, deleteTodo, toggleTodo, deleteDoneTodos, deleteAllTodos } = todoSlice.actions;

   export default todoSlice.reducer;