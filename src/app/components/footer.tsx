import type { Filters } from "@/app/page";
import classNames from "classnames";
import { Dispatch } from "react";

export default function Footer({
  setFilter,
  filter,
}: {
  setFilter: Dispatch<Filters>;
  filter: Filters;
}) {
  return (
    <footer className="footer">
      <span className="todo-count"></span>
      <ul className="filters">
        <li>
          <a
            href="#/"
            className={classNames({ selected: filter === "all" })}
            onClick={() => setFilter("all")}
          >
            All
          </a>
        </li>
        <li>
          <a
            href="#/active"
            onClick={() => setFilter("active")}
            className={classNames({ selected: filter === "active" })}
          >
            Active
          </a>
        </li>
        <li>
          <a
            href="#/completed"
            onClick={() => setFilter("completed")}
            className={classNames({ selected: filter === "completed" })}
          >
            Completed
          </a>
        </li>
      </ul>
    </footer>
  );
}
