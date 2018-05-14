import React,{Component} from 'react';

class SignUp extends Component{


  constructor(props){
    super(props);
    this.state={
    email :'balbla@blabla.com',
    password:'aaa',
    validatepassword :'aaa',
    lastname:'Bl',
    name:'La',
    };

  }


  handleChangeEmail =(e)=> {
   this.setState({
     email : e.target.value
   });
 }


  handleChangePassword=(e)=> {
   this.setState({
     password : e.target.value
   });
 }

    handleChangeValidatePassword=(e)=> {
    this.setState({
     validatepassword : e.target.value
   });
 }


  handleChangelastname=(e)=> {
   this.setState({
     lastname : e.target.value
   });
 }

  handleChangename=(e)=> {
   this.setState({
     name : e.target.value
   });
  }



  handleSubmit=(e)=>{

    e.preventDefault();
   console.log(JSON.stringify(this.state,1,1));


   
  }

  render(){
    return(
      <div>
          <h1>{JSON.stringify(this.state,1,1)}</h1>
        
        <form onSubmit={this.handleSubmit}>
          <p> email</p>
          <h1>{this.state.email} </h1>
          <input onChange={this.handleChangeEmail.bind(this)} value={this.state.email}
        type="text"
        id="email"
        
        />
        <p>password</p>
        <h1>{this.state.password}</h1>
          <input onChange={this.handleChangePassword.bind(this)} value={this.state.password}
        id="password"
        type="password"
        />
        <p>validate password</p>
        <h1>{this.state.validatepassword}</h1>
          <input onChange={this.handleChangeValidatePassword.bind(this)} value={this.state.validatepassword}
        id="Vpassword"
        type="password"
        />
         <p>lastname</p>
        <h1>{this.state.lastname}</h1>
          <input onChange={this.handleChangelastname.bind(this)} value={this.state.lastname}
        id="lastname"
        type="text"
        />
         <p>name</p>
         <h1>{this.state.name}</h1>
          <input onChange={this.handleChangename.bind(this)} value={this.state.name}
        id="name"
        type="text"
        />
        <input  type="submit" value="Soumettre"/>
        </form>
      </div>
      
    )
  }
}

export default SignUp;
