import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import TaskMaster from './TodoList/TaskMaster';
import ClientMaster from './ClientTracker/clientMaster';
import TimelineGeneratorMaster from './timeline-generator/TimelineGeneratorMaster';
import Login from './login/login';
import Logout from './logout/logout';
import './css/app-styles.css';
import './css/transitions.css';

class App extends Component {
//Make a state component that has information about what needs to be displayed, then edit the below
//appropriately. That's how we'll get around using the router twice.
  render() {
    return(
      //This needs a look at -- TODO -- Not currently firing on page load.
      <CSSTransitionGroup
        transitionName="FullApp"
        transitionEnterTimeout = {400}
        transitionLeaveTimeout = {400}
      >
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
      </CSSTransitionGroup>
    )
  }
}

export default App;
