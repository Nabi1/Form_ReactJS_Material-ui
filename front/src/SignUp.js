import React, {Component} from 'react';
class SignUp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email : 'test@test.com'
    };
  }

  getChange(event) {
    this.setState({email: event.target.value});
  }

  render() {
    return(
      <div>
        <h1>{this.state.email}</h1>
        <input type="text" value={this.state.value} onChange={this.getChange.bind(this)} />
      </div>
    );
  }
}

export default SignUp;
