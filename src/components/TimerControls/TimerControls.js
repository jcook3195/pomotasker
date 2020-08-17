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
                controlValue={25} />
            <TimerControl
                label="Break Time" 
                controlValue={5} />
            <TimerControl 
                label="Cycles"
                controlValue={4} />        
        </div>
        <div className={[classes.controls_container, classes.control_buttons].join(' ')}>
            <TimerButtons />
        </div>        
    </Aux>      
);

export default timerControl;