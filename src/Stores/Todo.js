import { Dispatcher } from "flux";

const AppDispatcher = new Dispatcher();

AppDispatcher.register(function (payload) {
  if (payload.eventName === "addTodo") {
    Todo.todoList.push(payload.value);
    console.log(payload.value);
    console.log(Todo.todoList);
  }
});

export let Todo = {
  todoList: [],
  addTodo(value) {
    AppDispatcher.dispatch({
      eventName: "addTodo",
      value,
    });
  },
};
