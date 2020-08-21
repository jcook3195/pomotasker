// packages
import React from 'react';

// CSS
import classes from './ControlValue.module.scss';

const controlValue = (props) => (
    <span className={classes.ctrl_val}>
        {props.children}
    </span>
);

export default controlValue;