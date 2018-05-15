import React, { Component } from 'react';
import {TextField} from 'material-ui'; 
import {Grid} from 'material-ui';
import {Paper} from 'material-ui';
import {Button} from 'material-ui'; 
import {Snackbar} from 'material-ui';

class Formulaire extends Component {
    constructor(props){
        super(props);
        this.state= {
            name:'',
            lastname:'',
            email:'',
            password: '',
            confirmpassword:'',
            flash:'',
        }
    }
    updateNameField = (e) => {
        this.setState({
        name: e.target.value
        })
      }
      updateLastnameField = (e) => {
        this.setState({
          lastname: e.target.value
        })
      }
      updateEmailField = (e) => {
        this.setState({
          email: e.target.value
            })
      }
      updatePasswordField = (e) => {
        this.setState({
          password: e.target.value
            })
      }
      updateConfirmPasswordField = (e) => {
        this.setState({
          confirmpassword: e.target.value
            })
      }
    
      handleSubmit (e){
        e.preventDefault();
        console.log(JSON.stringify(this.state,1,1));
        fetch("/auth/signup",
                {
                    method:  'POST',
                    headers:  new  Headers({
                        'Content-Type':  'application/json'
                    }),
                    body:  JSON.stringify(this.state),
                })
                .then(res  =>  res.json())
                .then(
                    res  =>  this.setState({"flash":  res.flash}),
                    err  =>  this.setState({"flash":  err.flash})
                )
                    }

        
            

            handleClick = state => () => {
                this.setState({ open: true, ...state });
            };

            handleClose = () => {
                this.setState({ open: false });
            };


render() {  
    const { vertical, horizontal, open } = this.state;
    return (
            <form onSubmit={this.handleSubmit.bind(this)}> 
                <Paper elevation={4}
                style={{ margin:  34 }}>
                <Grid container>
                    <Grid  item  xs={12}  sm={6}>
                    <img src="http://images.innoveduc.fr/react_odyssey_homer/wildhomer.png" alt="homer"  />
                    </Grid>
                    <Grid  item  xs={12}  sm={6}>
                {/* <h1>{JSON.stringify(this.state,1,1)} </h1>  */}
                <h1>Sign Up!</h1>
                <TextField
                    label='Name'
                    name= 'name'
                    placeholder=''
                    type="text"
                    onChange={this.updateNameField.bind(this)}
                />
                <br />
                <TextField
                    label='Lastname'
                    name="lastname"
                    placeholder=''
                    type="text"
                    onChange={this.updateLastnameField.bind(this)}
                />
                <br />
                <TextField
                    label='Email'
                    name="email"
                    placeholder=''
                    type="email"
                    onChange={this.updateEmailField.bind(this)}
                />
                <br />
                <TextField
                    label='Password'
                    name="password"
                    placeholder=''
                    type="password"
                    onChange={this.updatePasswordField.bind(this)}
                />
                <br />
                <TextField
                    label='Confirm Password'
                    name="confirm_password"
                    placeholder=''
                    type="password"
                    onChange={this.updateConfirmPasswordField.bind(this)}
                />
                <br />
                
                <Button onClick={this.handleClick({ vertical: 'bottom', horizontal: 'center' })}variant="raised" color="primary"type='submit' value="Submit"
                style={{ margin:  34 }}>Submit
                </Button>
                    <Snackbar
                    anchorOrigin={{ vertical, horizontal }}
                    open={open}
                    onClose={this.handleClose}
                    ContentProps={{
                        'aria-describedby': 'message-id',
                    }}
                    message={<span id="message-id">Users has been sign up!</span>}
                    />





                </Grid>
                </Grid>
                </Paper>
            </form>
        );
    } 
}
export default Formulaire;