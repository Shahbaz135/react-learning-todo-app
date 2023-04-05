import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import "./TaskList.css";

function TaskList({ taskList, onClick }: any) {
  const navigate = useNavigate();

  function navigateTo(task: any) {
    navigate("/add", {
      replace: true,
      state: { id: task.id, name: task.name },
    });
  }

  return (
    <>
      <div className="row">
        <div className="col-6">
          <h3 className="list-heading">My List</h3>
        </div>
        <div className="col-6 right-add-sec">
          <button className="btn btn-success add-btn">
            <Link className="link-add" to="/add">
              Add New
            </Link>
          </button>
        </div>
      </div>

      <ul className="list-group">
        {taskList.map((task: any, index: number) => (
          <li className="list-group-item list-item" key={task.id}>
            {index + 1}) &nbsp;
            {task.name}
            <FontAwesomeIcon
              className="fa-icon"
              onClick={() => onClick(task)}
              icon={faTrash}
            />
            <FontAwesomeIcon
              className="fa-icon"
              onClick={() => navigateTo(task)}
              icon={faEdit}
            />
          </li>
        ))}
      </ul>
    </>
  );
}

export default TaskList;
