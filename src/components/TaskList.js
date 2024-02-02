import React from "react";
import Task from "./Task";

function TaskList({ tasks, filteredCategory , onDelete}) {
  
  // Function to filter tasks based on the selected category
  const filteredTasks = tasks.filter(
    (task) => filteredCategory === "All" || task.category === filteredCategory
  );
  

  return (
    <div className="tasks">
      {/* Map through filtered tasks and render Task component for each task */}
      {filteredTasks.map((task) => (
        <Task key={task.id} category={task.category} text={task.text}  onDelete={() => onDelete(task.id)}/>
      ))}
    </div>
  );
}

export default TaskList;
