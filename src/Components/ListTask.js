import React, { useState } from "react";
import { connect } from "react-redux";
import Task from "./Task";

import { addTask, doneTask, editTask, removeTask } from "../Redux/Actions/actions"

function ListTask(props) {
  console.log(props)
  const styleClicked = {
    color: "blue"
  };
  const [sort, setSort] = useState("all");
  return (
    <div className="listContainer">

      <div className="filter-btns">
        
        <button onClick={() => setSort("all")} style= { (sort === "all") ? styleClicked: null }>
           All 
        </button>  
        
        <button onClick={() => setSort("done")} style= { (sort === "done") ? styleClicked: null }> 
           Done 
        </button>
        <button onClick={() => setSort("notDone")} style= { (sort === "notDone") ? styleClicked: null }>
           Not Done 
        </button>        
      </div>

      <ul>
          {props.data.add.todos.length > 0 && sort === "notDone"
            ? props.data.add.todos.map((item) => {
                return (
                  item.isDone === false && (           
                    <Task
                      key={item.id}
                      task={item}
                      removeTask={props.removeTask}
                      editTask={props.editTask}
                      doneTask={props.doneTask}
                    />                        
                  )
                );
              })
            : null}
          
          {props.data.add.todos.length > 0 && sort === "done"
            ? props.data.add.todos.map((item) => {
                return (
                  item.isDone === true && (
                    <Task
                      key={item.id}
                      task={item}
                      removeTask={props.removeTask}
                      editTask={props.editTask}
                      doneTask={props.doneTask}
                    />       
                  )
                );
              })
            : null}
          
          {props.data.add.todos.length > 0 && sort === "all"
            ? props.data.add.todos.map((item) => {
                return (
                  <Task
                    key={item.id}
                    task={item}
                    removeTask={props.removeTask}
                    editTask={props.editTask}
                    doneTask={props.doneTask}
                  />       
                );
              })
            : null}   
      </ul>      
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    data: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTask: (obj) => dispatch(addTask(obj)),
    removeTask: (id) => dispatch(removeTask(id)),
    editTask: (obj) => dispatch(editTask(obj)),
    doneTask: (id) => dispatch(doneTask(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps) (ListTask);
