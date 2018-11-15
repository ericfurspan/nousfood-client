import React from 'react';
import { withRouter, Route, Switch } from 'react-router-dom';
import {connect} from 'react-redux';
import LandingPage from './landing';
import Dashboard from './dashboard';
import NavBar from './navbar';
import About from './about';
import NotFound from './notfound';
import Feedback from './feedback';
import { fetchNootropics, fetchTrendingStacks } from '../actions/global';
import { refreshAuthToken } from '../actions/auth';
import './styles/form-fields.css';
import './styles/app.css';
import './styles/feedback.css';
import LoadingPage from './loading-page';

export class App extends React.Component {
componentDidMount() {
  this.props.dispatch(fetchNootropics());
  this.props.dispatch(fetchTrendingStacks());
}
componentDidUpdate(prevProps) {
    if (!prevProps.loggedIn && this.props.loggedIn) {
      // When we are logged in, refresh the auth token periodically
      this.startPeriodicRefresh();
    } else if (prevProps.loggedIn && !this.props.loggedIn) {
      // Stop refreshing when we log out
      this.stopPeriodicRefresh();
    }
}
componentWillUnmount() {
    this.stopPeriodicRefresh();
}
startPeriodicRefresh() {
    this.refreshInterval = setInterval(
        () => this.props.dispatch(refreshAuthToken()),
        60 * 60 * 1000 // One hour
    );
}
stopPeriodicRefresh() {
    if (!this.refreshInterval) {
        return;
    }
    clearInterval(this.refreshInterval);
}

render() {
  const props = this.props;
    if(props.authenticating) {
      return <LoadingPage />
    } 

    return (
      <div className="App">
        <NavBar loggedIn={props.loggedIn}/>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/dashboard" component={Dashboard} />
          <Route exact path="/about" component={About} />
          <Route path="*" component={NotFound} />
        </Switch>
        <Feedback feedback={props.feedback}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  authenticating: state.auth.loading,
  feedback: state.user.feedback,
  stackLibrary: state.global.stacks,
  nootropics: state.global.nootropics,
  hasAuthToken: state.auth.token !== null,
  loggedIn: state.auth.currentUser !== null
});

export default withRouter(connect(mapStateToProps)(App));


