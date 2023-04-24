import { useState } from 'react';
import book from '../icons/book.png'

export default function TodoInput({onChange}) {

     const [value, setValue] = useState<string>('')

     function handleValue(event){
          setValue(event.target.value)
     }

     function clickHandler(){
          onChange(value)
          setValue('')
     }


     return (
       <div className="w-full flex justify-center flex-col items-center">
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
       </div>
     );
   }
