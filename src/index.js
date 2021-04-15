document.addEventListener("DOMContentLoaded", () => {

const form= document.getElementById("create-task-form");
const list= document.getElementById("list");

form.addEventListener("submit",function(e){
const todos= document.getElementById("new-task-description").value;
e.preventDefault();
list.innerHTML+= `<li>
${todos}
<button data-set="delete">X for delete</button>
</li>`;

form.reset();
});

list.addEventListener("click", function(e){
  if(e.target.dataset.set==="delete"){
    e.target.parentElement.remove();
  }
  
});

});