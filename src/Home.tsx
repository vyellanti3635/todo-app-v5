import React, { Component } from "react";
import AddTodo from "./AddTodo";
import Todos from "./Todos";
import { TodoItem, TodoListKey, TodoLists } from "./TodoData";

type HomeProps = {
  todoLists: TodoLists;
  dayKey: TodoListKey;
  dayLabel: string;
};

type HomeState = {};

class Home extends Component<HomeProps, HomeState> {
  handleAddTodo = (getItem: TodoItem, currentTodoList: TodoListKey) => {
    // handled at App level in future versions
  };

  handleToggleTodo = (listKey: TodoListKey, todoId: number) => {
    // handled at App level in future versions
  };

  render() {
    const { todoLists, dayKey, dayLabel } = this.props;

    return (
      <div>
        <h1>
          <span className="d-flex justify-content-center text-warning">{dayLabel}'s</span>
          Todo List
        </h1>
        <Todos
          todolists={todoLists[dayKey]}
          listKey={dayKey}
          updateTodo={this.handleToggleTodo}
        />
        <AddTodo addItem={this.handleAddTodo} currentList={dayKey} />
      </div>
    );
  }
}

export default Home;
