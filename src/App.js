import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoItem from './components/TodoItem'

class App extends Component{
  constructor(){
    super();
    this.state = { todoItems: [
      { id: 0, content: 'Have breakfast', isComplete: false},
      { id: 1, content: 'Go to work', isComplete: false},
      { id: 2, content: 'Go to the gym', isComplete: false}
    ]};
  }

  onCheckboxClick(id){
      let checkBox = document.getElementById(id);
      const itemIndex = this.state.todoItems.findIndex(function(e){
        return e.id === id;
      });
      console.log(itemIndex);
      console.log(this.state.todoItems[id]);
      if(checkBox.checked === true){
        this.setState(state => {
          return state.todoItems[itemIndex].isComplete = true;
        });
      }
      else{
        this.setState(state => {
          return state.todoItems[itemIndex].isComplete = false;
        });
      }
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <span style={{fontWeight: 100, fontSize: 50}}>Todos</span>
          {
            this.state.todoItems.length > 0 && this.state.todoItems.map((item) => 
              <TodoItem key={item.id} item={item} onClick={() => this.onCheckboxClick(item.id)}/>
            )
          }
          {
            this.state.todoItems.length === 0 && 'Nothing here.'
          }
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
