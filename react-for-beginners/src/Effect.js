import Button from "./Button.js";
import { useState, useEffect } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");
  const [showing, setShowing] = useState(false);
  const onClick = () => setCounter((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  const onShow = () => setShowing((prev) => !prev);
  console.log("I run all the time");
  const iRunOnlyOnce = () => {
    console.log("I run only once");
  };
  useEffect(iRunOnlyOnce, []);
  useEffect(() => {
    if (keyword !== "") {
      console.log("Search for", keyword);
    }
  }, [keyword]); // executed only when 'keyword' changes
  useEffect(() => {
    console.log("i run when counter changes");
  }, [counter]);

  function Hello() {
    useEffect(() => {
      console.log("Created");
      return () => {
        console.log("Destroyed");
      }; // useEffect returns a clean up function which is called when the component is destroyed
    }, []);
    return <h1>Hello</h1>;
  }
  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      />
      <h1>{counter}</h1>
      <Button onClick={onClick} text="click!" />
      {showing ? <Hello /> : null}
      <Button onClick={onShow} text={showing ? "Hide" : "Show"} />
    </div>
  );
}

export default App;
