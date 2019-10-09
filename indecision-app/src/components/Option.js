import React from 'react';

const Option = (props) => (
    <li>
        {props.Optiontext}
        {" "}
        <button onClick={() => {props.handleDeleteOption(props.Optiontext)}}>Remove</button>
    </li>
);

export default Option;
