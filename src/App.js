import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import ToDoList from './Components/ToDoList';
import React, { useState, useEffect } from 'react';
import AddToDo from './Components/AddToDo';
import {createHashRouter, RouterProvider} from "react-router-dom";
function App() {
  const onDelete = (todo) =>{
    //deleting to-do item from DOM using useState hook
    //using setTodos to update DOM
    setTodos(todolist.filter((element)=>{
      return element !== todo;
    }));
    localStorage.setItem("todos", JSON.stringify(todolist));
  }
  const addToDo = (title, desc) =>{
    //creating todo object
    const myTodo = {
      sno: todolist.length===0? 1: todolist[todolist.length-1].sno +1,
      title: title,
      desc: desc
    };
    //adding todo to todolist
    setTodos([...todolist, myTodo]);
    //saving todo item at local storage
    localStorage.setItem("todos", JSON.stringify(todolist));
  }
  //initialising to-do list,empty[] if there is no todo item atlocal storage, else filled
  //with items at local storage
  let initTodo;
  if(localStorage.getItem("todos")===null){
    initTodo = [];
  }
  else{
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  console.log(localStorage.getItem("todos"));
  console.log("INITIAL LELNGTH: ",initTodo.length);
  const [todolist, setTodos] = useState(initTodo);
  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todolist));
  }, [todolist]) 

  //footer style changes according to displayed page:
  let footerStyleAdd = {
    position: "fixed", bottom: "0px", width: "100%",
    backgroundColor: "black", color: "cyan", font: "20px consolas", padding: "10px"
  }
  let footerStyleList = {
    position: "relative", bottom: "0px", width: "100%",
    backgroundColor: "black", color: "cyan", font: "20px consolas", padding: "10px"
  }
  // react router dom:
  const router = createHashRouter([
    {
      path: "/todolist-react", element: <><Header/><AddToDo addToDo={addToDo}/><Footer footerStyle = {footerStyleAdd}/></>
    },
    {
      path: "/AddToDo", element: <><Header/><AddToDo addToDo={addToDo}/><Footer footerStyle = {footerStyleAdd}/></>
    },
    {
      path: "/ToDoList", element: <><Header/><ToDoList todos={todolist} onDelete={onDelete}/><Footer footerStyle = {footerStyleList}/></>
    }
  ], {basename: "/todolist-react"});
  return (
    <div>
        <RouterProvider router = {router}/>   
    </div>
  );
}

export default App;
