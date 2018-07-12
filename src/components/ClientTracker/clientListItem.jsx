import React, { Component } from 'react';
import { fbConClients } from '../../firebase.js';
import './css/client-list-item.css';

class ClientListItem extends Component {

  remove(clientKey){
    fbConClients.child(clientKey).remove();
  }

  render(){
    return(
      <div>
        <div
          className = "form-inline list-item-body"
        >
          <div className = "form-group">
            <input
              type = "checkbox"
              value = {this.props.client[0]}
              />
            this.props.client: {this.props.client[0]} Fix this so it inputs as two seperate items like in the client list so we can be better.
            <button
              type = "button"
              className = "btn btn-danger"
              onClick = {() => this.remove(this.props.client[1])}
            >
              X
            </button>
          </div>
        </div>
      </div>
    )
  }

}

export default ClientListItem;
