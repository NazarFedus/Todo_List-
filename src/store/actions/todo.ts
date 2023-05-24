import { ITask } from "../../types";

const ADD_TASK = 'ADD_TASK';
const DELETE_TASK = 'DELETE_TASK';
const TOGGLE_TASK = 'TOGGLE_TASK';
const DELETE_DONE_TASKS = 'DELETE_DONE_TASKS';
const DELETE_ALL_TASKS = 'DELETE_ALL_TASKS';

export const addTask = (todo: ITask) => {
     return {
          type: ADD_TASK,
          payload: todo
     }
}

export const deleteTask = (id: number) => {
     return {
          type: DELETE_TASK,
          payload: id
     }
}

export const toggleTask = (id: number) => {
     return {
          type: TOGGLE_TASK,
          payload: id
     }
}

export const deleteDoneTasks = () => {
     return {
          type: DELETE_DONE_TASKS,
          payload: null
     }
}

export const deleteAllTasks = () => {
     return {
          type: DELETE_ALL_TASKS,
          payload: null
     }
}
