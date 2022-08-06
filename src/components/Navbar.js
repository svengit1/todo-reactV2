import React from 'react'
import "../app.css"

export default function Navbar(props){
    function clickHandler(e){
        props.changeVisibilityHandler(e.target.id)
    }

    function delete_completed(){
        props.tasks_setter(prevTasks =>
            prevTasks.filter(task => {
                return task.completed !== true
            }))
    }
    return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container col-5">
                  <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                      <li className="nav-item">
                        {props.curr_active === "all"? <a className="nav-link active" href="#" id="all" onClick={clickHandler}>All</a>: <a className="nav-link" href="#" id="all" onClick={clickHandler}>All</a>}
                      </li>
                      <li className="nav-item">
                        {props.curr_active === "active"? <a className="nav-link active" href="#" id="active" onClick={clickHandler}>Active</a>: <a className="nav-link" href="#" id="active" onClick={clickHandler}>Active</a>}
                      </li>
                        
                      <li className="nav-item">
                        {props.curr_active === "completed"? <a className="nav-link active" href="#" id="completed" onClick={clickHandler}>Completed</a>: <a className="nav-link" href="#" id="completed" onClick={clickHandler}>Completed</a>}
                      </li>
                      <li className="nav-item">
                        <p className="small-nav-text" onClick={delete_completed}>Clear completed!</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
    )
}