 import React, {Component} from 'react';
class SignUp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email : 'nabi@testing.com'
    };
  }

  updateEmailField(event) {
    this.setState({email: event.target.value});
  }

  render() {
    return(
      <div>
        <h1>{this.state.email}</h1>
        <input 
        type="email" 
        name="email" 
        value={this.state.value}  
        placeholder="Go enter your email here" 
        onChange={this.updateEmailField.bind(this)} />
      </div>
    );
  }
}

export default SignUp;