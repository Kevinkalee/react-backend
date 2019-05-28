import React from "react";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';

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

    constructor(props) {
        super(props);
        this.state = {
            lastName: "",
            firstName: "",
            sex: "",
            contactNumber: "",
            address: "",
            DOB: "",
            RoleCode: "",
            LoCode: "",
            CellGroupID: "",
            MinistryID: "",
            Consents: "",

        };
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    handleSubmit(event) {
        event.preventDefault()
        var data = {
            Surname: this.state.lastName,
            FirstName: this.state.firstName,
            Sex: this.state.sex,
            ContactNumber: this.state.contactNumber,
            Address: this.state.address,
            DOB: this.state.DOB,
            CellGroupID: this.state.CellGroupID,
            RoleCode: this.state.RoleCode,
            LoCode: this.state.LoCode,
            MinistryID: this.state.MinistryID,
            Consents: this.state.Consents,
        }

        console.log(data)
        fetch('http://localhost:3001/newmember', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(function (response) {
            return response.json();
        }).then(function (body) {
            console.log(body);
        });
        this.props.callbackFromParent(false)
    }

    render() {
        const { classes } = this.props;

        return (
            <form className={classes.container} noValidate autoComplete="off">

                <TextField
                    name="firstName"
                    floatingLabelText="First name"
                    value={this.state.firstName}
                    onChange={this.handleChange('firstName')}

                />
                <br />
                <TextField
                    name="lastName"
                    floatingLabelText="Last Name"
                    value={this.state.lastName}
                    onChange={this.handleChange('lastName')}
                />
                <br />
                <InputLabel htmlFor="Gender helper">Sex</InputLabel>
                <Select
                    value={this.state.sex}
                    onChange={this.handleChange('sex')}
                    input={<Input name="Sex" id="gender helper" />}
                >
                    <MenuItem value="">
                    </MenuItem>
                    <MenuItem value={"M"}>M</MenuItem>
                    <MenuItem value={"F"}>F</MenuItem>
                </Select>
                <br />
                <TextField
                    name="contactNumber"
                    floatingLabelText="Contact Number"
                    value={this.state.contactNumber}
                    onChange={this.handleChange('contactNumber')}
                />
                <br />
                <TextField
                    name="address"
                    hintText="Address"
                    floatingLabelText="Address"
                    value={this.state.address}
                    onChange={this.handleChange('address')}

                />
                <br />
                <TextField
                    name="DOB"
                    floatingLabelText="DOB"
                    value={this.state.DOB}
                    type="date"
                    onChange={this.handleChange('DOB')}
                    floatingLabelFixed
                />
                <br />
                <TextField
                    name="RoleCode"
                    floatingLabelText="Role Code"
                    value={this.state.RoleCode}
                    onChange={this.handleChange('RoleCode')}
                />
                <br />
                <TextField
                    name="LoCode"
                    floatingLabelText="LoCode"
                    value={this.state.LoCode}
                    onChange={this.handleChange('LoCode')}
                />
                <br />
                <TextField
                    name="CellGroupID"
                    floatingLabelText="Cell Group ID"
                    value={this.state.CellGroupID}
                    onChange={this.handleChange('CellGroupID')}
                />
                <br />
                <TextField
                    name="MinistryID"
                    floatingLabelText="Ministry ID"
                    value={this.state.MinistryID}
                    onChange={this.handleChange('MinistryID')}
                />
                <br />
                <TextField
                    name="Consents"
                    floatingLabelText="Consents"
                    value={this.state.Consents}
                    onChange={this.handleChange('Consents')}
                />
                <br />
                <br />
                <RaisedButton label="Submit" onClick={e => this.handleSubmit(e)} primary />
            </form>
        )
    }
}

TextFields.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextFields);