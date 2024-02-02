import React from "react";

function Task({ category, text, onDelete }) {

  function handleDelete() {
    onDelete(); // Call the onDelete function to remove the task
  }

  return (
    <div className="task">
      <div className="label">{text}</div>
      <div className="text">{category}</div>
      <button className="delete" onClick={handleDelete}>
        X
      </button>
    </div>
  );
}

export default Task;