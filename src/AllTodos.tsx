import type { TodoItem } from "./TodoData";

type AllTodosProps = {
  lists1: TodoItem[];
  lists2: TodoItem[];
  lists3: TodoItem[];
  lists4: TodoItem[];
  lists5: TodoItem[];
  lists6: TodoItem[];
  lists7: TodoItem[];
  sortType: string;
  listNum: string;
  onSort: (listNum: TodoItem[], sortType: string) => void;
};

export default function AllTodos(props: AllTodosProps) {
  const { lists1, lists2, lists3, lists4, lists5, lists6, lists7 } = props;

  const allLists: { label: string; items: TodoItem[] }[] = [
    { label: "Monday", items: lists1 },
    { label: "Tuesday", items: lists2 },
    { label: "Wednesday", items: lists3 },
    { label: "Thursday", items: lists4 },
    { label: "Friday", items: lists5 },
    { label: "Saturday", items: lists6 },
    { label: "Sunday", items: lists7 },
  ];

  return (
    <div className="text-center">
      <h2>Todo Lists</h2>

      {allLists.map((day) => (
        <div key={day.label} className="border mx-5 my-3 py-3">
          <h3 className="text-info">{day.label}</h3>
          {day.items.map((item) => {
            return <div key={item.id}>{item.text}</div>;
          })}
          <button
            className="mx-1 mt-2 bg-info text-white border-0"
            onClick={() => props.onSort(day.items, "asc")}
          >
            Rush
          </button>
          <button
            className="mx-1 mt-2 bg-info text-white border-0"
            onClick={() => props.onSort(day.items, "desc")}
          >
            Relax
          </button>
        </div>
      ))}
    </div>
  );
}
