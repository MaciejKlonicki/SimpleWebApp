import React from 'react';
import './App.css';
import HeaderComp  from './components/HeaderComp';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WhatToDo from './components/WhatToDo';
import AddTodo from './components/AddTodo';
import EditTodo from './components/EditTodo';

const App = () => {
    return (
        <Router>
            <HeaderComp />
            <Routes>
                <Route path='/todos' exact={true} element={<WhatToDo/>} />
                <Route path='/todos/new' element={<AddTodo/>}/>
                <Route path='/todos/edit/:id' element={<EditTodo/>}/>
            </Routes>
        </Router>
    )
}

export default App;