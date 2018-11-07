import React from "react";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import PropTypes from 'prop-types';
import classNames from 'classnames';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Card from 'material-ui/Card/';
import CardText from 'material-ui/Card/CardText';
import CardHeader from "./components/Card/CardHeader.jsx";
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import { Link, withRouter } from 'react-router-dom';

const styles = theme => ({
    container: {
    //   display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: 200,
    },
    dense: {
      marginTop: 19,
    },
    menu: {
      width: 200,
    },
  });

  
class TextFields extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: ""
        };
    } 

    handleChange = name => event => {
        this.setState({
          [name]: event.target.value,
        });
      };
    
    handleSubmit(event)  {
        event.preventDefault()
        var data = {
            email     : this.state.email, 
            password  : this.state.lastName,
        }

        console.log(data)
        // fetch('http://localhost:3001/login' , {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body : JSON.stringify(data)
        // }).then(function(response){
        // return response.json();
        // }).then(function(body){
        //     console.log(body);
        // });
        // this.props.callbackFromParent(false)
        // this.props.router.push('/Database')   
    }

    render () {
        const { classes } = this.props;

        return (
        <MuiThemeProvider>
        <div className="App">
            <h1>CGCD Database</h1>
            <Card>
            <CardHeader color="info">
            <h4 >Welcome to CGCD church management program</h4>
            <p >
               Please login with your Email and Password
            </p>
            </CardHeader>
            <CardText>
            </CardText>
            </Card>
            </div>
            
        
        <form className={classes.container} noValidate autoComplete="off">    
        
         <TextField
                name="email"
                floatingLabelText="Email"
                value={this.state.firstName}
                onChange={this.handleChange('email')}
      
            />
            <br />
            <TextField
                name="password"
                floatingLabelText="Password"
                value={this.state.password}
                onChange={this.handleChange('Password')}
            />
            <br />
           
            
            <RaisedButton component ={Link} to="/Database" label="Submit" onClick={e => this.handleSubmit(e)} primary />
            <li><Link to='Database'>Hello</Link></li>
            </form>
        </MuiThemeProvider>
        )
    }
}

TextFields.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  const comp1 = withStyles(styles)(TextFields)
//   const comp2 = withRouter(TextFields)
  export default comp1;