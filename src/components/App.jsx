import React, { Component } from 'react';
import TaskMaster from './TodoList/TaskMaster';
import ClientList from './ClientTracker/clientList';

class App extends Component {

  render() {
    return(
        <div>
          <h1>Efficiency Tool</h1>
          <ClientList />
          <TaskMaster />
        </div>
    )
  }
}

export default App;
