import { Link } from 'react-router-dom';
import {useState } from 'react';

function addTask({onClick}: any) {
    let [newTask, setValue] = useState();

    function handleChange(event: any) {
        setValue(event.target.value);
    }

    return (
        <>
            <div className="input-group">
                <span className="input-group-text">Add New</span>
                <textarea className="form-control" aria-label="With textarea"
                value={newTask} onChange={handleChange}>
                </textarea>
            </div>
            <button className="btn btn-info">
                <Link to='/'>Back</Link>
                
            </button>
            <button className="btn btn-success" onClick={() => onClick(newTask)}>Add</button>
        </>
    )
}

export default addTask