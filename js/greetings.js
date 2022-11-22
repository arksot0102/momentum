const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
const logoutButton = document.querySelector("#logout-btn");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "userName";

function onLoginSubmit(event) {
  event.preventDefault();
  localStorage.setItem(USERNAME_KEY, loginInput.value);
  paintGreetings();
  greeting.classList.add("slide-in-left");
  logoutButton.classList.add("slide-in-bottom");
  logoutButton.classList.remove(HIDDEN_CLASSNAME);
}

function paintGreetings() {
  const userName = localStorage.getItem(USERNAME_KEY);
  greeting.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerText = `Hello! ${userName}`;
}

const savedUserName = localStorage.getItem(USERNAME_KEY);

if (savedUserName === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  clock.classList.add("clock-to-top-right__finished");
  logoutButton.classList.remove(HIDDEN_CLASSNAME);
}
function logout() {
  localStorage.clear();
}
logoutButton.addEventListener("click", logout);

function goAway() {
  loginForm.classList.add("fade-out");
  clock.classList.add("clock-to-top-right");
  greeting.classList.add("slide-in-left");
}
loginForm.addEventListener("submit", goAway);
