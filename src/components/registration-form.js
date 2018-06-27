import React from 'react';
//import {Field, reduxForm, focus} from 'redux-form';
import {required, nonEmpty, matches, length, isTrimmed} from '../validators';
const passwordLength = length({min: 10, max: 72});
const matchesPassword = matches('password');

export class RegistrationForm extends React.Component {

    render() {
        return (
            <section>
                <h2>Sign Up</h2>
                <form className="signup-form">
                    <label htmlFor="firstName">First name</label>
                    <input type="text" name="firstName" /><br />
                    <label htmlFor="lastName">Last name</label>
                    <input type="text" name="lastName" /><br />
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        name="username"
                        validate={[required, nonEmpty, isTrimmed]}
                    /><br />
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        validate={[required, passwordLength, isTrimmed]}
                    /><br />
                    <label htmlFor="passwordConfirm">Confirm password</label>
                    <input
                        type="password"
                        name="passwordConfirm"
                        validate={[required, nonEmpty, matchesPassword]}
                    /><br />
                    <button
                        type="submit"
                        disabled={this.props.pristine || this.props.submitting}>
                        Register
                    </button><br /><br />
                </form>
            </section>
        );
    }
}

export default RegistrationForm;
