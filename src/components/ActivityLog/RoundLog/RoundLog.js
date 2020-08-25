// packages
import React, { Component } from 'react';

// components
import Aux from '../../../hoc/Aux/Aux';
import CycleLog from './CycleLog/CycleLog';

// css

class RoundLog extends Component {
    render () {
        let cycles = null;
        for(let i = 0; i < this.props.cycles; i++) {
            cycles = (                
                <CycleLog
                    cycle={this.props.cycle}
                    doneWorking={this.props.doneWorking}
                    work={this.props.work}
                    doneBreaking={this.props.doneBreaking}
                    break={this.props.break} />
            );
        }
        let titleText = "Currently Working on";
        if(!this.props.work && !this.props.break) {
            titleText = "Completed";
        }

        return (
            <Aux>
                <h3>{titleText} Round #{this.props.round}</h3>
                {cycles}
            </Aux>
        );
    }
}

export default RoundLog;