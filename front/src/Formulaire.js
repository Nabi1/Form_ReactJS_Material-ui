import React, { Component } from 'react';

class Formulaire extends Component {
    constructor(props){
        super(props);
        this.state= {
            firstName:'',
            lastName:'',
            email:'',
            password: '',
            confirmpassword:'',
        }
    }
    updateFirstnameField = (e) => {
        this.setState({
        firstName: e.target.value
        })
      }
      updateLastnameField = (e) => {
        this.setState({
          lastName: e.target.value
        })
      }
      updateEmailField = (e) => {
        this.setState({
          email: e.target.value
            })
      }
      updatePasswordField = (e) => {
        this.setState({
          password: e.target.value
            })
      }
      updateConfirmPasswordField = (e) => {
        this.setState({
          confirmpassword: e.target.value
            })
      }
    
      handleSubmit (e){
        e.preventDefault();
        console.log(JSON.stringify(this.state,1,1));
      }


render() {  
    return (
            <form onSubmit={this.handleSubmit.bind(this)}> 
                <h1>{JSON.stringify(this.state,1,1)} </h1> 
                <input
                    name= 'firstName'
                    placeholder='Firstname'
                    type="text"
                    onChange={this.updateFirstnameField.bind(this)}
                />
                <br />
                <input
                    name="lastName"
                    placeholder='Lastname'
                    type="text"
                    onChange={this.updateLastnameField.bind(this)}
                />
                <br />
                <input
                    name="email"
                    placeholder='Email'
                    type="email"
                    onChange={this.updateEmailField.bind(this)}
                />
                <br />
                <input
                    name="password"
                    placeholder='Password'
                    type="password"
                    onChange={this.updatePasswordField.bind(this)}
                />
                <br />
                <input
                    name="confirm_password"
                    placeholder='Confirm Password'
                    type="password"
                    onChange={this.updateConfirmPasswordField.bind(this)}
                />
                <br />
                <input type='submit' value="Submit" />
             
            </form>
        );
    } 
}
export default Formulaire;