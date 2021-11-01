import React, { useState } from "react";
import { MdOutlineDone, MdOutlineEdit, MdDelete } from "react-icons/md";

function Task(props) {  
  const { task, editTask, removeTask, doneTask } = props; 
  const [disabled,setDisabled] = useState(true)
  const [input, setInput] = useState(task.description)
  const handleEdit = () => {
    setDisabled(false)
  }
  const handleChange = e => {
    if (e.key === 'Enter') {
      setDisabled(true)
      editTask({
        id: task.id,
        description: input,
      })      
    }
  }
  return (
    <div className="taskContainer">
      <li key={task.id}>
        <input 
          type="text" 
          value={input} 
          disabled={disabled} 
          onChange= {e => setInput(e.target.value)}
          onKeyPress={handleChange}
        />        

        <MdOutlineDone
          className="icon"
          onClick={() => doneTask(task.id)}
          style={{ color: "rgb(118, 216, 118)" }}
        />

        <MdOutlineEdit
          className="icon"
          onClick={() => handleEdit()}
          style={{ color: "rgb(206, 194, 29)" }}
        />
        <MdDelete
          className="icon"
          onClick={() => removeTask(task.id)}
          style={{ color: "rgb(230, 65, 65)" }}
        />
      </li>
    </div>
  );
}

export default Task;
