import React, { FC } from "react";

const App: FC = () => {
  return (
    <div className="container-col h-[100vh]">
      {/* InputList */}
      <div className="container-col">
        <h3>TodoInput</h3>
        <div className="container-col">
          <div>
            <div><img src='' alt="" /></div>
          <input type="text" placeholder="New Todo..." />
          </div>

          <button>Add new task</button>
        </div>
      </div>

      {/* TodoList */}
      <div className="container-col">
        <h3>TodoList</h3>
        <div className="container-col">
          <div>
            <button>All</button>
            <button>Done</button>
            <button>Todo</button>
          </div>
          <div></div>
          <div>
            <button>Delete done tasks</button>
            <button>Delete all tasks</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
