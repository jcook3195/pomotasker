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
                disabled={false}
                btnType="primary"
                clicked={() => console.log('clicked')}>
                    Start Timer
            </Button>
        </div>
        <div className={classes.timer_button}>
            <Button
                disabled={false}
                btnType="secondary"
                clicked={() => console.log('clicked')}>
                    Pause Timer
            </Button>
        </div>
    </Aux>    
);

export default timerButtons;