import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";

// @material-ui/icons
import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import SnackbarContent from "components/Snackbar/SnackbarContent.jsx";
import loginPageStyle from "assets/jss/material-kit-react/views/loginPage.jsx";

//Redux integration
import {connect} from 'react-redux';
import * as actions from "actions";
import image from "assets/img/bg7.jpg";

class RegistrationPage extends React.Component {
  constructor(props) {
    super(props);
    // we use this to make the card to appear after the page has been rendered
    this.state = {
      cardAnimaton: "cardHidden",
      isError:false,
      message:''
    };
  }

//This is the method to register a user
  registerUser = () =>{

    const {email,firstname, lastname,password,verify_password} = this.state;
    let userObject = {email,firstname, lastname,password,verify_password};

    console.log('sending',userObject);
    
    fetch('http://smart-locker-backend.herokuapp.com/api/auth/register', {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
  },
  credentials: 'include',
  method: 'POST',
  body: JSON.stringify(userObject)
}).then(res=>res.json())
  .then(res => { 
    console.log('registration response', res);
    if (res.message){
      this.setState({isError:true,message:res.message});
    }else{
      this.props.history.push('/profile-page');
    }
   
 
  }).catch(function(error) {
    console.log('registration response err', error);
    this.setState({isError:true,message:"Registration Failed, Please try Again!"});
});

  }


  handleInput = (e) =>{
    this.setState({[e.target.name]:e.target.value,isError:false});

    
  }

  componentDidMount() {
    // we add a hidden class to the card and after 700 ms we delete it and the transition appears
    setTimeout(
      function() {
        this.setState({ cardAnimaton: "" });
      }.bind(this),
      400
    );
  }
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <div
          className={classes.pageHeader}
          style={{
            backgroundImage: "url(" + image + ")",
            backgroundSize: "cover",
            backgroundPosition: "top center"
          }}
        >
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={5}>
                <Card className={classes[this.state.cardAnimaton]}>
                  <form className={classes.form}>
                    <CardHeader color="primary" className={classes.cardHeader}>
                      <h4>Registration</h4>
                      <div className={classes.socialLine}>
                  
                
                      </div>
                    </CardHeader>
                    <p className={classes.divider}>Please fill out the registration form</p>
                    <CardBody>

                    {this.state.isError ? (
                        <SnackbarContent
                        message={ <span><b>REGISTRATION FAILED:</b> {this.state.message}</span> }
                        color="danger"
                        icon="info_outline"
                      />
                  ):null}

                      <CustomInput
                        labelText="First Name"
                        id="first"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          onChange:this.handleInput,
                          type: "text",
                          name:'firstname',
                          endAdornment: (
                            <InputAdornment position="end">
                              <People className={classes.inputIconsColor} />
                            </InputAdornment>
                          )
                        }}
                      />

                       <CustomInput
                        labelText="Last Name"
                        id="last"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          onChange:this.handleInput,
                          type: "text",
                          name:'lastname',
                          endAdornment: (
                            <InputAdornment position="end">
                              <People className={classes.inputIconsColor} />
                            </InputAdornment>
                          )
                        }}
                      />
                      <CustomInput
                        labelText="Email..."
                        id="email"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          onChange:this.handleInput,
                          type: "email",
                          name:'email',
                          endAdornment: (
                            <InputAdornment position="end">
                              <Email className={classes.inputIconsColor} />
                            </InputAdornment>
                          )
                        }}
                      />
                      <CustomInput
                        labelText="Password"
                        id="pass"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          onChange:this.handleInput,
                         
                          name:'password',
                          type: "password",
                          endAdornment: (
                            <InputAdornment position="end">
                              <Icon className={classes.inputIconsColor}>
                                lock_outline
                              </Icon>
                            </InputAdornment>
                          )
                        }}
                      />

                      <CustomInput
                        labelText="Re-Enter Password"
                        id="pass"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          onChange:this.handleInput,
                         
                          name:'repassword',
                          type: "password",
                          endAdornment: (
                            <InputAdornment position="end">
                              <Icon className={classes.inputIconsColor}>
                                lock_outline
                              </Icon>
                            </InputAdornment>
                          )
                        }}
                      />
                    </CardBody>
                    <CardFooter className={classes.cardFooter}>
                      <Button simple color="primary" size="lg" onClick ={this.registerUser}>
                        Get started
                      </Button>
                    </CardFooter>
                  </form>
                </Card>
              </GridItem>
            </GridContainer>
          </div>
          
        </div>
      </div>
    );
  }
}

export default  connect(null, actions)(withStyles(loginPageStyle)(RegistrationPage));
