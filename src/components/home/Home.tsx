import {Outlet} from 'react-router-dom';
import './Home.css';

function Home() {
    return (
        <>
            <header>
                <h3>ToDo App</h3>
            </header>
            <div className='container'>
                <Outlet></Outlet>
            </div>
        </>
    )
}

export default Home;