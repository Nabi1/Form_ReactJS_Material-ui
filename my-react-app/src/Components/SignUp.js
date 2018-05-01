 import React, {Component} from 'react';

class SignUp extends Component {
  constructor(props) {
    super(props);
/*
========================
======== STATE =========
========================
*/
    this.state = {
      email : '',
      passWord : '',
      checkPassWord : '',
      firstName: '',
      lastName : ''
    };
  }
/*
==========================
======== FONCTIONS =======
==========================
*/
  updateEmailField(event) {
    this.setState({
      email: event.target.value,
    });
  }

 updatePassWordField(event) {
    this.setState({
      passWord: event.target.value,
    });
  }

 updateCheckPassWordField(event) {
    this.setState({
      checkPassWord: event.target.value,
    });
  }

 updateFirstNameField(event) {
    this.setState({
      firstName: event.target.value,
    });
  }
   updateLastNameField(event) {
    this.setState({
      lastName: event.target.value,
    });
  }

  handleSubmit =(event) => {
    event.preventDefault()
    console.log(JSON.stringify(this.state,1,1))
}
/*
==========================
======== RENDER ==========
==========================
*/
  render() {
    return(
      <div>
        <h1>
          {JSON.stringify(this.state,1,1)}
        </h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="">Email </label>
            <input 
              type="email"
              className="form-control" 
              name="email" 
              placeholder="Email" 
              onChange= {this.updateEmailField.bind(this)}
            />
          </div>
          <div>
            {/* Mot de passe */}
            <label htmlFor="">New Password </label>
            <input type="password" 
            className="form-control" 
            aria-describedby="emailHelp" 
            placeholder="New password" 
            onChange= {this.updatePassWordField.bind(this)}
           /* onChange={  this.formUpdate }*/
           />
          </div>
          <div>
           {/* Vérification du mot de passe */}
            <label htmlFor="">Check Password </label>
            <input type="password" 
              className="form-control" 
              aria-describedby="emailHelp" 
              placeholder="Enter the same password" 
              onChange= {this.updateCheckPassWordField.bind(this)}
            /* onChange={ this.formUpdate }*/
            />
           </div>
           <div>
            {/* Prénom */}
            <label htmlFor="">First Name </label>
             <input 
              type="text"
              className="form-control" 
              name="email" 
              placeholder="Jean" 
              onChange= {this.updateFirstNameField.bind(this)}
              />
            </div>
            <div>
             {/* Nom */}
             <label htmlFor="">Last name </label>
              <input 
                type="text"
                className="form-control" 
                name="email" 
                placeholder="Dujardin" 
                onChange= {this.updateLastNameField.bind(this)}
              />
            </div>
            <div>
              <input type='submit' value='Submit'></input>
            </div>
          </form>
        </div>
    );
  }
}

export default SignUp;