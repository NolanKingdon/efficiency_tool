import React, { Component } from 'react';
import "./css/styles.css";
import { browserHistory } from 'react-router';
//Only need fbCon from firebase, so only pull that.
import * as firebase from 'firebase';

class Login extends Component {

  constructor(props){
    super(props);
    this.state = {
      email: "",
      password: ""
    }
  }

  componentDidMount(){
    firebase.auth().onAuthStateChanged(user => {
      if(user) {
        //Save this then restructure the firebase to be person specific
        console.log(user.uid);
        browserHistory.push("/app");
      } else {

      }
    })
  }

  submit(){
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).catch(function(error){
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    })
  }

  render(){
    return(
      <div className = "login">
        <h1>Efficiency Tool login</h1>
        <input
          type = "text"
          className = "login-input"
          id = "login-userName"
          placeholder = "Username"
          onChange = { event => this.setState({ email: event.target.value})}
        />
        <input
          type = "password"
          className = "login-input"
          id = "login-pass"
          placeholder = "Password"
          onChange = { event => this.setState({password: event.target.value})}
        />
      <button
        type="button"
        className = "btn btn-success"
        onClick = {() => this.submit()}
      >
        login
      </button>
      </div>

    )
  }

}

export default Login;
