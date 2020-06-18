import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoItem from './components/TodoItem';

import tickImg from './images/tick.svg';

class App extends Component{
  constructor(){
    super();
    this.state = { todoItems: [
      { content: 'Have breakfast', isComplete: true},
      { content: 'Go to work', isComplete: true},
      { content: 'Go to the gym', isComplete: false}
    ]};
  }

  onCheckboxClick(item){
    //console.log(item);
    let items = this.state.todoItems;
    let index = items.indexOf(item);
    this.setState({
      todoItems: [
        ...items.slice(0, index), 
        {
          ...item, isComplete: !item.isComplete
        },
        ...items.slice(index + 1)
      ]
    });
    console.log(this.state.todoItems);
  }

  onKeyUp(event){
    
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="todo-list-header">
          {/* <span style={{fontWeight: 100, fontSize: 50}}>Todos</span> */}
            <img src={tickImg} width={20} height={20}/>
            <input 
                type="text" 
                placeholder="What you gonna do?"
                onKeyUp={this.onKeyUp}
                />
          </div>
          <div className="todo-list">
          {
            this.state.todoItems.length > 0 && this.state.todoItems.map((item, index) => 
              <TodoItem key={index} item={item} onClick={() => this.onCheckboxClick(item)} />
            )
          }
          {
            this.state.todoItems.length === 0 && 'Nothing here.'
          }
          </div>
          {/* <TodoItem content="Have breakfast"/>
          <TodoItem content="Go to work"/>
          <TodoItem content="Go to gym"/> */}
          {/* <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a> */}
        </header>
      </div>
    );
  }
}

export default App;
