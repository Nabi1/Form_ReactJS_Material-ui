import React from 'react';

const Label = (props) => {
    let styleLabel = {
        color: "red"
      };
    return <label 
    style={styleLabel}>
    {props.name}
    </label>
}


export default Label;