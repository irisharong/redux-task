import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as Actions from '../actions/taskActions';

class TaskForm extends Component {

  handleSubmit = (e) => {
    e.preventDefault();
    const description = this.getDescription.value;
    const taskDate = this.getDate.value;
    const user = this.getUser.value;
    const taskTime = this.getTime.value;
    const data = {
      id: new Date(),
      description,
      taskDate,
      user,
      taskTime,
      editing: false
    }
console.log(data);
    // add this in action
    const { addTask } = this.props;
    addTask(data);

    this.getDescription.value = '';
    this.getDate.value = '';
    this.getTime.value = '';
    this.getUser.value = '';
  }

  render() {
    return (
      <div className="post-container">
        <h1 className="post_heading">Create Task</h1>
        <form className="form" onSubmit={this.handleSubmit} >
          <input required type="text" ref={(input) => this.getDescription = input}
            placeholder="Task Description" /><br /><br />
          <label for="taskDate">Date:</label>
          <input type="date" id="taskDate" 
            ref={(input) => this.getDate = input} name="taskDate" />
          
          <label for="taskTime">Time:</label>
          <input type="time" id="taskTime" name="taskTime"
            ref={(input) => this.getTime = input} />
          <br /><br />
          <label for="users">Assign User:</label>
          <input disabled type="text" ref={(input) => this.getUser = input}
            value="User1" />
          <br /><br />
          <button>Add</button>
        </form>
      </div>
    );
  }
  
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    addTask: Actions.addTask,
  }, dispatch);
}


export default (connect(null, mapDispatchToProps)(TaskForm));