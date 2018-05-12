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
      flash:''
    };
}

// FONCTION QUI RECUPERE SELON LE NAME DE L'INPUT SA VALEUR ET LA MET A JOUR
Change (event) {
  this.setState({[event.target.name] : event.target.value});
}

//FONCTION D'ENVOI DU FORMULAIRE QUI AFFICHE SON ETAT DONC L'ENSEMBLE DE SES VALEURS JSON A L'INSTANT T
Submit(event) {

  //AJAX REQUEST 
  fetch("/auth/signup",
{
    method: 'POST',
    headers: new Headers({'Content-Type':'application/json'}),
    body: JSON.stringify(this.state),
})
.then(res => res.json()).then(
    res => this.setState({"flash": res.flash}),
    err => this.setState({"flash": err.flash})
)
//fin ajax

  console.log(JSON.stringify(this.state,1,1));
  alert('Formulaire envoyé!');
}

//  H1 == AFFICHAGE DU JSON DU COMPOSANT && 
// INPUTS DU FORMULAIRE AVEC LES VALEURS DEFINIES
// POUR CHACUN D'ENTRE EUX + 
// LA FONCTION ONCHANGE A CHAQUE INPUT
  render() {
    let style = {
      display: "block",
      margin: 'auto'
    };

    return(
      <div>
        <h1>{JSON.stringify(this.state,1,1)}</h1>
        <form 
        onSubmit={this.Submit.bind(this)}>
           <h2>Sign Up</h2>
           <div>
              <label>Email address</label>
              <input style={style}  type="email" name="email" placeholder='email' value={this.state.email} required onChange={this.Change.bind(this)}/>
            </div>
           <div>
              <label>Password</label>
              <input style={style} type='password' placeholder='password' name='password' value={this.state.password} required onChange={this.Change.bind(this)}/>
           </div>
           <div>
              <label>Password Verification</label>
              <input style={style}  type='password' placeholder='password2' name='password2' value={this.state.password2} required onChange={this.Change.bind(this)}/>
           </div>
           <div>
              <label>Name</label>
              <input style={style}  type='text' placeholder='name' name='name' value={this.state.name} required onChange={this.Change.bind(this)}/>
           </div>
           <div>
              <label>LastName</label>
              <input style={style}  type='text' placeholder='lastname' name='lastname' value={this.state.lastname} required onChange={this.Change.bind(this)}/>
           </div>
           <input style={style}  type="submit" value="Send" />
        </form>
        <h1>{this.state.flash}</h1>
      </div>
    );
  }
}

export default SignUp;
