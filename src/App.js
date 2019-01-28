import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Wrapper from './components/wrapper'
import { todoData } from './data/data'
import Todos from './components/todos'
import Users from './components/users'




class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Wrapper />
          <h3>To Do's</h3>
          <Todos list={todoData} />
          <h3>Add A User</h3>
          <Users />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}


export default App;
