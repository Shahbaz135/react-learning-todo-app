import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons'
import './TaskList.css';

function TaskList({taskList, onClick}: any) {
    const navigate = useNavigate();

    function navigateTo(task: any) {
        navigate('/add', {replace: true, state:{id: task.id, name: task.name} });
    }

    return (
        <>
        <div className="row">
            <div className="col-10">
                <h1 >My List</h1>
            </div>
            <div className="col-2">
                <button className="btn btn-success">
                    <Link to="/add"> Add New</Link>
                    {/* <a href="/add">Add New</a> */}
                </button>
            </div>
        </div>
        
        <ul className="list-group">
            {taskList.map((task: any) => (
                <li className="list-group-item" key={task.id}>{task.name}
                    <FontAwesomeIcon className='fa-icon' onClick={() => onClick(task)} icon={faTrash} />
                    <FontAwesomeIcon className='fa-icon' onClick={() =>navigateTo(task)} icon={faEdit} />
                </li>
                
            ))}
        </ul>
        </>
        
    )
}

export default TaskList