import React, { Component } from 'react';
import './App.css';
import TodoList from "./TodoList";

class App extends Component {
  render() {
    return (
      <div className="App">
      <div id="container">
        <TodoList />
      </div>
      </div>
    );
  }
}

export default App;
