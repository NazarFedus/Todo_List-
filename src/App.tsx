import React, { FC, ChangeEvent, useState } from "react";
import book from './icons/book.png'

import { ITask } from "./types";
import TodoTask from "./components/TodoTask";

const App: FC = () => {

  const [task, setTask] = useState<string>("");
  const [todoList, setTodoList] = useState<ITask[]>([]);

  const addTask = (): void => {
    const newTask = {
      id: Date.now(),
      title: task,
      completed: false
    }
    setTodoList([...todoList, newTask])
    setTask('');
    console.log(todoList)
  }

  return (
    <div className="wrapper">

      {/* InputList */}
      <div className="container-col flex-[30%]">
        <h3 className="title-1">TodoInput</h3>
        <div className="container-col border border-solid border-grey-400 rounded-lg mt-3 p-5">
          <div>
            <div><img src={book} alt="book" /></div>
          <input
            type="text"
            placeholder="New Todo..."
            onChange={(event) => setTask(event.target.value)}
            value={task}
            />
          </div>

          <button onClick={addTask}>Add new task</button>
        </div>
      </div>

      {/* TodoList */}
      <div className="container-col flex-[70%]">
        <h3>TodoList</h3>
        <div className="container-col">
          <div>
            <button>All</button>
            <button>Done</button>
            <button>Todo</button>
          </div>
          <div>
            {todoList.map(item => <TodoTask key={item.id} title={item.title} completed={item.completed}/>)}
          </div>
          <div>
            <button>Delete done tasks</button>
            <button>Delete all tasks</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
{/* <div className="w-full flex justify-center flex-col items-center">
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
       </div> */}