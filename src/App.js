import React, { Component } from 'react';

import Routing from './Routing'
import Header from './Components/header'

export default class App extends Component {

  render() {

    return (

      <div>

        <Header/>

        <Routing/>

      </div>
    );
  }
}
