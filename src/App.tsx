import React, { FC, ChangeEvent, useState } from "react";
import TodoInput from "./components/TodoInput/TodoInput";
import TodoList from './components/TodoList/TodoList'

const App: FC = () => {

  return (
    <div className="wrapper">
      <TodoInput></TodoInput>
      <TodoList></TodoList>
    </div>
  );
};

export default App;