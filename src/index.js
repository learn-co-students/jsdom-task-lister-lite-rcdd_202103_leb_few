document.addEventListener("DOMContentLoaded", () => {
  // your code here
  
  
  // function new_el(){
    
    let subbtn= document.getElementById("subbtn");
    subbtn.addEventListener("click", (e) =>{
  
    const ls = document.getElementById("tasks");
    let li = document.createElement("LI");
    let inp = document.getElementById("new-task-description").value;
    let n = document.createTextNode(inp);
    li.innerText += inp ;
    li.appendChild(n);
    document.getElementById("list").appendChild(li);
    event.preventDefault();
    });
    
  
    // }
    
});
