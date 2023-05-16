"use client";

import { ChangeEvent, ChangeEventHandler, MouseEventHandler, useState } from "react";
import TodoItem from "@/app/components/todoItem";

export interface Todo {
  id: number;
  completed: boolean;
  title: string;
}
type InputChangeEvent = ChangeEvent<HTMLInputElement>;
type Todos = Todo[];
export interface TodoItemProps {
  todo: Todo;
  editing: boolean;
  onToggle: (e: InputChangeEvent, todoId: Todo["id"]) => void;
  onDestroy: MouseEventHandler<HTMLButtonElement>;
}

const onDestroy: TodoItemProps["onDestroy"] = (e) => {
  // console.log("onToggle");
};

export default function TodoList() {
  const [editing, setEditing] = useState(false);
  const [todos, setTodos] = useState<Todos>([{ completed: false, title: "test", id: 0 }]);

  const checkTodo = (
    event: ChangeEvent<HTMLInputElement>,
    todoId: Todo["id"],
    todos: Todos
  ) => {
    return todos.map((todo) => {
      if (todo.id === todoId) {
        return {
          ...todo,
          completed: event.target.checked,
        };
      }
      return todo;
    });
  };

  const onToggle: TodoItemProps["onToggle"] = (event, todoId) => {
    setTodos(checkTodo(event, todoId, todos));
  };

  const TodoItems = () => (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          todo={todo}
          onToggle={onToggle}
          onDestroy={onDestroy}
          editing={editing}
          key={todo.id}
        />
      ))}
    </ul>
  );

  return <TodoItems />;
}
