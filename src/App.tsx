import {FC, useEffect} from "react";
import TodoInput from "./components/TodoInput/TodoInput";
import TodoList from "./components/TodoList/TodoList";
import { useDispatch } from "react-redux";
import { fetchTodos } from "./store/api/todos";

const App: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos())
  }, [])
  
  return (
      <div className="wrapper">
        <TodoInput />
        <TodoList />
      </div>
  );
};

export default App;
