 import React, {Component} from 'react';

class SignUp extends Component {
  constructor(props) {
    super(props);
/*
======== STATE =========
*/
    this.state = {
      email : '',
      passWord : '',
      checkPassWord : '',
      firstName: '',
      lastName : '',
      flash: '',
    };
  }
/*
======== FONCTIONS =======
*/

updateEmailField = (event) => {
    this.setState({
      email: event.target.value,
    });
  }

 updatePassWordField = (event) => {
    this.setState({
      passWord: event.target.value,
    });
  }

 updateCheckPassWordField = (event) => {
    this.setState({
      checkPassWord: event.target.value,
    });
  }

 updateFirstNameField = (event) => {
    this.setState({
      firstName: event.target.value,
    });
  }
   updateLastNameField = (event) => {
    this.setState({
      lastName: event.target.value,
    });
  }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log(JSON.stringify(this.state, 1, 1))
        fetch("/auth/signup", {
                method: 'POST',
                headers: new Headers({
                    'Content-Type': 'application/json'
                }),
                body: JSON.stringify(this.state),
            })
            .then(res => res.json())
            .then(
                res => this.setState({
                    "flash": res.flash
                }),
                err => this.setState({
                    "flash": err.flash
                })
            )

    }
/*
======== RENDER ==========
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
              onChange= {this.updateEmailField}
            />
          </div>
          <div>
            {/* Mot de passe */}
            <label htmlFor="">New Password </label>
            <input type="password" 
            className="form-control" 
            aria-describedby="emailHelp" 
            placeholder="New password" 
            onChange= {this.updatePassWordField}
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
              onChange= {this.updateCheckPassWordField}
            /* onChange={ this.formUpdate }*/
            />
           </div>
           <div>
            {/* Prénom */}
            <label htmlFor="">First Name </label>
             <input 
              type="text"
              className="form-control" 
              name="firstName" 
              placeholder="Jean" 
              onChange= {this.updateFirstNameField}
              />
            </div>
            <div>
             {/* Nom */}
             <label htmlFor="">Last name </label>
              <input 
                type="text"
                className="form-control" 
                name="LastName" 
                placeholder="Dujardin" 
                onChange= {this.updateLastNameField}
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