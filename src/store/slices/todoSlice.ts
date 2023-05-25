import { createSlice } from "@reduxjs/toolkit";
import { ITask, TState } from "../../types";

const initialState: TState = {
     todos: [],
   };

export const todoSlice = createSlice({
     name: "todoSlice",
     initialState,
     reducers: {
       setTodos: (state: TState, action) => {
         state.todos = action.payload;
       },
       addTodo: (state: TState, action) => {
         state.todos = [...state.todos, action.payload];
       },
       deleteTodo: (state, action) => {
         state.todos = state.todos?.filter((task: ITask) => task.id !== action.payload);
       },
       toggleTodo: (state: TState, action) => {
         state.todos = state.todos?.map((task: ITask) =>
           task.id === action.payload
             ? { ...task, completed: !task.completed }
             : task
         );
       },
       deleteDoneTodos: (state) => {
         state.todos = state.todos?.filter((task: ITask) => !task.completed);
       },
       deleteAllTodos: (state) => {
         state.todos = state.todos = [];
       },
     },
   });

   export const { setTodos, addTodo, deleteTodo, toggleTodo, deleteDoneTodos, deleteAllTodos } = todoSlice.actions;

   export default todoSlice.reducer;