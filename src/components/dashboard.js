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
import Modal from 'react-responsive-modal';
import ModalContent from './modal-content';

export class Dashboard extends React.Component {
    state = {
        trendingStacks: {
            hidden: true
        },
        nootropicLibrary: {
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
    updateHidden = (component) => {
        let newState = {};
        newState[component] = {hidden: !this.state[component].hidden};
        Object.keys(this.state).forEach(key => {
            if(key !== component) {
                newState[key] = {hidden: true}
            }
        });
        this.setState(newState);
    }

    switchHidden = (component) => {
        switch (component) {
            case 'trendingStacks' : 
                return this.updateHidden('trendingStacks')
            case 'nootropicLibrary' :
                return this.updateHidden('nootropicLibrary')
            case 'stackBuilder' :
                return this.updateHidden('stackBuilder')
            case 'savedStacks' :
                return this.updateHidden('savedStacks')
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
            savedStacks = <SavedStacks hidden={this.state.savedStacks.hidden} savedStacks={this.props.user.savedStacks}/>
        } else {
            savedStacks = <SavedStacks hidden={this.state.savedStacks.hidden} savedStacks={this.props.user.savedStacks} trendingStacks={this.props.stackLibrary}/>
        }

        return (
            <div className="db">
                <div className="db-top db-version">v1.2</div>
                <div className="db-top db-intro">
                    {this.props.username}
                </div>
                <div className="db-user-data">
                    <div className="db-header" onClick={() => this.switchHidden('savedStacks')}>
                        <h2>Saved stacks</h2>
                    </div>
                    <Modal
                        open={!this.state.savedStacks.hidden}
                        onClose={() => this.switchHidden('savedStacks')}
                        center>
                        <div className="modal-header">Saved Stacks<i className="material-icons white right" onClick={() => this.switchHidden('savedStacks')}>cancel</i></div>
                        <ModalContent 
                            type="savedStacks"
                            closeModal={() => this.switchHidden('savedStacks')}
                            savedStacks={savedStacks}
                        >
                        </ModalContent>
                    </Modal>
                </div>
                <div className="trending-stacks">
                    <div className="db-header" onClick={() => this.switchHidden('trendingStacks')}>
                        <h2>Trending stacks</h2>
                    </div>
                    <Modal
                        open={!this.state.trendingStacks.hidden}
                        onClose={() => this.switchHidden('trendingStacks')}
                        center>
                        <div className="modal-header">Trending Stacks<i className="material-icons white right" onClick={() => this.switchHidden('trendingStacks')}>cancel</i></div>
                        <ModalContent 
                            type="trendingStacks"
                            closeModal={() => this.switchHidden('trendingStacks')}
                            trendingStacks={
                                <TrendingStacks 
                                    hidden={this.state.trendingStacks.hidden}
                                    savedStacks={this.props.user.savedStacks}
                                    stackLibrary={this.props.stackLibrary}
                                    closeModal={() => this.switchHidden('trendingStacks')}
                                />}
                        >
                        </ModalContent>
                    </Modal>
                </div>
                <div className="social-feed">
                </div>
                <div className="nootropicLibrary"> 
                    <div className="db-header" onClick={() => this.switchHidden('nootropicLibrary')}>
                        <h2>Nootropics</h2>
                    </div>
                    <Modal
                        open={!this.state.nootropicLibrary.hidden}
                        onClose={() => this.switchHidden('nootropicLibrary')}
                        center>
                        <div className="modal-header">Nootropics<i className="material-icons white right" onClick={() => this.switchHidden('nootropicLibrary')}>cancel</i></div>
                        <ModalContent 
                            type="nootropicLibrary"
                            closeModal={() => this.switchHidden('nootropicLibrary')}
                            nootropicLibrary={
                                <NootropicLibrary 
                                    hidden={this.state.nootropicLibrary.hidden}
                                    nootropics={this.props.nootropics}
                                    closeModal={() => this.switchHidden('nootropicLibrary')}
                                />}
                        >
                        </ModalContent>
                    </Modal>
                </div>
                <div className="create-stack" id="create-stack">
                    <div className="db-header" onClick={() => this.switchHidden('stackBuilder')}>
                        <h2>Stack Builder</h2>
                    </div>
                    <Modal
                        open={!this.state.stackBuilder.hidden}
                        onClose={() => this.switchHidden('stackBuilder')}
                        center>
                        <div className="modal-header">Stack Builder<i className="material-icons white right" onClick={() => this.switchHidden('stackBuilder')}>cancel</i></div>
                        <ModalContent 
                            type="stackBuilder"
                            closeModal={() => this.switchHidden('stackBuilder')}
                            stackBuilder={
                                <CreateStackForm 
                                    hidden={this.state.stackBuilder.hidden}
                                    nootropics={this.props.nootropics}
                                    closeModal={() => this.switchHidden('stackBuilder')}
                                />}
                        >
                        </ModalContent>
                    </Modal>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    username: state.auth.currentUser.username,
    user: state.user,
    stackLibrary: state.global.stackLibrary,
    trendingStacks: state.global.trendingStacks,
    nootropics: state.global.nootropics,
    hasAuthToken: state.auth.token !== null,
    loggedIn: state.auth.currentUser !== null
});

export default withRouter(requiresLogin()(connect(mapStateToProps)(Dashboard)));