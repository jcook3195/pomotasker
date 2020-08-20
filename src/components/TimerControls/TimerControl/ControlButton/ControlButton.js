// packages
import React from 'react';

// css
import classes from './ControlButton.module.scss';

const controlButton = (props) => (
    <button 
        className={[classes.ctrl_btn, classes[props.cssClass]].join(' ')}
        onClick={props.plusMinus ? props.added : props.removed}
        disabled={props.disabled || props.disableBoth}>
        {props.plusMinus ? '+' : '-'}
    </button>
);

export default controlButton;