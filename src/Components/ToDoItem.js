import React from 'react'
import './ToDoItem.css'
export default function ToDoItem(props) {
  return (
    <div className='listitem-container'>
       <h4 className='listitem-title'>{props.todo.title}</h4>
       <p className='listitem-desc'>{props.todo.desc}</p>
       <button className='delete-button' onClick={()=>{props.onDelete(props.todo)}}>Delete</button>
    </div>
  )
}
