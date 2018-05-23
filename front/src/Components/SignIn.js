import React, {Component} from 'react';
import Navbar from './Navbar';
import Input from './Input';
import Label from './Label';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router-dom';

//VARIABLES
let pwd = ""; //complexity pwd display

// STATE SIGN UP
class SignIn extends Component {
  constructor(props){
    super(props);
    this.state = {email : '', password : '',
    flash:''};}

// EL VALIDATOR
validator (event) {
  this.setState({[event.target.name]: event.target.value});
   event.target.value.match(/(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[#?!@$%^&*-]).{6,}/) ? pwd= 'OK you have a good pwd!' :
   event.target.value.match(/(?=.*?[A-Z])(?=.*?[a-z]).{6,}/) ? pwd= 'Interesting pwd' :
   event.target.value.match(/[a-z]/) ? pwd= 'Your pwd is too shitty': pwd= 'What is you password ?'
}

//MAJ VALEURS INPUT
change (event) {this.setState(
  {[event.target.name] : event.target.value});}

//FONCTION D'ENVOI DU FORMULAIRE AJAX
submit(event) {
  event.preventDefault()
      //ajax request 
  fetch("/auth/signin",
{
    method: 'POST',
    headers: new Headers({'Content-Type':'application/json'}),
    body: JSON.stringify(this.state)
})
.then(res => res.json()).then(
    res => this.setState({"flash": res.flash}),
    err => this.setState({"flash": err.flash}),
    document.querySelector('form').reset()
)
//fin ajax
  console.log(JSON.stringify(this.state,1,1));
  alert('Formulaire envoyé!');
  
  this.props.history.push('/Profile')

}


// JSON + FLASH + PWD COMPLEXITY + DISPLAY ON CONDITION
  render() {
  
    return(
      <div>
        <Navbar />
        <h3>{pwd}</h3>
        <Grid item xs={12}>
          <form id='form' onSubmit={this.submit.bind(this)}>
              <h2>SIGN IN</h2>
              <Label name='Email'/>
              <Input type="email" name="email" placeholder='JJ@live.fr'
              value={this.state.email} change={this.change.bind(this)}
              />
              <Label name='Password'/>
              <Input type="password" name="password" placeholder='JJ33@@'
              value={this.state.password} change={this.validator.bind(this)}
              />
              <Button type="submit" variant="raised" color="primary">
              ENVOYER
              </Button>
              <Button type="reset" variant="raised" color="disabled">
              RESET
              </Button>
        </form>
        </Grid>
      </div>
    );
  }
}

export default SignIn;