import React, { useState } from "react";
import { useSelector } from "react-redux";
import Task from "./Task";

function ListTask() {
  const list = useSelector( state => state.todos )
    
  const styleClicked = {
    color: "blue"
  };
  const [sort, setSort] = useState("all");
  return (
    <div className="listContainer">
      <div className="filter-btns">
        <button
          title="All"
          onClick={() => setSort("all")}
          style={sort === "all" ? styleClicked : null}
        >
          All
        </button>

        <button
          title="Done"
          onClick={() => setSort("done")}
          style={sort === "done" ? styleClicked : null}
        >
          Done
        </button>
        <button
          title="Not Done"
          onClick={() => setSort("notDone")}
          style={sort === "notDone" ? styleClicked : null}
        >
          Not Done
        </button>
      </div>

      <ul>
        {list.length > 0 && sort === "notDone"
          ? list.map((item) => {
              return (
                item.isDone === false && (
                  <Task
                    key={item.id}
                    task={item}                    
                  />
                )
              );
            })
          : null}

        {list.length > 0 && sort === "done"
          ? list.map((item) => {
              return (
                item.isDone === true && (
                  <Task
                    key={item.id}
                    task={item}                    
                  />
                )
              );
            })
          : null}

        {list.length > 0 && sort === "all"
          ? list.map((item) => {
              return (
                <Task
                  key={item.id}
                  task={item}                  
                />
              );
            })
          : null}
      </ul>
    </div>
  );
}

export default ListTask;