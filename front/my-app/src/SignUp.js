import React, {Component} from 'react';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
        this.updateEmailField = this.updateEmailField.bind(this);
    }

    updateEmailField(event) {
        this.setState({email: event.target.value});
    }

    render() {
        return (
            <div style={{color: 'red'}}>
                <h1>{this.state.email}</h1><input type="email" name="email" value={this.state.email} onChange={this.updateEmailField}/>
            </div>
        );
    }
}

export default SignUp;
