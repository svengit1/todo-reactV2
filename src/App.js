import React from 'react';
import './app.css';
import TodoInput from './components/TodoInput.js';
import TodoList from './components/TodoList';
import Navbar from './components/Navbar';

export default function App(){
    const visibilityStates = {"ALL": "all", "COMPLETED": "completed", "ACTIVE": "active"}
    const [tasks, setTasks] = React.useState([])
    const [visable, setVisable] = React.useState("all")
    return(
        <div className="container col-5" id="main">
            <h1 className="title">Todos</h1>
            <TodoInput changeTasks = {setTasks} changeVisable = {setVisable} todos={tasks} currVisable = {visable}
            />
            <TodoList 
                todos={tasks} 
                visibility = {visable}
                changeParentState={setTasks}
                states={visibilityStates}/>

            {tasks.length ? <Navbar changeVisibilityHandler = {setVisable} currActive={visable} tasksSetter={setTasks} states={visibilityStates}/> : <div></div>}
        </div>

    )
}


