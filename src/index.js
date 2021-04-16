document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let txt = document.getElementById('new-task-description');
  let btn = document.getElementsByTagName('input')[1];
  let taskList = document.getElementById('tasks');
  btn.addEventListener('click', fucntion(e){
    taskList.innerHTML += `<li>${txt.textContent}</li>`;
    event.preventDefault();
  }
}
