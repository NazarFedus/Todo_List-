import React, { useEffect, useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

import { list } from "./TodoWrapper.helper.ts";

const TodoContext = React.createContext();

export default function TodoWrapper() {
  const [todoList, setTodoList] = useState(list);
  const [inputValue, setInputValue] = useState<string>("");

  function handleValue(value: string) {
    console.log(value);
    setInputValue(value);
  }

  useEffect(() => {
    if (!inputValue) return;
    list.push({
      id: list.length + 1,
      title: inputValue,
      completed: false,
    });
    setTodoList(list);
  }, [inputValue]);

  console.log(todoList);
  return (
    <TodoContext>
      <div className="w-full flex flex-col justify-center items-center py-6 px-16 ">
        <div className="w-4/6">
          <TodoInput onChange={handleValue}></TodoInput>
          <TodoList data={todoList}></TodoList>
        </div>
      </div>
    </TodoContext>
  );
}
