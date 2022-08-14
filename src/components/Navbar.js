import React from 'react'
import "../app.css"

export default function Navbar({changeVisibilityHandler, currActive, tasksSetter, states}){
    function clickHandler(e){
        changeVisibilityHandler(e.target.id)
    }

    function deleteCompleted(){
        tasksSetter(prevTasks =>
            prevTasks.filter(task => {
                return task.completed !== true
            }))
    }

    function navItem(id){
        return(
            <li className="nav-item">{currActive === id? <a className="nav-link active" href="#" id={id} onClick={clickHandler}>{id}</a>: <a className="nav-link" href="#" id={id} onClick={clickHandler}>{id}</a>}</li>
        )

    }
    return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container col-5">
                  <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                      {navItem(states["ALL"])}
                      {navItem(states["ACTIVE"])}
                      {navItem(states["COMPLETED"])}
                      <li className="nav-item">
                        <p className="small-nav-text" onClick={deleteCompleted}>Clear completed!</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
    )
}