// packages
import React, { Component } from 'react';
//import { Route, Switch } from 'react-router-dom';

// hoc
import Aux from './hoc/Aux/Aux';
import Layout from './hoc/Layout/Layout';

// css
import './App.scss';

class App extends Component {
  render () {
    return (
      <Aux>
        <Layout>

        </Layout>
      </Aux>
    )
  }
}

export default App;
