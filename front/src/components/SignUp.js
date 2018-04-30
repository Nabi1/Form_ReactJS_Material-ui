import React, {Component} from 'react';

class SignUp extends Component {
  constructor(props) {
		super(props);
		this.state = {
      lastname: '',
      firstname: '',
			email: '',
      password: '',
      passwordcheck: ''
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
  updatePasswordcheckField = (event) => {
    this.setState({
      passwordcheck: event.target.value
		})
  }

  handleSubmit = () => {
    console.log(JSON.stringify(this.state,1,1))
  }

  render() {
  	return(
      <div>
        <h1>{JSON.stringify(this.state,1,1)}</h1>
        <form onSubmit={this.handleSubmit}>
          <label>Nom
            <input onChange={this.updateLastnameField.bind(this)} type="text" name="lastname"/>
          </label>
          <label>Prénom
            <input onChange={this.updateFirstnameField.bind(this)} type="text" name="firstname"/>
          </label>
          <label>Email
            <input onChange={this.updateEmailField.bind(this)} type="email" name="email"/>
          </label>
          <label>Mot de passe
            <input onChange={this.updatePasswordField.bind(this)} type="password" name="password"/>
          </label>
          <label>Vérification du mot de passe
            <input onChange={this.updatePasswordcheckField.bind(this)} type="password" name="passwordcheck"/>
          </label>
          <input type="submit" value="Soumettre"/>
        </form>
      </div>
	  );
  }
}

export default SignUp;
