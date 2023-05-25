import { createAsyncThunk } from "@reduxjs/toolkit";
import { IFetchTodos } from "../../types";

const baseUrl = `https://jsonplaceholder.typicode.com/todos`;

export const fetchTodos = createAsyncThunk<IFetchTodos[], void>(
  "todo/setTodos",
  async () => {
    try {
      const response = await fetch(baseUrl);

      if (!response.ok) {
        throw Error("Failed to fetch todos");
      }

      return await response.json();
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
);
