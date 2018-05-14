import React, {Component} from 'react';
import Navbar from './Navbar';
import Input from './Input';
import Label from './Label';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import ciri from '../Ciri.png';
import witcher from '../theWitcher3.jpg';

let pwd = ""; //complexity pwd display
let pwd2= ""; // match pwd function
const action = (
  <Button color="secondary" size="small">
    Life is Bendo...
  </Button>
);

class SignUp extends Component {
  constructor(props){
    super(props);
    this.state = {email : '', password : '',password2 : '',
    name : '', lastname : '',flash:'', persons: false};}


// SHOW THE FORM
show = () => {
  const isValid = this.state.persons;
  this.setState({persons: !isValid})
}

// EL VALIDATOR
validator (event) {
  this.setState({[event.target.name]: event.target.value});
   event.target.value.match(/(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[#?!@$%^&*-]).{6,}/) ? pwd= 'OK you have a good pwd!' :
   event.target.value.match(/(?=.*?[A-Z])(?=.*?[a-z]).{6,}/) ? pwd= 'Interesting pwd' :
   event.target.value.match(/[a-z]/) ? pwd= 'Your pwd is too shitty': pwd= 'What is you password ?'
   event.target.value !== this.state.password2 ? pwd2= 'Please type the same pwd' : pwd2= 'Ok, same pwd !'
}

//MAJ VALEUR INPUT
change (event) {this.setState(
  {[event.target.name] : event.target.value});}

//FONCTION D'ENVOI DU FORMULAIRE 
submit(event) {
  event.preventDefault()
      //ajax request 
  fetch("/auth/signup",
{
    method: 'POST',
    headers: new Headers({'Content-Type':'application/json'}),
    body: JSON.stringify(this.state),
})
.then(res => res.json()).then(
    res => this.setState({"flash": res.flash}),
    err => this.setState({"flash": err.flash}),
    document.querySelector('form').reset()
)
//fin ajax
  console.log(JSON.stringify(this.state,1,1));
  alert('Formulaire envoyé!');
}

// JSON + FLASH + PWD COMPLEXITY
  render() {
    return(
      <div>
        <Navbar />
        {/*<h5>{JSON.stringify(this.state,1,1)}</h5>*/}
        <h3>{pwd}</h3>
        <h3>{pwd2}</h3>
        <Button onClick={this.show.bind(this)} variant="raised" color="secondary">
        REVEAL THE FORM
        </Button>
        {this.state.persons ?
        <div>
        <Grid container style={{backgroundColor: 'white'}} >
        <Grid  item  xs={12}  sm={6} 
        style={{textAlign: 'center',
        backgrounColor: 'white'
        }}>
            <img 
            src={ciri} 
            alt='ciri' />
        </Grid>
        <Grid item xs={12} sm={6}>
          <form id='form' onSubmit={this.submit.bind(this)}>
              <h2>FORMULAIRE</h2>
              <Label name='Name'/>
              <Input type="name" name="name" placeholder='name'
              value={this.state.name} change={this.change.bind(this)}
              />
              <Label name='Last Name'/>
              <Input type="lastname" name="lastname" placeholder='lastname'
              value={this.state.lastname} change={this.change.bind(this)}
              />              
              <Label name='Email'/>
              <Input type="email" name="email" placeholder='email'
              value={this.state.email} change={this.change.bind(this)}
              />
              <Label name='Password'/>
              <Input type="password" name="password" placeholder='password'
              value={this.state.password} change={this.validator.bind(this)}
              />
              <Label name='Password2'/>
              <Input type="password" name="password2" placeholder='password2'
              value={this.state.password2} change={this.change.bind(this)}
              />
              {/*<input type="submit" value="SEND" />*/}
              <Button type="submit" variant="raised" color="primary">
              ENVOYER
              </Button>
              <Button type="reset" variant="raised" color="disabled">
              RESET
              </Button>
        </form>
        </Grid>
        </Grid>
        {this.state.flash ?
        <div>
        <Grid item xs={12} sm={6}
        style={{textAlign: 'center', margin: 'auto'}}>
        <SnackbarContent
        message={this.state.flash}
        action={action} />
        </Grid>
        </div> : null }
        </div> : null }
      </div>
    );
  }
}

export default SignUp;
