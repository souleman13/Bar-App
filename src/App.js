import React, { Component } from 'react';
import './App.css';

import Routing from './Routing'
import Header from './Components/header'
import Footer from './Components/footer'

export default class App extends Component {

  render() {

    return (

      <div className="App">

        <Header/>

        <Routing/>

        <Footer/>

      </div>
    );
  }
}
