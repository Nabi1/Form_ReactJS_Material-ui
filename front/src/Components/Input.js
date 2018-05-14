import React from 'react';
import PropTypes from 'prop-types';

const Input = (props) => {
    let style = {
        display: "block",
        margin: 'auto',
        marginBottom: 15
      };
    return <input 
    type={props.type}
    name={props.name}
    style={style} 
    placeholder={props.placeholder}
    onChange={props.change}
    required />
}

Input.propTypes = {
    change: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired
}

export default Input;