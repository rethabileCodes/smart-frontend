import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import CustomInput from "components/CustomInput/CustomInput.jsx";
import InputAdornment from "@material-ui/core/InputAdornment";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import ScatterPlot from "@material-ui/icons/ScatterPlot";
import PermIdentity from "@material-ui/icons/PermIdentity";
import loginPageStyle from "assets/jss/material-kit-react/views/loginPage.jsx";

import SnackbarContent from "components/Snackbar/SnackbarContent.jsx";
import {connect} from "react-redux";
import * as actions from "actions"

class CreateLockerDialog extends React.Component {


    constructor(props){
        super(props);
        this.state ={
            isError:false,
            message:''
        }

        this.showError = this.showError.bind(this);
    }

    handleInput = (e) =>{
        this.setState({[e.target.name]:e.target.value, isError:false});
      }
    
      
showError=()=>{
    this.setState({isError:true, message:'Locker name must be unique'})
}
      handleSubmit=()=>{
        console.log('Collected Data', this.state);

        const {length,width,bredth,lockerName} = this.state;

        let object = {lockerName,
                    dimensions:{
                        length,
                        width,
                        bredth
                    }
        };

        console.log('sending Data', object);

        
        fetch('http://smart-locker-backend.herokuapp.com/api/locker', {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          },
          credentials: 'include',
          method: 'POST',
          body: JSON.stringify(object)
        }).then(res=> res.json())
          .then(res => { 
        
           console.log('locker create result', res);

           if (res.message){
               this.setState({isError:true,message:res.message})
           }else{
               this.props.fetchLockers();
               this.props.handleClose();
           }
           
        
         
          }).catch(function(error) {
            console.log('this', error);
            
        });
        



      }

    render(){
        const { classes, ...rest } = this.props;
        return (
            <div>
      <Dialog open={this.props.open} onClose={this.props.handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add A New Locker</DialogTitle>
        <DialogContent>
        {this.state.isError ? (
                        <SnackbarContent
                        message={ <span><b>LOGIN FAILED:</b> {this.state.message}</span> }
                        color="danger"
                        icon="info_outline"
                      />
                  ):null}
          <DialogContentText>
            Please fill out the form with locker details.
          </DialogContentText>
          <CustomInput
                        labelText="Locker Name (cm)"
                        id="lockername"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          onChange:this.handleInput,
                          name:'lockerName',
                          type: "text",
                          endAdornment: (
                            <InputAdornment position="end">
                              <PermIdentity className={classes.inputIconsColor} />
                            </InputAdornment>
                          )
                        }}
                      />
                    <CustomInput
                        labelText="Locker Length (cm)"
                        id="lockerLength"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          onChange:this.handleInput,
                          name:'length',
                          type: "number",
                          endAdornment: (
                            <InputAdornment position="end">
                              <ScatterPlot className={classes.inputIconsColor} />
                            </InputAdornment>
                          )
                        }}
                      />
                       <CustomInput
                        labelText="Locker Width (cm)"
                        id="lockerWidth"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          onChange:this.handleInput,
                          name:'width',
                          type: "number",
                          endAdornment: (
                            <InputAdornment position="end">
                              <ScatterPlot className={classes.inputIconsColor} />
                            </InputAdornment>
                          )
                        }}
                      />
                        <CustomInput
                        labelText="Locker Bredth (cm)"
                        id="lockerWidth"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          onChange:this.handleInput,
                          name:'bredth',
                          type: "number",
                          endAdornment: (
                            <InputAdornment position="end">
                              <ScatterPlot className={classes.inputIconsColor} />
                            </InputAdornment>
                          )
                        }}
                      />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.props.handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={this.handleSubmit} color="primary">
            Add Locker
          </Button>
        </DialogActions>
      </Dialog>
    </div>
        )
    }
}



export default connect(null,actions) (withStyles(loginPageStyle)(CreateLockerDialog));