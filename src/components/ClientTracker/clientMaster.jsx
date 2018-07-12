import React, { Component } from 'react';
import { fbConClients } from '../../firebase.js';
import ClientListItem from './clientListItem';

class ClientList extends Component {

  componentDidMount(){
    fbConClients.on("value", add => {
      let clientList = [];
      add.forEach(client => {
        const clientItem = client.val();
        const clientKey = client.key;
        clientList.push([clientItem, clientKey]);
      })
      this.setState({
        clients: clientList
      })
    })
  }

  constructor(props){
    super(props);
    this.state = {
      clients: [],
      ClientName: "",
      ClientStatus: ""
    }
  }

  addClient() {
    let clientName = this.state.ClientName;
    let clientStatus = this.state.ClientStatus;
    fbConClients.push([clientName, clientStatus]);
  }

  render(){
    return(
        <div className = "form-inline">
          <h3>Client Tracker</h3>
          <div className = "form-group">
            <input
              type = "text"
              placeholder = "Client Name"
              className = "form-control"
              onChange = { event => this.setState({ ClientName : event.target.value})}
            />
            <input
              type = "text"
              placeholder = "Client Status"
              className = "form-control"
              onChange = { event => this.setState({ ClientStatus : event.target.value})}
            />
        <button
          className = "btn btn-info"
          type = "button"
          onClick = { () => {this.addClient()} }
        >
            Add New Client
        </button>

        {
          this.state.clients.map((clientName, clientStatus, clientKey) => {
            return(
              <ClientListItem client = {clientName} key = {clientKey} />
            )
          })
        }
          </div>
        </div>
    )
  }
}

export default ClientList;
