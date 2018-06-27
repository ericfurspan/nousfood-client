import React, { Component } from 'react';
import { Route } from 'react-router-dom';
//import {connect} from 'react-redux';
import './app.css';
import LandingPage from './landing';
import UserHome from './user-home';
import Library from './library';
import NavBar from './navbar';

export class App extends Component {

  render() {
    return (
      <div className="App">
        <NavBar />
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/nootropic-library" component={Library} />
        <Route exact path="/home" component={UserHome} />
      </div>
    );
  }
}

export default App;