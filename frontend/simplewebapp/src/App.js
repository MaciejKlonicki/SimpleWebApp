import React, {Component} from 'react';
import './App.css';
import HeaderComp  from './components/HeaderComp';
import WhatToDo from './components/WhatToDo';

class App extends Component {
    render() {
        return (
            <div className="App">
                <HeaderComp />
                <WhatToDo />
            </div>
        );
    }
}

export default App;