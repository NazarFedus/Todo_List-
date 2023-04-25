import React, { useContext } from "react";
import trash from '../../../icons/trash.png'
import pen from '../../../icons/pen.png'
import { ITodoTaskProps} from "../../../types";
import { TodoContext } from "../../../context/context";

const TodoTask = ({task}: ITodoTaskProps) => {
  const {dispatch} = useContext(TodoContext);

  const deleteTask = (): void => {
    dispatch({type: "DELETE_TASK", payload: task.id})
  }
  const toggleTask = (): void => {
    dispatch({type: "TOGGLE_TASK", payload: task.id})
  }
  return (
    <div className="task mb-3 border border-solid border-grey-400 rounded-md p-[12px] transition-all hover:bg-slate-400">
      <span className={`flex-[70%] ${task.completed && "line-through text-red-600"}`}>{task.title}</span>
      <div className="flex-[30%] flex justify-end gap-[10px]">
        <input type="checkbox" className="form-checkbox-custom" onChange={toggleTask}/>
        <button><img src={pen} alt="pen" className="scale-[1.10]" /></button>
        <button onClick={deleteTask}><img src={trash} alt="trash" className="scale-[1.10]" /></button>
      </div>
    </div>
  );
};

export default TodoTask;
