import React, { Component } from 'react';
import { fbConClients } from '../../firebase.js';
import ClientListItem from './clientListItem';
import NewClientAdder from './newClient';
import "./css/client-list-item.css";

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
      addNew: false
    }
    this.toggleAdd = this.toggleAdd.bind(this);
  }

  toggleAdd(){
    console.log("Working")
    if(!this.state.addNew){
      this.setState({
        addNew: true
      })
    } else {
      this.setState({
        addNew: false
      })
    }
    console.log(this.state);
  }

  addClient(clientName, clientStatus, clientBundle, clientTraining, localization, schoolChoice, launchDate, db, phase, schoolLocator, lastEmail) {
    fbConClients.push([clientName, clientStatus, clientBundle, clientTraining, localization, schoolChoice, launchDate, db, phase, schoolLocator, lastEmail]);
  }

  render(){
    return(
        <div className = "form-inline">
          <h3>Client Tracker</h3>
          <NewClientAdder
            addClient = { this.addClient }
            toggleNew = { this.toggleAdd }
            showNew = { this.state.addNew }
          />
          <div className = "list-item-body">
            <table className = "client-listitem-table template-listitem-table">
              <tr>
                <td>Client Name</td>
                <td>Client Status</td>
                <td>Client Bundle</td>
                <td>Training</td>
                <td>Localiz</td>
                <td>School Choice</td>
                <td>School Locator</td>
                <td>Launch Date</td>
                <td>DataBase</td>
                <td>Phase</td>
                <td>Last Email</td>
                <td></td>
              </tr>
            </table>
          </div>
          <div className = "client-list-body">
            {
              this.state.clients.map((clientName, clientKey) => {
                return(
                  <ClientListItem client = {clientName} key = {clientKey} />
                )
              })
            }
          </div>
          <hr/>
        </div>
    )
  }
}

export default ClientList;
