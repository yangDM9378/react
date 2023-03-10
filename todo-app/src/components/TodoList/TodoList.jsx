import React, { useEffect, useState } from "react";
import AddTodo from "../AddTodo/AddTodo";
import Todo from "../Todo/Todo";

export default function TodoList({ filter }) {
  const [todos, setTodos] = useState(() => readTodoFromLocalStorage());
  const handleAdd = (todo) => {
    setTodos([...todos, todo]);
  };
  const handleDel = (deleted) =>
    setTodos(todos.filter((t) => t.id !== deleted.id));
  const handleUp = (updated) =>
    setTodos(todos.map((t) => (t.id === updated.id ? updated : t)));
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  const filtered = getItems(todos, filter);
  return (
    <section>
      <ul>
        {filtered.map((item) => (
          <Todo
            key={item.id}
            todo={item}
            onDelete={handleDel}
            onUpdate={handleUp}
          />
        ))}
      </ul>
      <AddTodo onAdd={handleAdd}></AddTodo>
    </section>
  );
}

function readTodoFromLocalStorage() {
  const todos = localStorage.getItem("todos");
  return todos ? JSON.parse(todos) : [];
}

function getItems(todos, filter) {
  if (filter === "all") {
    return todos;
  }
  return todos.filter((todo) => todo.status === filter);
}
