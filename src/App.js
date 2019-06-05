import React from "react";
// pages for this product
import Components from "views/Components/Components.jsx";
import LandingPage from "views/LandingPage/LandingPage.jsx";
import ProfilePage from "views/ProfilePage/ProfilePage.jsx";
import LoginPage from "views/LoginPage/LoginPage.jsx";
import RegistrationPage from "./views/RegistrationPage/RegistrationPage.jsx"
import MyLockerPage from "views/LockerPage/MyLocker.jsx";
import AdminHome from "views/Admin/AdminHome.jsx";

import { BrowserRouter, Route } from "react-router-dom";
import Header from "components/Header/Header.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";

import {connect} from "react-redux";

class App extends React.Component {

    componentDidMount() {
     
      }

render(){
    return (
        <BrowserRouter>
    <div>
    <Header
          color="transparent"
          routes={[]}
          brand="Smart Lockers Initiative"
          rightLinks={<HeaderLinks  />}
          fixed
          changeColorOnScroll={{
            height: 400,
            color: "white"
          }}
        />
        {this.props.auth.role =="admin" ? (<Route exact path="/" component={AdminHome} />):(
          <Route exact path="/" component={LandingPage} />
        )}
      
      <Route exact path="/profile-page" component={ProfilePage} />
      <Route exact path="/register" component={RegistrationPage} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/my-lockers" component={MyLockerPage} />
      <Route exact path="/components" component={Components} />
    </div>
  </BrowserRouter>
    )
}



}
function mapStateToProps({auth}){
    return {auth};
}

export default connect(mapStateToProps,null)(App);