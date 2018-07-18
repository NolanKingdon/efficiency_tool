import React, { Component } from 'react';
import { fbConTodos } from '../../firebase';
import './css/TodoListItemStyles.css';

class TodoListItem extends Component {

  removeTask(clientKey) {
    fbConTodos.child(clientKey).remove();
  }

  render(){
    let priorityColor = {backgroundColor: "Green"}
    const propDate = Date.parse(this.props.dueDate);
    if(Date.parse(this.props.dueDate) <= (Date.parse(new Date())+604800000)){
      priorityColor = {backgroundColor: "rgba(252,248,12,0.5)"}
    }
    if(Date.parse(this.props.dueDate) <= (Date.parse(new Date())+259200000)){
      priorityColor = {backgroundColor: "rgba(252,140,12,0.8)"}
    }
    if(Date.parse(this.props.dueDate) <= Date.parse(new Date())){
      priorityColor = {backgroundColor: "rgba(255,35,35,0.8)"}
    }
    if(Date.parse(this.props.dueDate) >= (Date.parse(new Date())+604800000)) {
      priorityColor = {backgroundColor: "#CCC"}
    }
    console.log(priorityColor);
    return(
      <div key = {this.props.keyVal} className = "todo-item-body" style = {{backgroundColor: priorityColor.backgroundColor}}>
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
