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
            <table className = "client-listitem-table">
              <tr>
                <td><strong>{this.props.client[0][0]}</strong></td>
                <td>{this.props.client[0][1]}</td>
                <td>{this.props.client[0][2]}</td>
                <td>{this.props.client[0][3]}</td>
                <td>{this.props.client[0][4]}</td>
                <td>{this.props.client[0][5]}</td>
                <td>{this.props.client[0][6]}</td>
                <td>{this.props.client[0][7]}</td>
                <td>{this.props.client[0][8]}</td>
                <td>
                  <button
                    type = "button"
                    className = "btn btn-danger"
                    onClick = {() => this.remove(this.props.client[1])}
                    >
                    X
                  </button>
                </td>
                <td>
                  <button
                    type = "button"
                    className = "btn btn-success"
                  >
                    Edit
                  </button>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    )
  }

}

export default ClientListItem;
