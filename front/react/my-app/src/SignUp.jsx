import React, { Component } from 'react';


class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state ={
      value : ''
      };
    this.updateEmailField = this.updateEmailField.bind(this);
  }

  updateEmailField(event) { 
    this.setState({email: event.target.value});
  }
  render() {
    return (
      <div>
        <h1>{this.state.email}</h1>
        <p>Enter your email :</p> 
        <input type="email" email={this.state.email} onChange={this.updateEmailField}/>
      </div>
    );
  }
}

export default SignUp;

