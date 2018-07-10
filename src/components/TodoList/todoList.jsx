import React, { Component } from 'react';
import { fbConTodos } from '../../firebase';
import TodoListItem from './todoListItem';
import AddTodoItem from './addTodoItem';

class TodoList extends Component {

  componentDidMount(){
    fbConTodos.on("value", add => {
      let todos = [];
      add.forEach(task => {
        const values = task.val();
        const school = values.school;
        const dueDate = values.due;
        const submitDate = values.submitted;
        const taskDescription = values.task;
        const taskKey = task.key;

        todos.push([school, dueDate, submitDate, taskDescription, taskKey]);
        switch(this.state.sortStatus){
          case "newest":
            todos.sort((a,b) => { return Date.parse(a[1])-Date.parse(b[1]) });
            return;
          case "oldest":
            console.log("oldest");
            todos.sort((a,b) => { return Date.parse(a[1])-Date.parse(b[1]) });
            todos.reverse();
            return;
          case "alphabetical":
            todos.sort();
            return;
          case "alphabeticalR":
            todos.sort().reverse();
            return;
          default:
            todos.sort((a,b) => { return Date.parse(a[1])-Date.parse(b[1]) });
            return;
        }
      })
      this.setState({tasks: todos})
    })
  }

  componentDidUpdate(){
    let todos = this.state.tasks;
    switch(this.state.sortStatus){
      case "newest":
        todos.sort((a,b) => { return Date.parse(a[1])-Date.parse(b[1]) });
        return;
      case "oldest":
        todos.sort((a,b) => { return Date.parse(a[1])-Date.parse(b[1]) });
        todos.reverse();
        return;
      case "alphabetical":
        todos.sort();
        return;
      case "alphabeticalR":
        todos.sort().reverse();
        return;
      default:
        todos.sort((a,b) => { return Date.parse(a[1])-Date.parse(b[1]) });
        return;
    }
    this.setState({tasks: todos});
    this.forceUpdate();
}

  constructor(props){
    super(props);
    this.state = {
        tasks: [],
        sortStatus: "alphabeticalR"
      }
  }

  render(){
    return(
      <div>
        <h2>TODO List</h2>
        <AddTodoItem />
        <select
          onChange = {event => this.setState({sortStatus: event.target.value})}
          >
          <option value = "newest">Newest First</option>
          <option value = "oldest">Oldest First</option>
          <option value = "alphabetical">Alphabetically</option>
          <option value = "alphabeticalR">Reverse Alphabetically</option>
        </select>
        <div style = {{height: "70vh", overflowY: "scroll", backgroundColor: "#EEE"}}>
          {
            this.state.tasks.map((school) => {
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
