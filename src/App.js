import React from "react";
import ListTask from "./Components/ListTask";
import AddTask from "./Components/AddTask";
import "./App.css";

function App() {
  
  return (
    
      <div className="appContainer">
        <p className="title"> ToDo Application </p>
        <AddTask />        
        <ListTask />
      </div>
    
  );
}

export default App;
