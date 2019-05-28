import React from "react";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import PropTypes from 'prop-types';
import classNames from 'classnames';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Card from 'material-ui/Card/';
import CardText from 'material-ui/Card/CardText';
import CardHeader from 'material-ui/Card/CardHeader'
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import { Link, withRouter } from 'react-router-dom';

const styles = theme => ({
    container: {
        display: 'flex',
        flexFlow: 'column',
        flexDirection: 'column',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center'
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

const headerStyles = ({
    cardHeaderStyle: {
        background: '#42a4f4',
        color: 'white'
    },

})

class TextFields extends React.Component {

    constructor(props) {
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

    handleSubmit(event) {
        event.preventDefault()
        var data = {
            email: this.state.email,
            password: this.state.lastName,
        }

        console.log(data)
        this.props.history.push('/Database')
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

    render() {
        const { classes } = this.props;

        return (
            <MuiThemeProvider>
                <div className="App">
                    <h1>CGCD Database</h1>
                </div>

                <div>
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


                        <RaisedButton component={Link} to="/Database" label="Submit" onClick={e => this.handleSubmit(e)} primary />
                    </form>
                </div>
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