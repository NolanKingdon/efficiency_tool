import React, { Component } from 'react';
import * as firebase from 'firebase';
import { browserHistory } from 'react-router';

class Logout extends Component {

  logout(){
    firebase.auth().signOut().then(() => {
      browserHistory.push("/");
    }).catch(function(error){
      alert(error)
    })
  }

  render(){
    return(
      <div>
        <button
          className = "btn btn-danger"
          onClick = {() => this.logout()}
        >
        Logout
      </button>
      </div>

    )
  }
}

export default Logout;
