const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");
function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
}
function checkToDo(event) {
  const li = event.target.parentElement;
  const button = li.querySelector(":nth-child(2)");
  console.log(button);
  button.classList.toggle("checked");
}
function paintToDo(newTodo) {
  const list = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newTodo;
  const check = document.createElement("button");
  check.innerText = "✓";
  const button = document.createElement("button");
  button.innerText = "×";
  check.addEventListener("click", checkToDo);
  button.addEventListener("click", deleteToDo);
  list.appendChild(span);
  list.appendChild(check);
  list.appendChild(button);
  toDoList.appendChild(list);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  //뒤에서 form안에 넣은 값을 없애기 전에 새로운 todo로 copy해놓는 작업임
  toDoInput.value = "";
  paintToDo(newTodo);
  toDoList.li.classList.add("slide-in-right");
}

toDoForm.addEventListener("submit", handleToDoSubmit);
