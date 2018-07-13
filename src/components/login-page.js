import React from 'react';
import LoginForm from './login-form';
import { Link } from 'react-router-dom';

class LoginPage extends React.Component {

    render(props) {
        return (
            <div className="login-page">
            <LoginForm /><br/>
            <Link to={"/"}>Or register here</Link>
            </div>
        )
    }
}
      
export default LoginPage;

