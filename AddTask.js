import React, { useState } from "react";
import { connect } from "react-redux";
import { GoPlus } from "react-icons/go";
import { addTask } from "../Redux/Actions/actions";

function AddTask(props) {
  const [description, setDescription] = useState("");

    const handleAdd = () => {
    if (description === "") {
      alert("Input is Empty!!");
    } else {
      props.addTask({
        id: Math.random(),
        description: description,
        isDone: false,
      });
      setDescription("");
    }
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
        <button className="btn-add" title="Add" onClick={() => handleAdd()}>
          <GoPlus /> Add Task
        </button>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    data: state
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTask: (obj) => dispatch(addTask(obj))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTask);
