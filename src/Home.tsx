import React, { Component } from "react";
import AddTodo from "./AddTodo";
import Todos from "./Todos";
import { TodoItem, TodoListKey, TodoLists } from "./TodoData";

type HomeProps = {
  todoLists: TodoLists;
  dayKey: TodoListKey;
  dayLabel: string;
  onAddTodo: (item: TodoItem, listKey: TodoListKey) => void;
  onToggleTodo: (listKey: TodoListKey, todoId: number) => void;
};

class Home extends Component<HomeProps> {
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
          updateTodo={this.props.onToggleTodo}
        />
        <AddTodo addItem={this.props.onAddTodo} currentList={dayKey} />
      </div>
    );
  }
}

export default Home;
