import React from 'react';
//import {Field, reduxForm, focus} from 'redux-form';
import {required, nonEmpty} from '../validators';

export class LoginForm extends React.Component {

    render() {
        return (
            <section>
                <h2>Log In</h2>
                <form className="login-form">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        name="username"
                        id="username"
                        validate={[required, nonEmpty]}
                    /><br />
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        validate={[required, nonEmpty]}
                    /><br />
                    <button disabled={this.props.pristine || this.props.submitting}>
                        Log in
                    </button>
                </form>
            </section>
        );
    }
}

export default LoginForm;
