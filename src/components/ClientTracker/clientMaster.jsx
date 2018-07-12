import React, { Component } from 'react';
import { fbConClients } from '../../firebase.js';
import ClientListItem from './clientListItem';
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
      ClientName: "",
      ClientStatus: "",
      ClientBundle: "",
      ClientTraining: "",
      Localization: "",
      SchoolChoice: "",
      SchoolLocator: "",
      LaunchDate: "",
      DataBase: "",
      Phase: ""
    }
  }

  addClient() {
    let clientName = this.state.ClientName;
    let clientStatus = this.state.ClientStatus;
    let clientBundle = this.state.ClientBundle;
    let clientTraining = this.state.ClientTraining;
    let localization = this.state.Localization;
    let schoolChoice = this.state.SchoolChoice;
    let launchDate = this.state.LaunchDate;
    let db = this.state.DataBase;
    let phase = this.state.DataBase;
    fbConClients.push([clientName, clientStatus, clientBundle, clientTraining, localization, schoolChoice, launchDate, db, phase]);
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
            <input
              type = "text"
              placeholder = "Client Bundle"
              className = "form-control"
              onChange = { event => this.setState({ ClientBundle : event.target.value})}
            />
            <input
              type = "text"
              placeholder = "Client Training"
              className = "form-control"
              onChange = { event => this.setState({ ClientTraining : event.target.value})}
            />
            <input
              type = "text"
              placeholder = "Client Localization"
              className = "form-control"
              onChange = { event => this.setState({ Localization : event.target.value})}
            />
            <input
              type = "text"
              placeholder = "School Choice"
              className = "form-control"
              onChange = { event => this.setState({ SchoolChoice : event.target.value})}
            />
            <input
              type = "date"
              placeholder = "Launch Date"
              className = "form-control"
              onChange = { event => this.setState({ LaunchDate : event.target.value})}
            />
            <input
              type = "text"
              placeholder = "DataBase"
              className = "form-control"
              onChange = { event => this.setState({ DataBase : event.target.value})}
            />
            <input
              type = "text"
              placeholder = "Phase"
              className = "form-control"
              onChange = { event => this.setState({ Phase : event.target.value})}
            />
            <input
              type = "text"
              placeholder = "School Choice"
              className = "form-control"
              onChange = { event => this.setState({ SchoolChoice : event.target.value})}
            />

          <button
            className = "btn btn-info"
            type = "button"
            onClick = { () => {this.addClient()} }
          >
              Add New Client
          </button>
          <div className = "list-item-body">
            <table className = "client-listitem-table">
              <tr>
                <td>Client Name</td>
                <td>Client Status</td>
                <td>Client Bundle</td>
                <td>Training</td>
                <td>Localiz</td>
                <td>School Choice</td>
                <td>Launch Date</td>
                <td>DataBase</td>
                <td>Phase</td>
                <td></td>
                <td></td>
              </tr>
            </table>
          </div>
        {
          this.state.clients.map((clientName, clientKey) => {
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
