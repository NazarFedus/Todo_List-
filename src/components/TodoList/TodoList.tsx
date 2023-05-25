import { FC, useContext, useState } from "react";

// import { TodoContext } from "../../context/context";
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
    //  const {state, dispatch} = useContext(TodoContext);
    const todoList = useSelector((state: TState) => state.todosSlice?.todos)
    console.log(todoList)
    const dispatch = useDispatch()
    //  const {todoList} = state;


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
          {todoList.map((task: ITask) =>{
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
