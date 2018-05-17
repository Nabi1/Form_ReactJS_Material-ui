import React, {Component} from 'react';

class SignUp extends Component {
    constructor(props){
		super(props);
		this.state ={
            email:"test@test.com",
            password : "monPassw0rd",
            name : "James",
            lastname : "Bond",
            flash : ""
        };
        this.handleChange= this.handleChange.bind(this);
    }
    
    handleChange(e){this.setState({[e.target.name]:e.target.value})};
       
    handleSubmit(e){
        console.log(JSON.stringify(this.state,1,1));
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
        ) ;  e.preventDefault(); 
    }

    render(){
        return(
            <div>
                <h1>{JSON.stringify(this.state,1,1)}</h1>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input type="email"  name="email" onChange={this.handleChange}/> 
                    <input type="password"  name="password" onChange={this.handleChange}/> 
                    <input type="text"  name="name" onChange={this.handleChange}/> 
                    <input type="text"  name="lastname" onChange={this.handleChange}/>
                    <input type="submit" value="Soumettre"/>
                </form>
            </div>
        );
    }
}
export default SignUp;

