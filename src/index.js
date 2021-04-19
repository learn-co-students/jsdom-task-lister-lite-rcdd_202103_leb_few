
  // your code here
 
  
 //- As a user, I should be able to type a task into the input field.
 
 
//- As a user, I should be able to click some form of a submit button.
//newTaskForm.addEventListener("submit",CreateNewTasks)
//;
//- As a user, the task string that I provided should appear on the DOM after the submit button has been activated.

document.addEventListener("DOMContentLoaded", () => {
  //grab all the necessary DOM elements

  //form and relevant input fields
  const newTaskForm = document.getElementById("create-task-form");
  const newTaskDescription = document.getElementById("new-task-description");
  const newTaskPriority = document.getElementById("new-task-priority");

  //ul where new tasks will live on the DOM
  const newTaskUl = document.getElementById("tasks");

  //attach event listeners
  newTaskForm.addEventListener("submit", createNewTask);
});

const createNewTask = event => {
  event.preventDefault();
  //stop form from trying to submit
  const newTaskDescription = document.getElementById("new-task-description");
  const newTask = document.createElement("li");
  newTask.innerText = newTaskDescription.value;

  appendNewTask(newTask);
  event.target.reset();
};

const appendNewTask = task => {
  document.getElementById("tasks").appendChild(task);
};
