import { useState } from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import TaskList from './components/task-list/TaskList';
import TaskAdd from './components/task-add/TaskAdd';
import './App.css';

function App() {
  const navigate = useNavigate();
  let [taskList, setList]: any = useState([
    {id: 1, name: 'wake'},
    {id: 2, name: 'eat'},
    {id: 3, name: 'work'},
    {id: 4, name: 'exercise'}
  ]);
 

  function addNew(item: any) {
    let copy = taskList.slice();
    copy.push({
      id: copy.length + 1,
      name: item
    })

    setList(copy);
    navigate('/', {replace: true});
  }

  return (
    <>
      
        <Routes>
          <Route path='/' element={<TaskList taskList={taskList} />} />
          <Route path='/add' element = { <TaskAdd  onClick={addNew}/>} />          
          {/* <TaskList path  taskList={taskList} onClick={addNew}/> */}
        </Routes>
      
      
    </>
    
  )
}

export default App
