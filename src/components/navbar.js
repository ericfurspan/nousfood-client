import React from 'react';
import {Link} from 'react-router-dom';
import './navbar.css';
import logo from '../assets/images/blue-brain.png'

export class NavBar extends React.Component {

    render() {
        return (
            <nav className="navbar">
                <ul>
                    <li>
                        <img src={logo} alt="logo" />
                    </li>
                    <li>
                        <Link to="/nootropic-library">Nootropics</Link>
                    </li>
                    <li>
                        <Link to="/">Login/Logout</Link>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default NavBar;
