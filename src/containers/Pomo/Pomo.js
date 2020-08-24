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
import Button from '../../components/UI/Button/Button';

// misc
import * as actions from '../../store/actions/index';

class Pomo extends Component {
    state = {
        minsVal: 25
    }

    componentDidMount() {
        this.props.onSetTimer();       
    }

    componentDidUpdate() {
        if(this.props.timerMins === 0 && this.props.timerSeconds === 0) {  
            this.cycleController();
        }        
    }

    startTimer = () => {
        if(!this.props.working && !this.props.breaking)  {
            this.roundStart();
            this.cycleStart();
        }

        this.props.timerStart();
    }

    stopTimer = () => {
        clearInterval(this.props.timerId);
        this.props.timeEnd();
    }

    pauseTimer = () => {
        clearInterval(this.props.timerId);
        this.props.pauseTimer();
    }

    resetTimer = () => {
        clearInterval(this.props.timerId);
        this.props.resetTimer(this.state.minsVal);
    }
    
    workStart = () => {
        this.props.onWorkStart();
    }

    workEnd = () => {
        this.props.onWorkEnd();
    }

    setWorkTime = () => {
        this.props.onSetWorkTime();
    }

    breakStart = () => {
        this.props.onBreakStart();
    }

    breakEnd = () => {
        this.props.onBreakEnd();
    }

    setBreakTime = () => {
        this.props.onSetBreakTime();
    }

    cycleStart = () => {
        this.props.onCycleStart();
    }

    cycleEnd = () => {
        this.props.onCycleEnd();
    }

    nextCycle = () => {
        this.props.onNextCycle();
    }

    roundStart = () => {
        this.props.onRoundStart();
    }

    roundEnd = () => {
        this.props.onRoundEnd();
    }

    // cycle = 1 work + 1 break
    cycleController = () => {
        if(this.props.working) {
            // if working, cycles stays same & transition to break             
            this.stopTimer();
            this.workEnd();
            this.setBreakTime();
            this.cycleStart();
            this.breakStart();
            this.startTimer();
            console.log("Working end, work cycle: " + this.props.cycle);
        } else if(this.props.breaking) {
            // if breaking, cycle increases & transitions to working               
            this.stopTimer();
            this.breakEnd();
            this.cycleEnd();
            if(this.props.cycle === this.props.totalCycles) {
                this.roundController();
            } else {
                this.nextCycle();
                this.setWorkTime();
                this.workStart();
                this.startTimer();
                console.log("Breaking end, break cycle: " + this.props.cycle);
            }                                
        } 
    }

    // round = all cycles complete
    roundController = () => {
        // end of round logic        
        this.stopTimer();
        this.roundEnd();
        console.log("round ended");
    }

    render ()  {
        const disabled = {
            ...this.props.controlVals
        };

        for (let key in disabled) {
            disabled[key] = disabled[key] <= 1;
        }

        // both buttons are value controls, not start/play
        let disableBothButtons = false;
        let disableStartButton = false;
        let disablePauseButton = true;
        let disableResetButton = true;
        if(this.props.timerOn) {
            disableBothButtons = true;
            disableStartButton = true;
            disablePauseButton = false;
            disableResetButton = false;
        } else if(this.props.paused) {
            disableBothButtons = true;
            disableResetButton = false;
        } else if(this.props.ended) {
            disableResetButton = true;
        } else if(this.props.reset) {
            disableResetButton = true;
        }    
        
        let activityLog = <p>Complete a Pomodoro cycle for an activity log.</p>;
        if(this.props.roundEnded) {
            activityLog = <p>You completed a round! Round count: {this.props.roundTotal}</p>
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
                        startTimer={this.startTimer}
                        pauseTimer={this.pauseTimer}
                        resetTimer={this.resetTimer}
                        disabled={disabled}
                        disableBoth={disableBothButtons}
                        disableStart={disableStartButton}
                        disablePause={disablePauseButton}
                        disableReset={disableResetButton} />     
                    <Button clicked={this.resetTimer}>Stop</Button>   
                    {activityLog}                
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
        working: state.timer.working,
        breaking: state.timer.breaking,
        cycle: state.timer.cycle,
        workTime: state.timer.workTime,
        totalCycles: state.timer.totalCycles,
        loading: state.timer.loading,
        timerOn: state.timer.timerOn,
        timerId: state.timer.timerId,
        paused: state.timer.timerPaused,
        reset: state.timer.wasReset,
        ended: state.timer.timerEnded,
        roundEnded: state.timer.roundEnded,
        roundTotal: state.timer.roundTotal
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onSetTimer: () => dispatch(actions.setTimer()),
        onControlValueAdded: (ctrlName) => dispatch(actions.addToTimerControl(ctrlName)),
        onControlValueRemoved: (ctrlName) => dispatch(actions.removeFromTimerControl(ctrlName)),
        timerStart: () => {
            const timerId = setInterval(() => dispatch(actions.timerDecrement()), 10);            
            dispatch(actions.startTimer(timerId));
        },
        pauseTimer: () => dispatch(actions.pauseTimer()),
        timeEnd: () => dispatch(actions.timeEnd()),
        resetTimer: () => dispatch(actions.resetTimer()),
        onWorkStart: () => dispatch(actions.workStart()),
        onWorkEnd: () => dispatch(actions.workEnd()),
        onSetWorkTime: () => dispatch(actions.setWorkTime()),
        onBreakStart: () => dispatch(actions.breakStart()),
        onBreakEnd: () => dispatch(actions.breakEnd()),
        onSetBreakTime: () => dispatch(actions.setBreakTime()),
        onCycleStart: () => dispatch(actions.cycleStart()),
        onCycleEnd: () => dispatch(actions.cycleEnd()),
        onNextCycle: () => dispatch(actions.nextCycle()),
        onRoundStart: () => dispatch(actions.roundStart()),
        onRoundEnd: () => dispatch(actions.roundEnd())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Pomo);