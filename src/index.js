document.addEventListener("DOMContentLoaded", () => {
  // your code here

  // Select the elements
  const input = document.getElementById('new-task-description');
  const form = document.getElementById('create-task-form');
  const list = document.getElementById('tasks');

  // Variables
  let arr =[];
  let id = 0;

  // Create classes
  const CHECK = "fa-check-circle";
  const UNCHECK = "fa-circle-thin";
  const LINE_THROUGH = "lineThrough";

  // Create a todo element
  function addTodo(toDo ,id ,trash ,done){
    if(trash){ return; }

    const DONE = done ? CHECK : UNCHECK;
    const LINE = done ? LINE_THROUGH : "";

    const item = `<li class="item">
                    <i class="fa ${DONE} co" job="complete" id="${id}"></i>
                    <p class="text ${LINE}">${toDo}</p>
                    <i class="fa fa-trash-o de" job="delete" id="${id}"></i>
                  </li>
                `;

    const position = "beforeend";

    list.insertAdjacentHTML(position, item);
  }

  // display data
  function updateUI(){
      list.innerHTML ="";

      arr.forEach(function(item){
        addTodo(item.description, item.id, item.trash, item.done);
    });
  }

  // add an item to the list on submit
  form.addEventListener('submit', function(e){
    e.preventDefault();
    const toDo = input.value;

    if(toDo){
      const element = {
        description : toDo,
        id : id,
        trash : false,
        done : false
      }
      arr.push(element)
      updateUI();
      id++;
      input.value = "";
    }

  })

  // complete to do
  function completeToDo(element){
      element.classList.toggle(CHECK);
      element.classList.toggle(UNCHECK);
      element.parentNode.querySelector(".text").classList.toggle(LINE_THROUGH);

      arr[element.id].done = arr[element.id].done ? false : true;

      updateUI();
  }

  // remove to do
  function removeToDo(element){
      arr[element.id].trash = true;

      updateUI();
  }

  // target the items created dynamically
  list.addEventListener("click", function(event){
    const element = event.target; // return the clicked element inside list
    const elementJob = element.attributes.job.value; // complete or delete

    if(elementJob == "complete"){
        completeToDo(element);
    }else if(elementJob == "delete"){
        removeToDo(element);
    }
    // add item to localstorage ( this code must be added where the LIST array is updated)
    // localStorage.setItem("TODO", JSON.stringify(LIST));
  });
});
// additional 
// A priority value selected from a dropdown that is used to determine the color of the text in the list (e.g. red for high priority, yellow for medium, green for low)
// As an additional challenge, implement a sorting functionality that displays the tasks in ascending or descending order based on priority
// An additional input field (e.g. user, duration, date due)
// Ability to edit tasks
