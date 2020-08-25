// packages
import React, { Component } from 'react';

// components
import Aux  from '../../../../hoc/Aux/Aux';
import TimerLog from './TimerLog/TimerLog';

// css

class CycleLog extends Component {
    render () {
        let timer = null;
        if(!this.props.doneWorking) {
            if(this.props.work) {
                timer = (
                    <TimerLog
                        text={"Working..."} />
                );
            }
        } else {
            if(!this.props.doneBreaking) {
                if(this.props.break) {
                    timer = (
                        <Aux>
                            <TimerLog
                                text={"Done working."} />
                            <TimerLog
                                text={"Breaking..."} />
                        </Aux>
                    );
                }
            } else {
                timer = (
                    <Aux>
                        <TimerLog
                            text={"Done working."} />
                        <TimerLog
                            text={"Done breaking."} />
                    </Aux>
                );
            }
        }
        
        let titleText = "Currently Working on";
        if(!this.props.work && !this.props.break) {
            titleText = "Completed";
        }

        return (
            <Aux>
                <h4>{titleText} Cycle #{this.props.cycle}</h4>
                {timer}
            </Aux> 
        );
    }
}

export default CycleLog;