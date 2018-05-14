import React, { Component } from 'react';
import './signup.css';

class SignUp extends Component {
   
    constructor(props) {
        super(props);
            this.state = {
                email: "mon@email.com",
                password: "monPassw0rd",
                passwordChecker: "monPassw0rd",
                name: "James",
                lastname: "Bond",
                flash: ""
              }
        
    }

    
   
    updateEmailField(event) {
        this.setState({email: event.target.value})
    }

    updatePasswordField(event) {
        this.setState({password: event.target.value})
    }

    updateLastNameField(event) {
        this.setState({lastname: event.target.value})
    }

    updateNameField(event) {
        this.setState({name: event.target.value})
    }

    updatePasswordCheckerField(event) {
        this.setState({passwordChecker: event.target.value})
    }

    handleSubmit(event) {
        console.log('new datas submitted: ' + JSON.stringify(this.state,1,1) );
        event.preventDefault();  
        fetch("/auth/signup",
        {
            method:  'POST',
            headers:  new  Headers({
                'Content-Type':  'application/json'
            }),
            body:  JSON.stringify(this.state),
            
        })
        .then(res  =>  res.json())
        .then(
            res  =>  this.setState({"flash":  res.flash}),
            err  =>  this.setState({"flash":  err.flash})
            
        )
        
}
   
    render() { 
        return (
            <form onSubmit={this.handleSubmit.bind(this)} className="signup">
            
           <h1> Mes données: { JSON.stringify(this.state,1,1) } </h1>
            
                <input className="inputs" type="email" name="email" placeholder="entrez un email" onChange={ this.updateEmailField.bind(this) } />

                <input className="inputs" type="password" name="password" placeholder="entrez un mot de passe" onChange={ this.updatePasswordField.bind(this) } />
                                
                <input className="inputs" type="password" name="passwordChecker" placeholder="vérifiez votre mot de passe" onChange={ this.updatePasswordCheckerField.bind(this) } />
                
                <input className="inputs" type="text" name="name" placeholder="entrez votre prénom" onChange={ this.updateNameField.bind(this) } />
                
                <input className="inputs" type="text" name="lastName" placeholder="entrez votre nom" onChange={ this.updateLastNameField.bind(this) } />

                <input className="inputs" type="submit" value="Soumettre"/>
            
            </form>
        )
    }
}
 
export default SignUp;





