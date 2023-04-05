import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import './TaskAdd.css';

function addTask({ onClick, route, navigate }: any) {
  let [newTask, setValue] = useState();
  let [id, setId] = useState(null);
  let [isEdit, setEdit] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.state) {
      setEdit(true);
      setId(location.state.id);
      setValue(location.state.name);
    }
  }, []);

  function handleChange(event: any) {
    setValue(event.target.value);
  }

  return (
    <>
      <h3 className="list-heading">Add New Task</h3>
      <div className="input-group">
        <textarea
          className="form-control"
          aria-label="With textarea"
          rows={5}
          value={newTask}
          onChange={handleChange}
        ></textarea>
      </div>
      <div className="btn-sec">
        <button className="btn btn-secondary">
          <Link className="link-add" to="/">Back</Link>
        </button>
        <button
          className="btn btn-success"
          onClick={() => onClick({ newTask, isEdit, id })}
        >
          {isEdit ? "Update" : "Add"}
        </button>
      </div>
    </>
  );
}

export default addTask;
