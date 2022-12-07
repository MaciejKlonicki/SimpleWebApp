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
      <div className='first-table-pos w-100'>
        <h1 style={{position: "relative", right: "790px", top: "50px"}}>Your Todos</h1>
        <table style={{marginTop: "100px"}} className='table table-dark'>
            <thead>
                <tr>
                    <th>Description</th>
                    <th>Target Date</th>
                    <th>Is It Done?</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <ul>
                    {todos.map((todo) => (
                        <li key={todo.id}>
                            <td>{todo.description}</td>
                        </li>
                    ))}
                </ul>
            </tbody>
        </table>
      </div>
    );
  };

export default WhatToDo