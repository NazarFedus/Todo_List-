import React from "react";
import trash from '../icons/trash.png'
import pen from '../icons/pen.png'
import { ITodoTaskProps} from "../types";

const TodoTask = ({task}: ITodoTaskProps) => {

     console.log(task)
  return (
    <div className="task mb-3 border border-solid border-grey-400 rounded-md p-[12px] transition-all hover:bg-slate-400">
      <span className="flex-[70%]">{task.title}</span>
      <div className="flex-[30%] flex justify-end gap-[10px]">
        <input type="checkbox" className="form-checkbox-custom"/>
        <button><img src={pen} alt="pen" className="scale-[1.10]" /></button>
        <button><img src={trash} alt="trash" className="scale-[1.10]" /></button>
      </div>
    </div>
  );
};

export default TodoTask;
