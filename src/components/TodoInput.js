import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";


export default function TodoInput(props){
    const initalTaskState = {"value": "", "completed": false, "uid": generateUID()}
    const [task, setTask] = React.useState(initalTaskState)
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
            props.changeTasks(prevTasks => [...prevTasks, task])
            setTask(initalTaskState)
        }
    }

    function selectAllHandler(){
        props.changeTasks(props.todos.map(obj => ({...obj, completed:true})))
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
        <div className="input-group mb-3" id="new_task">
            {props.todos.length ? <button className="btn btn-outline-secondary" type="button" id="select_all_btn" onClick={selectAllHandler}>Select all</button> : <div></div>}
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
    )
}