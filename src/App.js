import React from "react";
import { Provider} from 'react-redux'
import ListTask from "./Components/ListTask";
import AddTask from "./Components/AddTask";
import store from "./Redux/store/store"
import "./App.css";

function App() {
  
  return (
    <Provider store={store}>
      <div className="appContainer">
        <p className="title"> ToDo Application </p>
        <AddTask />        
        <ListTask />
      </div>
    </Provider>
  );
}

export default App;