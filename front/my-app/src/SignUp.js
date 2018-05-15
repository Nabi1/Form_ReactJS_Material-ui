import React, { Component } from 'react';

class SignUp extends Component {
    constructor(props){
        super(props);
        this.state = {
            email : "",
            name : "",
            lastname : "",
            password : "",
            flash : ""
        };
        this.handleChange= this.handleChange.bind(this);

    }

    handleChange(event){
        this.setState({[event.target.name]:event.target.value}) 
    }

    handleSubmit(event){
        // console.log('A name was submitted'+ JSON.stringify(this.state,1,1) );
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
                
            ); event.preventDefault();
    }

    render() {
        return (
            <div>
                {/* <h1>{JSON.stringify(this.state,1,1)}</h1> */}
                <h1>{this.state.flash}</h1>
                <form onSubmit={this.handleSubmit.bind(this)}>
                <input type="email" name="email" value={this.state.email} onChange={this.handleChange}/><br/>
                <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/><br/>
                <input type="text" name="lastname" value={this.state.lastname} onChange={this.handleChange}/><br/>
                <input type="text" name="password" value={this.state.password} onChange={this.handleChange}/><br/>
                <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}


export default SignUp;