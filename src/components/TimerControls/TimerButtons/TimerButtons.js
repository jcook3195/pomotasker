// packages
import React from 'react';

// hoc
import Aux from '../../../hoc/Aux/Aux';

// components
import Button from '../../UI/Button/Button';

// css
import classes from './TimerButtons.module.scss';

const timerButtons = (props) => (
    <Aux>
        <div className={classes.timer_button}>
            <Button
                disabled={props.disableStart}
                btnType="primary"
                clicked={props.start}>
                    Start Timer
            </Button>
        </div>
        <div className={classes.timer_button}>
            <Button
                disabled={props.disablePause}
                btnType="secondary"
                clicked={props.pause}>
                    Pause Timer
            </Button>
        </div>
        <div className={classes.timer_button}>
            <Button
                disabled={props.disableReset}
                btnType="primary"
                clicked={props.reset}>
                    Reset Timer
                </Button>
        </div>
    </Aux>    
);

export default timerButtons;