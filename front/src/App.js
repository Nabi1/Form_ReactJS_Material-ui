import React, { Component } from 'react';
import { Route, BrowserRouter, Switch} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import SignIn from './Components/SignIn.js';
import SignUp from './Components/SignUp.js';
import Home from './Components/Home.js'
import Profile from './Components/Profile.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to the Bendo</h1>
        </header>
        <MuiThemeProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={SignIn} />
            <Route path="/Profile" component={Profile} />
            <Route path="/Home" component={Home} />
            <Route path="/SignUp" component={SignUp} />
            <Route path="/SignIn" component={SignIn} />
          </Switch>
        </BrowserRouter>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
