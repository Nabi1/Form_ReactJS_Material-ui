import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Snackbar from 'material-ui/Snackbar';

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
  }),
});

class SignUp extends Component{
  constructor(props){
    super(props);
    this.state={
      email: '',
      password: '',
      passwordCheck: '',
      name:'',
      lastname:'',
      flash:''
    }
    this.updateEmailField = this.updateEmailField.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  updateEmailField(event){
    this.setState({value: event.target.value})
  }
  handleChange(e){
   this.setState({[e.target.name]: e.target.value});
 }
  handleSubmit(e){
    e.preventDefault();
    console.log(this.state);
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
  render(){
    const { vertical, horizontal, open } = this.state;
    return(
      <Paper elevation={4}>
      <Grid container spacing={16}>
        <Grid  item  xs={12}  sm={6}>
          <img alt="C'est Homer !" src="http://images.innoveduc.fr/react_odyssey_homer/wildhomer.png"  />
        </Grid>
        <Grid  item  xs={12}  sm={6}>
          <div>
            <Typography variant="headline" component="h3">Sign up!</Typography>
            <form onSubmit={this.handleSubmit}>
              <TextField
                id="email"
                name="email"
                label="Email"
                onChange={this.handleChange}
                fullWidth
                margin="normal"
              />
              <TextField
                id="password"
                name="password"
                label="Password"
                type="password"
                onChange={this.handleChange}
                fullWidth
                margin="normal"
              />
              <TextField
                id="passwordCheck"
                name="passwordCheck"
                label="Password"
                type="password"
                onChange={this.handleChange}
                fullWidth
                margin="normal"
              />
              <TextField
                id="name"
                name="name"
                label="Name"
                onChange={this.handleChange}
                fullWidth
                margin="normal"
              />
              <TextField
                id="lastname"
                name="lastname"
                label="Lastname"
                onChange={this.handleChange}
                fullWidth
                margin="normal"
              />
              <Button onClick={this.handleClick({ vertical: 'bottom', horizontal: 'center' })} type="submit" variant="raised" color="primary">
                Submit
              </Button>
            </form>
            <Snackbar
              anchorOrigin={{ vertical, horizontal }}
              open={open}
              onClose={this.handleClose}
              ContentProps={{
                'aria-describedby': 'message-id',
              }}
              message={<span id="message-id">{this.state.flash}</span>}
            />
        </div>
        </Grid>
      </Grid>
    </Paper>
    )
  }
}

export default SignUp;
