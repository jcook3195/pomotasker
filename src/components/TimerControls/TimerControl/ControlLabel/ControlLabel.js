// packages
import React from 'react';

// CSS
import classes from './ControlLabel.module.scss';

const controlLabel = (props) => (
    <h2 className={classes.control_label}>{props.children}</h2>
);

export default controlLabel;