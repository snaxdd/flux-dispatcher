import logo from "./logo.svg";
import React, { useState, useEffect } from "react";
import "./App.css";
import { Todo } from "./components/Todo/index";
import { Todo as TodoStore } from "./Stores/Todo";

function App() {
  let [store, setStore] = useState(null);
  useEffect(() => {
    setStore(TodoStore);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Todo store={TodoStore} />
      </header>
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}

export default App;
