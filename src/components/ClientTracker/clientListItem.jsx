import React, { Component } from 'react';
import { fbConClients } from '../../firebase.js';
import './css/client-list-item.css';

class ClientListItem extends Component {

  constructor(props){
    super(props);
    this.state = {
      editing: false
    }
  }

  remove(clientKey){
    fbConClients.child(clientKey).remove();
  }

  editMode(){
    if(!this.state.editing){
      //Consider moving this out of the component and thinking of a new way to do this.
      //This doesn't feel very "React"
      this.setState({
        editing: true,
        ClientName: this.props.client[0][0],
        ClientStatus: this.props.client[0][1],
        ClientBundle: this.props.client[0][2],
        ClientTraining: this.props.client[0][3],
        Localization: this.props.client[0][4],
        SchoolChoice: this.props.client[0][5],
        SchoolLocator: this.props.client[0][9],
        LaunchDate: this.props.client[0][6],
        DataBase: this.props.client[0][7],
        Phase: this.props.client[0][8],
        LastEmail: this.props.client[0][10]
      })
    } else {
      this.setState({
        editing: false
      })
    }
  }

  updateFirebase(clientKey){
    //Sort of works kind of.
    let clientName = this.state.ClientName;
    let clientStatus = this.state.ClientStatus;
    let clientBundle = this.state.ClientBundle;
    let clientTraining = this.state.ClientTraining;
    let localization = this.state.Localization;
    let schoolChoice = this.state.SchoolChoice;
    let launchDate = this.state.LaunchDate;
    let db = this.state.DataBase;
    let phase = this.state.Phase;
    let schoolLocator = this.state.SchoolLocator;
    let lastEmail = this.state.LastEmail;

    fbConClients.child(clientKey).set([clientName, clientStatus, clientBundle, clientTraining, localization, schoolChoice, launchDate, db, phase, schoolLocator, lastEmail])

    this.setState({
      editing: false
    })
  }

  render(){
    let priorityColor = {backgroundColor: "Green"}
    const emailDate = Date.parse(this.props.client[0][10]);
    const today = Date.parse(new Date());
    if((emailDate+259200000) <= today ){
      //Orange
      // priorityColor = "rgba(252,140,12,0.8)";
      //Yellow
      priorityColor = "rgba(252,248,12,0.5)";
    }
    if((emailDate+604800000) <= today){
      priorityColor = "rgba(255,35,35,0.8)";
      //Red
    }
    if(emailDate == today) {
      priorityColor = "#EEE";
    }
    return(
      <div>
        {!this.state.editing &&
      <div className = "form-inline list-item-body" >
        <div className = "form-group" style = {{backgroundColor: priorityColor}}>
          <table className = "client-listitem-table">
            <tr>
              <td><strong>{this.props.client[0][0]}</strong></td>
              <td>{this.props.client[0][1]}</td>
              <td>{this.props.client[0][2]}</td>
              <td>{this.props.client[0][3]}</td>
              <td>{this.props.client[0][4]}</td>
              <td>{this.props.client[0][5]}</td>
              <td>{this.props.client[0][9]}</td>
              <td>{this.props.client[0][6]}</td>
              <td>{this.props.client[0][7]}</td>
              <td>{this.props.client[0][8]}</td>
              <td>{this.props.client[0][10]}</td>
              <td>
                <button
                  type = "button"
                  className = "btn btn-success client-btn"
                  onClick = {() => this.editMode()}
                  >
                  Edit
                </button>
                <button
                  type = "button"
                  className = "btn btn-danger client-btn"
                  onClick = {() => this.remove(this.props.client[1])}
                  >
                  X
                </button>
              </td>
            </tr>
          </table>
        </div>
      </div>
    }
    {this.state.editing &&
      <div className = "form-inline list-item-body">
        <div className = "form-group" style = {{overflowX: "scroll"}}>
          <table className = "client-listitem-table">
            <tr>
              <td>
                  <input
                    placeholder = {this.props.client[0][0]}
                    size = "2"
                    type = "text"
                    className = "listitem-edit"
                    onChange = { event => this.setState({ ClientName : event.target.value })}
                  />
              </td>
              <td>
                <input
                  placeholder = {this.props.client[0][1]}
                  size = "4"
                  type = "text"
                  className = "listitem-edit"
                  onChange = { event => this.setState({ ClientStatus: event.target.value })}
                />
              </td>
              <td>
                <input
                  placeholder = {this.props.client[0][2]}
                  size = "4"
                  type = "text"
                  className = "listitem-edit"
                  onChange = { event => this.setState({ ClientBundle: event.target.value })}
                />
              </td>
              <td>
                <input
                  placeholder = {this.props.client[0][3]}
                  size = "4"
                  type = "text"
                  className = "listitem-edit"
                  onChange = { event => this.setState({ ClientTraining: event.target.value })}
                />
              </td>
              <td>
                <input
                  placeholder = {this.props.client[0][4]}
                  size = "4"
                  type = "text"
                  className = "listitem-edit"
                  onChange = { event => this.setState({ Localization: event.target.value })}
                />
              </td>
              <td>
                <input
                  placeholder = {this.props.client[0][5]}
                  size = "4"
                  type = "text"
                  className = "listitem-edit"
                  onChange = { event => this.setState({ SchoolChoice: event.target.value })}
                />
              </td>
              <td>
                <input
                  placeholder = {this.props.client[0][9]}
                  size = "4"
                  type = "text"
                  className = "listitem-edit"
                  onChange = { event => this.setState({ SchoolLocator: event.target.value })}
                />
              </td>
              <td>
                <input
                  placeholder = {this.props.client[0][6]}
                  size = "4"
                  type = "text"
                  className = "listitem-edit"
                  onChange = { event => this.setState({ LaunchDate: event.target.value })}
                />
              </td>
              <td>
                <input
                  placeholder = {this.props.client[0][7]}
                  size = "4"
                  type = "text"
                  className = "listitem-edit"
                  onChange = { event => this.setState({ DataBase: event.target.value })}
                />
              </td>
              <td>
                <input
                  placeholder = {this.props.client[0][8]}
                  size = "4"
                  type = "text"
                  className = "listitem-edit"
                  onChange = { event => this.setState({ Phase: event.target.value })}
                />
              </td>
              <td>
                <input
                  placeholder = {this.props.client[0][10]}
                  size = "4"
                  type = "text"
                  className = "listitem-edit"
                  onChange = { event => this.setState({ LastEmail: event.target.value })}
                />
              </td>
              <td>
                <button
                  type = "button"
                  className = "btn btn-success"
                  onClick = {() => this.updateFirebase(this.props.client[1])}
                  >
                  Save
                </button>
                <button
                  type = "button"
                  className = "btn btn-danger"
                  onClick = {() => this.editMode()}
                  >
                  Cancel
                </button>
              </td>
            </tr>
          </table>
        </div>
      </div>
    }
    </div>
    )
  }

}

export default ClientListItem;
