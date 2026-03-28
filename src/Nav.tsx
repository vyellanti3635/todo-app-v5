import { Link, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboardList, faHome } from "@fortawesome/free-solid-svg-icons";
import Home from "./Home";
import AllTodos from "./AllTodos";
import type { TodoItem, TodoLists } from "./TodoData";

type NavProps = {
  todoLists: TodoLists;
  sortType: string;
  listNum: string;
  onSort: (listNum: TodoItem[], sortType: string) => void;
};

function Nav(props: NavProps) {
  return (
    <div className="header bg-dark">
      <Router>
        {/* Navigation */}
        <ul className="nav mx-2 mb-4">
          <li className="nav-item">
            <Link to="/" className="nav-link px-2" aria-label="Home">
              <FontAwesomeIcon
                icon={faHome}
                className="fas fa-2x my-3 mr-2 text-white"
              />
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/allLists" className="nav-link px-2" aria-label="All Todo Lists">
              <FontAwesomeIcon
                icon={faClipboardList}
                className="fas fa-2x my-3 text-white"
              />
            </Link>
          </li>
        </ul>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/allLists"
            element={
              <AllTodos
                todoLists={props.todoLists}
                sortType={props.sortType}
                listNum={props.listNum}
                onSort={props.onSort}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default Nav;
