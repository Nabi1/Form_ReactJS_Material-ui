import React, {Component} from 'react';

                                      // NOUVELLE VERSION

class SignUp extends Component {
  constructor(props){
    super(props);
    this.state = {
      email : '',
      password : '',
      password2 : '',
      name : '',
      lastname : '',
    };

// BINDAGE DES FONCTIONS CHANGE ET SUBMIT
    this.Change = this.Change.bind(this);
    this.Submit = this.Submit.bind(this);
}

// FONCTION QUI RECUPERE SELON LE NAME DE L'INPUT SA VALEUR ET LA MET A JOUR
Change (event) {
  this.setState({[event.target.name] : event.target.value});
}

//FONCTION D'ENVOI DU FORMULAIRE QUI AFFICHE SON ETAT DONC L'ENSEMBLE DE SES VALEURS JSON A L'INSTANT T
Submit(event) {
  console.log(this.state);
  alert('Ok!');
}

//  H1 == AFFICHAGE DU JSON DU COMPOSANT && INPUTS DU FORMULAIRE AVEC LES VALEURS DEFINIES
// POUR CHACUN D'ENTRE EUX + LA FONCTION ONCHANGE A CHAQUE INPUT
  render() {
    return(
      <div>
        <h1>{JSON.stringify(this.state,1,1)}</h1>
        <form onSubmit={this.Submit.bind(this)}>
           <h2>Sign Up</h2>
           <div>
              <label>Email address</label>
              <input type="email" name="email" placeholder='email' value={this.state.email} required onChange={this.Change}/>
            </div>
           <div>
              <label>Password</label>
              <input type='password' placeholder='password' name='password' value={this.state.password} required onChange={this.Change}/>
           </div>
           <div>
              <label>Password Verification</label>
              <input type='password' placeholder='password2' name='password2' value={this.state.password2} required onChange={this.Change}/>
           </div>
           <div>
              <label>Name</label>
              <input type='text' placeholder='name' name='name' value={this.state.name} required onChange={this.Change}/>
           </div>
           <div>
              <label>LastName</label>
              <input type='text' placeholder='lastname' name='lastname' value={this.state.lastname} required onChange={this.Change}/>
           </div>
           <input type="submit" value="Send" />
        </form>
      </div>
    );
  }
}



//                                                  ANCIENNE VERSION
/*
class SignUp extends Component {
  constructor(props){
    super(props);
    this.state = {
      email : '',
      password : '',
      password2 : '',
      firstname : '',
      lastname : '',
    };
}

updateEmailField (event) {
  this.setState({email: event.target.value});
}
updateEmailField2 (event) {
  this.setState({password: event.target.value});
}
updateEmailField3 (event) {
  this.setState({name: event.target.value});
}
updateEmailField4 (event) {
  this.setState({lastname: event.target.value});
}
updateEmailField5 (event) {
  this.setState({password2: event.target.value});
}

handleSubmit(event) {
  console.log(this.state);
  alert('Ok!');

}

  render() {
    return(
      <div>
        <h1>{JSON.stringify(this.state,1,1)}</h1>
        <form onSubmit={this.handleSubmit.bind(this)}>
           <h2>Sign Up</h2>
           <div>
              <label>Email address</label>
              <input type="email" name="email" placeholder='email' required onChange={this.updateEmailField.bind(this)}/>
            </div>
           <div>
              <label>Password</label>
              <input type='password' placeholder='password' name='password' required onChange={this.updateEmailField2.bind(this)}/>
           </div>
           <div>
              <label>Password Verification</label>
              <input type='password' placeholder='password2' name='password2' required onChange={this.updateEmailField5.bind(this)}/>
           </div>
           <div>
              <label>Name</label>
              <input type='text' placeholder='name' name='name' required onChange={this.updateEmailField3.bind(this)}/>
           </div>
           <div>
              <label>LastName</label>
              <input type='text' placeholder='lastname' name='lastname' required onChange={this.updateEmailField4.bind(this)}/>
           </div>
           <input type="submit" value="Send" />
        </form>
      </div>
    );
  }
}
*/




export default SignUp;
