import React, { Component } from 'react';
import { fbConTodos } from '../../firebase';
import './css/TodoStyles.css';

class TodoListItem extends Component {

  constructor(props){
    super(props);
  }

  removeTask(clientKey) {
    fbConTodos.child(clientKey).remove();
  }

  render(){
    return(
      <div key = {this.props.keyVal} className = "todo-item-body">
        <div className = "todo-item-content">
          <h3>{this.props.school}</h3>
          <button
            type = "button"
            className = "btn btn-danger todo-button-delete"
            onClick = {() => this.removeTask(this.props.keyVal)}
            >
            Delete
          </button>
          <p>{this.props.task}</p>
          <div className = "todo-content-dates">
            <p><small>Due: {this.props.dueDate}</small></p>
            <p><small>Submitted: {this.props.submitted}</small></p>
          </div>
        </div>
      </div>
    )
  }
}

export default TodoListItem;
