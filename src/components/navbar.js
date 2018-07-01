import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import './navbar.css';
import logo from '../assets/images/blue-brain.png'
import UserWelcome from './user-welcome';

export class NavBar extends React.Component {

    render(props) {
        return (
            <nav className="navbar">
                <img src={logo} alt="logo" />
             </nav>
        );
    }
}

const mapStateToProps = state => ({
    firstname: state.user_data.user.userInfo.firstname
});

export default withRouter(connect(mapStateToProps)(NavBar));