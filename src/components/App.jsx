import React, { Component } from 'react';
import TaskMaster from './TodoList/TaskMaster';
import ClientMaster from './ClientTracker/clientMaster';
import TimelineGeneratorMaster from './timeline-generator/TimelineGeneratorMaster';
import Login from './login/login';
import Logout from './logout/logout'
import './css/app-styles.css'

class App extends Component {
//Make a state component that has information about what needs to be displayed, then edit the below
//appropriately. That's how we'll get around using the router twice.
  render() {
    return(
        <div>
          <h1 style = {{textAlign: "center"}}>Efficiency Tool</h1>
          <div className = "logout-widget">
            <Logout />
          </div>
          <div className = "grid-wrapper">

            <ClientMaster />
            <TaskMaster />
            <TimelineGeneratorMaster />
          </div>
        </div>
    )
  }
}

export default App;
