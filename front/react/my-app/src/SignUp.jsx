import React, {Component} from 'react';

class SignUp extends Component {
  constructor(props) {
		super(props);
		this.state = {
      lastname: '',
      firstname: '',
			email: '',
      password: '',
      validatepassword: ''
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

  handleSubmit = () => {
    console.log(JSON.stringify(this.state,1,1));
    console.log(this.state);
  }

  render() {
  	return(
      <div>
        <h1>{JSON.stringify(this.state,1,1)}</h1>
        <form>
          <p>Last Name</p>
            <input onChange={this.updateLastnameField.bind(this)} type="text" name="lastname"/>
          <br />
          <p>First Name</p>
            <input onChange={this.updateFirstnameField.bind(this)} type="text" name="firstname"/>
          <br />
          <p>Email</p>
            <input onChange={this.updateEmailField.bind(this)} type="email" name="email"/>
          <br />
          <p>Password</p>
            <input onChange={this.updatePasswordField.bind(this)} type="password" name="password"/>
          <br />
          <p>Validate Password</p>
            <input onChange={this.updateValidatePasswordField.bind(this)} type="password" name="validatepassword"/>
          <br />
          <input onSubmit={this.handleSubmit} type="submit" value="Submit"/>
        </form>
      </div>
	  );
  }
}

export default SignUp;