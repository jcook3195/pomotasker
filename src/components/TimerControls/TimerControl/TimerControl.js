// packages
import React from 'react';

// components
import ControlLabel from './ControlLabel/ControlLabel';
import ControlButton from './ControlButton/ControlButton';
import ControlValue from './ControlValue/ControlValue';

// css
import classes from './TimerControl.module.scss';

const timerControl = (props) => (
    <div className={classes.control}>
        <ControlLabel>{props.label}</ControlLabel>
        <h3>
            <ControlButton 
                plusMinus={false} 
                cssClass="minus" /> 
            <ControlValue>{props.controlValue}</ControlValue> 
            <ControlButton 
                plusMinus={true}
                cssClass="plus" />
        </h3>        
    </div>
       
);

export default timerControl;