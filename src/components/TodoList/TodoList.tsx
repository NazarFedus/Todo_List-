import React, { FC, useContext } from "react";

import TodoTask from "./Todo/TodoTask";
import { ITask } from "../../types";
import { useDispatch, useSelector } from "react-redux";
import { deleteAllTodos, deleteDoneTodos } from "../../store/slices/todoSlice";


export const TodoInput: FC = () => {
  const todos = useSelector((state) => state);
  console.log(todos)
  const dispatch = useDispatch();

     console.log(todos)

     const deleteAllTasks = () => {
          dispatch(deleteAllTodos());
     }
     const deleteDoneTasks = () => {
          dispatch(deleteDoneTodos());
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
          {todos.map((task: ITask) => (
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
