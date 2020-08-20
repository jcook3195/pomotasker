// packages
import React, { Component } from 'react';
// import axios from '../../axios-timer';
import { connect } from 'react-redux';

// hoc
import Aux from '../../hoc/Aux/Aux';

// components
import Timer from '../../components/UI/Timer/Timer';
import TimerControls from '../../components/TimerControls/TimerControls';
import Loader from '../../components/UI/Loader/Loader';

// misc
import * as actions from '../../store/actions/index';

class Pomo extends Component {
    componentDidMount() {
        this.props.onSetTimer();       
    }

    componentDidUpdate() {
        if(this.props.timerMins === 0 && this.props.timerSeconds === 0) {
            this.stopTimer();
        }
    }

    stopTimer = () => {
        clearInterval(this.props.timerId);
        this.props.timeEnd();
    }

    pauseTimer = () => {
        clearInterval(this.props.timerId);
        this.props.pauseTimer();
    }

    render ()  {
        const disabled = {
            ...this.props.controlVals
        };

        for (let key in disabled) {
            disabled[key] = disabled[key] <= 0;
        }

        let disableBothButtons = false;
        if(this.props.timerOn) {
            disableBothButtons = true;
        }

        let controls = <Loader />;
        if(!this.props.loading) {                        
            controls = (
                <Aux>
                    <Timer
                        minutes={this.props.timerMins}
                        seconds={this.props.timerSeconds} />
                    <TimerControls
                        values={this.props.controlVals}
                        break={this.props.controlVals.breakTime}
                        cycles={this.props.controlVals.cycles}
                        work={this.props.controlVals.workTime}
                        valueAdded={this.props.onControlValueAdded}
                        valueRemoved={this.props.onControlValueRemoved}
                        startTimer={this.props.timerStart}
                        pauseTimer={this.pauseTimer}
                        disabled={disabled}
                        disableBoth={disableBothButtons} />
                </Aux>                
            );
        }

        return (
            <Aux>
                {controls}
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        controlVals: state.timer.vals,
        timerMins: state.timer.minutes,
        timerSeconds: state.timer.seconds,
        loading: state.timer.loading,
        timerOn: state.timer.timerOn,
        timerId: state.timer.timerId,
        ended: state.timer.timerEnded
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onSetTimer: () => dispatch(actions.setTimer()),
        onControlValueAdded: (ctrlName) => dispatch(actions.addToTimerControl(ctrlName)),
        onControlValueRemoved: (ctrlName) => dispatch(actions.removeFromTimerControl(ctrlName)),
        timerStart: () => {
            const timerId = setInterval(() => dispatch(actions.timerDecrement()), 1000);
            dispatch(actions.startTimer(timerId));
        },
        pauseTimer: () => dispatch(actions.pauseTimer()),
        timeEnd: () => dispatch(actions.timeEnd())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Pomo);