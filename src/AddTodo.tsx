import React from "react";
import type { TodoItem, TodoListKey } from "./TodoData";

type AddTodoProps = {
  addItem: (item: TodoItem, currentTodoList: TodoListKey) => void;
  currentList: TodoListKey;
};

function AddTodo(props: AddTodoProps) {
  const addTodoRef = React.useRef<HTMLInputElement>(null);
  const addNoteRef = React.useRef<HTMLInputElement>(null);

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const addTodoItem = form.elements.namedItem(
      "addTodoItem"
    ) as HTMLInputElement | null;
    const addTodoNote = form.elements.namedItem(
      "addTodoNote"
    ) as HTMLInputElement | null;

    if (!addTodoItem || !addTodoNote) {
      return;
    }

    const text = addTodoItem.value.trim();
    const note = addTodoNote.value.trim();

    if (!text) {
      return;
    }

    const newTodoItem: TodoItem = {
      id: Date.now(),
      text,
      note,
      done: false,
    };

    props.addItem(newTodoItem, props.currentList);

    if (addTodoRef.current) {
      addTodoRef.current.value = "";
    }

    if (addNoteRef.current) {
      addNoteRef.current.value = "";
    }
  };

  return (
    <div className="border border-dark m-4 p-3">
      <h5>Add To Do Item</h5>
      <form onSubmit={submit}>
        <input
          type="text"
          name="addTodoItem"
          className="d-block d-sm-inline my-2 mt-3 mx-auto mx-sm-2"
          ref={addTodoRef}
          placeholder="Add Todo Item"
        />
        <input
          type="text"
          name="addTodoNote"
          className="d-block d-sm-inline my-2 mx-auto mx-sm-2"
          ref={addNoteRef}
          placeholder="Add Todo Note"
        />
        <button className="d-block d-sm-inline mx-auto my-3 mx-sm-2">Add</button>
      </form>
    </div>
  );
}

export default AddTodo;
