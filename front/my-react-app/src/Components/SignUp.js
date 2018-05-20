import React, {Component} from 'react';
import {TextField, Button, InputLabel, Snackbar} from 'material-ui'; 
import AlertDialogSlide from './AlertDialogSlide'

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
      alert:false,
      messageDialogue:[],
    };
  }
/*
======== FONCTIONS =======
*/
formSend = () => {
  let whatIsMissing = [];
  if (this.state.email===''){
    whatIsMissing.push('Email adresse is needed')
  }
  if (this.state.password===''){
    whatIsMissing.push('Password is needed')
  }
  if (this.state.password!==this.state.checkPassWord){
    whatIsMissing.push('Please enter the same password')
  }
  if (this.state.name===''){
    whatIsMissing.push('Name adresse is needed')
  }
  if (this.state.lastname===''){
    whatIsMissing.push('Lastname adresse is needed')
  }
if(whatIsMissing.length >0){
  this.showDialogueBox(whatIsMissing);
  // what is that ?
  return false;
}
  else {
    return true;
  }
}

showDialogueBox = whatIsMissing =>{
  this.setState({
    messageDialogue:whatIsMissing,
    alert:true
  })
}

hideDialogueBox = () => {
  this.setState({ 
    alert: false, 
    messageDialogue: [] });
}

handleToogle = () => {
  this.setState({ open: !this.state.open });
};


handleSubmit = (event) => {
  event.preventDefault()
  if(this.formSend()){
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
      "flash": res.flash,
      open:true
    }),
    err => this.setState({
      "flash": err.flash
    })
  )
} else {
  this.setState({"flash": "Form not conform", open:true})
}    
}

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
              <Button onClick={this.handleSubmit} type='submit' value='Submit' variant="raised" 
              color="secondary">Submit</Button>
            </div>
          </form>
          <Snackbar 
            open={this.state.open} 
            message={this.state.flash} 
            autoHideDuration={4000}
            onClose= {this.handleToogle}
          >
          </Snackbar>
          <AlertDialogSlide 
            showDialogueBox={this.state.alert} 
            hideDialogueBox={this.hideDialogueBox} 
            messageDialogue={this.state.messageDialogue} 
          />
        </div>
    );
  }
}

export default SignUp;