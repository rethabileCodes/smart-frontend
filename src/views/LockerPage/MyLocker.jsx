
import React from "react";
import Parallax from "components/Parallax/Parallax.jsx";

import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CustomTabs from "components/CustomTabs/CustomTabs.jsx";
import LocalActivity from "@material-ui/icons/LocalActivity";
import ShowChart from "@material-ui/icons/ShowChart";
import Payment from "@material-ui/icons/Payment";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import profilePageStyle from "assets/jss/material-kit-react/views/profilePage.jsx";
import AvailableLockers from "components/AvailableLockers.jsx";
import MyLockers from "components/MyLockers.jsx";

import {connect} from "react-redux";
import * as actions from "actions";
class MyLockerPage extends React.Component {

  componentDidMount(){
    
    this.props.fetchAvailableLockers();
    this.props.fetchMyLockers(this.props.auth._id);
  }

render(){
    const { classes, ...rest } = this.props;
    return([
        <Parallax small filter image={require("assets/img/mall.jpg")} />,

        <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
       
          <CustomTabs
            headerColor="info"
            tabs={[
              {
                tabName: "Free Lockers",
                tabIcon: LocalActivity,
                tabContent: (
                  <AvailableLockers/>
                )
              },
              {
                tabName: "Reserved Lockers",
                tabIcon: ShowChart,
                tabContent: (
                  <MyLockers/>
                )
              }
            
            ]}
          />
        </GridItem>
      
      </GridContainer>
    ])
}


}


function msp({availableLockers,auth}){
  return {availableLockers,auth};
}
export default connect(msp,actions) (withStyles(profilePageStyle)(MyLockerPage));