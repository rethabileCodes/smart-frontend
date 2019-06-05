import React from "react";
import * as gravatar from "gravatar";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import Button from "components/CustomButtons/Button.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import NavPills from "components/NavPills/NavPills.jsx";
import Parallax from "components/Parallax/Parallax.jsx";

import CustomTabs from "components/CustomTabs/CustomTabs.jsx";
import tabsStyle from "assets/jss/material-kit-react/views/componentsSections/tabsStyle.jsx";

import profilePageStyle from "assets/jss/material-kit-react/views/profilePage.jsx";
// @material-ui/icons
import LocalActivity from "@material-ui/icons/LocalActivity";
import ShowChart from "@material-ui/icons/ShowChart";
import Payment from "@material-ui/icons/Payment";

import {connect} from 'react-redux';
import * as actions from 'actions';

class ProfilePage extends React.Component {


  constructor(props){
    super(props);

  }


  componentDidMount(){
    this.props.fetchUser();
  }
  render() {
    const { classes, ...rest } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
    return (
      <div>
      
        <Parallax small filter image={require("assets/img/profile-bg.jpg")} />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div>
            <div className={classes.container}>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={6}>
                {this.props.auth ? (
                  <div className={classes.profile}>
                    <div>
                      <img src={gravatar.url(this.props.auth.email, {s: '100', r: 'x', d: 'retro'}, false)} alt="..." className={imageClasses} />
                    </div>

                   
                      <div className={classes.name}>
                      
                      <h3 className={classes.title}>{`${this.props.auth.firstname} ${this.props.auth.lastname}`}</h3>
                      <h4 >{`(${this.props.auth.email})`}</h4>
                      <h6>{this.props.auth.role}</h6>
                      
                    </div>
                   
                    
                  </div>
                   ): null}
                </GridItem>
              </GridContainer>
          
                 <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={8}>
             
                <CustomTabs
                  headerColor="info"
                  tabs={[
                    {
                      tabName: "Activity Feed",
                      tabIcon: LocalActivity,
                      tabContent: (
                        <p className={classes.textCenter}>
                          this is where your locker activities will be tracked in the future
                        </p>
                      )
                    },
                    {
                      tabName: "Statistics",
                      tabIcon: ShowChart,
                      tabContent: (
                        <p className={classes.textCenter}>
                        this is where statistics of previous locker rentals will appear
                        </p>
                      )
                    },
                    {
                      tabName: "Payment History",
                      tabIcon: Payment,
                      tabContent: (
                        <p className={classes.textCenter}>
                         all payments done through the portal will be reflected here
                        </p>
                      )
                    }
                  ]}
                />
              </GridItem>
            
            </GridContainer>
            </div>
          </div>
        </div>
   
      </div>
    );
  }
}



function mapStateToProps({auth}){
  return {auth}
}

export default connect(mapStateToProps, actions)(withStyles(profilePageStyle)(ProfilePage));
