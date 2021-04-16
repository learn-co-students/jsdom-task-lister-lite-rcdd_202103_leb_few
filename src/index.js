// document.addEventListener("DOMContentLoaded", () => {
//
//
//
//
//
// });

document.querySelector("#create-task-form").addEventListener("click", function(event) {
         event.preventDefault();
}, false);

const myTodo = document.querySelector("ul#tasks");
const button = document.getElementById("button");
const myText = document.getElementById("new-task-description");

button.addEventListener("click", function(e){
    let text = myText.value;
    myTodo.innerHTML += `<li>${text}</li>`;
    text.value = "";
});
