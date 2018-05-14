import React, { Component } from 'react';

class SignUp extends Component{
  constructor(props){
    super(props);
    this.state={
      email: '',
      password: '',
      passwordCheck: '',
      name:'',
      lastname:'',
      flash:''
    }
    this.updateEmailField = this.updateEmailField.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  updateEmailField(event){
    this.setState({value: event.target.value})
  }
  handleChange(e){
   this.setState({[e.target.name]: e.target.value});
 }
  handleSubmit(e){
    e.preventDefault();
    console.log(this.state);
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
  render(){
    return(
      <div>
        <h1>{JSON.stringify(this.state,1,1)}</h1>
        <form onSubmit={this.handleSubmit}>
          <label>Email </label>
          <input type="email" name="email" onChange={this.handleChange}/>
          <label>Password </label>
          <input type="password" name="password" onChange={this.handleChange}/>
          <label>Password again </label>
          <input type="password" name="passwordCheck" onChange={this.handleChange}/>
          <label>Name </label>
          <input type="text" name="name" onChange={this.handleChange}/>
          <label>Lastname </label>
          <input type="text" name="lastname" onChange={this.handleChange}/>
          <input type="submit" value="Soumettre"/>
        </form>
        <p>{this.state.flash}</p>
    </div>
    )
  }
}

export default SignUp;
