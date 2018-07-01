import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { UserWelcome } from './user-welcome';
import { SavedStacks } from './saved-stacks';
import { TrendingStacks } from './trending-stacks';
import { Library } from './library';
import NavBar from './navbar';
import './grid.css';
import './user-home.css'
import { Footer } from './footer';
import { WelcomeHeader } from './welcome-header';

export class UserHome extends React.Component {

    render(props) {
        return (
            <div className="home">
                <NavBar/>
                <WelcomeHeader />
                <SavedStacks savedStacks={this.props.savedStacks}/>
                <TrendingStacks trendingStacks={this.props.trendingStacks}/>
                <Footer />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    firstname: state.user_data.user.userInfo.firstname,
    savedStacks: state.user_data.user.saved.stacks,
    trendingStacks: state.global_data.trendingStacks
});

export default withRouter(connect(mapStateToProps)(UserHome));