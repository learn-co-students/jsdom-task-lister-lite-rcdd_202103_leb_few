document.addEventListener("DOMContentLoaded", () => {
  // your code here
  function addTask(event)
   {
     event.preventDefault();
     const task = document.getElementById("new-task-description").value;
     if(task!=="")
     {
       document.querySelector("ul").insertAdjacentHTML("beforeend",`<div class="container"><li>${task}</li><button class="buttons" type="button">x</button></div>`);
       document.getElementById("new-task-description").value = "";
       document.getElementsByTagName("button")[document.getElementsByTagName("button").length - 1].addEventListener("click",removeTask);
     }
   }

   function removeTask(event)
   {
     event.currentTarget.parentNode.remove();
   }

   document.querySelector('input[type="submit"]').addEventListener("click",addTask);
});
