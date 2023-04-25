import React, { FC, useContext } from "react";

import { TodoContext } from "../../context/context";
import TodoTask from "./Todo/TodoTask";
import { ITask } from "../../types";


export const TodoInput: FC = () => {
     const {state, dispatch} = useContext(TodoContext);
     const {todoList} = state;
     console.log(todoList)

     const deleteAllTasks = () => {
          dispatch({type: "DELETE_ALL_TASKS"})
     }
     const deleteDoneTasks = () => {
          dispatch({type: "DELETE_DONE_TASKS"})
     }

  return (
    <div className="container-col flex-[70%]">
      <h3 className="title-1">TodoList</h3>
      <div className="container-col my-[7px]">
        <div className="container-row justify-between gap-[10px]">
          <button className="p-[7px] px-[95px] bg-color_blue rounded text-white">
            All
          </button>
          <button className="p-[7px] px-[95px] bg-color_blue rounded text-white">
            Done
          </button>
          <button className="p-[7px] px-[95px] bg-color_blue rounded text-white">
            Todo
          </button>
        </div>
        <div className="w-full my-[40px] h-[240px] max-h-[240px] overflow-y-scroll">
          {todoList.map((task: ITask) => (
            <TodoTask key={task.id} task={task} />
          ))}
        </div>
        <div className="container-row justify-between">
          <button
          onClick={deleteDoneTasks}
          className="p-[7px] px-[115px] bg-color_red rounded text-white">
            Delete done tasks
          </button>
          <button
               onClick={deleteAllTasks}
               className="p-[7px] px-[115px] bg-color_red rounded text-white">
            Delete all tasks
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoInput;
