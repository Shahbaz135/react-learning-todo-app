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
 

  function addNew({newTask, isEdit, id}: any) {
    let copy = taskList.slice();
    if (isEdit) {
      let found = copy.find((x: any) => x.id == id);
      if (found) {
        found.name = newTask
      } 
    } else {
      copy.push({
        id: copy.length + 1,
        name: newTask
      })
    } 

    

    setList(copy);
    navigate('/', {replace: true});
  }

  function removeTask(item: any) {
    taskList = taskList.filter((x: any) => x.id != item.id);
    setList(taskList)
  }

  function editTask(item: any) {
    
  }

  return (
    <>
      
        <Routes>
          <Route path='/' element={<TaskList taskList={taskList} onClick={removeTask}/>} />
          <Route path='/add' element = { <TaskAdd  onClick={addNew}/>} />          
        </Routes>
      
      
    </>
    
  )
}

export default App
