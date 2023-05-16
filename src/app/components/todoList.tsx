"use client";

import { ChangeEvent, ChangeEventHandler, MouseEventHandler, useState } from "react";
import TodoItem from "@/app/components/todoItem";

export interface Todo {
  id: number;
  completed: boolean;
  title: string;
}
// const todos: Todo[] = [{ completed: false, title: "test", id: 0 }];

export interface TodoItemProps {
  todo: Todo;
  editing: boolean;
  onToggle: (e: ChangeEvent<HTMLInputElement>, todoId: Todo["id"]) => void;
  onDestroy: MouseEventHandler<HTMLButtonElement>;
}

const onDestroy: TodoItemProps["onDestroy"] = (e) => {
  // console.log("onToggle");
};

export default function () {
  const [editing, setEditing] = useState(false);
  const [todos, setTodos] = useState<Todo[]>([
    { completed: false, title: "test", id: 0 },
  ]);

  const onToggle: TodoItemProps["onToggle"] = (e, todoId) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === todoId) {
          return {
            ...todo,
            completed: e.target.checked,
          };
        }
        return todo;
      })
    );
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
