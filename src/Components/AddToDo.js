import React, { useState } from 'react'
import './AddToDo.css'

export default function AddToDo(props) {
  const[taskTitle, setTitle] = useState("");
  const[taskDesc, setDesc] = useState("");
  const submitTask = (e)=>{
    //preventDefault wont let page reload
    e.preventDefault();
    if(!taskTitle || !taskDesc){
      alert("Description or title not provided!");
    }
    //else add to do task
    else{
      props.addToDo(taskTitle, taskDesc);
      setTitle("");
      setDesc("");
    }
    
  }
  return (
    <div className="addtask-container">
      <h3 className='addtask-heading'>Add a Task</h3>
      <form>
        <div className="addtask-innercontainer">
          <label htmlFor="taskTitle" className='addtask-subhead'>Title of Task</label>
          <input className='addtask-input' id='taskTitle' value={taskTitle} onChange={(e)=>setTitle(e.target.value)}/>
        </div>

        <div className="addtask-innercontainer">
          <label htmlFor="taskDesc" className='addtask-subhead'>Description</label>
          <textarea rows="3" className='addtask-input' id="taskDesc" value={taskDesc} onChange={(e)=>setDesc(e.target.value)}/>
        </div>
      </form>
      <div className="buttoncontainer">
      <button onClick={submitTask} className='submit-button'>Add</button>
      </div>      
    </div>
  )
}
