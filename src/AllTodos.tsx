import { useNavigate } from "react-router-dom";
import type { TodoItem, TodoListKey, TodoLists } from "./TodoData";

type AllTodosProps = {
  todoLists: TodoLists;
  sortType: string;
  listNum: string;
  onSort: (listNum: TodoItem[], sortType: string) => void;
};

const LIST_ORDER: Array<{ key: TodoListKey; label: string }> = [
  { key: "TodoList1", label: "Monday" },
  { key: "TodoList2", label: "Tuesday" },
  { key: "TodoList3", label: "Wednesday" },
  { key: "TodoList4", label: "Thursday" },
  { key: "TodoList5", label: "Friday" },
  { key: "TodoList6", label: "Saturday" },
  { key: "TodoList7", label: "Sunday" },
];

export default function AllTodos(props: AllTodosProps) {
  const { todoLists } = props;
  const navigate = useNavigate();

  const handleSort = (items: TodoItem[], sortType: string) => {
    props.onSort(items, sortType);
    navigate("/");
  };

  return (
    <div className="text-center">
      <h2>Todo Lists</h2>

      {LIST_ORDER.map((entry) => (
        <div key={entry.key} className="border mx-5 my-3 py-3">
          <h3 className="text-info">{entry.label}</h3>
          {todoLists[entry.key].map((item) => {
            return <div key={item.id}>{item.text}</div>;
          })}
          <button
            className="mx-1 mt-2 bg-info text-white border-0"
            onClick={() => handleSort(todoLists[entry.key], "asc")}
          >
            Rush
          </button>
          <button
            className="mx-1 mt-2 bg-info text-white border-0"
            onClick={() => handleSort(todoLists[entry.key], "desc")}
          >
            Relax
          </button>
        </div>
      ))}
    </div>
  );
}
