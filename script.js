let toDoButton = document.getElementById("add");
let toDoContainer = document.getElementById("toDoContainer");
let inputField = document.getElementById("inputField");

toDoButton.addEventListener("click", function () {
  var paragraph = document.createElement("p");
  paragraph.classList.add("paragraph-styling"); // applies css class
  paragraph.innerText = inputField.value;
  toDoContainer.appendChild(paragraph);
  inputField.value = ""; // removes input text once an option is added
  paragraph.addEventListener("click", function () {
    paragraph.style.textDecoration = "line-through";
  }); //double click removes the task
  paragraph.addEventListener("dblclick", function () {
    toDoContainer.removeChild(paragraph);
  });
});
