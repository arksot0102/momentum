const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");
let toDos = []; //JSON.parse(savedToDos)
const TODOS_KEY = "todos";

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
  //console.log(localStorage.getItem("todos"));
  //console.log(typeof "todos");
}
function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}
function checkToDo(event) {
  const li = event.target.parentElement;
  const button = li.querySelector(":nth-child(2)");
  console.log(button);
  button.classList.toggle("checked");
}
function paintToDo(newTodo) {
  const list = document.createElement("li");
  list.id = newTodo.id;
  //newTodo.id는 입력값이 newTodoObj로 받아오는거임
  //저 밑에 handleToDoSubmit에 의해
  const span = document.createElement("span");
  span.innerText = newTodo.text;
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
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  parsedToDos.forEach(paintToDo);
  toDos = parsedToDos;
}

function sexyFilter() {}
