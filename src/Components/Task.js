import React, { useState } from "react";
import { MdOutlineDone, MdOutlineEdit, MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import {  
  doneTask,
  editTask,
  removeTask
} from "../Redux/Actions/actions";

function Task(props) {  
   
  const [disabled,setDisabled] = useState(true)

  const [input, setInput] = useState(props.task.description)

  const dispatch = useDispatch()

  const handleEdit = () => {
    setDisabled(false)
  }

  const handleChange = e => {
    if (e.key === 'Enter') {
      setDisabled(true)
      dispatch(editTask({
        id: props.task.id,
        description: input,
      }))      
    }
  }

  return (
    <div className="taskContainer">
      <li key={props.task.id}>
        <input 
          type="text"           
          value={input} 
          disabled={disabled} 
          onChange= {e => setInput(e.target.value)}
          onKeyPress={handleChange}
        />        

        <MdOutlineDone
          className="icon"
          title="Done"
          onClick={() => dispatch(doneTask(props.task.id))}
          style={{ color: "rgb(118, 216, 118)" }}
        />

        <MdOutlineEdit
          className="icon"
          title="Edit"
          onClick={() => handleEdit()}
          style={{ color: "rgb(206, 194, 29)" }}
        />
        <MdDelete
          className="icon"
          title="Delete"
          onClick={() => dispatch(removeTask(props.task.id))}
          style={{ color: "rgb(230, 65, 65)" }}
        />
      </li>
    </div>
  );
}

export default Task;