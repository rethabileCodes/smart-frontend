import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Parallax from "components/Parallax/Parallax.jsx";

import landingPageStyle from "assets/jss/material-kit-react/views/landingPage.jsx";

// Sections for this page
import ProductSection from "./Sections/ProductSection.jsx";
import WorkSection from "./Sections/WorkSection.jsx";



class LandingPage extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <Parallax filter image={require("assets/img/landing-bg.jpg")}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <h1 className={classes.title}>Welcome The Smart Lockers.</h1>
                <h4>
                  This Initative aims to disrupt the way people carry themselves in shopping malls. By introducing a safe and secure way to store your groceries or items that may hinder you to stay and do what you like at the mall after shopping, we give you your freedom back to do what you want to do. Let's innovate together
                </h4>
                <br />
                <Button
                  href="/login"
                  color="danger"
                  size="lg"
                  rel="noopener noreferrer"
                >
                  Get Started
                </Button>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <ProductSection />
          
             <WorkSection />
          </div>
        </div>
       
      </div>
    );
  }
}

export default withStyles(landingPageStyle)(LandingPage);
