import React, { Component } from 'react';
import { fbConTodos } from '../../firebase';
import './css/TodoListItemStyles.css';

class TodoListItem extends Component {

  removeTask(clientKey) {
    fbConTodos.child(clientKey).remove();
  }

  render(){
    const propDate = Date.parse(this.props.dueDate);
    console.log(propDate);
    if(Date.parse(this.props.dueDate) <= (Date.parse(new Date())+604800000)){
      let priorityColor = {backgroundColor: "Yellow"}
    }
    if(Date.parse(this.props.dueDate)<= (Date.parse(new Date())+259200000)){
      let priorityColor = {backgroundColor: "Orange"}
    }
    if(Date.parse(this.props.dueDate)<= Date.parse(new Date())){
      let priorityColor = {backgroundColor: "Red"}
    } else {
      let priorityColor = {backgroundColor: "#CCC"}
    }
    return(
      <div key = {this.props.keyVal} className = "todo-item-body" style = {this.priorityColor}>
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
