// packages
import React from 'react';

// css
import classes from './Button.module.scss';

const button = (props) => (
    <button 
        disabled={props.disabled}
        className={[classes.btn, classes[props.btnType]].join(' ')}
        onClick={props.clicked}>
        {props.children}
    </button>
);

export default button;