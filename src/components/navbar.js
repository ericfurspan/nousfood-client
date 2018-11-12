import React from 'react';
import { withRouter } from 'react-router-dom';
import Logo from './logo';
import './styles/navbar.css';

class NavBar extends React.Component {

    render() {
        // if user is on the landing page (root path, "/") do not render navbar
        if(this.props.match.path === "/" && this.props.match.isExact === true) {
            return (null)
        }
        return (
            <nav className="navbar">
                <Logo />
            </nav>
        );
    }
}

export default withRouter(NavBar);
