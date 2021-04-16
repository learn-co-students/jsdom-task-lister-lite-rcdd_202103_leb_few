document.addEventListener("DOMContentLoaded", () => {
  // your code here
let input = document.getElementById("new-task-description");
let button = document.getElementById("btnId");
let toDos = document.getElementById("tasks");

  button.addEventListener('click', (e) => {
    let li = document.createElement("li");
    toDos.appendChild(li);
    li.innerText = input.value;
    e.preventDefault();
  })

});
