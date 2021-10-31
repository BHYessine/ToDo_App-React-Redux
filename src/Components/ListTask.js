import React, { useState } from "react";
import { connect } from "react-redux";
import Task from "./Task";
import { doneTask } from "../Redux/Reducers/doneReducer"
import { addTask } from "../Redux/Actions/actions"
import { editTask } from "../Redux/Reducers/editReducer"
import { removeTask } from '../Redux/Reducers/removeReducer'
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
          {props.data.todos.length > 0 && sort === "notDone"
            ? props.data.todos.map((item) => {
                return (
                  item.isDone === false && (           
                    <Task
                      key={item.id}
                      task={item}
                      removeTask={props.remove}
                      editTask={props.edit}
                      doneTask={props.done}
                    />                        
                  )
                );
              })
            : null}
          
          {props.data.todos.length > 0 && sort === "done"
            ? props.data.todos.map((item) => {
                return (
                  item.isDone === true && (
                    <Task
                      key={item.id}
                      task={item}
                      removeTask={props.remove}
                      editTask={props.edit}
                      doneTask={props.done}
                    />       
                  )
                );
              })
            : null}
          
          {props.data.todos.length > 0 && sort === "all"
            ? props.data.todos.map((item) => {
                return (
                  <Task
                    key={item.id}
                    task={item}
                    removeTask={props.remove}
                    editTask={props.edit}
                    doneTask={props.done}
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
    // remove: (id) => dispatch(removeTask(id)),
    // edit: (obj) => dispatch(editTask(obj)),
    // done: (id) => dispatch(doneTask(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps) (ListTask);