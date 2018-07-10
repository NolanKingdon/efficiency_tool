import React, { Component } from 'react';
import {fbCon, fbConTodos, fbConClients} from '../../firebase.js';
import TodoList from './todoList';

class TaskMaster extends Component {

  render() {
    return(
      <div>
        <TodoList />
        <hr/>
      </div>
    )
  }
}

export default TaskMaster;
