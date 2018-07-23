import React, { Component } from 'react';
import TaskMaster from './TodoList/TaskMaster';
import ClientMaster from './ClientTracker/clientMaster';
import TimelineGeneratorMaster from './timeline-generator/TimelineGeneratorMaster';
import './css/app-styles.css'

class App extends Component {

  render() {
    return(
        <div>
          <h1 style = {{textAlign: "center"}}>Efficiency Tool</h1>
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
