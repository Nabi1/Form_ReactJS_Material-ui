import React, { Component } from "react";
import logo from "../img/logo3.svg";
import "../style/App.css";
import SignUp from "../components/SignUp";

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">BIOHAZARD</h1>
                </header>
                <div className="SignUp">
                    <SignUp />
                </div>
            </div>
        );
    }
}

export default App;
