import React, { FC, ChangeEvent, useState } from "react";
import book from "./icons/book.png";

import { ITask } from "./types";
import TodoTask from "./components/TodoTask";

const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [todoList, setTodoList] = useState<ITask[]>([]);

  const addTask = (): void => {
    if (!task) return;
    const newTask = {
      id: Date.now(),
      title: task,
      completed: false,
    };
    setTodoList([...todoList, newTask]);
    setTask("");
    console.log(todoList);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask()
  }

  return (
    <div className="wrapper">
      {/* InputList */}
      <div className="container-col flex-[30%]">
        <h3 className="title-1">TodoInput</h3>
        <div className="container-col border border-solid border-grey-400 rounded-lg mt-3 p-[12px] pl-[12px]">
          <form onSubmit={handleSubmit} className="container-row justify-start border border-solid border-grey-400 rounded-lg">
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

      {/* TodoList */}
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
            <button className="p-[7px] px-[115px] bg-color_red rounded text-white">
              Delete done tasks
            </button>
            <button className="p-[7px] px-[115px] bg-color_red rounded text-white">
              Delete all tasks
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
{
  /* <div className="w-full flex justify-center flex-col items-center">
          <h3 className="title-1">TodoInput</h3>

          <div className="border border-solid border-grey-400 rounded-lg mt-3 p-5 container">
               <div className="container">
                    <div className=''>
                         <img src={book} alt="book" />
                    </div>
                    <input
                         type="text"
                         placeholder="New Todo"
                         className="w-full border border-solid border-grey-700 p-1 rounded-lg"
                         onChange={handleValue}
                         value={value}
                         />
               </div>
               <button className='btn' onClick={clickHandler}>Add new task</button>
          </div>
       </div> */
}
