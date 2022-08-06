import React from 'react'

export default function Navbar(props){
    function clickHandler(e){
        props.changeVisibilityHandler(e.target.id)
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
                    </ul>
                  </div>
                </div>
              </nav>
    )
}