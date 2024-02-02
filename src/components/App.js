import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

function App() {
  const [filteredCategory, setFilteredCategory] = useState("All");
  const [tasks, setTasks] = useState(TASKS); // Initialize tasks state with TASKS data

  // Function to handle category change
  const handleCategoryChange = (category) => {
    setFilteredCategory(category);
  };

  // Function to handle form submission in NewTaskForm
  const handleTaskFormSubmit = (newTask) => {
    setTasks([...tasks, newTask]); // Add the new task to the tasks array
  };

  // Function to handle task deletion
  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="App">
      <h2>My tasks</h2>
      {/* Pass categories and handleCategoryChange function to CategoryFilter */}
      <CategoryFilter categories={CATEGORIES} onCategoryChange={handleCategoryChange} />
      {/* Pass categories and handleTaskFormSubmit function to NewTaskForm */}
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleTaskFormSubmit} />
      {/* Pass filteredCategory and tasks to TaskList */}
      <TaskList tasks={tasks} filteredCategory={filteredCategory} onDelete={handleDeleteTask} />
    </div>
  );
}

export default App;