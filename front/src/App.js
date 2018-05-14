import React, { Component } from 'react';
import { Route, BrowserRouter, Switch} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import SignUp from './Components/SignUp.js';
import Home from './Components/Home'
import History from './Components/History'

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
            <Route exact path="/" component={SignUp} />
            <Route path="/History" component={History} />
            <Route path="/Home" component={Home} />
          </Switch>
        </BrowserRouter>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
