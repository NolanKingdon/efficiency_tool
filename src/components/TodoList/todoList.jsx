import React, { Component } from 'react';
import TodoListItem from './todoListItem';
import AddTodoItem from './addTodoItem';

class TodoList extends Component {

  componentDidUpdate(prevProps){
    if(this.props.sortStatus !== prevProps.sortStatus){
      this.props.taskSorter(this.props.sortStatus, this.props.tasks);
    }
  }

  render(){
    return(
      <div>
        <h2>TODO List</h2>
        <AddTodoItem />
        <select
          onChange = {event => this.props.listUpdater(event.target.value, this.props.tasks)}
        >
          <option value = "newest">Newest First</option>
          <option value = "oldest">Oldest First</option>
          <option value = "alphabetical">Alphabetically</option>
          <option value = "alphabeticalR">Reverse Alphabetically</option>
        </select>
        <div style = {{height: "70vh", overflowY: "scroll", backgroundColor: "#EEE"}}>
          {
            this.props.tasks.map((school) => {
              const schoolName = school[0],
              dueDate = school[1],
              submitted = school[2],
              task = school[3],
              keyVal = school[4];
              return (
                <TodoListItem
                  school = {schoolName}
                  dueDate = {dueDate}
                  submitted = {submitted}
                  task = {task}
                  keyVal = {keyVal}
                  />
              )
            })
          }
        </div>
    </div>
    )
  }
}

export default TodoList;
