// packages
import React from 'react';

// css
import classes from './Button.module.scss';

const button = (props) => (
    <a 
        disabled={props.disabled}
        className={[classes.btn, classes[props.btnType]].join(' ')}
        onClick={props.clicked}>
        {props.children}
    </a>
);

export default button;