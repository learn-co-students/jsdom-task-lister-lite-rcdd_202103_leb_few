document.addEventListener("DOMContentLoaded", () => {
  // your code here
  //document.getElementById("create-task-form").submit();
  document.querySelector("#id-submit").addEventListener("click", function(event) {
  document.getElementById("output-box").innerHTML += "Sorry! <code>preventDefault()</code> won't let you check this!<br>";
  event.preventDefault();
  }, false);


  // document.getElementById("submit").addEventListener("click", function(event){
  //   event.preventDefault()
  // });
});
