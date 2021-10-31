import React, { useRef } from "react";
import { MdOutlineDone,MdOutlineEdit, MdDelete } from 'react-icons/md';

function Task(props) {
  console.log(props)
  const { task, editTask, removeTask, doneTask } = props;

  // const inputRef = useRef(true);

  // const update = (id, value, e) => {    
  //   if (e.which === 13) {      
  //     editTask({ id, task: value });
  //     inputRef.current.disabled = true;
  //   }
  // }; 

  // const editClick=()=> {    
  //   inputRef.current.disabled = false;
  //   inputRef.current.focus();    
  // }
  
  return (
    <div className="taskContainer">
      <li key={task.id} >
        <input 
          type="text"
          value={task.description}
          disabled = 'true'
        />
        {/* <textarea
          // ref={inputRef}
          // disabled={inputRef}
          defaultValue={task.description}
          // onKeyPress={(e) => update(task.id, inputRef.current.value, e)}
        />      */}
        
          <MdOutlineDone
            className="icon"
            //onClick={() => doneTask(task.id)}
            style={{ color: "rgb(118, 216, 118)" }}
          />          
             
        <MdOutlineEdit 
          className="icon"
          //onClick={() => editClick()}
          style={{ color: "rgb(206, 194, 29)" }}
        />   
        <MdDelete 
          className="icon"
          //onClick={() => removeTask(task.id)}
          style={{ color: "rgb(230, 65, 65)" }}
        />
      </li>
    </div>
    );
}

export default Task;