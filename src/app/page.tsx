import Todo from "@/app/components/todo";
export type Filters = "all" | "completed" | "active" | "";

export default function Page() {
  return <Todo />;
}
