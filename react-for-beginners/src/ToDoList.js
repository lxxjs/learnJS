import { useState } from "react";
import Button from "./Button.js";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  function onSubmit(event) {
    event.preventDefault();
    if (todo !== "") {
      setTodos([...todos, todo]);
      setTodo("");
    }
    console.log(todos);
  }
  function onChange(event) {
    setTodo(event.target.value);
  }
  function deleteTodo(deleteIndex) {
    console.log(deleteIndex);
    setTodos((todos) => todos.filter((_, index) => index !== deleteIndex)); // 명목변수 / 자리변수 unused param
  }
  return (
    <div>
      <h1>My To dos({todos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          value={todo}
          onChange={onChange}
          type="text"
          placeholder="What's your to do?"
        ></input>
        <Button text="Add" />
      </form>
      <hr />
      <ul>
        {todos.map((item, index) => {
          return (
            <li key={index}>
              {item}
              <Button
                onClick={() => {
                  deleteTodo(index);
                }}
                text="X"
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
