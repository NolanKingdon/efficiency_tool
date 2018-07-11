import React, { Component } from 'react';
import TodoListItem from './todoListItem';
import AddTodoItem from './addTodoItem';

class TodoList extends Component {

  constructor(props){
    super(props);
    this.state = {
      sortStatus: ""
    }

  }
//When the component mounts, we apply a sort to see how we want to present it
  componentDidMount(){
    console.log("Props Tasks: ", this.props.tasks);
    let todos = this.props.tasks;
    let sortStatus = this.props.sortStatus;

    if(sortStatus === 'newest'){
      todos.sort((a,b) => { return Date.parse(a[1])-Date.parse(b[1]) });
    } else if (sortStatus === 'oldest'){
      todos.sort((a,b) => { return Date.parse(a[1])-Date.parse(b[1]) });
      todos.reverse();
    } else if (sortStatus === "alphabetical"){
      todos.sort();
    } else if (sortStatus === "alphabeticalR"){
      todos.sort();
      todos.reverse();
    } else {
      todos.sort((a,b) => { return Date.parse(a[1])-Date.parse(b[1]) });
    }
    this.props.tasksUpdater(todos);
  }

  render(){
    return(
      <div>
        <h2>TODO List</h2>
        <AddTodoItem />
        <select>
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
