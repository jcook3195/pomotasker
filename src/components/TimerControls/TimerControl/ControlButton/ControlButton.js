// packages
import React from 'react';

// css
import classes from './ControlButton.module.scss';

const controlButton = (props) => (
    <span className={[classes.ctrl_btn, classes[props.cssClass]].join(' ')}>
        {props.plusMinus ? '+' : '-'}
    </span>
);

export default controlButton;