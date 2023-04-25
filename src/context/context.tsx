import { createContext } from "react";
import { ITask } from "../types";

interface IState {
  todoList: ITask[];
}

interface IContextProps {
  state: IState;
  dispatch: React.Dispatch<any>;
}

const initialState: IState = {
  todoList: [],
};

const TodoContext = createContext({} as IContextProps);

const todoReducer = (state: IState, action: any) => {
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
      };
    case "DELETE_TASK":
      return {
        ...state,
        todoList: state.todoList.filter((task) => task.id !== action.payload),
      };
    case "TOGGLE_TASK":
      return {
        ...state,
        todoList: state.todoList.map((task) =>
          task.id === action.payload
            ? { ...task, completed: !task.completed }
            : task
        ),
      };
    default:
      return state;
  }
};

export { TodoContext, initialState, todoReducer };