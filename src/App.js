import React from 'react';
import './app.css';
import TodoInput from './components/TodoInput.js';


export default function App(){
    return(
        <div>
            <h1 className="title">Todos</h1>
            <TodoInput/>
        </div>
    )
}


