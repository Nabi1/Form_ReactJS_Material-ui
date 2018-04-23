import React, { Component } from 'react';
import logo from './Homer.png';
import './App.css';
import SignUp from './SignUp';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="Homer" alt="Homer love React" />
          <h1 className="App-title">The Homer Odissey</h1>
        </header>
        <p className="App-intro">
          Take some duff beer and donuts and follow me !
        </p>
        <SignUp />
        <Footer />
      </div>
    );
  }
}

export default App;
