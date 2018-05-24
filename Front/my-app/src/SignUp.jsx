import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import Icon from '@material-ui/core/Icon';

class SignUp extends Component {
  constructor(props) {
		super(props);
		this.state = {
      lastname: '',
      firstname: '',
			email: '',
      password: '',
      validatepassword: '',
      flash: '',
      open: false,
      vertical: null,
     horizontal: null,
    }
    
	}
  updateLastnameField = (event) => {
    this.setState({
      lastname: event.target.value
    })
  }
  updateFirstnameField = (event) => {
    this.setState({
      firstname: event.target.value
    })
  }
  updateEmailField = (event) => {
    this.setState({
      email: event.target.value
		})
  }
  updatePasswordField = (event) => {
    this.setState({
      password: event.target.value
		})
  }
  updateValidatePasswordField = (event) => {
    this.setState({
      validatepassword: event.target.value
		})
  }
  handleClick = state => () => {
    this.setState({ open: true, ...state });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  handleSubmit = (event) => {
    event.preventDefault();
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
  render() {
    const { vertical, horizontal, open } = this.state;
  	return(
      <div>
        <p>Sign Up !</p>
        <form onSubmit={this.handleSubmit}>
          <TextField
          id="lastname"
          label="Lastname"
          value={this.state.name}
          onChange={this.updateLastnameField.bind(this)}
          margin="normal"
        />
        <br />
        <TextField
          id="name"
          label="Firstname"
          value={this.state.firstname}
          onChange={this.updateFirstnameField.bind(this)}
          margin="normal"
        />
        <br />
        <TextField
          id="email"
          label="Email"
          type="email"
          value={this.state.email}
          onChange={this.updateEmailField.bind(this)}
          margin="normal"
        />
        <br />
        <TextField
          id="password"
          label="Passeword"
          type="password"
          value={this.state.password}
          onChange={this.updatePasswordField.bind(this)}
          margin="normal"
        />
        <br />
        <TextField
          id="password"
          label="Validate Password"
          type="password"
          value={this.state.validatepassword}
          onChange={this.updateValidatePasswordField.bind(this)}
          margin="normal"
        />
         <br />
         <br />
          <Button type="submit" onClick={this.handleClick({ vertical: 'top', horizontal: 'center' })} value="Submit" variant="raised" color="primary">
        Submit   
        <Icon>send</Icon>
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
	  );
  }
}

export default SignUp;