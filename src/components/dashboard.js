import React from 'react';
import {connect} from 'react-redux';
import SavedStacks from './saved-stacks';
import requiresLogin from './requires-login';
import { fetchUserData } from '../actions/user';
import CreateStackForm from './create-stack-form/create-stack-form';
import TrendingStacks from './trending-stacks';
import { NootropicLibrary } from './nootropic-library';
import { clearAuth } from '../actions/auth';
import { emptyUserData } from '../actions/user';
import {withRouter} from 'react-router-dom';
import './styles/dashboard.css';
import Spinner from '../assets/images/spinner.gif';

export class Dashboard extends React.Component {
    state = {
        trendingStacks: {
            hidden: true
        },
        nootropics: {
            hidden: true
        },
        stackBuilder: {
            hidden: true
        },
        savedStacks: {
            hidden: true
        }
    };
    componentDidMount() {
        this.props.dispatch(fetchUserData());
    }
    componentDidUpdate() {
        if(this.props.location.pathname === "/dashboard/logout") {
            this.props.dispatch(clearAuth());
            this.props.dispatch(emptyUserData());
        }
    }
    toggleHidden = (component) => {
        switch (component) {
            case 'trendingStacks' : 
                return this.setState({trendingStacks: {hidden: !this.state.trendingStacks.hidden}})
            case 'nootropics' :
                return this.setState({nootropics: {hidden: !this.state.nootropics.hidden}})
            case 'stackBuilder' :
                return this.setState({stackBuilder: {hidden: !this.state.stackBuilder.hidden}})
            case 'savedStacks' :
                return this.setState({savedStacks: {hidden: !this.state.savedStacks.hidden}})
            default :
                return null
        }
    }
    render() {
        if(this.props.user.loading) {
            return <img src={Spinner} id="spinner" alt="spinner"/>
        }

        let savedStacks;
        if(!this.props.user.savedStacks) {
            savedStacks = <SavedStacks hidden={this.state.savedStacks.hidden} />
        } else {
            savedStacks = <SavedStacks hidden={this.state.savedStacks.hidden} savedStacks={this.props.user.savedStacks} trendingStacks={this.props.stackLibrary}/>
        }
        return (
            <div className="dashboard">
                <div className="dashboard-intro">
                    {this.props.username}
                </div>
                <div className="dashboard-user-data">
                    <div className="dashboard-header" onClick={() => this.toggleHidden('savedStacks')}>
                        <h2>Saved stacks</h2>
                    </div>
                    {savedStacks}
                </div>
                <div className="trending-stacks">
                    <div className="dashboard-header" onClick={() => this.toggleHidden('trendingStacks')}>
                        <h2>Trending stacks</h2>
                    </div>
                    <TrendingStacks hidden={this.state.trendingStacks.hidden} savedStacks={this.props.user.savedStacks} stackLibrary={this.props.stackLibrary} />
                </div>
                <div className="social-feed">
                </div>
                <div className="nootropics"> 
                    <div className="dashboard-header" onClick={() => this.toggleHidden('nootropics')}>
                        <h2>Nootropics</h2>
                    </div>
                    <NootropicLibrary hidden={this.state.nootropics.hidden} nootropics={this.props.nootropics} />
                </div>
                <div className="create-stack" id="create-stack">
                    <div className="dashboard-header" onClick={() => this.toggleHidden('stackBuilder')}>
                        <h2>Stack Builder</h2>
                    </div>
                    <CreateStackForm hidden={this.state.stackBuilder.hidden} nootropics={this.props.nootropics}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    user: state.user,
    stackLibrary: state.global.stackLibrary,
    trendingStacks: state.global.trendingStacks,
    nootropics: state.global.nootropics,
    hasAuthToken: state.auth.token !== null,
    loggedIn: state.auth.currentUser !== null
});

export default withRouter(requiresLogin()(connect(mapStateToProps)(Dashboard)));