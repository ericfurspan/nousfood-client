import React, { Component } from 'react';
import { withRouter, Route, Redirect, Switch } from 'react-router-dom';
import {connect} from 'react-redux';
import LandingPage from './landing';
import Footer from './footer';
import Dashboard from './dashboard';
import NootropicLibrary from './nootropic-library';
import SavedStacks from './saved-stacks';
import TrendingStacks from './trending-stacks';
import NavBar from './navbar';
import CreateStack from './create-stack';
import LoginPage from './login-page';
import About from './about';
import NotFound from './notfound';
import './styles/form-fields.css';
import './styles/app.css';

export class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar loggedIn={this.props.loggedIn}/>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/user/:id/create-stack" component={CreateStack} />
          <Route exact path="/user/:id/saved" component={SavedStacks}/>
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/stacks" component={TrendingStacks} />
          <Route exact path="/nootropics" component={NootropicLibrary} />
          <Route exact path="/about" component={About} />
          <Route path="*" component={NotFound} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  stackLibrary: state.global.stackLibrary,
  hasAuthToken: state.auth.authToken !== null,
  loggedIn: state.auth.currentUser !== null
});

export default withRouter(connect(mapStateToProps)(App));


