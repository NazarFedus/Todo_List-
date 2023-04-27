import {FC} from "react";
import TodoInput from "./components/TodoInput/TodoInput";
import TodoList from "./components/TodoList/TodoList";
import TodoProvider from "./components/TodoProvider";

const App: FC = () => {
  return (
    <TodoProvider>
      <div className="wrapper">
        <TodoInput></TodoInput>
        <TodoList></TodoList>
      </div>
    </TodoProvider>
  );
};

export default App;
