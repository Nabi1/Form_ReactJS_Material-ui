import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import PositionedSnackbar from './SnackBar';
import AlertDialogSlide from './AlertDialogSlide';

class SignUp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      checkPassword: "",
      name: "",
      lastname: "",
      flash: "",
      validate: false,
      open:false,
      alert: false,
      message: []
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  formValidator = () => {
    let missing = [];
    const mailValidator = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (this.state.email === '') {missing.push('WTF whith you mail address?')}
    if (!mailValidator.test(this.state.email)) {missing.push('I need your real mail adress')}
    if (this.state.name === '') {missing.push('Give me your name, dude')}
    if (this.state.lastname === '') {missing.push('Give me your lastname, dude') }
    if (this.state.password === '') {missing.push('You need a F***ing password, dude') }
    if (this.state.password !== this.state.checkPassword) {missing.push('Train your fingers, you missed to copy twice a time you F...... password !')}
    if (missing!=='') {
      this.showAlert(missing);
      return false;
    } else {
      return true;
    }
  }

  handleToogle = () => {
    this.setState({ open: !this.state.open });
  };

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value
    });
  };

  showAlert = (missing) => {
    this.setState({ alert: true, message:missing });
  };

  hideAlert = () => {
    this.setState({ alert: false, message: [] });
  };

  handleSubmit(e) {
    e.preventDefault();
    if(this.formValidator()) {
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
          res  =>  this.setState({
            "flash":  res.flash,
            open:true,
            email: "",
            password: "",
            checkPassword: "",
            name: "",
            lastname: "",
            validate: false
          }),
          err  =>  this.setState({"flash":  err.flash})
      );
    } else {
      this.setState({flash: "Check your form Dude !",open:true})
    }
  }

  render() {
    return(
      <div className="SignUp">
        <h1>
          Inscription
        </h1>
        <div>
        <PositionedSnackbar message={this.state.flash} open={this.state.open} handleToogle={this.handleToogle} anchorOrigin={{vertical:'top', horizontal:'left'}} />
        </div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Entrez votre adresse mail:
          <br />
            <TextField onChange={this.handleChange} type="email" name="email" value={this.state.email} />
          </label>
          <br />
          <label>
            Entrez votre mot de passe:
          <br />
            <TextField onChange={this.handleChange} type="password" name="password" value={this.state.password} />
          </label>
          <br />
          <label>
            Confirmez votre mot de passe:
          <br />
            <TextField onChange={this.handleChange} type="password" name="checkPassword" value={this.state.checkPassword} />
          </label>
          <br />
          <label>
            Entrez votre prénom:
          <br />
            <TextField onChange={this.handleChange} type="text" name="name" value={this.state.name} />
          </label>
          <br />
          <label>
            Entrez votre nom de famille:
          <br />
            <TextField onChange={this.handleChange} type="text" name="lastname" value={this.state.lastname} />
          </label>
          <br />
            <Button onClick={this.handleSubmit} color="primary" variant="raised">
              Submit
            </Button>
        </form>
        <AlertDialogSlide showAlert={this.state.alert} hideAlert={this.hideAlert} message={this.state.message} />
      </div>
    );
  }
}

SignUp.propTypes = {
  flash: PropTypes.object
}

export default SignUp;