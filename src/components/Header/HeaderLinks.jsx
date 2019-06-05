/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
import {connect} from 'react-redux';
import * as actions from "actions";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
import {withRouter} from "react-router-dom"
// @material-ui/icons
import { Apps, VerifiedUser, PersonAdd, Pages , LockOpen} from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
import Button from "components/CustomButtons/Button.jsx";

import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx";



class HeaderLinks extends React.Component{

  componentDidMount(){
    this.props.fetchUser();
  }


  onLogoutClicked = () =>{
    console.log('logout clicked')

    fetch('http://smart-locker-backend.herokuapp.com/api/auth/logout', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    credentials: 'include',
    method: 'POST',
    body: JSON.stringify({})
  }).then(res=>res.json())
    .then(res => { 
  
        this.props.fetchUser();
        this.props.history.push('/');
  
      
  
   
    }).catch(function(error) {
      console.log('logout failed', error);
      this.props.history.push('/');
  });


  
  }

 render() {

  const { classes } = this.props;
  return (
    <List className={classes.list}>

{!this.props.auth ? ([

      <ListItem className={classes.listItem}>
        <Link to="/register" className={classes.navLink}>
            <PersonAdd className={classes.icons} /> Sign Up
        </Link>
      </ListItem>,

      <ListItem className={classes.listItem}>
      <Link to="/login" className={classes.navLink}>
          <VerifiedUser className={classes.icons} /> Login
      </Link>
      </ListItem>
]):null}

      
      
        {this.props.auth ? ([

          <ListItem className={classes.listItem}>
                <CustomDropdown
                noLiPadding
                buttonText={`${this.props.auth && this.props.auth.firstname}  ${ this.props.auth && this.props.auth.lastname}`}
                buttonProps={{
                  className: classes.navLink,
                  color: "transparent"
                }}
                buttonIcon={Pages}
                dropdownList={[
                  <Link to="/profile-page" className={classes.dropdownLink}>
                    View Profile
                  </Link>
                  
                ]}
                />
        </ListItem>,


      <ListItem className={classes.listItem}>
      <Link
        to="/my-lockers"
        color="transparent"
        
        className={classes.navLink}
      >
        <Apps className={classes.icons} /> My Lockers
      </Link>
    </ListItem>,

    <ListItem className={classes.listItem}>
    <Button  color="transparent"  className={classes.navLink} onClick={this.onLogoutClicked}>
        <LockOpen className={classes.icons} /> Logout
    </Button>
    </ListItem>

              ]):null}
       



    </List>
  )
}

}



function mapStateToProps({auth}){
  return {auth};
}
export default connect(mapStateToProps,actions)(withRouter(withStyles(headerLinksStyle)(HeaderLinks)));
