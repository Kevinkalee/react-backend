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
    table_num: 0
  }
  
  componentDidMount(){
    this.getMembers();
  }

  componentDidUpdate(prevProps ,prevState){
    if (prevState.open !== this.state.open || prevState.table_num !== this.state.table_num){
      switch(this.state.table_num){
        case 0:
          this.getMembers();
          break;
        case 1:
          this.getNonMembers();
          break;
        case 2:
          this.getChineseSchool();
          break;
        case 3:
          this.getCellGroup();
          break;
        default:
          this.getMembers();
      }
    }
  }

  getMembers = _ => {
    fetch('http://localhost:3001/Members')
    .then(response =>response.json())
    .then(response => this.setState({ data: response.data }))
    .catch(err =>console.error(err))
  }

  getNonMembers = _ => {
    fetch('http://localhost:3001/Nonmembers')
    .then(response =>response.json())
    .then(response => this.setState({ data: response.data }))
    .catch(err =>console.error(err))
  }

  getChineseSchool = _ => {
    fetch('http://localhost:3001/ChineseSchool')
    .then(response =>response.json())
    .then(response => this.setState({ data: response.data }))
    .catch(err =>console.error(err))
  }

  getCellGroup = _ => {
    fetch('http://localhost:3001/CellGroup')
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
  
  sendStatetoNavbar = (table_state) => {
    this.setState({table_num: table_state})
  }

  render() {
    const {classes} = this.props;
    return (
      <MuiThemeProvider>
      <div>
        <Appbar callbackFromParent={this.sendStatetoNavbar}>
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
