import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import logo from './logo.svg';
import './App.css';

import Table from "./Table"
// Needed for onTouchTap
injectTapEventPlugin();

class App extends Component {
  state = {
    data: [],
  }
  
  componentDidMount(){
    this.getMembers();
  }

  getMembers = _ => {
    fetch('http://localhost:3001/members')
    .then(response =>response.json())
    .then(response => this.setState({ data: response.data }))
    .catch(err =>console.error(err))
  }

  // renderMember = ({id,FirstName,Surname}) => <div key={id}>{FirstName} {Surname}</div>

  render() {
    // const {data} = this.state;
    return (
      <MuiThemeProvider>
        <div className="App">
          <h1>Church Members</h1>
  
        <Table
          data={this.state.data}
          header={[
            {
              name: "First Name",
              prop: "FirstName"
            },
            {
              name: "Surname",
              prop: "Surname"
            },
            {
              name: "Sex",
              prop: "Sex"
            },
            {
              name: "Contact Number",
              prop: "ContactNumber"
            },
            {
              name: "Address",
              prop: "Address"
            },
            {
              name: "DOB",
              prop: "DOB"
            },
            {
              name: "Role Code",
              prop: "RoleCode"
            },
            {
              name: "LoCode",
              prop: "LoCode"
            },
            {
              name: "Cell Group ID",
              prop: "CellGroupID"
            },
            {
              name: "Ministry ID",
              prop: "MinistryID"
            },
            {
              name: "Consensts",
              prop: "Consents"
            }




          ]}
          
          />
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
