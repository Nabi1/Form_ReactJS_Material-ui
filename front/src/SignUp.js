import React from 'react';

class SignUp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: "Preums@leBo.com",
      password: "monPasswordSecret",
      checkPassword: "monPasswordSecret",
      firstName: "Preums",
      lastName: "Le Bô"
    };

    this.emailChange = this.emailChange.bind(this);
    this.passwordChange = this.passwordChange.bind(this);
    this.checkPasswordChange = this.checkPasswordChange.bind(this);
    this.firstNameChange = this.firstNameChange.bind(this);
    this.lastNameChange = this.lastNameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  emailChange(e) {
    this.setState({email: e.target.value})
}
  passwordChange(e) {
    this.setState({password: e.target.value})
}
  checkPasswordChange(e) {
    this.setState({checkPassword: e.target.value})
}
  firstNameChange(e) {
    this.setState({firstName: e.target.value})
}
  lastNameChange(e) {
    this.setState({lastName: e.target.value})
}

  handleSubmit(e) {
    e.preventDefault();
    const validator = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (validator.test(this.state.email)) {
        alert('Your mail seems to be valid');
    } else {
        alert("Your mail seems not to be valid, check it again !: ");
    }
    if (this.state.password !== this.state.checkPassword) {
        alert("Your passwords are different !")
    }
    console.log(JSON.stringify(this.state,1,1));
}

  render() {
    return(
      <div className="SignUp">
        <h1>
          {/* {JSON.stringify(this.state,1,1)} */}
          Prénom: {this.state.firstName}<br/>
          Nom: {this.state.lastName}<br/>
          Adresse de messagerie: {this.state.email}<br/>
          Mot de passe: {this.state.password}<br/>
          Confirmation: {this.state.checkPassword}

        </h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Entrez votre adresse mail:
          <br />
            <input onChange={this.emailChange} type="email" name="email" value={this.state.email} />
          </label>
          <br />
          <label>
            Entrez votre mot de passe:
          <br />
            <input onChange={this.passwordChange} type="password" name="password" value={this.state.password} />
          </label>
          <br />
          <label>
            Confirmez votre mot de passe:
          <br />
            <input onChange={this.checkPasswordChange} type="password" name="checkPassword" value={this.state.checkPassword} />
          </label>
          <br />
          <label>
            Entrez votre prénom:
          <br />
            <input onChange={this.firstNameChange} type="text" name="firstName" value={this.state.firstName} />
          </label>
          <br />
          <label>
            Entrez votre nom de famille:
          <br />
            <input onChange={this.lastNameChange} type="text" name="lastName" value={this.state.lastName} />
          </label>
          <br />
            <input type="submit" name="Envoyer"/>
        </form>
        
      </div>
    );
  }
}

export default SignUp;