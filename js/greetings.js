const h1 = document.querySelector("#title");
const loginForm = document.querySelector("#loginForm");
const loginInput = document.querySelector("#loginForm input");
const loginButton = document.querySelector("#loginFrom button");
const courseLink = document.querySelector("#courseLink");
const greeting = document.querySelector("#greeting")

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function handleTitleClick() {
    h1.classList.toggle("active");
}

function handleLogin(event) {
    event.preventDefault();
    const username = loginInput.value
    localStorage.setItem(USERNAME_KEY, username);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    showGreetings(username);
}

function showGreetings(username) {
    greeting.innerText = `Hi, ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

h1.addEventListener("click", handleTitleClick);
loginForm.addEventListener("submit", handleLogin);

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME)
} else {
    showGreetings(savedUsername);
}