import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';

const Input = (props) => {
    let style = {
        display: "block",
        margin: 'auto'
      };
    return <TextField 
    type={props.type}
    name={props.name}
    style={style} 
    placeholder={props.placeholder}
    onChange={props.change}
    errorText="This field is required"
    required />
}

Input.propTypes = {
    change: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired
}

export default Input;