import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    members: []
  }

  componentDidMount(){
    this.getMembers();
  }

  getMembers = _=> {
    fetch('http://localhost:3001/members')
    .then(response =>response.json())
    .then(response => this.setState({ members: response.data }))
    .catch(err =>console.error(err))
  }
  renderMember = ({id,FirstName,Surname}) => <div key={id}>{FirstName} {Surname}</div>
  render() {
    const {members } = this.state;
    return (
      <div className="App">
        <h1>Church Members</h1>
        {members.map(this.renderMember)}
      </div>
    );
  }
}

export default App;
