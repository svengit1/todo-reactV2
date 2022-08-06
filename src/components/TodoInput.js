import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import TodoList from './TodoList';
import Navbar from './Navbar';


export default function TodoInput(){
    const initalTaskState = {"value": "", "completed": false, "uid": generateUID()}
    const [task, setTask] = React.useState(initalTaskState)
    const [tasks, setTasks] = React.useState([])
    const [visable, setVisable] = React.useState("all")
    function handleChange(e){
        setTask(prevTask => {
            return {
                ...prevTask,
                "value": e.target.value
            }
        })
    }


    function handleSubmit(e){
        if (e.which === 13) {
            setTasks(prevTasks => [...prevTasks, task])
            setTask(initalTaskState)
        }
    }

    function selectAllHandler(){
        let newTasks = tasks.map(obj => {
                return {"value": obj.value, "completed": true, "uid": obj.uid}
        })
        setTasks(newTasks)
    }

    function changeVisibility(visibility_change){
        setVisable(visibility_change)
    }
    function uidPart(){
        var part = (Math.random() * 46656) | 0;
        part = ("000" + part.toString(36)).slice(-3);
        return part
    }
    
    function generateUID() {
        return uidPart() + uidPart();
    }
    
    
    return(
        <div className="container col-5" id="main">
            <div className="input-group mb-3" id="new_task">
            {tasks.length ? <button className="btn btn-outline-secondary" type="button" id="select_all_btn" onClick={selectAllHandler}>Select all</button> : <div></div>}
            <input 
            id="new_task_input_box" 
            type="text" 
            className="form-control" 
            placeholder="What needs to be done?" 
            aria-label="Example text with button addon" 
            aria-describedby="button-addon1"
            onChange={handleChange}
            onKeyDown={handleSubmit}
            value={task.value}>
            </input>
          </div>
          <TodoList 
          todos={tasks} 
          visibility = {visable}
          changeParentState={setTasks}/>
          {tasks.length ? <Navbar changeVisibilityHandler = {changeVisibility} curr_active={visable} tasks_setter={setTasks}/> : <div></div>}
        </div>  
    )
}