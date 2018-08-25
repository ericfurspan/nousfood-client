import React from 'react';
import { Field, reduxForm, focus } from 'redux-form';
import { required, nonEmpty, isTrimmed } from '../validators';
import { login } from '../actions/auth';
import Input from './input';

export class LoginForm extends React.Component {
    onSubmit(values) {
        return this.props.dispatch(login(values.username, values.password));
    }
    render() {
        let error;
        if (this.props.error) {
            error = (
                <div className="red" aria-live="polite">
                    {this.props.error}
                </div>
            );
        }
        return (
            <form className="form"
            onSubmit={this.props.handleSubmit(values =>
                this.onSubmit(values)
            )}>
                <Field
                    component={Input}
                    type="text"
                    name="username"
                    placeholder="Email or Username"
                    validate={[required, isTrimmed, nonEmpty]}
                />
                <Field
                    component={Input}
                    type="password"
                    name="password"
                    placeholder="Password"
                    validate={[required, isTrimmed, nonEmpty]}
                />
                <div>
                    <button disabled={this.props.pristine || this.props.submitting}>
                        Log in
                    </button>
                </div>
                {error}
            </form>
        );
    }
}

export default reduxForm({
    form: 'login',
    onSubmitFail: (errors, dispatch) => dispatch(focus('login'))
})(LoginForm);