import React from 'react';

class SignUp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {mail : 'mail'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return(
        <h1>test@test.fr</h1>
        <input onChange={this.handleChange} type="email" name="email"/>
    );
  }
}

ReactDOM.render(
  <SignUp />,
  document.getElementById('root')
);

export default SignUp;