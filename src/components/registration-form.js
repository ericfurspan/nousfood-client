import React from 'react';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import { registerUser } from '../actions/auth';
import { login } from '../actions/auth';
import './styles/form-fields.css';
import Input from './input';
import { required, nonEmpty, matches, length, isTrimmed } from '../validators';
const passwordLength = length({min: 8, max: 72});
const matchesPassword = matches('regpassword');

export class RegistrationForm extends React.Component {
    
    onSubmit(values) {
        const {email, username, firstname, lastname} = values;
        const password = values.regpassword;
        const user = {email, username, password, firstname, lastname};
        console.log(user)
        return this.props
            .dispatch(registerUser(user))
            .then(() => this.props.dispatch(login(username || email, password)))
            .catch((e) => {
                throw new SubmissionError({
                    _error: e.errors._error
                  })
            })
    }

    render() {
        const { error, handleSubmit, pristine, submitting } = this.props;
        return (
            <form 
              className="form"
              onSubmit={handleSubmit(values => this.onSubmit(values))}
            >
                <Field 
                    component={Input} 
                    type="text" 
                    name="firstname"
                    placeholder="First name"
                    validate={[required, nonEmpty, isTrimmed]}
                />
                <Field 
                    component={Input} 
                    type="text" 
                    name="lastname" 
                    placeholder="Last name"    
                    validate={[required, nonEmpty, isTrimmed]}
                />
                <Field
                    component={Input}
                    type="text"
                    name="email"
                    placeholder="Email"
                    validate={[required, nonEmpty, isTrimmed]}
                />
                <Field 
                    component={Input} 
                    type="text" 
                    name="regusername" 
                    autoComplete="username"
                    placeholder="Username (optional)"
                />
                <Field
                    component={Input}
                    type="password"
                    name="regpassword"
                    placeholder="Password"
                    autoComplete="new-password"
                    validate={[required, passwordLength, isTrimmed]}
                />
                <Field
                    component={Input}
                    type="password"
                    name="passwordConfirm"
                    placeholder="Confirm password"
                    autoComplete="new-password"
                    validate={[required, nonEmpty, matchesPassword]}
                />
                {error && <strong className='red'>{error}</strong>}
                <div className="align-center">
                    <button
                        type="submit"
                        disabled={pristine || submitting}
                    >
                        Register
                    </button>
                </div>
            </form>
        );
    }
}

export default reduxForm({
    form: 'registration'
})(RegistrationForm);

