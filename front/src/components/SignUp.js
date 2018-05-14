import React, { Component } from "react";

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            passwordbis: "",
            firstname: "",
            lastname: "",
            flash: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    toString() {
        return JSON.stringify(this.state, 1, 1);
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state);
        fetch("/auth/signup", {
            method: "POST",
            headers: new Headers({
                "Content-Type": "application/json"
            }),
            body: JSON.stringify(this.state)
        })
            .then(res => res.json())
            .then(
                res => this.setState({ flash: res.flash }),
                err => this.setState({ flash: err.flash })
            );
    }

    render() {
        return (
            <form method="post" onSubmit={this.handleSubmit}>
                {/* <h1>{this.toString()}</h1> */}
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={this.state.email}
                    onChange={this.handleChange}
                />
                <br />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.handleChange}
                />
                <br />
                <input
                    type="password"
                    name="passwordbis"
                    placeholder="Password confirmation"
                    value={this.state.passwordbis}
                    onChange={this.handleChange}
                />
                <br />
                <input
                    type="text"
                    name="firstname"
                    placeholder="First name"
                    value={this.state.firstname}
                    onChange={this.handleChange}
                />
                <br />
                <input
                    type="text"
                    name="lastname"
                    placeholder="Last name"
                    value={this.state.lastname}
                    onChange={this.handleChange}
                />
                <br />
                <input type="submit" value="Envoyer" />
            </form>
        );
    }
}

export default SignUp;
