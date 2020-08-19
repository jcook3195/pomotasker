// packages
import React from 'react';

// hoc
import Aux from '../../hoc/Aux/Aux';

// components
import TimerControl from './TimerControl/TimerControl';
import TimerButtons from './TimerButtons/TimerButtons';

// css
import classes from './TimerControls.module.scss';

const timerControl = (props) => (
    <Aux>
        <div className={classes.controls_container}>
            <TimerControl 
                label="Work Time"
                controlValue={props.work} />
            <TimerControl
                label="Break Time" 
                controlValue={props.break} />
            <TimerControl 
                label="Cycles"
                controlValue={props.cycles} />        
        </div>
        <div className={[classes.controls_container, classes.control_buttons].join(' ')}>
            <TimerButtons />
        </div>        
    </Aux>      
);

export default timerControl;