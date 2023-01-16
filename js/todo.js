const todoForm = document.querySelector("#todoForm");
const todoList = document.querySelector("#todoList");
const todoInput = document.querySelector("#todoForm input");

const TODOS_KEY = "todos"
const todos = [];


function saveTodos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function removeTodo(event) {
    event.preventDefault();
    const li = event.target.parentElement;
    li.remove();
    
}

function addTodoList(newTodo) {
    const listItem = document.createElement("li");
    const todoItem = document.createElement("span");
    todoItem.innerText = newTodo;
    const dltButton = document.createElement("button");
    dltButton.innerText = "❌";
    dltButton.addEventListener("click", removeTodo);
    listItem.appendChild(todoItem);
    listItem.appendChild(dltButton);
    todoList.appendChild(listItem);
};

todoForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const newTodo = todoInput.value;
    todos.push(newTodo);
    todoInput.value = "";
    addTodoList(newTodo);
    saveTodos();
});

const savedTodos = localStorage.getItem(TODOS_KEY);

if (savedTodos !== null) {
    const parsedTodos = JSON.parse(savedTodos);
    parsedTodos.forEach(element => { 
        todos.push(element);
        addTodoList(element);
    });
}