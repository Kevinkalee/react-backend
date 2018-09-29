import React from "react";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';

const styles = theme => ({
    container: {
    //   display: 'flex',
    //   flexWrap: 'wrap',
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

     
    state = {
        firstName: "",
        lastName: "",
        sex: "",
        contactNumber: ""
    };

    handleChange = name => event => {
        this.setState({
          [name]: event.target.value,
        });
      };
    
    render () {
        const { classes } = this.props;

        return (
        <form className={classes.container} noValidate autoComplete="off">    

         <TextField
                name="firstName"
                hintText="First name"
                floatingLabelText="First name"
                value={this.state.firstName}
                onChange={this.handleChange('firstName')}
                floatingLabelFixed
            />
            <br />
            <TextField
                name="lastName"
                hintText="Last Name"
                floatingLabelText="Last Name"
                value={this.state.lastName}
                onChange={this.handleChange('lastName')}
                floatingLabelFixed
            />
            <br />
            <TextField
                name="sex"
                hintText="Sex"
                floatingLabelText="Sex"
                value={this.state.sex}
                onChange={this.handleChange('sex')}
                floatingLabelFixed
            />
            <br />
            <TextField
                name="contactNumber"
                hintText="Contact Number"
                floatingLabelText="Contact Number"
                value={this.state.contactNumber}
                onChange={this.handleChange('contactNumber')}
                floatingLabelFixed
            />
            <br />
            <br />
            <RaisedButton label="Submit" onClick={e => this.onSubmit(e)} primary />
            </form>
        )
    }
}

TextFields.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(TextFields);