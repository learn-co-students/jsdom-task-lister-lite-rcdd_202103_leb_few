document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let task = document.getElementById("new-task-description");
  let submit = document.getElementsByTagName("input")[1];
  let tasks = document.querySelector("#tasks");
  submit.addEventListener("click",function(e) {
   e.preventDefault();
   let li = document.createElement("li");
   li.innerHTML = task.value;
   tasks.appendChild(li);

  }
});
