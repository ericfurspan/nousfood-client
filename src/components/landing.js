import React from 'react';
import { LoginForm } from './login-form';
import { connect } from 'react-redux';
import RegistrationForm from './registration-form';
import { Footer } from './footer';
import logo from '../assets/images/blue-brain.png';
import magnifyingGlass from '../assets/images/magnifying-glass.svg';
import './landing.css';

export class LandingPage extends React.Component {

    render() {
        return (
            <div className="landing">
                <div className="landing-left">
                    <section>
                        <ul>
                            <li>
                                <span> 
                                    <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 8 8"><path fill="#fff" d="M3.5 0c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5c.59 0 1.17-.14 1.66-.41a1 1 0 0 0 .13.13l1 1a1.02 1.02 0 1 0 1.44-1.44l-1-1a1 1 0 0 0-.16-.13c.27-.49.44-1.06.44-1.66 0-1.93-1.57-3.5-3.5-3.5zm0 1c1.39 0 2.5 1.11 2.5 2.5 0 .66-.24 1.27-.66 1.72-.01.01-.02.02-.03.03a1 1 0 0 0-.13.13c-.44.4-1.04.63-1.69.63-1.39 0-2.5-1.11-2.5-2.5s1.11-2.5 2.5-2.5z"/></svg>
                                    Explore Nootropics.
                                </span>
                            </li>
                            <li>
                                <span>
                                <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 8 8"><path fill="#fff" d="M0 0v8l2-2 2 2v-8h-4z" transform="translate(2)" /></svg>
                                    Save and curate stacks.
                                </span>
                            </li>
                            <li>
                                <span>
                                    <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 8 8"><path fill="#fff" d="M5.5 0c-.51 0-.95.35-1.22.88.45.54.72 1.28.72 2.13 0 .29-.03.55-.09.81.19.11.38.19.59.19.83 0 1.5-.9 1.5-2s-.67-2-1.5-2zm-3 1c-.83 0-1.5.9-1.5 2s.67 2 1.5 2 1.5-.9 1.5-2-.67-2-1.5-2zm4.75 3.16c-.43.51-1.02.82-1.69.84.27.38.44.84.44 1.34v.66h2v-1.66c0-.52-.31-.97-.75-1.19zm-6.5 1c-.44.22-.75.67-.75 1.19v1.66h5v-1.66c0-.52-.31-.97-.75-1.19-.45.53-1.06.84-1.75.84s-1.3-.32-1.75-.84z"/></svg> 
                                    Share with friends.
                                </span>
                            </li>
                        </ul>
                    </section>
                </div>
                <div className="landing-right">
                    <header>
                        <img src={logo} alt="logo"/>
                        <h2>Noustrition</h2>
                    </header>
                    <div className="landing-login">
                        <LoginForm />
                    </div>
                    <div className="landing-signup">
                        <h3>Join today.</h3>
                        <RegistrationForm />
                    </div>
                </div> 
            </div>
        );
    }
}

const mapStateToProps = state => ({

});

export default connect(mapStateToProps)(LandingPage);

