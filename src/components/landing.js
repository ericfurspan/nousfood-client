import React from 'react';
import LandingContents from './landing-contents';
import { RegistrationForm } from './registration-form';
import { LoginForm } from './login-form';
import { Footer } from './footer';
import './landing.css';

export class LandingPage extends React.Component {

    render() {
        return (
            <div className="landing">
                <LandingContents />
            <div id="forms">
                <RegistrationForm />
                <LoginForm />
            </div>
            <Footer /> 
            </div>
        );
    }
}

export default LandingPage;
