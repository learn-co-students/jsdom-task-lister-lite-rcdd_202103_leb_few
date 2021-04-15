document.addEventListener("DOMContentLoaded", () => {
  const taskList = ["love"];
  const form = document.getElementById("create-task-form");
  form.addEventListener("submit", (e)=>{
    const newTask = document.getElementById("new-task-description").value;
    taskList.push(newTask);
    //console.log(taskList);
    const addTask = document.getElementById("tasks");
    let li = document.createElement('li');
    li.textContent = newTask;
    // let btnDelete = document.createElement('input');
    // btnDelete.type = "button";
    // btnDelete.id = "delete-button";
    // btnDelete.value = "delete";
    // li.appendChild(btnDelete);
    addTask.appendChild(li);


    event.preventDefault();
  })

  // btnDelete.addEventListener("click",(event)=>{
  //    let counter;
  //    for(let i =0 ; i< taskList.length ; i++){
  //      if(taskList[i]=== task){
  //        counter = i;
  //      }
  //    }
  //    taskList.splice(counter , 1);
  //    console.log(taskList);
  //  });
});
