// packages
import React from 'react';

// components
import ControlLabel from '../ControlLabel/ControlLabel';
import ControlButton from '../ControlButton/ControlButton';
import ControlValue from '../ControlValue/ControlValue';

// css
import classes from './TimerControl.module.scss';

const timerControl = (props) => (
    <div className={classes.control}>
        <ControlLabel>{props.label}</ControlLabel>
        <h2>
            <ControlButton plusMinus={false}></ControlButton> <ControlValue>{props.controlValue}</ControlValue> <ControlButton plusMinus={true}></ControlButton>
        </h2>        
    </div>
       
);

export default timerControl;