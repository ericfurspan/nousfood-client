import React from 'react';
import LoginPage from './login-page';
import { Link } from 'react-router-dom';

export function NotFound(props) {
    return (
        <section className="not-found">
            <h3>404 page not found</h3><br/>
            <p>We are sorry but the page you are looking for does not exist.</p><br/>
            <Link to="/login"><button className="btn-blue">Login</button></Link>
        </section>
    )
}
      
export default NotFound;

