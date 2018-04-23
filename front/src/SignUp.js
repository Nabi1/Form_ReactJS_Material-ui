import React from 'react';

class SignUp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email : 'Test@test.com'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({email: e.target.value})
}

  handleSubmit(e) {
    const validator = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (validator.test(this.state.email)) {
        alert('Your mail seems to be valid');
        e.preventDefault();
    } else {
        alert("Your mail seems not to be valid, check it again !: ");
        e.preventDefault();}
}

  render() {
    return(
      <div className="SignUp">
        <h1>{this.state.email}</h1>
        <input onChange={this.handleChange} type="email" name="email" value={this.state.value}/>
        <input onClick={this.handleSubmit} type="submit" name="Envoyer"/>
      </div>
    );
  }
}

export default SignUp;