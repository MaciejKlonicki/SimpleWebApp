import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './WhatToDo.css';

const WhatToDo = () => {

    let navigate = useNavigate();
    const [todos, setTodos] = useState([]);
  
    useEffect(() => {
      fetch('http://localhost:8080/whattodo')
        .then((response) => response.json())
        .then((data) => setTodos(data));
    }, []);

    const remove = async (id) => {
      await fetch(`http://localhost:8080/whattodo/${id}`, {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      }).then(() => {
        let updateTodo = [...todos].filter(i => i.id !== id);
        setTodos(updateTodo);
      });
    }

    const editTodo = (id) => {
      let path = `/todos/edit/${id}`
      navigate(path);
    }
  
    return (
      <div className='first-table-pos'>
        <h1>Your Todos</h1>
        <Button style={{position: "relative", marginRight: "10px", bottom: "10px"}} type="button" className="btn btn-success"><Link style={{color: 'inherit', textDecoration: 'inherit'}} to="/todos/new">Add todo</Link></Button>
        <table className='table table-dark'>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Done</th>
                    <th style={{width: "170px"}}>Actions</th>
                </tr>
            </thead>
            <tbody>
              {todos.map((todo) => (
                <tr>
                    <td>{todo.title}</td>
                    <td>{todo.description}</td>
                    <td>{todo.done}</td>
                    <td>
                      <Button onClick={() => remove(todo.id)} type="button" className="btn btn-danger" style={{marginRight: "20px", position: "relative", right: "50px"}}>Delete</Button>
                      <Button onClick={() => editTodo(todo.id)} style={{position: "relative", right: "50px"}} className="btn btn-primary">Edit</Button>
                    </td>
                </tr>
              ))}
            </tbody>
        </table>
      </div>
    );
  };

export default WhatToDo
