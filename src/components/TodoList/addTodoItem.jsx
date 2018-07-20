import React, { Component } from 'react';
import { fbConTodos } from '../../firebase';

class AddTodoItem extends Component {

  constructor(props){
    super(props);
    const today = (new Date()).toLocaleDateString("en-US");
    this.state = {
      school: "",
      task: "",
      due: "",
      submitted: today
    }
    this.addTask = this.addTask.bind(this);
  }

  addTask() {
    let taskArray = this.state;
    fbConTodos.push(taskArray);
  }

  render() {
    return(
      <div>
        <div className = "form-inline">
          <div className = "form-group">
            <input
              type = "text"
              placeholder = "client"
              className = "form-control"
              onChange = {event => this.setState({ school: event.target.value })}
            />
            <input
              type = "text"
              placeholder = "Task"
              className = "form-control"
              onChange = {event => this.setState({ task: event.target.value })}
            />
          <input
            type = "date"
            className = "form-control"
            onChange = { event => this.setState({ due: event.target.value })}
          />
          <button
            className = "btn btn-success"
            onClick = {this.addTask}
          >
              Add Task
          </button>
        </div>
      </div>
      </div>

    )
  }
}

export default AddTodoItem;
