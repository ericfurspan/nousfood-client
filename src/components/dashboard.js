import React from 'react';
import { connect } from 'react-redux';
import SavedStacks from './saved-stacks';
import requiresLogin from './requires-login';
import { fetchUserData, fetchFollowedNootropics } from '../actions/user';
import { fetchNootropicScience } from '../actions/nlm';
import CreateStackForm from './create-stack-form/create-stack-form';
import TrendingStacks from './trending-stacks';
import { NootropicLibrary } from './nootropic-library';
import { clearAuth } from '../actions/auth';
import { emptyUserData } from '../actions/user';
import { withRouter } from 'react-router-dom';
import Spinner from '../assets/images/spinner.gif';
import ModalContainer from './modal-container';
import TwitterTimeline from './twitter-timeline';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import './styles/dashboard.css';

function TabContainer(props) {
    return (
      <Typography component="div" style={{ padding: 8 * 3 }}>
        {props.children}
      </Typography>
    );
  }
TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
};
const styles = theme => ({
    root: {
      flexGrow: 1
    },
    tabsRoot: {
      fontSize: "18px",
      fontWeight: "bold"
    },
    tabsIndicator: {
      backgroundColor: '#fff',
    }
  });
  

export class Dashboard extends React.Component {
    state = {
        selectedView: 0
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

    updateView = (event, value) => {
        this.setState({selectedView: value})
    }
    render() {
        const { classes } = this.props;

        if(this.props.user.loading) {
            return <img src={Spinner} id="spinner" alt="spinner"/>
        }
        let savedStacks = <SavedStacks show={true} savedStacks={this.props.user.savedStacks} trendingStacks={this.props.stackLibrary}/>

        return (
            <div className="db">
                <div className="db-top db-version">v2.0</div>
                <div className="db-top db-intro">{this.props.username}</div>
                <div className="db-content">
                    <AppBar position="static" style={ {backgroundColor: '#46B0F0', padding: "5px 0px 5px 0px"} }>
                        <Tabs
                            value={this.state.selectedView}
                            fullWidth
                            classes={{ indicator: classes.tabsIndicator }}
                            onChange={this.updateView}>
                            <Tab 
                                classes={{label: classes.tabsRoot}}
                                label="News" 
                            />
                            <Tab 
                                classes={{label: classes.tabsRoot}}
                                label="Nootropics" 
                            />
                            <Tab 
                                classes={{label: classes.tabsRoot}}                            
                                label="Saved" 
                            />
                            <Tab 
                                classes={{label: classes.tabsRoot}}                            
                                label="Trending" 
                            />
                            <Tab 
                                classes={{label: classes.tabsRoot}}
                                label="Stack Builder" 
                            />
                        </Tabs>
                    </AppBar>
                    {this.state.selectedView === 0 && 
                        <TabContainer>
                            <TwitterTimeline />
                        </TabContainer>
                    }
                    {this.state.selectedView === 1 && 
                        <TabContainer>
                            <ModalContainer 
                                type="nootropicLibrary"
                                nootropicLibrary={
                                    <NootropicLibrary 
                                        show={true}
                                        nootropics={this.props.nootropics}
                                        followedNootropics={this.props.user.followedNootropics}
                                        fetchNlmData={this.fetchNlmData}
                                    />}
                            />
                        </TabContainer>
                    }
                    {this.state.selectedView === 2 && 
                        <TabContainer>
                            <ModalContainer
                                type="savedStacks"
                                savedStacks={savedStacks}
                            />
                        </TabContainer>
                    }
                    {this.state.selectedView === 3 && 
                        <TabContainer> 
                            <ModalContainer
                                type="trendingStacks"
                                trendingStacks={
                                    <TrendingStacks 
                                        show={true}
                                        savedStacks={this.props.user.savedStacks}
                                        stackLibrary={this.props.stackLibrary}
                                    />
                                }
                            />
                        </TabContainer>
                    }
                    {this.state.selectedView === 4 && 
                        <TabContainer>
                            <ModalContainer 
                                type="stackBuilder"
                                stackBuilder={
                                    <CreateStackForm 
                                        show={true}
                                        nootropics={this.props.nootropics}
                                    />}
                            />
                        </TabContainer>
                    }
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

export default withRouter(requiresLogin()(connect(mapStateToProps)(withStyles(styles)(Dashboard))));