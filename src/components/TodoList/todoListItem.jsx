import React, { Component } from 'react';
import { fbConTodos } from '../../firebase';
import './css/TodoListItemStyles.css';

class TodoListItem extends Component {

  constructor(props){
    super(props);
    this.state = {
      editing: false
    }
  }

  removeTask(clientKey) {
    fbConTodos.child(clientKey).remove();
  }

  editMode(){
    if(!this.state.editing){
      //Consider moving this out of the component and thinking of a new way to do this.
      //This doesn't feel very "React"
      this.setState({
        editing: true,
        task: this.props.task,
        due: this.props.dueDate,
        submitted: this.props.submitted,
        school: this.props.school
      })
    } else {
      this.setState({
        editing: false
      })
    }
  }

  updateFirebase(taskKey){
    const task = this.state.task;
    const due = this.state.due;
    const submitted = this.state.submitted;
    const school = this.state.school;

    fbConTodos.child(taskKey).set({due, school, submitted, task});
    this.setState({
      editing: false
    })
  }

  render(){
    //This should probably be a function
    let priorityColor = {backgroundColor: "Green"}
    if(Date.parse(this.props.dueDate) <= (Date.parse(new Date())+604800000)){
      priorityColor = {backgroundColor: "rgba(252,248,12,0.4)"}
    }
    if(Date.parse(this.props.dueDate) <= (Date.parse(new Date())+259200000)){
      priorityColor = {backgroundColor: "rgba(252,140,12,0.6)"}
    }
    if(Date.parse(this.props.dueDate) <= Date.parse(new Date())){
      priorityColor = {backgroundColor: "rgba(255,35,35,0.8)"}
    }
    if(Date.parse(this.props.dueDate) >= (Date.parse(new Date())+604800000)) {
      priorityColor = {backgroundColor: "#CCC"}
    }
    return(
      <div key = {this.props.keyVal} className = "todo-item-body" style = {{backgroundColor: priorityColor.backgroundColor}}>
        {!this.state.editing &&
          <div className = "todo-item-content">

            <h3>{this.props.school}</h3>
            <div className = "btn-holder">
              <button
                type = "button"
                className = "btn btn-success todo-button-complete"
                onClick = {() => this.removeTask(this.props.keyVal)}
                >
                Done
              </button>
              <button
                type = "button"
                className = "btn btn-warning todo-button-edit"
                onClick = {() => this.editMode()}
                >
                Edit
              </button>
              <button
                type = "button"
                className = "btn btn-danger todo-button-delete"
                onClick = {() => this.removeTask(this.props.keyVal)}
                >
                Delete
              </button>
            </div>
            <p>{this.props.task}</p>
            <div className = "todo-content-dates">
              <p><small>Due: {this.props.dueDate}</small></p>
              <p><small>Submitted: {this.props.submitted}</small></p>
            </div>
          </div>
        }

        {this.state.editing &&
          <div className = "todo-item-content">

            <input
              type = "text"
              placeholder = {this.props.school}
              onChange = {event => this.setState({school: event.target.value})}
            />
            <div className = "btn-holder">
              <button
                type = "button"
                className = "btn btn-success todo-button-complete"
                onClick = {() => this.updateFirebase(this.props.keyVal)}
                >
                Save
              </button>
              <button
                type = "button"
                className = "btn btn-danger todo-button-delete"
                onClick = {() => this.editMode()}
                >
                Cancel
              </button>
            </div>
            <input
              type = "text"
              placeholder = {this.props.task}
              onChange = {event => this.setState({task: event.target.value})}
            />
            <div className = "todo-content-dates">
              <p><small>
                <input
                  type = "text"
                  placeholder = {this.props.dueDate}
                  onChange = {event => this.setState({due: event.target.value})}
                />
              </small></p>
              <p><small>Submitted: {this.props.submitted}</small></p>
            </div>
          </div>
        }
      </div>
    )
  }
}

export default TodoListItem;
