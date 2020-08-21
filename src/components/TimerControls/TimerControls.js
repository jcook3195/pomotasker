// packages
import React, { Component } from 'react';

// hoc
import Aux from '../../hoc/Aux/Aux';

// components
import TimerControl from './TimerControl/TimerControl';
import TimerButtons from './TimerButtons/TimerButtons';

// css
import classes from './TimerControls.module.scss';

class TimerControls extends Component {    
    render () {
        const controls = [
            { label: 'Work Time', value: this.props.work, type: 'workTime'},
            { label: 'Break Time', value: this.props.break, type: 'breakTime'},
            { label: 'Cycles', value: this.props.cycles, type: 'cycles'}
        ];

        return (
            <Aux>
                <div className={classes.controls_container}>
                    {controls.map(ctrl => (
                        <TimerControl 
                            key={ctrl.label}
                            label={ctrl.label}
                            controlValue={ctrl.value}
                            type={ctrl.type}
                            added={this.props.valueAdded}
                            removed={this.props.valueRemoved}
                            disabled={this.props.disabled[ctrl.type]}
                            disableBoth={this.props.disableBoth} />
                    ))}      
                </div>
                <div className={[classes.controls_container, classes.control_buttons].join(' ')}>
                    <TimerButtons
                        start={() => this.props.startTimer()}
                        pause={() => this.props.pauseTimer()}
                        reset={() => this.props.resetTimer()}
                        disableStart={this.props.disableStart}
                        disablePause={this.props.disablePause}
                        disableReset={this.props.disableReset} />
                </div>        
            </Aux>  
        );
    }
}

export default TimerControls;