document.addEventListener("DOMContentLoaded", () => {
  // your code here

  //first i go to the div where submit exists
  const main = document.queryselector("#main-content")
  console.log(main)
//then i notice that the submit in inside a form , i have to get to the form before submit button
const taskForm = document.queryselector("#create-task-form")
const taskList = document.queryselector("#tasks") /*where replaced to here:because i dont have to wait for the submit to grab the task;
the task already exists, so i put it here as global and not inside the fuction(e)*/

//i want the form to get into submit button
  taskForm.addEventListener("submit",function(e)) {  //submit is the event and listen to function
    e.preventDefault()      //callback function --preventDefault so that i can handle it with JS and not HTML default actions
//to grab input user typed
const newTask = document.queryselector("new-task-description").value
//slap it on the document
//where    document.queryselector("#tasks") i already have access to taskList from above

//const taskItem = document.createElement("li") //to slap it inside a list on doc i create li
//taskItem.innerText = newTask
//taskList.appendchild(taskItem)
taskList.inner HTML += `<li> ${newTask}
<button data-action="delete"> X </button>
 </li>`

taskForm.reset()
})
taskList.addEventListener("click", function(e){
if (e.target.dataset.action ==="delete"){
  e.target.parentElement.remove()
}
})
