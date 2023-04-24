import { ITodo } from "../../../types/list";

export default function Todo({todo}: ITodo){


     console.log(todo)
     return(
          <div>
               <p>{todo.title}</p>
               <div>
                    <input type="checkbox" />
                    <img src="" alt="" />
                    <img src="" alt="" />
               </div>
          </div>
     );
}