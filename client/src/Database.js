import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button'; 
import logo from './logo.svg';
import './App.css';
import Table from "./Table";
import Form from "./Form";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Appbar from "./Navbar"

const styles = {
  fabStyle:{
    verticalAlign: 'middle',
    position: 'relative'
  }, 
  cardHeaderStyle:{
    background: '#42a4f4'
  },
  divStyle:{
    margin: '4% 0% 0% 14%'
  }
};

class Database extends Component {
  state = {
    data: [],
    open: false,
  }
  
  componentDidMount(){
    this.getMembers();
  }

  componentDidUpdate(prevProps ,prevState){
    if (prevState.open !== this.state.open){
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
      <div>
        <Appbar>
          </Appbar>
        </div>

        <div className="App" style={styles.divStyle}>
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

export default Database;
