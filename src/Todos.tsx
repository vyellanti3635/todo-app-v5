import { ListGroup, ListGroupItem } from "reactstrap";
import $ from "jquery";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { TodoItem, TodoListKey } from "./TodoData";

type TodosProps = {
  todolists: TodoItem[];
  listKey: TodoListKey;
  updateTodo: (listKey: TodoListKey, todoId: number) => void;
};

function Todos(props: TodosProps) {
  const handleNote = (getNote: string) => {
    $("#note").empty().append(getNote);
    $("#notebox").css("visibility", "visible");
    $("#notebox").css("position", "relative");
  };

  const dismissNote = () => {
    $("#note").empty();
    $("#notebox").css("visibility", "hidden");
    $("#notebox").css("position", "absolute");
  };

  return (
    <ListGroup>
      {props.todolists.map((todolist) => (
        <div key={todolist.id} className="d-flex justify-content-center">
          <ListGroupItem
            tag="button"
            style={{
              textDecoration: todolist.done ? "line-through" : "",
            }}
            onClick={() => handleNote(todolist.note)}
            className="align-self-center py-2 w-50 bg-info text-white"
          >
            {todolist.text}
          </ListGroupItem>
          <button
            id="todoDone"
            className="border border-0"
            onClick={() => props.updateTodo(props.listKey, todolist.id)}
          >
            {todolist.done ? (
              <FontAwesomeIcon icon={faTimes} className="fas fa-sm text-danger" />
            ) : (
              <FontAwesomeIcon icon={faCheck} className="fas fa-sm text-success" />
            )}
          </button>
        </div>
      ))}
      <ListGroupItem id="notebox" className="border border-dark rounded m-5">
        <div id="note" className="mt-5 font-weight-bold text-dark"></div>
        <button
          id="btn"
          className="w-25 mt-2 align-self-center bg-warning border-0"
          onClick={dismissNote}
        >
          Done
        </button>
      </ListGroupItem>
    </ListGroup>
  );
}

export default Todos;
