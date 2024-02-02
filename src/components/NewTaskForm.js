import React, {useState}from "react";

function NewTaskForm({categories , onTaskFormSubmit}) {

  const[taskDescription , setTaskDescription] = useState("")
  const[selectedCategory, setSelectedCategory] = useState(categories[1])
  const[submittedData , setSubmittedData] = useState([])

  function handleDescription(event){
    setTaskDescription(event.target.value)
  }

  function handleCategory(event){
    setSelectedCategory(event.target.value)
  }

  function handleSubmit(event){
    event.preventDefault()


    const newTask = {
      text :taskDescription,
      category :selectedCategory
    }
    setSubmittedData([...submittedData, newTask])


    onTaskFormSubmit(newTask);

    
    setTaskDescription("");
    setSelectedCategory(categories[1]);
  }

  

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={taskDescription} onChange={handleDescription} />
      </label>
      <label>
        Category
        <select name="category" value={selectedCategory} onChange={handleCategory}>
          {/* Render options for each category */}
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
