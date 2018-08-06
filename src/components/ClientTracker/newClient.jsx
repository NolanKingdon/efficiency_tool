
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
          className = "btn btn-warning"
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
              <select
                className = "form-control"
                onChange = { event => this.setState({ ClientStatus : event.target.value})}
              >
                <option>Good</option>
                <option>Neutral</option>
                <option>Bad</option>
                <option>Escalated</option>
              </select>

            </div>
            <div>
              Client Bundle:
              <select
                className = "form-control"
                onChange = { event => this.setState({ ClientBundle : event.target.value})}
              >
                <option>Reg Signature</option>
                <option>Charter Bundle</option>
                <option>Pub Choice</option>
                <option>Private Enroll</option>
              </select>
              </div>
            <div>
              Client Training:
              <select
                className = "form-control"
                onChange = { event => this.setState({ ClientTraining : event.target.value})}
              >
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>
            <div>
              Localization:
              <select
                className = "form-control"
                onChange = { event => this.setState({ Localization : event.target.value})}
              >
                <option>No</option>
                <option>Yes</option>
              </select>
            </div>
            <div>
              School Choice:
              <select
                className = "form-control"
                onChange = { event => this.setState({ SchoolChoice : event.target.value})}
                >
                <option>No</option>
                <option>Yes</option>
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
              School Locator:
              <select
                className = "form-control"
                onChange = { event => this.setState({ SchoolLocator : event.target.value})}
              >
                <option>No</option>
                <option>Yes</option>
              </select>
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
              <select
                className = "form-control"
                onChange = { event => this.setState({ Phase : event.target.value})}
              >
                <option>Pre-Planning</option>
                <option>Kickoff</option>
                <option>No SOW</option>
                <option>Revisions</option>
                <option>Readiness</option>
                <option>Launch</option>
                <option>Delivery</option>
                <option>Closed</option>
              </select>
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
