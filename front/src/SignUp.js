import React, {Component} from 'react';
class SignUp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      passwordbis:'',
      name: '',
      lastname: ''
    };
    this.getChange = this.getChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  getChange(event) {
    this.setState({[event.target.name]:event.target.value});
    
  }

  handleSubmit(event) {
    console.log(`A name was submitted : ${JSON.stringify(this.state,1,1)}`);    
    event.preventDefault();
    fetch("/auth/signup", {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/json'
        }),
        body: JSON.stringify(this.state,1,1),
      })
      .then(res => res.json())
      .then(
        res => this.setState({
          'flash' : res.flash
        }),
        err => this.setState({
          'flash' : err.flash
        })
      )
  }

  render() {
    return(
      <div>
        <h1>{JSON.stringify(this.state,1,1)}</h1>
        <p>{this.state.flash}</p>
        <form onSubmit = {this.handleSubmit.bind(this)}>
          <input type='text' name='email' placeholder = 'nom@email.com' value={this.state.email} onChange={this.getChange.bind(this)} /><br/>
          <input type='text' name='password' placeholder = 'monPassw0rd' value={this.state.password} onChange={this.getChange.bind(this)}/><br/>
          <input type='text' name='passwordbis' placeholder = 'monPassw0rd' value={this.state.passwordbis} onChange={this.getChange.bind(this)}/><br/>
          <input type='text' name='name' placeholder = 'James' value={this.state.name} onChange={this.getChange.bind(this)}/><br/>
          <input type='text' name='lastname' placeholder = 'Bond' value={this.state.lastname} onChange={this.getChange.bind(this)}/><br/>
          <input type='submit' value='Soumettre'/>
        </form>
      </div>
    );
  }
}

export default SignUp;
