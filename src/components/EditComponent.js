import React, { Component } from 'react';
import { connect } from 'react-redux';


class EditComponent extends Component {
    handleEdit = (e) => {
        e.preventDefault();
        const newDescription = this.getDescription.value;
        const newTaskDate = this.getDate.value;
        const newTaskTime = this.getTime.value;
        const data = {
            newDescription,
            newTaskDate,
            newTaskTime,
        }
        this.props.dispatch({ type: 'UPDATE', id: this.props.post.id, data: data })
    }
    render() {
        return (
            <div key={this.props.post.id} className="post">
            <form className="form" onSubmit={this.handleEdit}>
                <input required type="text" ref={(input) => this.getDescription = input}
                    defaultValue={this.props.post.description} placeholder="Task Description" /><br /><br />
                <input type="date" id="taskDate" defaultValue={this.props.post.taskDate}
                    ref={(input) => this.getDate = input} name="taskDate" />
                <input type="time" id="taskTime" defaultValue={this.props.post.taskTime}
                    ref={(input) => this.getTime = input} name="taskTime" />
                <button>Update</button>
            </form>
            </div>
        );
    }
}

export default connect()(EditComponent);