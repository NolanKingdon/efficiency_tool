import React, { Component } from 'react';
import { fbConTodos } from '../../firebase.js';
import TodoList from './todoList';

class TaskMaster extends Component {

  constructor(props){
    super(props);
    this.state = {
      tasks: [],
      sortStatus: "newest"
    }
    this.listStateUpdater = this.listStateUpdater.bind(this);
    this.taskSorter = this.taskSorter.bind(this);
  }

//When component mounts, we pull from firebase.
  componentDidMount(){
    fbConTodos.on("value", add => {
      let todos = [];
      let sortStatus = this.state.sortStatus;
      add.forEach(task => {

        const values = task.val();
        const school = values.school;
        const dueDate = values.due;
        const submitDate = values.submitted;
        const taskDescription = values.task;
        const taskKey = task.key;

        todos.push([school, dueDate, submitDate, taskDescription, taskKey]);

      })
      this.taskSorter(sortStatus, todos);
      //State is set with current firebase
      //this.setState({tasks: todos})
    })
  }
//Updating state from Child
  listStateUpdater(newStatus, newList) {
    this.setState({sortStatus: newStatus});
  }

  taskSorter(sortStatus, todos){
    if(sortStatus === 'newest'){
      todos.sort((a,b) => { return Date.parse(a[1])-Date.parse(b[1]) });
    } else if (sortStatus === 'oldest'){
      todos.sort((a,b) => { return Date.parse(a[1])-Date.parse(b[1]) });
      todos.reverse();
    } else if (sortStatus === "alphabetical"){
      //Specify which you want to sort by - Right now it doesn't really work.
      todos.sort();
    } else if (sortStatus === "alphabeticalR"){
      todos.sort();
      todos.reverse();
    } else {
      todos.sort((a,b) => { return Date.parse(a[1])-Date.parse(b[1]) });
    }
    this.setState({tasks: todos})
  }

  render() {
    return(
      <div>
        <TodoList
          tasks = { this.state.tasks }
          sortStatus = { this.state.sortStatus }
          listUpdater = { this.listStateUpdater }
          taskSorter = { this.taskSorter }
        />
        <hr/>
      </div>
    )
  }
}

export default TaskMaster;
