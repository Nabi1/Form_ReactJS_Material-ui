import React, {Component} from 'react';
import {TextField, Button, InputLabel, Snackbar} from 'material-ui'; 


class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email : '',
      password : '',
      checkPassWord : '',
      name: '',
      lastname : '',
      flash: '',
      open:false,
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
      password: event.target.value,
    });
  }

 updateCheckPassWordField = (event) => {
    this.setState({
      checkPassWord: event.target.value,
    });
  }
  
 updateFirstNameField = (event) => {
    this.setState({
      name: event.target.value,
    });
  }
   updateLastNameField = (event) => {
    this.setState({
      lastname: event.target.value,
    });
  }


  handleSubmit = (event) => {
        event.preventDefault()
        this.setState({
          open:true
        })
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
        <h2>
         Sign Up !
        </h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <InputLabel htmlFor="">Email </InputLabel>
            <TextField 
             id="name"
              type="email"
              className="form-control" 
              name="email" 
              placeholder="Email" 
              onChange= {this.updateEmailField}
              fullWidth
              margin='normal'
            />
          </div>
          <div>
            {/* Mot de passe */}
            <InputLabel htmlFor="">New Password </InputLabel>
            <TextField type="password" 
            className="form-control" 
            aria-describedby="emailHelp" 
            placeholder="New password" 
            onChange= {this.updatePassWordField}
            fullWidth
           />
          </div>
          <div>
           {/* Vérification du mot de passe */}
            <InputLabel htmlFor="">Check Password </InputLabel>
            <TextField type="password" 
              className="form-control" 
              aria-describedby="emailHelp" 
              placeholder="Enter the same password" 
              onChange= {this.updateCheckPassWordField}
              fullWidth
            />
           </div>
           <div>
            {/* Prénom */}
            <InputLabel htmlFor="">First Name </InputLabel>
             <TextField 
              type="text"
              className="form-control" 
              name="name" 
              placeholder="Jean" 
              onChange= {this.updateFirstNameField}
              fullWidth
              />
            </div>
            <div>
             {/* Nom */}
             <InputLabel htmlFor="">Last name </InputLabel>
              <TextField  type="text" className="form-control"  name="Lastname" 
                placeholder="Dujardin"  onChange= {this.updateLastNameField}
                fullWidth
              />
            </div>
            <div>
              <Button type='submit' value='Submit' variant="raised" 
              color="secondary">Submit</Button>
            </div>
          </form>
          <Snackbar open={this.state.open} message={this.state.flash} 
            autoHideDuration={4000}
          >
          </Snackbar>
        </div>
    );
  }
}

export default SignUp;