import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";

// @material-ui/icons
import Email from "@material-ui/icons/Email";
import SnackbarContent from "components/Snackbar/SnackbarContent.jsx";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";

import loginPageStyle from "assets/jss/material-kit-react/views/loginPage.jsx";

import image from "assets/img/bg7.jpg";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    // we use this to make the card to appear after the page has been rendered
    this.state = {
      cardAnimaton: "cardHidden",
      isError:false,
      message:''
    };
  }
  componentDidMount() {
    // we add a hidden class to the card and after 400 ms we delete it and the transition appears
    setTimeout(
      function() {
        this.setState({ cardAnimaton: "" });
      }.bind(this),
      400
    );
  }


  handleInput = (e) =>{
    this.setState({[e.target.name]:e.target.value, isError:false});
  }

  //This is the method to login a user
  loginUser = () =>{

    const {email,password} = this.state;
    let userObject = {email,password};

    console.log('sending',userObject);
    
    fetch('http://smart-locker-backend.herokuapp.com/api/auth/login', {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
  },
  credentials: 'include',
  method: 'POST',
  body: JSON.stringify(userObject)
}).then(res=>res.json())
  .then(res => { 

    if (res._id){
      this.props.history.push('/profile-page');
    }else{
      console.log('failed', res);
      this.setState({isError:true,message:res.message});
    }
   

 
  }).catch(function(error) {
    console.log('login failed', error);
    this.setState({isError:true,message:"Login Failed, Please try Again!"});
});

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
                      <h4>Login</h4>
                      <div className={classes.socialLine}>
                  
                
                      </div>
                    </CardHeader>
                    <p className={classes.divider}>Please fill out the login form</p>
                    <CardBody>
                    {this.state.isError ? (
                        <SnackbarContent
                        message={ <span><b>LOGIN FAILED:</b> {this.state.message}</span> }
                        color="danger"
                        icon="info_outline"
                      />
                  ):null}
                      <CustomInput
                        labelText="Email"
                        id="email"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          onChange:this.handleInput,
                          name:'email',
                          type: "email",
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
                    </CardBody>
                    <CardFooter className={classes.cardFooter}>
                      <Button simple color="primary" size="lg" onClick={this.loginUser}>
                        Login 
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

export default withStyles(loginPageStyle)(LoginPage);
