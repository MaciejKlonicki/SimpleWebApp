import React, {Component} from 'react';
import './App.css';
import HeaderComp  from './components/HeaderComp';

class App extends Component {
    render() {
        return (
            <div className="App">
                <HeaderComp />
            </div>
        );
    }
}

export default App;