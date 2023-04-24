import { useEffect, useState } from "react";
import { IList, ITodo } from "../../../types/list";
import Todo from "./Todo";

export default function TodoList({data}: ITodo[]) {

     return (
       <div className="w-full">
          <h3 className="title-1">List</h3>

          <div>
               {list.map(e => <Todo todo={e} key={e.id} />)}
          </div>

          <div className="w-full flex justify-between">
               <button className="btn">All</button>
               <button className="btn">Done</button>
               <button className="btn">Todo</button>
          </div>
       </div>
     );
   }
