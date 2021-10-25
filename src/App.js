import { useState } from "react";
import { Message } from "./components/Message/Message";
import { Counter } from "./components/Counter/Counter";
import "./App.css";

function App() {
  const [text, setText] = useState("i am a prop");
  const [ligougkl, jghdfjhfjk] = useState({ foo: 1 });

  const handleClick = () => {
    alert("click");
    setText("123" + Math.random());
  };

  return (
    <div className="App">
      <header className="App-header">
        <Message message={text} onMessageClick={handleClick} />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Counter />
      </header>
    </div>
  );
}

export default App;
