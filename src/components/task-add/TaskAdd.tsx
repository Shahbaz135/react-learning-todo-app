import { Link } from 'react-router-dom';
import {useLocation} from 'react-router-dom';
import React, {useState, useEffect } from 'react';

function addTask({onClick ,route, navigate}: any) {
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
    }, [])

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
            {/* {isEdit ? 
            <button className="btn btn-success" onClick={() => onClick({newTask,isEdit, id})}>Update</button> : 
            <button className="btn btn-success" onClick={() => onClick({newTask,isEdit, id})}>Add</button>} */}
            <button className="btn btn-success" onClick={() => onClick({newTask,isEdit, id})}>
                {isEdit ? 'Update' : 'Add'} 
            </button>
        </>
    )
}

export default addTask