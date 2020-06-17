import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoItem from './components/TodoItem'

class App extends Component{
  constructor(){
    super();
    this.todoItems = [
      'Have breakfast',
      'Go to work',
      'Go to the gym'
    ];
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {
            this.todoItems.map((item, index) => <TodoItem key={index} content={item} />)
          }
          {/* <TodoItem content="Have breakfast"/>
          <TodoItem content="Go to work"/>
          <TodoItem content="Go to gym"/> */}
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
