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
                      <button>Delete</button>
                      <button>Edit</button>
                    </td>
                </tr>
              ))}
            </tbody>
        </table>
      </div>
    );
  };

export default WhatToDo
