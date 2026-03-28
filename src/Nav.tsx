import { Link, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboardList, faHome } from "@fortawesome/free-solid-svg-icons";
import Home from "./Home";
import AllTodos from "./AllTodos";
import type { TodoItem } from "./TodoData";

type NavProps = {
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
                lists1={props.lists1}
                lists2={props.lists2}
                lists3={props.lists3}
                lists4={props.lists4}
                lists5={props.lists5}
                lists6={props.lists6}
                lists7={props.lists7}
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
