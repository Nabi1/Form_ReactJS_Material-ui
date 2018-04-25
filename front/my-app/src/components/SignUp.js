import React, {Component} from 'react';

class SignUp extends Component {
    constructor(props){
		super(props);
		this.state ={email:"test@test.com"};
    }
    
    SwitchEmail(e){
        this.setState({email:e.target.value})
    }


  render(){
    return(
        <div>
            <h1>{this.state.email}</h1>
            <input type="email"  name="email" email={this.state.email} onChange={this.SwitchEmail.bind(this)}/> 
        </div>
   
    );
  }
}


export default SignUp;