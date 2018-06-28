import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { SavedNootropics } from './saved-nootropics';
import { UserWelcome } from './user-welcome';
import { SavedStacks } from './saved-stacks';
import NavBar from './navbar';
import './grid.css';
import './user-home.css'
import { Footer } from './footer';

export class UserHome extends React.Component {

    render(props) {
        return (
            <div className="home">
                <NavBar />
                <UserWelcome firstname={this.props.firstname}/>
                <SavedNootropics savedNootropics={this.props.savedNootropics}/>
                <SavedStacks savedStacks={this.props.savedStacks}/>
                <Footer />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    firstname: state.user.userInfo.firstname,
    savedNootropics: state.user.saved.nootropics,
    savedStacks: state.user.saved.stacks
});

export default withRouter(connect(mapStateToProps)(UserHome));