import { Link } from 'react-router-dom';

function TaskList({taskList, onClick}: any) {
//    console.log(taskList)
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
                <li className="list-group-item" key={task.id}>{task.name}</li>
            ))}
        </ul>
        </>
        
    )
}

export default TaskList