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
    table_num: 0,
    header: [
      { name: "First Name",     prop: "FirstName"},
      { name: "Surname",        prop: "Surname"},
      { name: "Sex",            prop: "Sex"},
      { name: "Contact Number", prop: "ContactNumber"},
      { name: "Address",        prop: "Address"},
      { name: "DOB",            prop: "DOB"},
      { name: "Role Code",      prop: "RoleCode"},
      { name: "LoCode",         prop: "LoCode"},
      { name: "Cell Group ID",  prop: "CellGroupID"},
      { name: "Ministry ID",    prop: "MinistryID"},
      { name: "Consents",       prop: "Consents"}
    ],
    editIdx: -1
  }
  handleRemove = i => {
    this.setState(state => ({
      data: state.data.filter((row, j) => j !== i)
    }));
  };

  startEditing = i => {
    this.setState({ editIdx: i}); 
  };

  stopEditing = () => {
    this.setState({ editIdx: -1 });
  };

  handleChange = (e, name, i) => {
    const { value } = e.target;
    this.setState(state => ({
      data: state.data.map(
        (row, j) => (j === i ? { ...row, [name]: value } : row)
      )
    }));
  };
  componentDidMount(){
    this.getMembers();
  }

  componentDidUpdate(prevProps ,prevState){
    if (prevState.open !== this.state.open || prevState.table_num !== this.state.table_num){
      this.setHeader(this.state.table_num)
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

  setHeader = (table_num) => {
    var header_type
    if (table_num == 0){
      header_type = [
      { name: "First Name",     prop: "FirstName"},
      { name: "Surname",        prop: "Surname"},
      { name: "Sex",            prop: "Sex"},
      { name: "Contact Number", prop: "ContactNumber"},
      { name: "Address",        prop: "Address"},
      { name: "DOB",            prop: "DOB"},
      { name: "Role Code",      prop: "RoleCode"},
      { name: "LoCode",         prop: "LoCode"},
      { name: "Cell Group ID",  prop: "CellGroupID"},
      { name: "Ministry ID",    prop: "MinistryID"},
      { name: "Consents",       prop: "Consents"}
      ]
    } 
    else if (table_num == 1){
      header_type = [
        { name: "First Name",     prop: "FirstName"},
        { name: "Surname",        prop: "Surname"},
        { name: "Sex",            prop: "Sex"},
        { name: "Contact Number", prop: "ContactNumber"},
        { name: "Address",        prop: "Address"},
        { name: "Status",         prop: "Status"},
        ]
    } else if (table_num == 2){
      header_type = [
        { name: "First Name",     prop: "FirstName"},
        { name: "Surname",        prop: "Surname"},
        { name: "Sex",            prop: "Sex"},
        { name: "Contact Number", prop: "ContactNumber"},
        { name: "Address",        prop: "Address"},
        { name: "DOB",            prop: "DOB"},
        { name: "Teacher",        prop: "Teacher"},
        { name: "Class",          prop:  "Class"},
        { name: "School Code",    prop: "SchoolCode"},
        { name: "Mother's Name",  prop: "MotherName"},
        { name: "Father's Name",  prop: "FatherName"},
        { name: "Is Christian",   prop: "IsChristian"},
        ]
    } else if (table_num == 3){
      header_type = [
        { name: "Group Name",     prop: "GroupName"},
        { name: "Leader ID",        prop: "LeaderID"},
        { name: "Venue",            prop: "Venue"},
        { name: "Meeting Day", prop: "MeetingDay"},
        { name: "Meeting Time",        prop: "MeetingTime"},
        { name: "LoCode",         prop: "LoCode"},
        ]
    }

      this.setState({header : header_type})
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
          handleRemove={this.handleRemove}
          startEditing={this.startEditing}
          editIdx={this.state.editIdx}
          stopEditing={this.stopEditing}
          handleChange={this.handleChange}
          header={this.state.header}
          data={this.state.data}
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
