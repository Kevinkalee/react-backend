import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FaceIcon from '@material-ui/icons/Face';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
  toolbar: theme.mixins.toolbar,
});

class Navbar extends React.Component {

  constructor(props){
    super(props);
} 
  access_members_table(event){
    event.preventDefault()
    this.props.callbackFromParent(0)
  }

  access_non_members_table(event){
    event.preventDefault()
    this.props.callbackFromParent(1)
  }

  access_school_table(event){
    event.preventDefault()
    this.props.callbackFromParent(2)
  }

  access_cell_group_table(event){
    event.preventDefault()
    this.props.callbackFromParent(3)
  }


  render(){
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" color="inherit" noWrap>
              Chinese Gospel Church Database System
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.toolbar} />
          <List>

            <ListItem button  onClick={e => this.access_members_table(e)} >
              <ListItemIcon>
                <FaceIcon/>
              </ListItemIcon>
              <ListItemText primary= "Church Members"/> 
            </ListItem>

            <ListItem button onClick={e => this.access_non_members_table(e)}>
              <ListItemIcon>
                <FaceIcon/>
              </ListItemIcon>
              <ListItemText primary= "Non Members"/> 
            </ListItem>

            <ListItem button onClick={e => this.access_school_table(e)}>
              <ListItemIcon>
                <FaceIcon/>
              </ListItemIcon>
              <ListItemText primary= "Chinese School"/> 
            </ListItem>

            <ListItem button onClick={e => this.access_cell_group_table(e)}>
              <ListItemIcon>
                <FaceIcon/>
              </ListItemIcon>
              <ListItemText primary= "Cell Group"/> 
            </ListItem> 
    
          </List>
        </Drawer>
      </div>
    );
  }
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navbar);