import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import TodoListItem from './todoListItem';
import AddTodoItem from './addTodoItem';
import './css/TodoListStyles.css';

class TodoList extends Component {

  componentDidUpdate(prevProps){
    if(this.props.sortStatus !== prevProps.sortStatus){
      this.props.taskSorter(this.props.sortStatus, this.props.tasks, this.props.sortDate);
    }
    if(this.props.sortDate !== prevProps.sortDate){
      this.props.taskSorter(this.props.sortStatus, this.props.tasks, this.props.sortDate);
    }
  }

  render(){
    return(
      <div>
        <h2>TODO List</h2>
        <AddTodoItem />
        <select
          className = "todo-list-sortbar"
          onChange = {event => this.props.listUpdater(event.target.value)}
        >
          <option value = "newest">Newest First</option>
          <option value = "oldest">Oldest First</option>
          <option value = "alphabetical">Alphabetically</option>
          <option value = "alphabeticalR">Reverse Alphabetically</option>
        </select>
        <select
          className = "todo-list-sortbar"
          onChange = {event => this.props.rangeUpdater(event.target.value)}
        >
          <option value = "all">All</option>
          <option value = "today">Today</option>
          <option value = "three">Next Three Days</option>
          <option value = "week">Next Week</option>
        </select>
        <div className = "todo-list-body">
          <CSSTransitionGroup
            transitionName="ListItem"
            transitionEnterTimeout = {500}
            transitionLeaveTimeout = {300}
          >
            {
              this.props.newTasks.map((school) => {
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
                    key = {keyVal}
                  />
                )
              })
            }
          </CSSTransitionGroup>
        </div>
    </div>
    )
  }
}

export default TodoList;
