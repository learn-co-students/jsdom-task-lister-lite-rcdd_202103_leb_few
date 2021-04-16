document.addEventListener("DOMContentLoaded", () => {
  let ads = document.getElementById("new-task-description");

  let submit = document.getElementsByTagName("input")[1];
     let tasks = document.querySelector("#tasks");

    submit.addEventListener("click", function(e) {
      e.preventDefault();

      let li = document.createElement("li"); // create an li
      li.innerHTML = ads.value;          // set its text content to input's value
      tasks.appendChild(li);          // add it to the ul
    });

});
