import React, {Component} from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Snackbar from '@material-ui/core/Snackbar';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import Slide from '@material-ui/core/Slide';


const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    flexBasis: 70,
  },
  button: {
   margin: theme.spacing.unit,
 },
 leftIcon: {
   marginRight: theme.spacing.unit,
 },
 rightIcon: {
   marginLeft: theme.spacing.unit,
 },
 iconSmall: {
   fontSize: 20,
 },
});

function TransitionLeft(props) {
  return <Slide direction="left" {...props} />;
}

class SignUp extends Component {
  constructor(props) {
		super(props);
		this.state = {
      lastname: '',
      name: '',
			email: '',
      password: '',
      passwordcheck: '',
      flash: '',
      showPassword: false,
      open: false,
      Transition: null
		}
	}
  updateLastnameField = (event) => {
    this.setState({
      lastname: event.target.value
    })
  }
  updateFirstnameField = (event) => {
    this.setState({
      name: event.target.value
    })
  }
  updateEmailField = (event) => {
    this.setState({
      email: event.target.value
		})
  }
  updatePasswordField = (event) => {
    this.setState({
      password: event.target.value
		})
  }
  updatePasswordcheckField = (event) => {
    this.setState({
      passwordcheck: event.target.value
		})
  }

  handleSubmit = (e) => {
    //console.log(JSON.stringify(this.state,1,1))
    e.preventDefault();
    fetch("/auth/signup", {
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
          "lastname": '',
          "name": '',
    			"email": '',
          "password": '',
          "passwordcheck": ''
        }),
        err  =>  this.setState({"flash":  err.flash})
    )
  }

  handleClickShowPassword = () => {
    this.setState({ showPassword: !this.state.showPassword });
  };

  handleClick = Transition => () => {
      this.setState({ open: true, Transition });
    };

    handleClose = () => {
      this.setState({ open: false });
    };

  render() {
    const { classes } = this.props;

  	return(
      <div>
        {/*<p>{JSON.stringify(this.state,1,1)}</p>*/}
        <h1>Inscription</h1>
        <Snackbar
          open={this.state.open}
          onClose={this.handleClose}
          TransitionComponent={this.state.Transition}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={this.state.flash}
        />
        <form onSubmit={this.handleSubmit}>
            <FormGroup>
              <TextField
                required
                id="lastname"
                label="Nom"
                value={this.state.lastname}
                onChange={this.updateLastnameField.bind(this)}
                margin="normal"
              />

              <TextField
                required
                id="name"
                label="Prénom"
                value={this.state.name}
                onChange={this.updateFirstnameField.bind(this)}
                margin="normal"
              />

              <TextField
                required
                id="email"
                label="Email"
                value={this.state.email}
                onChange={this.updateEmailField.bind(this)}
                margin="normal"
                autoComplete="email"
              />

              <FormControl className={classNames(classes.margin, classes.textField)}>
                <InputLabel htmlFor="password">Mot de passe</InputLabel>
                <Input
                  id="password"
                  type={this.state.showPassword ? 'text' : 'password'}
                  value={this.state.password}
                  onChange={this.updatePasswordField.bind(this)}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="Toggle password visibility"
                        onClick={this.handleClickShowPassword}
                        onMouseDown={this.handleMouseDownPassword}
                      >
                        {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>

              <FormControl className={classNames(classes.margin, classes.textField)}>
                <InputLabel htmlFor="password">Vérification du mot de passe</InputLabel>
                <Input
                  id="passwordcheck"
                  type={this.state.showPassword ? 'text' : 'password'}
                  value={this.state.passwordcheck}
                  onChange={this.updatePasswordcheckField.bind(this)}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="Toggle password visibility"
                        onClick={this.handleClickShowPassword}
                        onMouseDown={this.handleMouseDownPassword}
                      >
                        {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
             </FormGroup>
             <Button type="submit" className={classes.button} variant="raised" color="primary" onClick={this.handleClick(TransitionLeft)}>
               S'inscrire
               <Icon className={classes.rightIcon}>send</Icon>
             </Button>
        </form>
      </div>
	  );
  }
}

SignUp.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SignUp);
