import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Card from 'material-ui/Card/';
import CardText from 'material-ui/Card/CardText';
import CardHeader from "./components/Card/CardHeader.jsx";
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button'; 
import logo from './logo.svg';
import './App.css';
import Table from "./Table";
import Form from "./Form";
import Popup from "reactjs-popup";

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const styles = {
  fabStyle:{
    verticalAlign: 'middle',
    position: 'relative'
  }
};

class App extends Component {
  state = {
    data: [],
    open: false
  }
  
  componentDidMount(){
    this.getMembers();
  }

  componentDidUpdate(prevState){
    if (prevState.state !== this.state){
      this.getMembers();
    }
  }

  getMembers = _ => {
    fetch('http://localhost:3001/members')
    .then(response =>response.json())
    .then(response => this.setState({ data: response.data }))
    .catch(err =>console.error(err))
  }

  handleClickOpen = () => {
    this.setState({open:true});
  }

  handleClose = () => {
    this.setState({open:false});
  }

  sendStatetoForm = (openState) => {
    this.setState({open: openState})
  }

  render() {
    const {classes} = this.props;
    return (
      <MuiThemeProvider>
        <div className="App">
          <h1>CGCD Database</h1>
          <Card>
          <CardHeader color="info">
            <h4 >Church Members</h4>
            <p >
              This table contains a list of all members within CGCD.
            </p>
          </CardHeader>
          <CardText>
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
              name: "Consents",
              prop: "Consents"
            }

          ]}
          />
          </CardText>
          </Card>
          <br/>

          <Button variant="fab" color ="primary" aria-label="Add" style={styles.fabStyle} onClick={this.handleClickOpen}>
          <AddIcon/>
          </Button>
          <Dialog
            open= {this.state.open}
            onClose = {this.handleClose}
            aria-labelledby = "form-dialog-title"
          >
          <DialogTitle id ="form-dialog-title">Insert Member Information</DialogTitle>
          <DialogContent>
            <Form callbackFromParent={this.sendStatetoForm}/>
          </DialogContent>
          </Dialog>

      
            
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
