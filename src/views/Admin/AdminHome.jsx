
import React from "react";
import Parallax from "components/Parallax/Parallax.jsx";

import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CustomTabs from "components/CustomTabs/CustomTabs.jsx";
import LockOpen from "@material-ui/icons/LockOpen";
import ShowChart from "@material-ui/icons/ShowChart";
import Lock from "@material-ui/icons/Lock";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import profilePageStyle from "assets/jss/material-kit-react/views/profilePage.jsx";
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from "components/CustomButtons/Button.jsx";
import CreateLockerDialog from "components/CreateLockerDialog";
import LockerList from "components/LockerList.jsx";
import {connect} from "react-redux";
import * as actions from "actions";


class AdminHome extends React.Component {

  constructor(props){
    super(props);

    this.state ={
      open:false
    }
  }

  componentDidMount(){
    this.props.fetchLockers()
  }

  



creactLocker = () =>{

}


updateLocker = () =>{

}

deleteLocker = () =>{

}



handleOpenDialog =() =>{
  this.setState({open:true});
}

handleCloseDialog =() =>{
  this.setState({open:false});
}
render(){
    const { classes } = this.props;
    return([
        <Parallax small filter image={require("assets/img/mall.jpg")} />,
        <CreateLockerDialog open={this.state.open} handleClickOpen={this.handleOpenDialog}  handleClose={this.handleCloseDialog}/>,
        <GridContainer justify="center">
         
        <GridItem xs={12} sm={12} md={8}>
        <Paper style={{padding:10, margin:10,marginBottom:30}}>
        <Typography variant="h5" component="h5">
          Admin Actions
        </Typography>
              <Button color="warnning" size="md" onClick={this.handleOpenDialog} >
                  Add A New Locker
              </Button>
      </Paper>
      </GridItem>

          </GridContainer>,

        <GridContainer justify="center">

        <GridItem xs={12} sm={12} md={8}>
        
          <CustomTabs
            headerColor="success"
            tabs={[
              {
                tabName: "Free Lockers",
                tabIcon: LockOpen,
                tabContent: (
                 <div>
                 <LockerList filter="all"/>
                  </div>
                )
              },
              {
                tabName: "Reserved Lockers",
                tabIcon: Lock,
                tabContent: (
                  <LockerList filter="reserved"/>
                )
              },
              {
                tabName: "Booked For Maintenace Lockers",
                tabIcon: Lock,
                tabContent: (
                  <LockerList filter="maintained"/>
                )
              }
            
            ]}
          />
        </GridItem>
      
      </GridContainer>
      
    ])
}


}

function MapStateToProps({lockers}){
  return {lockers};
}

export default connect(MapStateToProps,actions)(withStyles(profilePageStyle)(AdminHome));