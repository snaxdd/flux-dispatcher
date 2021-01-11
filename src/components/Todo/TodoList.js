import React from "react";
import { TodoItem } from "./TodoItem";

export const TodoList = ({ list }) => {
  return (
    <ul className="todo_list">
      {list.map((item) => (
        <TodoItem key={Math.random()} text={item} />
      ))}
    </ul>
  );
};
