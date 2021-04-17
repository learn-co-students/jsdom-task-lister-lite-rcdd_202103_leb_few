document.addEventListener("DOMContentLoaded", () => {

});



let txt = document.getElementById('new-task-description');
let todo=document.getElementById('list');
let btn = document.getElementById("btn");

document.getElementById("btn").addEventListener("click", function() {
  addText(txt.value);
});

function addText(text)
{

  todo.innerHTML+=`<li>${text}</li>`;
}
