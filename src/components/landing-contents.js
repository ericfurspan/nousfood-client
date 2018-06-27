import React from 'react';
import scrollArrow from '../assets/images/glyphicons-602-chevron-down.png'
import './landing-contents.css'

export class LandingContents extends React.Component {

    render() {
        return (
            <div className="landing-contents">
                <div className="landing-header">
                    <header>
                        <h1>NousFood</h1>
                        <p>Learn about popular supplements, save favorites, and create tailored to purpose stack blends.</p>
                        <a href="#forms">sign up or log in</a>
                        <div className="landing-scroll">
                        </div>
                    </header>
                </div>
                <div className="landing-body">
                    <section>
                        <h3></h3>
                        <p>We could all benefit from a better functioning brain. 
                           NousFood helps you get started with nootropics, otherwise referred to 
                           as “smart drugs”. These substances play a role in cognitive function and health
                           by stimulating areas such as memory, focus, creativity, intellgence, motivation, 
                           neuro-transmittion and overall brain health.
                        </p>
                        <p>Get started arrow - onclick link to registration form</p>
                    </section>
                    <section>
                        <h3>noh-ə-TROP-iks:</h3>
                        <p><i>nootropic</i>: from the Greek words 'nous' - meaning mind, and 'trepein' 
                            meaning to bend or turn.</p>
                    </section>
                    <section>
                        <h3>What's a 'stack'?</h3>
                        <p>The term stack refers to compounding multiple nootropics which work together to enhance the overall cognitive effects. </p>
                    </section>
                </div>
            </div>
        );
    }
}

export default LandingContents;
