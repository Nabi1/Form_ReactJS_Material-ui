import React, { Component } from 'react';
import { Route, BrowserRouter, Switch} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import SignUp from './SignUp.js';
import Home from './Home'
import History from './History'

class App extends Component {

//Render the app
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to the Bendo</h1>
        </header>


        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/History" component={History} />
          </Switch>
        </BrowserRouter>
        <div>
          <SignUp />
        </div>
      </div>
    );
  }
}

export default App;
