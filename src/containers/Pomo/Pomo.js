// packages
import React, { Component } from 'react';

// hoc
import Aux from '../../hoc/Aux/Aux';

// components
import TimerControls from '../../components/TimerControls/TimerControls';

class Pomo extends Component {
    render ()  {
        return (
            <Aux>
                <h1>00:00:00</h1>
                <TimerControls />
            </Aux>
        );
    }
}

export default Pomo;