import "./styles.css";
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./Nav";
import { TodoData, TodoItem, TodoListKey, TodoLists } from "./TodoData";

type AppState = {
  TodoLists: TodoLists;
  sortType: string;
  listNum: string;
  selectedDay: TodoListKey;
  selectedDayLabel: string;
};

const DAY_LABELS: Record<TodoListKey, string> = {
  TodoList1: "Monday",
  TodoList2: "Tuesday",
  TodoList3: "Wednesday",
  TodoList4: "Thursday",
  TodoList5: "Friday",
  TodoList6: "Saturday",
  TodoList7: "Sunday",
};

const cloneTodoLists = (source: TodoLists): TodoLists => ({
  TodoList1: source.TodoList1.map((item) => ({ ...item })),
  TodoList2: source.TodoList2.map((item) => ({ ...item })),
  TodoList3: source.TodoList3.map((item) => ({ ...item })),
  TodoList4: source.TodoList4.map((item) => ({ ...item })),
  TodoList5: source.TodoList5.map((item) => ({ ...item })),
  TodoList6: source.TodoList6.map((item) => ({ ...item })),
  TodoList7: source.TodoList7.map((item) => ({ ...item })),
});

const getTodayKey = (): TodoListKey => {
  const dayMap: TodoListKey[] = [
    "TodoList7", "TodoList1", "TodoList2", "TodoList3",
    "TodoList4", "TodoList5", "TodoList6",
  ];
  return dayMap[new Date().getDay()];
};

class App extends Component<Record<string, never>, AppState> {
  constructor(props: Record<string, never>) {
    super(props);

    const todayKey = getTodayKey();
    this.state = {
      sortType: "asc",
      listNum: "",
      TodoLists: cloneTodoLists(TodoData),
      selectedDay: todayKey,
      selectedDayLabel: DAY_LABELS[todayKey],
    };
  }

  onSort = (listNum: TodoItem[], sortType: string, dayKey: TodoListKey) => {
    listNum.sort((a, b) => {
      const isReversed = sortType === "asc" ? 1 : -1;
      return isReversed * a.text.localeCompare(b.text);
    });
    this.setState({
      sortType,
      TodoLists: { ...this.state.TodoLists },
      selectedDay: dayKey,
      selectedDayLabel: DAY_LABELS[dayKey],
    });
  };

  render() {
    return (
      <div className="App text-secondary">
        <Nav
          todoLists={this.state.TodoLists}
          sortType={this.state.sortType}
          listNum={this.state.listNum}
          onSort={this.onSort}
          selectedDay={this.state.selectedDay}
          selectedDayLabel={this.state.selectedDayLabel}
        />
      </div>
    );
  }
}

export default App;
