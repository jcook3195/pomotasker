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
        <h3 className={classes.control_value}>
            <ControlButton 
                plusMinus={false}
                added={() => props.added(props.type)} 
                removed={() => props.removed(props.type)}
                cssClass="minus"
                disabled={props.disabled} 
                disableBoth={props.disableBoth} /> 
            <ControlValue>{props.controlValue}</ControlValue> 
            <ControlButton 
                plusMinus={true}
                added={() => props.added(props.type)} 
                removed={() => props.removed(props.type)}
                addRemove={props.added}
                cssClass="plus"
                disabled={props.disableBothButtons} 
                disableBoth={props.disableBoth} />
        </h3>        
    </div>
       
);

export default timerControl;