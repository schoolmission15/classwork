

var addTaskButton = document.getElementById("add-task-button");
    var newTaskInput = document.getElementById("new-task-input");
    var todolistContainer = document.getElementById("todolist-container");

    addTaskButton.addEventListener('click', function(event) {
      var taskName = newTaskInput.value;
      newTaskInput.value = "";
var elem = document.createElement("h1");
elem.innerHTML = taskName;
todolistContainer.appendChild(elem);
var xbtn = document.createElement("button");
xbtn.innerHTML = "x";
        xbtn.onclick = function() {
            this.remove();
            elem.remove();
        }
todolistContainer.appendChild(xbtn);
});

var RemoveTaskButton = document.getElementById("remove-task-button");
document.getElementById("remove-task-button").onclick = function() {
    todolistContainer.innerHTML = ""; // .remove();
}
