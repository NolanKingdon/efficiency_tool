import React, { Component } from 'react';
import { fbConTodos } from '../../firebase.js';
import TodoList from './todoList';

class TaskMaster extends Component {

  constructor(props){
    super(props);
    this.state = {
      tasks: [],
      newTasks: [],
      sortStatus: "newest",
      sortDate: "all"
    }
    this.listStateUpdater = this.listStateUpdater.bind(this);
    this.taskSorter = this.taskSorter.bind(this);
    this.dateOrganizer = this.dateOrganizer.bind(this);
    this.rangeUpdater = this.rangeUpdater.bind(this);
  }

//When component mounts, we pull from firebase.
  componentDidMount(){
    fbConTodos.on("value", add => {
      let todos = [];
      let sortStatus = this.state.sortStatus;
      let sortDate = this.state.sortDate;
      add.forEach(task => {

        const values = task.val();
        const school = values.school;
        const dueDate = values.due;
        const submitDate = values.submitted;
        const taskDescription = values.task;
        const taskKey = task.key;

        todos.push([school, dueDate, submitDate, taskDescription, taskKey]);

      })
      this.setState({tasks: todos});
      this.taskSorter(sortStatus, todos, sortDate);
    })
  }
//Updating state from Child
  listStateUpdater(newStatus) {
    this.setState({sortStatus: newStatus});
  }

  rangeUpdater(newSort){
    this.setState({sortDate: newSort});
  }

  dateOrganizer(sortDate, todos){
    const today = Date.parse(new Date());
    if(sortDate === "today"){
      todos = todos.filter(task => Date.parse(task[1]) <= today);
      console.log(todos);
    } else if(sortDate === "three"){
      todos = todos.filter(task => Date.parse(task[1]) <= (today + 259200000));
      console.log("It is Three");
    } else if(sortDate === "week"){
      todos = todos.filter(task => Date.parse(task[1]) <= (today + 604800000));
    } else {
      console.log("It is probably All");
    }
    this.setState({
      newTasks: todos
    })
  }

  taskSorter(sortStatus, todos, sortDate){
    if(sortStatus === 'newest'){
      todos.sort((a,b) => { return Date.parse(a[1])-Date.parse(b[1]) });
    } else if (sortStatus === 'oldest'){
      todos.sort((a,b) => { return Date.parse(a[1])-Date.parse(b[1]) });
      todos.reverse();
    } else if (sortStatus === "alphabetical"){
      //Specify which you want to sort by - Right now it doesn't really work.
      todos.sort((a,b) => { return a[0]>b[0]});
    } else if (sortStatus === "alphabeticalR"){
      todos.sort((a,b) => { return a[0]>b[0]});
      todos.reverse();
    } else {
      todos.sort((a,b) => { return Date.parse(a[1])-Date.parse(b[1]) });
    }
    this.setState({newTasks: todos})
    this.dateOrganizer(sortDate, todos);
  }

  render() {
    return(
      <div>
        <TodoList
          tasks = { this.state.tasks }
          newTasks = { this.state.newTasks }
          sortStatus = { this.state.sortStatus }
          listUpdater = { this.listStateUpdater }
          rangeUpdater = { this.rangeUpdater }
          taskSorter = { this.taskSorter }
          sortDate = {this.state.sortDate}
        />
        <hr/>
      </div>
    )
  }
}

export default TaskMaster;
