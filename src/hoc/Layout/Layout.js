// packages
import React, { Component }  from 'react';
//import { connect } from 'react-redux';

// hoc
import Aux from '../Aux/Aux';

// containers
import Pomo from '../../containers/Pomo/Pomo';

// css
import classes from './Layout.module.scss';

class Layout extends Component {
    render () {
        return (
            <Aux>
                <div className={classes.container}>
                    <h1>Pomotasker</h1>
                    {this.props.children}
                </div>
            </Aux>
        )
    }
}

export default Layout;