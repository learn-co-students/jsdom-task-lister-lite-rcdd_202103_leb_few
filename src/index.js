document.addEventListener("DOMContentLoaded", () => {
  // your code here

    const input = document.getElementById('input');
    input.addEventListener('click', function(event) {
     let ul=document.getElementById('tasks');
     let li=document.createElement('li');
      ul.appendChild(li);
     li.innerHTML+=document.getElementById('new-task-description').value;
    event.preventDefault();

  });




});
