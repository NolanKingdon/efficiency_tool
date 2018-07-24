import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import App from './components/App.jsx';
import Login from './components/login/login.jsx';

ReactDOM.render(
  <Router path = "/" history = { browserHistory }>
    <Route path = "/login" component = { Login } />
    <Route path = "/app" component = { App } />
  </Router>, document.getElementById("root")
)
