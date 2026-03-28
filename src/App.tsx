import "./styles.css";
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./Nav";
import { TodoData, TodoLists } from "./TodoData";

type AppState = {
  TodoLists: TodoLists;
  sortType: string;
  listNum: string;
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

class App extends Component<Record<string, never>, AppState> {
  constructor(props: Record<string, never>) {
    super(props);

    this.state = {
      sortType: "asc",
      listNum: "",
      TodoLists: cloneTodoLists(TodoData),
    };
  }

  onSort = (listNum: any[], sortType: string) => {
    listNum.sort((a, b) => {
      const isReversed = sortType === "asc" ? 1 : -1;
      return isReversed * a.text.localeCompare(b.text);
    });
    this.setState({ sortType, TodoLists: { ...this.state.TodoLists } });
  };

  render() {
    return (
      <div className="App text-secondary">
        <Nav
          todoLists={this.state.TodoLists}
          sortType={this.state.sortType}
          listNum={this.state.listNum}
          onSort={this.onSort}
        />
      </div>
    );
  }
}

export default App;
