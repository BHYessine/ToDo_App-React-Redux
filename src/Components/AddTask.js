import React, { useState } from "react";
import { connect } from "react-redux";
import { GoPlus } from "react-icons/go";
import { addTask } from "../Redux/Actions/actions";

function AddTask(props) {
  const [description, setDescription] = useState("");

  const handleChange = (e) => {
    setDescription(e.target.value);
  };

  const handleAdd = () => {
    if (description === "") {
      alert("Input is Empty!!");
    } else {
      props.addTask({
        id: Math.random(),
        description: description,        
      });
      setDescription("");
    }
  };

  return (
    <div>
      <form className="addContainer">
        <input
          type="text"
          value={description}
          onChange={(e) => handleChange(e)}
        />
        <button className="btn-add" onClick={() => handleAdd()}>
          <GoPlus /> Add Task
        </button>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    todos: state
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTask: (obj) => dispatch(addTask(obj))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTask);
