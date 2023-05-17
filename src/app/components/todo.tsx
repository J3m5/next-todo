"use client";
import TodoList from "@/app/components/todoList";
import Footer from "@/app/components/footer";
import { useState, useEffect, useRef, Dispatch, SetStateAction } from "react";
import { Filters } from "../page";
import ToggleAll from "./toggleAll";

export interface Todo {
  id: number;
  completed: boolean;
  title: string;
}

export type TodoList = Todo[];
export type DispatchTodoList = Dispatch<SetStateAction<TodoList>>;
export default function Todo() {
  const [filter, setFilter] = useState<Filters>("");

  useEffect(() => {
    const URLHash = location.hash.replace("#/", "");
    setFilter(
      URLHash === "active" ? "active" : URLHash === "completed" ? "completed" : "all"
    );
  }, []);

  const [todoList, setTodoList] = useState<TodoList>([
    { completed: false, title: "test", id: 0 },
  ]);

  return (
    <section className="todoapp">
      <div>
        <header className="header">
          <h1>todos</h1>
          <input type="text" className="new-todo" placeholder="What's need to be done?" />
        </header>
        <section className="main">
          <ToggleAll setTodoList={setTodoList} />
          <TodoList filter={filter} todoList={todoList} setTodoList={setTodoList} />
        </section>
        <Footer setFilter={setFilter} filter={filter} />
      </div>
    </section>
  );
}
