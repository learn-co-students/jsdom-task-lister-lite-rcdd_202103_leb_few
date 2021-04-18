document.addEventListener("DOMContentLoaded", () => {
  
let button = document.querySelector("form");
button.addEventListener("submit", append);
let ul=document.getElementById("tasks");
function append(e) {
  let cal = document.getElementById("new-task-description").value;
  let li = document.createElement("li");
  let dis = cal;
  li.innerHTML = dis;
  ul.appendChild(li);
  e.preventDefault();
}
  
  
  
});
