import React from 'react';
import './App.css';
import HeaderComp  from './components/HeaderComp';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WhatToDo from './components/WhatToDo';
import AddTodo from './components/AddTodo';

const App = () => {
    return (
        <Router>
            <HeaderComp />
            <Routes>
                <Route path='/todos' exact={true} element={<WhatToDo/>} />
                <Route path='/todos/:id' element={<AddTodo/>}/>
            </Routes>
        </Router>
    )
}

export default App;