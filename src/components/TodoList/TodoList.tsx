import { FC, useState } from "react";

import TodoTask from "./Todo/TodoTask";
import { ITask, TState } from "../../types";
import { useDispatch, useSelector } from "react-redux";
import { deleteAllTodos, deleteDoneTodos } from "../../store/slices/todoSlice";


export const TodoInput: FC = () => {
    const [active, setActive] = useState({
      all: true,
      done: false,
      todo: false
    })
  const {todos, isLoading} = useSelector((state: TState) => state.todosSlice)

  console.log(isLoading)
  console.log(todos)

    const dispatch = useDispatch()

     const deleteAllTasks = () => {
          dispatch(deleteAllTodos())
     }
     const deleteDoneTasks = () => {
          dispatch(deleteDoneTodos())
     }

  return (
    <div className="container-col flex-[70%]">
      <h3 className="title-1">TodoList</h3>
      <div className="container-col my-[7px]">
        <div className="container-row justify-between gap-[10px]">
          <button onClick={() => setActive({all: true, done: false, todo: false})} className={`p-[7px] px-[95px] bg-color_blue ${active.all && "bg-teal-700"} rounded text-white`}>
            All
          </button>
          <button onClick={() => setActive({all: false, done: true, todo: false})} className={`p-[7px] px-[95px] bg-color_blue ${active.done && "bg-teal-700"} rounded text-white`}>
            Done
          </button>
          <button onClick={() => setActive({all: false, done: false, todo: true})} className={`p-[7px] px-[95px] bg-color_blue ${active.todo && "bg-teal-700"} rounded text-white`}>
            Todo
          </button>
        </div>
        <div className="w-full my-[40px] h-[240px] max-h-[240px] overflow-y-scroll">
          {isLoading && <h1 style={{textAlign: 'center'}}>Loading...</h1>}
          {todos?.map((task: ITask) =>{
            if(active.all) return <TodoTask key={task.id} task={task} />
            if(active.done){
              if(task.completed) return <TodoTask key={task.id} task={task} />
            }
            if(active.todo){
              if(!task.completed) return <TodoTask key={task.id} task={task} />
            }
          })}
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
