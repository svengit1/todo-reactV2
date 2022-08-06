import React from 'react'

export default function TodoItem(props){
    const [todoItemValue, setTodoItemValue] = React.useState(props.todo.value)

    function changeTodoItemValue(e){
        setTodoItemValue(e.target.value)
    }


    function handleTasksChange(e){
        let newTasks = props.allTodos.map(obj => {
            if (obj.uid === e.target.id){
                return {"value": e.target.value, "completed": obj.completed, "uid": obj.uid}
            }
            return obj
        })
        props.setParentState(newTasks)
    }


    function handleDelete(e){
        props.setParentState(prevTasks =>
            prevTasks.filter(task => {
                return task.uid !== e.target.id
            }))
    }

    function checkboxChange(e){
        let newTasks = props.allTodos.map(obj => {
            if (obj.uid === e.target.id){
                return {"value": obj.value, "completed": e.target.checked, "uid": obj.uid}
            }
            return obj
        })
        props.setParentState(newTasks)
    }

    return(
        <div className="input-group mb-3">
        <div className="input-group-text">
        <input className="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input" onChange={checkboxChange} id={props.todo.uid} checked={props.todo.completed}></input>
        </div>
        <input 
        type="text" 
        className="form-control" 
        aria-label="Text input with checkbox"
        value={todoItemValue}
        id={props.todo.uid}
        onChange={changeTodoItemValue}
        onKeyDown={handleTasksChange}
        onBlur={handleTasksChange}></input>
        <button className="btn btn-outline-secondary" id={props.todo.uid} onClick={handleDelete}>Delete</button>
        </div>
    )
}