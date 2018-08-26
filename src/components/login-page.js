import React from 'react';
import LoginForm from './login-form';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class LoginPage extends React.Component {

    render() {
        if(this.props.loggedIn) {
            return <Redirect to="/dashboard" />;
        }
        return (
            <div className="login-page">
                <LoginForm /><br/>
                <Link to={"/"}>Or register here</Link>
            </div>
        )
    }
}
   
const mapStateToProps = state => ({
    loggedIn: state.user !== null
});

export default connect(mapStateToProps)(LoginPage);

