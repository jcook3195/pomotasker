import React, { Component }  from 'react';
//import { connect } from 'react-redux';

import Aux from '../Aux/Aux';

import classes from './Layout.scss';

class Layout extends Component {
    render () {
        return (
            <Aux>
                <div className={classes.container}>
                    <h1>Pomotasker</h1>
                </div>
            </Aux>
        )
    }
}

export default Layout;