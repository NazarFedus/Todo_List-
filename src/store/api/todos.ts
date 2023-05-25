import { createAsyncThunk } from "@reduxjs/toolkit";

const baseUrl = `https://jsonplaceholder.typicode.com/todos`;

export const fetchTodos = createAsyncThunk('todoSlice/setTodos', () => {
     return fetch(baseUrl)
               .then((res) => res.json())
               .catch((error) => console.error(error))
})