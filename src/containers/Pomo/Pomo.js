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
        let controls = <Loader />;
        if(!this.props.loading) {            
            controls = (
                <TimerControls
                    values={this.props.controlVals}
                    break={this.props.controlVals.breakTime}
                    cycles={this.props.controlVals.cycles}
                    work={this.props.controlVals.workTime} />
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
        onSetTimer: () => dispatch(actions.setTimer())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Pomo);