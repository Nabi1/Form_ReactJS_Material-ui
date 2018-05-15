import React, { Component } from 'react';
import './App.css';
import Formulaire from './Formulaire';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';




class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
          <Formulaire />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;