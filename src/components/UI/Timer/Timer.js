import React, { Component } from 'react';

class Timer extends Component {
    render() {
        return (
            <h1>{this.props.minutes}:{this.props.seconds < 10 ? `0${this.props.seconds}` : this.props.seconds}</h1>
        );
    }
}

export default Timer;