"use client";
import TodoList from "@/app/components/todoList";
import Footer from "@/app/components/footer";
import { useState, useEffect, useRef } from "react";
import { Filters } from "../page";

export default function Todo() {
  const [filter, setFilter] = useState<Filters>("");

  useEffect(() => {
    const URLHash = location.hash.replace("#/", "");
    setFilter(
      URLHash === "active" ? "active" : URLHash === "completed" ? "completed" : "all"
    );
  }, []);

  return (
    <section className="todoapp">
      <div>
        <header className="header">
          <h1>todos</h1>
          <input type="text" className="new-todo" placeholder="What's need to be done?" />
        </header>
        <section className="main">
          <input type="checkbox" id="toggle-all" className="toggle-all" />
          <label htmlFor="toggle-all"></label>
          <TodoList filter={filter} />
        </section>
        <Footer setFilter={setFilter} filter={filter} />
      </div>
    </section>
  );
}
