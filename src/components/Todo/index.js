import React, { useRef } from "react";
import { TodoList } from "./TodoList";

export const Todo = ({ store }) => {
  const inputRef = useRef();

  const addTodoItem = () => {
    const text = inputRef.current.value;

    store.addTodo(text);
  };

  return (
    <>
      <input
        ref={inputRef}
        type="text"
        className="todo_input"
        //onChange={changeInputText}
        //value={store.newListItem}
      />
      <button onClick={addTodoItem}>Add</button>
      <TodoList list={store.todoList} />
    </>
  );
};
