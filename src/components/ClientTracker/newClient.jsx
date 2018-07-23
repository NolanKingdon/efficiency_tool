
//TODO - Clean this mess up

import React, { Component } from 'react';
import './css/newClient.css';

class NewClientAdder extends Component {

  constructor(props){
    super(props);
    //I am not proud of this state object.
    this.state = {
      ClientName: "",
      ClientStatus: "",
      ClientBundle: "",
      ClientTraining: "",
      Localization: "",
      SchoolChoice: "",
      SchoolLocator: "",
      LaunchDate: "",
      DataBase: "",
      Phase: "",
      LastEmail: ""
    }
  }

  //There's some pretty bad react below. You've been warned.
  render(){
    return(
      <div>
        <button
          type = "button"
          class = "btn btn-warning"
          onClick = { () => {this.props.toggleNew()} }
        >
        Show/Hide Client Adder {this.props.showNew}
        </button>
        { this.props.showNew &&
          <div className = "client-adder">
            <div>
              Client Name:
              <input
                type = "text"
                placeholder = "Client Name"
                className = "form-control"
                onChange = { event => this.setState({ ClientName : event.target.value})}
                />
            </div>
            <div>
              Client Status:
              <input
                type = "text"
                placeholder = "Client Status"
                className = "form-control"
                onChange = { event => this.setState({ ClientStatus : event.target.value})}
                />
            </div>
            <div>
              Client Bundle:
              <input
                type = "text"
                placeholder = "Client Bundle"
                className = "form-control"
                onChange = { event => this.setState({ ClientBundle : event.target.value})}
                />
            </div>
            <div>
              Client Training:
              <input
                type = "text"
                placeholder = "Client Training"
                className = "form-control"
                onChange = { event => this.setState({ ClientTraining : event.target.value})}
                />
            </div>
            <div>
              Localization:
              <input
                type = "text"
                placeholder = "Localization"
                className = "form-control"
                onChange = { event => this.setState({ Localization : event.target.value})}
                />
            </div>
            <div>
              School Choice:
              <select
                className = "form-control"
                onChange = { event => this.setState({ SchoolChoice : event.target.value})}
                >
                <option>Yes</option>
                <option>No</option>
              </select>

            </div>
            <div>
              Est. Launch:
              <input
                type = "date"
                placeholder = "Launch Date"
                className = "form-control"
                onChange = { event => this.setState({ LaunchDate : event.target.value})}
                />
            </div>
            <div>
              DataBase:
              <input
                type = "text"
                placeholder = "DataBase"
                className = "form-control"
                onChange = { event => this.setState({ DataBase : event.target.value})}
                />
            </div>
            <div>
              Phase:
              <input
                type = "text"
                placeholder = "Phase"
                className = "form-control"
                onChange = { event => this.setState({ Phase : event.target.value})}
                />
            </div>
            <div>
              School Locator:
              <input
                type = "text"
                placeholder = "School Locator"
                className = "form-control"
                onChange = { event => this.setState({ SchoolLocator : event.target.value})}
                />
            </div>
            <div>
              Last Email:
              <input
                type = "Date"
                placeholder = "Last Email"
                className = "form-control"
                onChange = { event => this.setState({ LastEmail : event.target.value})}
                />
            </div>
            <button
              className = "btn btn-info"
              type = "button"
              onClick = { () => {this.props.addClient(
                this.state.ClientName,
                this.state.ClientStatus,
                this.state.ClientBundle,
                this.state.ClientTraining,
                this.state.Localization,
                this.state.SchoolChoice,
                this.state.SchoolLocator,
                this.state.LaunchDate,
                this.state.DataBase,
                this.state.Phase,
                this.state.LastEmail
              )} }
              >
              Add New Client
            </button>
          </div>
        }
      </div>
    )
  }
}

export default NewClientAdder;
