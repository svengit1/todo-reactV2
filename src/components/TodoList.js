import React from 'react'
import TodoItem from './TodoItem'

export default function TodoList(props){
    let todolist = []
    if (props){
        for(var i in props.todos){
            let item = <TodoItem key={props.todos[i].uid} todo={props.todos[i]} allTodos={props.todos} setParentState={props.changeParentState}/>
            if (props.visibility === props.states["ACTIVE"]){
                if (props.todos[i].completed == false)
                    todolist.push(item);
            } else if (props.visibility === props.states["COMPLETED"]){
                if (props.todos[i].completed == true)
                    todolist.push(item);
            } else{
                todolist.push(item);
            }
            
        }
    }
    return(
        <div>
            {todolist}
        </div>
        
    )
}