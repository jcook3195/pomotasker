// packages
import React, { Component } from 'react';
// import axios from '../../axios-timer';
import { connect } from 'react-redux';

// hoc
import Aux from '../../hoc/Aux/Aux';

// components
import TimerControls from '../../components/TimerControls/TimerControls';
import Loader from '../../components/UI/Loader/Loader';

// misc
import * as actions from '../../store/actions/index';

class Pomo extends Component {
    componentDidMount() {
        this.props.onSetTimer();
    }    

    render ()  {
        const disabled = {
            ...this.props.controlVals
        };

        for (let key in disabled) {
            disabled[key] = disabled[key] <= 0;
        }

        let controls = <Loader />;
        if(!this.props.loading) {            
            controls = (
                <TimerControls
                    values={this.props.controlVals}
                    break={this.props.controlVals.breakTime}
                    cycles={this.props.controlVals.cycles}
                    work={this.props.controlVals.workTime}
                    valueAdded={this.props.onControlValueAdded}
                    valueRemoved={this.props.onControlValueRemoved}
                    disabled={disabled} />
            );

            console.log("Break Time: " + this.props.controlVals.breakTime);
        }

        return (
            <Aux>
                <h1>00:00:00</h1>
                {controls}
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        controlVals: state.timer.vals,
        loading: state.timer.loading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onSetTimer: () => dispatch(actions.setTimer()),
        onControlValueAdded: (ctrlName) => dispatch(actions.addToTimerControl(ctrlName)),
        onControlValueRemoved: (ctrlName) => dispatch(actions.removeFromTimerControl(ctrlName))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Pomo);