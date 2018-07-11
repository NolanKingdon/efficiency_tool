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
    this.statusUpdater = this.statusUpdater.bind(this);
    this.tasksUpdater = this.tasksUpdater.bind(this);
  }

//When component mounts, we pull from firebase.
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
      })
      //State is set with current firebase
      this.setState({tasks: todos})
    })
  }
//Updating state from Child
  statusUpdater(newStatus) {
    console.log("Status Updater firing: ", newStatus);
    this.setState({sortStatus: newStatus});
  }
//Updating state from child
  tasksUpdater(newTasks){
    console.log("Task Updater firing: ", newTasks);
    this.setState({tasks: newTasks})
  }

  render() {
    return(
      <div>
        <TodoList
          tasks = { this.state.tasks }
          sortStatus = { this.state.sortStatus }
          statusUpdater = { this.statusUpdater }
          tasksUpdater = { this.tasksUpdater }
        />
        <hr/>
      </div>
    )
  }
}

export default TaskMaster;
