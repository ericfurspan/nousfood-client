import React from 'react';
//import {Field, reduxForm, focus} from 'redux-form';
import {required, nonEmpty} from '../validators';

export class LoginForm extends React.Component {

    render() {
        return (
            <form className="login-form">
                <label htmlFor="email"></label>
                <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="email"
                    validate={[required, nonEmpty]}
                />
                <label htmlFor="password"></label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="password"
                    validate={[required, nonEmpty]}
                />
                <button disabled={this.props.pristine || this.props.submitting}>
                    Log in
                </button>
            </form>
        );
    }
}

export default LoginForm;
