import { Dispatch } from "react";
import { DispatchTodoList, Todo, TodoList } from "./todo";

export default function ToggleAll({ setTodoList }: { setTodoList: DispatchTodoList }) {
  const toggleAll = () => {
    setTodoList((todoList) => {
      const isAllCompleted = todoList.every((todo) => todo.completed);
      return todoList.map((todo) => ({
        ...todo,
        completed: !isAllCompleted,
      }));
    });
  };
  return (
    <>
      <input type="checkbox" id="toggle-all" className="toggle-all" onClick={toggleAll} />
      <label htmlFor="toggle-all"></label>
    </>
  );
}
