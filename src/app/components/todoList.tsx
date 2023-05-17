import {
  ChangeEvent,
  ChangeEventHandler,
  Dispatch,
  MouseEventHandler,
  useEffect,
  useState,
} from "react";
import TodoItem from "@/app/components/todoItem";
import { Filters } from "../page";
import { DispatchTodoList, Todo, TodoList } from "./todo";

type InputChangeEvent = ChangeEvent<HTMLInputElement>;
export interface TodoItemProps {
  todo: Todo;
  editing: boolean;
  onToggle: (e: InputChangeEvent, todoId: Todo["id"]) => void;
  onDestroy: MouseEventHandler<HTMLButtonElement>;
}

const onDestroy: TodoItemProps["onDestroy"] = (e) => {
  // console.log("onToggle");
};

export default function TodoList({
  filter,
  todoList,
  setTodoList,
}: {
  filter: Filters;
  todoList: TodoList;
  setTodoList: DispatchTodoList;
}) {
  const [editing, setEditing] = useState(false);

  const [filteredTodoList, setFilteredTodoList] = useState<TodoList>(todoList);
  useEffect(() => {
    console.log(todoList);
    const filteredTodoList =
      filter === "all"
        ? todoList
        : todoList.filter((todo) => {
            if (filter === "completed") {
              return todo.completed;
            }
            if (filter === "active") {
              return !todo.completed;
            }
            return true;
          });
    setFilteredTodoList(filteredTodoList);
  }, [filter, todoList]);

  const checkTodo = (
    event: ChangeEvent<HTMLInputElement>,
    todoId: Todo["id"],
    todos: TodoList
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
    setTodoList((previousTodoList) => checkTodo(event, todoId, previousTodoList));
  };

  const TodoItems = () => (
    <ul className="todo-list">
      {filteredTodoList.map((todo) => (
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
