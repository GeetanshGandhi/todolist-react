import React from 'react'
import './Header.css'
import AddToDo from './AddToDo'
import ToDoList from './ToDoList'
import { Link } from 'react-router-dom'
export default function Header(props) {
  return (
    <nav className="navbar">
        <div className="navbar-title">To-do List</div>
        <div className="navbar-links">
            <Link to="/AddToDo" className="nav-link">Add Task</Link>
            <Link to="/ToDoList" className="nav-link">View Tasks</Link>
        </div>
    </nav>
  )
}

