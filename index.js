document.getElementById("button").addEventListener("click",function(event){
    document.getElementById("tasks").innerHTML+=document.getElementById("new-task-description").value;
event.preventDefault();})
