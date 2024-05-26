import React from 'react'
import ToDoItem from './ToDoItem'
import './ToDoList.css'
export default function ToDoList(props) {
  // let bgStyle = {
  //   backgroundImage: "url(./images/todo-bg.jpg)",
  //   height: "100vh", marginTop: "-70px",
  //   backgroundSize: "cover", backgroundRepeat: "no-repeat"
  // };
  return (
    <div className='list-container'>
      <h3 className='list-heading'>To-do List</h3>
      {/* displaying items only if there are items in todolist, else displaying message */}
      <div className="list-subcontainer">
        {props.todos.length === 0? <p className='no-task'>No tasks to-do!</p> :
          props.todos.map((todo)=>{
            return <ToDoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
          })
        }
      </div>
      
    </div>
  )
}
