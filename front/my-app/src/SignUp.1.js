import React, { Component } from 'react';

class SignUp extends Component {
    constructor(props){
        super(props);
        this.state = {value : 'mail@mail.com'};
        this.handleChange= this.handleChange.bind(this);

    }

    handleChange(nouvelleentree){
        this.setState({value: nouvelleentree.target.value}) 
    }

    render() {
        return (
            <div>
                <h1>{this.state.value}</h1>
                <input type="email" name="email" value={this.state.value} onChange={this.handleChange}/>
            </div>
        )
    }
}


export default SignUp;