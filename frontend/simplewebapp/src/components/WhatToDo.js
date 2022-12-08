import React, { useState, useEffect } from 'react';
import './WhatToDo.css'

const WhatToDo = () => {
    const [todos, setTodos] = useState([]);
  
    useEffect(() => {
      fetch('http://localhost:8080/whattodo')
        .then((response) => response.json())
        .then((data) => setTodos(data));
    }, []);
  
    return (
      <div className='first-table-pos'>
        <h1 style={{position: "relative", right: "790px"}}>Your Todos</h1>
        <button style={{position: "relative", left: "849px", bottom: "20px"}} type="button" class="btn btn-success">Add todo</button>
        <table className='table table-dark'>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Done</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
              {todos.map((todo) => (
                <tr>
                    <td>{todo.title}</td>
                    <td>{todo.description}</td>
                    <td>{todo.done}</td>
                    <td>
                      <button type="button" class="btn btn-danger" style={{marginRight: "20px"}}>Delete</button>
                      <button type="button" class="btn btn-primary">Edit</button>
                    </td>
                </tr>
              ))}
            </tbody>
        </table>
      </div>
    );
  };

export default WhatToDo
