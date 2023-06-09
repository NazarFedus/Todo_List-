import React, { FC, useContext, useState } from "react";
import book from "../../icons/book.png";

import { TodoContext } from "../../context/context";
import { ITask } from "../../types";


export const TodoInput: FC = () => {
  const [task, setTask] = useState<string>("");
  const {dispatch} = useContext(TodoContext);
  const [todoList, setTodoList] = useState<ITask[]>([]);

  const addTask = (): void => {
    if (!task) return;
    const newTask = {
      id: Date.now(),
      title: task,
      completed: false,
    };
    dispatch({type: 'ADD_TASK', payload: newTask});
    setTask("");
    console.log(todoList);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    addTask()
  };
  
  return (
    <div className="container-col flex-[30%]">
      <h3 className="title-1">TodoInput</h3>
      <div className="container-col border border-solid border-grey-400 rounded-lg mt-3 p-[12px] pl-[12px]">
        <form
          onSubmit={handleSubmit}
          className="container-row justify-start border border-solid border-grey-400 rounded-lg"
        >
          <div className="bg-color_blue p-1 scale-[0.7]">
            <img src={book} alt="book" />
          </div>
          <input
            type="text"
            placeholder="New Todo..."
            onChange={(event) => setTask(event.target.value)}
            value={task}
            className="w-full focus: outline-none"
          />
        </form>

        <button
          onClick={addTask}
          className="w-full mt-[10px] p-[5px] bg-color_blue rounded text-white"
        >
          Add new task
        </button>
      </div>
    </div>
  );
};

export default TodoInput;
