import { TodoData, TodoListKey } from "./TodoData";

const LIST_LABELS: Record<TodoListKey, string> = {
  TodoList1: "Monday",
  TodoList2: "Tuesday",
  TodoList3: "Wednesday",
  TodoList4: "Thursday",
  TodoList5: "Friday",
  TodoList6: "Saturday",
  TodoList7: "Sunday",
};

const LIST_ORDER: TodoListKey[] = [
  "TodoList1",
  "TodoList2",
  "TodoList3",
  "TodoList4",
  "TodoList5",
  "TodoList6",
  "TodoList7",
];

function AllTodoLists() {
  return (
    <div className="all-todo-page">
      <h1 className="mb-4">All Todo Lists</h1>
      {LIST_ORDER.map((listKey) => (
        <section key={listKey} className="all-list-card">
          <h3 className="h5 mb-3">{LIST_LABELS[listKey]}</h3>
          <ul className="list-group">
            {TodoData[listKey].map((todo) => (
              <li
                key={`${listKey}-${todo.id}`}
                className={`list-group-item ${
                  todo.done ? "text-decoration-line-through" : ""
                }`}
              >
                <div className="fw-semibold">{todo.text}</div>
                <div className="text-muted">{todo.note}</div>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}

export default AllTodoLists;
