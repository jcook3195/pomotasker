// packages
import React, { Component } from 'react';

// css
import classes from './Timer.module.scss';

class Timer extends Component {    
    render() {
        return (            
            <div className={classes.base_timer}>
                <svg className={classes.base_timer__svg} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <g className={classes.base_timer__circle}>
                        <circle className={classes.base_timer__path_elapsed} cx="50" cy="50" r="45"></circle>
                        <path
                            id="base-timer-path-remaining"
                            strokeDasharray={this.props.dArray}
                            className={classes.base_timer__path_remaining}
                            d="
                                M 50, 50
                                m -45, 0
                                a 45,45 0 1,0 90,0
                                a 45,45 0 1,0 -90,0
                            "
                        ></path>
                    </g>
                </svg>
                <span className={classes.base_timer__label}>
                    <h1>{this.props.minutes}:{this.props.seconds < 10 ? `0${this.props.seconds}` : this.props.seconds}</h1>
                </span>
            </div>
        );
    }
}

export default Timer;