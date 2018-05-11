import React, {Component} from 'react';

class SignUp extends Component {
    constructor(props){
		super(props);
		this.state ={
            email:"test@test.com",
            password : "monPassw0rd",
            passwordbis : "monPassw0rdbis",
            name : "James",
            lastname : "Bond"
        };
        this.handleSubmit= this.handleSubmit.bind(this);
    }
    
    SwitchEmail(e){this.setState({email:e.target.value})};
    SwitchPassword(e) {this.setState({password:e.target.value})};
    SwitchPasswordbis(e) {this.setState({passwordbis:e.target.value})};
    SwitchName(e) {this.setState({name:e.target.value})};
    SwitchLastname(e){this.setState({lastname:e.target.value})};
       
    handleSubmit(e){
        e.preventDefault();
        console.log(JSON.stringify(this.state,1,1));    
    }

    render(){
        return(
            <div>
                <h1>{JSON.stringify(this.state,1,1)}</h1>
                <form onSubmit={this.handleSubmit}>
                    <input type="email"  name="email" onChange={this.SwitchEmail.bind(this)}/> 
                    <input type="password"  name="password"onChange={this.SwitchPassword.bind(this)}/> 
                    <input type="password"  name="passwordbis" onChange={this.SwitchPasswordbis.bind(this)}/> 
                    <input type="text"  name="name" onChange={this.SwitchName.bind(this)}/> 
                    <input type="text"  name="lastname" onChange={this.SwitchLastname.bind(this)}/>
                    <input type="submit" value="Soumettre"/>
                </form>
            </div>
        );
    }
}

export default SignUp;

