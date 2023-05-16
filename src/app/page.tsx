import TodoList from "./components/todoList";

export default function Page() {
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
          <TodoList />
        </section>
        <footer className="footer">
          <span className="todo-count"></span>
          <ul className="filters">
            <li>
              <a href="#/" className="selected">
                All
              </a>
            </li>
            <li>
              <a href="#/active">Active</a>
            </li>
            <li>
              <a href="#/completed">Completed</a>
            </li>
          </ul>
        </footer>
      </div>
    </section>
  );
}
