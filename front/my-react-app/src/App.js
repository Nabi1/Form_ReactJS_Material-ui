import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SignUp from './Components/SignUp'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      response : ''
    }
  }
/*
===== Mes FONCTIONS ====
*/
    componentDidMount() {
        this.callApi()
            .then(res => this.setState({
                response: res.express
            }))
            .catch(err => console.log(err));
    }

    callApi = async() => {
        const response = await fetch('/signup');
        const body = await response.json();

        if (response.status !== 200) throw Error(body.message);

        return body;
    };

  render() {
    // la const ci-dessous destructure response 
    // cela me mettra de préfixer mes state avec this.state 
    const {response} = this.state
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">This is L'Odyssée d'Homer</h1>
        </header>
        <h1>{response}</h1>
         <SignUp />
      </div>
    );
  }
}

export default App;

