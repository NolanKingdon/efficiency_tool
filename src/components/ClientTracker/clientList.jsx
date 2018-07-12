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
      newClients: "",
      currentlySelected: []
    }
  }
  checkBoxValueHandler = (boxValue) => {
//    let currentSelected = [];
    // Maybe ditch the whole checkbox idea?

    // if(boxValue.checked){
    //   this.state.currentlySelected.forEach( item => {
    //     currentSelected.push(boxValue.value);
    //   })
    //   console.log("post-add", currentSelected);
    // } else if(!boxValue.checked){
    //     currentSelected = this.state.currentlySelected;
    //
    //   console.log("Post-pop: ", currentSelected)
    // }
    // this.setState({ currentlySelected: currentSelected })
  }

  addClient() {
    let clientInfo = this.state.newClients;
    fbConClients.push(clientInfo);
  }

  render(){
    return(
        <div className = "form-inline">
          <div className = "form-group">
            <input
              type = "text"
              placeholder = "Client Name"
              className = "form-control"
              onChange = { event => this.setState({ newClients : event.target.value})}
            />
        <button
          className = "btn btn-info"
          type = "button"
          onClick = { () => {this.addClient()} }
        >
            Add New Client
        </button>

        {this.state.clients}

        {
          this.state.clients.map((clientName, clientKey) => {
            return(
              <ClientListItem valueHandler = {this.checkBoxValueHandler} client = {clientName} key = {clientKey} />
            )
          })
        }
          </div>
        </div>
    )
  }
}

export default ClientList;
