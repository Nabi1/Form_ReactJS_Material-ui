import React, {Component} from 'react';

class SignUp extends Component {
  constructor(props){
    super(props);
    this.state = {value: ''}
  }


updateEmailField (event) {
  this.setState({value: event.target.value});

}

  render() {
    return(
      <div>
        <h1>Voici l'email tapé: <br/>{this.state.value}</h1>
        <input type="email" name="email" placeholder='youpi yoh' onChange={this.updateEmailField.bind(this)}/>
      </div>
    );
  }
}

export default SignUp;
