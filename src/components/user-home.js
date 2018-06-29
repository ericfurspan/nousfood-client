import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { SavedNootropics } from './saved-nootropics';
import { UserWelcome } from './user-welcome';
import { SavedStacks } from './saved-stacks';
import { Library } from './library';
import NavBar from './navbar';
import './grid.css';
import './user-home.css'
import { Footer } from './footer';

export class UserHome extends React.Component {

    render(props) {
        return (
            <div className="home">
                <NavBar />
                <SavedNootropics savedNootropics={this.props.savedNootropics}/>
                <SavedStacks savedStacks={this.props.savedStacks}/>
                <Footer />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    firstname: state.user_data.user.userInfo.firstname,
    savedNootropics: state.user_data.user.saved.nootropics,
    savedStacks: state.user_data.user.saved.stacks
});

export default withRouter(connect(mapStateToProps)(UserHome));