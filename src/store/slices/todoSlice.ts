import { createSlice } from "@reduxjs/toolkit";
import { ITask, TInitState } from "../../types";

const initialState: TInitState = {
     todos: [],
};

export const todoSlice = createSlice({
     name: "todoSlice",
     initialState,
     reducers: {
       setTodos: (state: TInitState, action) => {
         state.todos = action.payload;
       },
       addTodo: (state: TInitState, action) => {
         state.todos = [...state.todos, action.payload];
       },
       deleteTodo: (state: TInitState, action) => {
         state.todos = state.todos?.filter((task: ITask) => task?.id !== action?.payload);
       },
       toggleTodo: (state: TInitState, action) => {
         state.todos = state.todos?.map((task: ITask) =>
           task?.id === action?.payload
             ? { ...task, completed: !task.completed }
             : task
         );
       },
       deleteDoneTodos: (state: TInitState) => {
         state.todos = state.todos?.filter((task: ITask) => !task.completed);
       },
       deleteAllTodos: (state: TInitState) => {
         state.todos = [];
       },
     },
   });

   export const { setTodos, addTodo, deleteTodo, toggleTodo, deleteDoneTodos, deleteAllTodos } = todoSlice.actions;

   export default todoSlice.reducer;