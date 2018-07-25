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
        ClientName: this.props.client[0]["Name"],
        ClientStatus: this.props.client[0]["Status"],
        ClientBundle: this.props.client[0]["Bundle"],
        ClientTraining: this.props.client[0]["Training"],
        Localization: this.props.client[0]["Localization"],
        SchoolChoice: this.props.client[0]["Choice"],
        SchoolLocator: this.props.client[0]["Locator"],
        LaunchDate: this.props.client[0]["Launch"],
        DataBase: this.props.client[0]["DataBase"],
        Phase: this.props.client[0]["Phase"],
        LastEmail: this.props.client[0]["LastEmail"]
      })
    } else {
      this.setState({
        editing: false
      })
    }
  }

  updateFirebase(clientKey){
    //Sort of works kind of.
    let Name = this.state.ClientName;
    let Status = this.state.ClientStatus;
    let Bundle = this.state.ClientBundle;
    let Training = this.state.ClientTraining;
    let Localization = this.state.Localization;
    let Choice = this.state.SchoolChoice;
    let Launch = this.state.LaunchDate;
    let DataBase = this.state.DataBase;
    let Phase = this.state.Phase;
    let Locator = this.state.SchoolLocator;
    let LastMail = this.state.LastEmail;

    fbConClients.child(clientKey).set({
      Name,
      Status,
      Bundle,
      Training,
      Localization,
      Choice,
      Launch,
      DataBase,
      Phase,
      Locator,
      LastMail
    })

    this.setState({
      editing: false
    })
  }

  render(){

    let priorityColor = {backgroundColor: "Green"}
    const emailDate = Date.parse(this.props.client[0]["LastMail"]);
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
              <td><strong>{this.props.client[0]["Name"]}</strong></td>
              <td>{this.props.client[0]["Status"]}</td>
              <td>{this.props.client[0]["Bundle"]}</td>
              <td>{this.props.client[0]["Training"]}</td>
              <td>{this.props.client[0]["Localization"]}</td>
              <td>{this.props.client[0]["Choice"]}</td>
              <td>{this.props.client[0]["Locator"]}</td>
              <td>{this.props.client[0]["Launch"]}</td>
              <td>{this.props.client[0]["DataBase"]}</td>
              <td>{this.props.client[0]["Phase"]}</td>
              <td>{this.props.client[0]["LastMail"]}</td>
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
                    placeholder = {this.props.client[0]["Name"]}
                    size = "2"
                    type = "text"
                    className = "listitem-edit"
                    onChange = { event => this.setState({ ClientName : event.target.value })}
                  />
              </td>
              <td>
                <input
                  placeholder = {this.props.client[0]["Status"]}
                  size = "4"
                  type = "text"
                  className = "listitem-edit"
                  onChange = { event => this.setState({ ClientStatus: event.target.value })}
                />
              </td>
              <td>
                <input
                  placeholder = {this.props.client[0]["Bundle"]}
                  size = "4"
                  type = "text"
                  className = "listitem-edit"
                  onChange = { event => this.setState({ ClientBundle: event.target.value })}
                />
              </td>
              <td>
                <input
                  placeholder = {this.props.client[0]["Training"]}
                  size = "4"
                  type = "text"
                  className = "listitem-edit"
                  onChange = { event => this.setState({ ClientTraining: event.target.value })}
                />
              </td>
              <td>
                <input
                  placeholder = {this.props.client[0]["Localization"]}
                  size = "4"
                  type = "text"
                  className = "listitem-edit"
                  onChange = { event => this.setState({ Localization: event.target.value })}
                />
              </td>
              <td>
                <input
                  placeholder = {this.props.client[0]["Choice"]}
                  size = "4"
                  type = "text"
                  className = "listitem-edit"
                  onChange = { event => this.setState({ SchoolChoice: event.target.value })}
                />
              </td>
              <td>
                <input
                  placeholder = {this.props.client[0]["Localization"]}
                  size = "4"
                  type = "text"
                  className = "listitem-edit"
                  onChange = { event => this.setState({ SchoolLocator: event.target.value })}
                />
              </td>
              <td>
                <input
                  placeholder = {this.props.client[0]["Launch"]}
                  size = "4"
                  type = "text"
                  className = "listitem-edit"
                  onChange = { event => this.setState({ LaunchDate: event.target.value })}
                />
              </td>
              <td>
                <input
                  placeholder = {this.props.client[0]["DataBase"]}
                  size = "4"
                  type = "text"
                  className = "listitem-edit"
                  onChange = { event => this.setState({ DataBase: event.target.value })}
                />
              </td>
              <td>
                <input
                  placeholder = {this.props.client[0]["Phase"]}
                  size = "4"
                  type = "text"
                  className = "listitem-edit"
                  onChange = { event => this.setState({ Phase: event.target.value })}
                />
              </td>
              <td>
                <input
                  placeholder = {this.props.client[0]["LastMail"]}
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
