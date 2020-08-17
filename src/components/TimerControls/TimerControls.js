// packages
import React from 'react';

// components
import TimerControl from './TimerControl/TimerControl';

// css
import classes from './TimerControls.module.scss';

const timerControl = (props) => (
    <div className={classes.controls_container}>
        <TimerControl 
            label="Work Time"
            controlValue={25} />
        <TimerControl
            label="Break Time" 
            controlValue={5} />
        <TimerControl 
            label="Cycles"
            controlValue={4} />
    </div>   
);

export default timerControl;