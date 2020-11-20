import React, { Component } from 'react';
import TaskForm from './components/TaskForm';
import AllTask from './components/AllTask';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="navbar">
          <h2 className="center ">Tasks</h2>
        </div>
          <TaskForm />
          <AllTask />
      </div>
    );
  }
}

export default App;