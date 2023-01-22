const todoForm = document.querySelector("#todoForm");
const todoList = document.querySelector("#todoList");
const todoInput = document.querySelector("#todoForm input");

const TODOS_KEY = "todos"
let todos = [];

function saveTodos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function removeTodo(event) {
    event.preventDefault();
    const li = event.target.parentElement;
    const currTodos = JSON.parse(localStorage.getItem(TODOS_KEY));
    newTodos = currTodos.filter(obj => {
        return obj.id !== Number(li.id)
    });
    console.dir(newTodos);
    todos = newTodos;
    saveTodos();
    li.remove();
}

function addTodoList(newTodo) {
    const listItem = document.createElement("li");
    listItem.id = newTodo.id;
    const todoItem = document.createElement("span");
    todoItem.innerText = newTodo.text;
    const dltButton = document.createElement("button");
    dltButton.innerText = "❌";
    dltButton.addEventListener("click", removeTodo);
    listItem.appendChild(todoItem);
    listItem.appendChild(dltButton);
    todoList.appendChild(listItem);
};

todoForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const newTodo = {
        id: Date.now(),
        text: todoInput.value,
    }
    todoInput.value = "";
    todos.push(newTodo);
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
