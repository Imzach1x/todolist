// Add your JS here.
var newtodo=document.querySelector(".new-todo");
var todolist=document.querySelector(".todo-list");
newtodo.addEventListener("keypress",
function(event) {
var timer = setTimeout(function() {
if (event.keyCode===13){
var todoTwo=event.target.value;
event.target.value="";
var newTodoLi=document.createElement("li");
newTodoLi.textContent=todoTwo;
todolist.appendChild(newTodoLi);
    };
  }, 200);
return event;
});
