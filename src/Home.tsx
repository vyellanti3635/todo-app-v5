import React, { Component } from "react";
import AddTodo from "./AddTodo";
import Todos from "./Todos";
import { TodoData, TodoItem, TodoListKey, TodoLists } from "./TodoData";

type HomeState = {
  TodoLists: TodoLists;
};

const DAY_TO_LIST: Record<string, TodoListKey> = {
  Monday: "TodoList1",
  Tuesday: "TodoList2",
  Wednesday: "TodoList3",
  Thursday: "TodoList4",
  Friday: "TodoList5",
  Saturday: "TodoList6",
  Sunday: "TodoList7",
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

class Home extends Component<Record<string, never>, HomeState> {
  constructor(props: Record<string, never>) {
    super(props);

    this.state = {
      TodoLists: cloneTodoLists(TodoData),
    };
  }

  handleAddTodo = (getItem: TodoItem, currentTodoList: TodoListKey) => {
    this.setState((prevState) => {
      const updatedList = [...prevState.TodoLists[currentTodoList], getItem];

      return {
        TodoLists: {
          ...prevState.TodoLists,
          [currentTodoList]: updatedList,
        } as TodoLists,
      };
    });
  };

  handleToggleTodo = (listKey: TodoListKey, todoId: number) => {
    this.setState((prevState) => {
      const updatedList = prevState.TodoLists[listKey].map((todo) =>
        todo.id === todoId ? { ...todo, done: !todo.done } : todo
      );

      return {
        TodoLists: {
          ...prevState.TodoLists,
          [listKey]: updatedList,
        } as TodoLists,
      };
    });
  };

  render() {
    const dayNames = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    const todayName = dayNames[new Date().getDay()];
    const currentList = DAY_TO_LIST[todayName] ?? "TodoList7";

    return (
      <div>
        <h1>
          <span className="d-flex justify-content-center text-warning">{todayName}'s</span>
          Todo List
        </h1>
        <Todos
          todolists={this.state.TodoLists[currentList]}
          listKey={currentList}
          updateTodo={this.handleToggleTodo}
        />
        <AddTodo addItem={this.handleAddTodo} currentList={currentList} />
      </div>
    );
  }
}

export default Home;
