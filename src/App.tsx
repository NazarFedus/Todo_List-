import {FC} from "react";
import TodoInput from "./components/TodoInput/TodoInput";
import TodoList from "./components/TodoList/TodoList";

const App: FC = () => {

  return (
      <div className="wrapper">
        <TodoInput />
        <TodoList />
      </div>
  );
};

export default App;
