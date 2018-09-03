import React from 'react';
import {connect} from 'react-redux';
import SavedStacks from './saved-stacks';
import requiresLogin from './requires-login';
import { fetchUserData, fetchFollowedNootropics } from '../actions/user';
import { fetchNootropicScience } from '../actions/nlm';
import CreateStackForm from './create-stack-form/create-stack-form';
import TrendingStacks from './trending-stacks';
import { NootropicLibrary } from './nootropic-library';
import { clearAuth } from '../actions/auth';
import { emptyUserData } from '../actions/user';
import {withRouter} from 'react-router-dom';
import Spinner from '../assets/images/spinner.gif';
import Modal from './modal';
import ModalContainer from './modal-container';
import './styles/dashboard.css';

export class Dashboard extends React.Component {
    state = {
        trendingStacks: {
            show: false
        },
        nootropicLibrary: {
            show: false
        },
        stackBuilder: {
            show: false
        },
        savedStacks: {
            show: false
        }
    };
    componentDidMount() {
        this.props.dispatch(fetchUserData());
        this.props.dispatch(fetchFollowedNootropics());
        this.fetchNlmData()
    }
    componentDidUpdate() {
        if(this.props.location.pathname === "/dashboard/logout") {
            this.props.dispatch(clearAuth());
            this.props.dispatch(emptyUserData());
        }
    }
    fetchNlmData = (searchTerms) => {
        if(!searchTerms) {
            return null
        }
        // forEach searchTerm call fetchNootropicScience() after delay
        let delayTime = 1000;
        searchTerms.forEach((term) => {
            delayTime += 1000;
            setTimeout(() => {
                this.props.dispatch(fetchNootropicScience(term))
            }, delayTime)
        })
    }

    updateModal = (component) => {
        let newState = {};
        newState[component] = {show: !this.state[component].show};
        Object.keys(this.state).forEach(key => {
            if(key !== component) {
                newState[key] = {show: false}
            }
        });
        this.setState(newState);
    }

    toggleModal = (component) => {
        switch (component) {
            case 'trendingStacks' : 
                return this.updateModal('trendingStacks')
            case 'nootropicLibrary' :
                return this.updateModal('nootropicLibrary')
            case 'stackBuilder' :
                return this.updateModal('stackBuilder')
            case 'savedStacks' :
                return this.updateModal('savedStacks')
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
            savedStacks = <SavedStacks show={this.state.savedStacks.show} savedStacks={this.props.user.savedStacks}/>
        } else {
            savedStacks = <SavedStacks show={this.state.savedStacks.show} savedStacks={this.props.user.savedStacks} trendingStacks={this.props.stackLibrary}/>
        }

        return (
            <div className="db">
                <div className="db-top db-version">v1.3</div>
                <div className="db-top db-intro">
                    {this.props.username}
                </div>
                <div className="db-user-data">
                    <div className="db-header" onClick={() => this.toggleModal('savedStacks')}>
                        <h2>Saved stacks</h2>
                    </div>
                    <Modal 
                      show={this.state.savedStacks.show} 
                      modalLevel="1"
                    >
                        <ModalContainer
                            header={<div className="modal-header">Saved Stacks<i className="material-icons white right" onClick={() => this.toggleModal('savedStacks')}>cancel</i></div>}
                            type="savedStacks"
                            closeModal={() => this.toggleModal('savedStacks')}
                            savedStacks={savedStacks}
                        />
                    </Modal>
                </div>
                
                <div className="trending-stacks">
                    <div className="db-header" onClick={() => this.toggleModal('trendingStacks')}>
                        <h2>Trending stacks</h2>
                    </div>
                    <Modal
                      show={this.state.trendingStacks.show} 
                    >
                        <ModalContainer
                            header={<div className="modal-header">Trending Stacks<i className="material-icons white right" onClick={() => this.toggleModal('trendingStacks')}>cancel</i></div>}
                            type="trendingStacks"
                            closeModal={() => this.toggleModal('trendingStacks')}
                            trendingStacks={
                                <TrendingStacks 
                                    show={this.state.trendingStacks.show}
                                    savedStacks={this.props.user.savedStacks}
                                    stackLibrary={this.props.stackLibrary}
                                    closeModal={() => this.toggleModal('trendingStacks')}
                                />}
                        />
                    </Modal>
                </div>
                <div className="social-feed">
                </div>
                <div className="nootropicLibrary"> 
                    <div className="db-header" onClick={() => this.toggleModal('nootropicLibrary')}>
                        <h2>Nootropics</h2>
                    </div>
                    <Modal
                        show={this.state.nootropicLibrary.show}
                    >
                        <ModalContainer 
                            header={<div className="modal-header">Nootropics<i className="material-icons white right" onClick={() => this.toggleModal('nootropicLibrary')}>cancel</i></div>}
                            type="nootropicLibrary"
                            closeModal={() => this.toggleModal('nootropicLibrary')}
                            nootropicLibrary={
                                <NootropicLibrary 
                                    show={this.state.nootropicLibrary.show}
                                    nootropics={this.props.nootropics}
                                    followedNootropics={this.props.user.followedNootropics}
                                    closeModal={() => this.toggleModal('nootropicLibrary')}
                                    fetchNlmData={this.fetchNlmData}
                                />}
                        />
                    </Modal>
                </div>
                <div className="create-stack" id="create-stack">
                    <div className="db-header" onClick={() => this.toggleModal('stackBuilder')}>
                        <h2>Stack Builder</h2>
                    </div>
                    <Modal
                        show={this.state.stackBuilder.show}
                    >
                        <ModalContainer 
                            header={<div className="modal-header">Stack Builder<i className="material-icons white right" onClick={() => this.toggleModal('stackBuilder')}>cancel</i></div>}
                            type="stackBuilder"
                            closeModal={() => this.toggleModal('stackBuilder')}
                            stackBuilder={
                                <CreateStackForm 
                                    show={this.state.stackBuilder.show}
                                    nootropics={this.props.nootropics}
                                    closeModal={() => this.toggleModal('stackBuilder')}
                                />}
                        />
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
    loggedIn: state.auth.currentUser !== null,
});

export default withRouter(requiresLogin()(connect(mapStateToProps)(Dashboard)));