import classNames from "classnames";
import { ChangeEvent, useRef, useState } from "react";
import type { TodoItemProps } from "@/app/components/todoList";

const handleEdit = (e) => {
  // console.log("handleEdit");
};
const handleSubmit = (e) => {
  // console.log("handleSubmit");
};

const handleKeyDown = (e) => {
  // console.log("handleKeyDown");
};

export default function TodoItem({ todo, editing, onToggle, onDestroy }: TodoItemProps) {
  const editField = useRef(null);
  const [todoText, setTodoText] = useState(todo.title);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTodoText(e.target.value);
  };
  return (
    <li
      className={classNames({
        completed: todo.completed,
        editing: editing,
      })}
    >
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={todo.completed}
          onChange={(e) => onToggle(e, todo.id)}
        />
        <label onDoubleClick={(e) => handleEdit(e)}>{todo.title}</label>
        <button className="destroy" onClick={onDestroy} />
      </div>
      <input
        ref={editField}
        className="edit"
        value={todoText}
        onBlur={(e) => handleSubmit(e)}
        onChange={(e) => handleChange(e)}
        onKeyDown={(e) => handleKeyDown(e)}
      />
    </li>
  );
}
