import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SignUp from './SignUp.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import MyTimer from './MyTimer.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
          <SignUp />
        </MuiThemeProvider>
        {/* <MyTimer /> */}
      </div>
    );
  }
}

export default App;
