import React, { Component } from 'react';
import { fbConClients } from '../../firebase.js';

class ClientListItem extends Component {

  remove(clientKey){
    fbConClients.child(clientKey).remove();
  }

  render(){
    return(
      <div>
        <div
          className = "form-inline"
          style = {{display: "inline-block",
                    backgroundColor: "#CCC",
                    width: "auto",
                    height: "auto",
                    borderRadius: "15px",
                    margin: 5}}
                    >
          <div className = "form-group" style = {{position: "relative", top: "7px"}}>
            <input
              type = "checkbox"
              value = {this.props.client[0]}
              onChange = {this.props.valueHandler(this.target)}
              />
            {this.props.client[0]}
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
