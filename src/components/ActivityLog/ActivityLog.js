// packages
import React, { Component } from 'react';

// components
import RoundLog from './RoundLog/RoundLog';

// css
import classes from './ActivityLog.module.scss';

class ActivityLog extends Component {
    render () {

        let rounds = null;
        for(let i = 0; i < this.props.rounds; i++) {
            rounds = (
                <RoundLog 
                    cycles={this.props.cycles}
                    round={this.props.round}
                    cycle={this.props.cycle}
                    doneWorking={this.props.doneWorking}
                    work={this.props.work}
                    doneBreaking={this.props.doneBreaking}
                    break={this.props.break} />
            );
        }

        return (
            <div className={classes.log_container}>        
                {rounds}
            </div>
        );
    }
}

export default ActivityLog;