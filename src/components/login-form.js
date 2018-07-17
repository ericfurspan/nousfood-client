import React from 'react';
import { Field, reduxForm, focus } from 'redux-form';
import { required, nonEmpty, isTrimmed } from '../validators';
import Input from './input';

export class LoginForm extends React.Component {

    render() {
        return (
            <form className="login-form">
                <Field
                    component={Input}
                    type="email"
                    name="email"
                    placeholder="Email"
                    validate={[required, isTrimmed, nonEmpty]}
                />
                <Field
                    component={Input}
                    type="password"
                    name="password"
                    placeholder="Password"
                    validate={[required, isTrimmed, nonEmpty]}
                />
                <div className="center">
                    <button disabled={this.props.pristine || this.props.submitting}>
                        Log in
                    </button>
                </div>
            </form>
        );
    }
}

export default reduxForm({
    form: 'login',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('login', Object.keys(errors)[0]))
})(LoginForm);