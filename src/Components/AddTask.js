import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { GoPlus } from "react-icons/go";
import { addTask } from "../Redux/Actions/actions";

function AddTask() {
  
  const [description, setDescription] = useState("");

  const dispatch = useDispatch()

  const handleAdd = e => {
    const task={
      id: Math.random(),
      description: description,
      isDone: false,
    }
    if (description === "") {
      alert("Input is Empty!!");
    } else {
      dispatch(addTask(task));      
    }
    setDescription(""); 
    
    e.preventDefault();
       
  };

  return (
    <div>
      <form className="addContainer">
        <input
          type="text"
          title="Enter Some ToDo"
          value={description}
          onChange={(e) => setDescription(e.target.value)}          
        />
        <button 
          className="btn-add" 
          title="Add" 
          onClick={() => handleAdd()}>
          <GoPlus /> Add Task
        </button>
      </form>
    </div>
  );
}

export default AddTask;