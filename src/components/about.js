import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from './login-form';
import './styles/about.css';

export function About(props) {

    return (
        <div className="about">

            <div className="text-sm">
                <p>Note: this app is currently in beta. The following is supported: 
                Registration, Sign in, Logout, Create stack, Save stack, Delete stack, Share stack with public,
                Unshare stack with public</p>
            </div><br/>

            <section>
                <header>
                    <h1>Welcome to NousFood</h1>
                </header>
                <p>This app is intended to help equip more people with a better understanding of the
                    potential benefits of brain-boosting foods and supplements. In addition, this app strives to
                    empower those already engaged and experimenting with "nootropics" by providing a platform
                    where you can </p><br/>
                    <ul className="italic">
                        <li>Follow nootropics and curate a news feed</li>
                        <li>Create and manage custom stacks</li>
                        <li>Connect with the community. Save, Fork, and Share nootropic stacks</li>
                    </ul>
            </section>

            <section>
                <header>
                    <h2>A brief history</h2>
                </header><br/>
                <h3>noh-ə-TROP-iks:</h3>
                <p><i>nootropic</i>: from the Greek words 'nous' - meaning mind, and 'trepein' meaning to bend or turn.</p><br/>

                <p>The word nootropic was coined in 1972 by a Romanian psychologist and chemist,
                Corneliu E. Giurgea, who synthesized Piracetam in 1964.</p><br/>

                <p>According to Dr. Giurgea, a substance categorized as a nootropic meets the following criteria:</p>
                <ul className="italic bold">
                    <li>A nootropic may enhance learning and memory.</li>
                    <li>A nootropic may help protect the brain from disruptive conditions such as hypoxia (low oxygen) or electroconvulsive shock.</li>
                    <li>A nootropic may help protect the brain from various chemical or physical injuries such as the effects of barbiturates and anti-cholinergic substances.</li>
                    <li>A nootropic may increase the efficacy of cortical and subcortical neuronal firing mechanisms.</li>
                    <li>A nootropic must possess few or no side effects with very low toxicity.</li>
                </ul><br/>
            </section>

            <section>
                <header>
                    <h2>It's about neuro-chemistry</h2>
                </header><br/>
                <p>As research continues, our scientific understanding of these compounds continues to solidify and expand.
                    It's really all about the functioning of the brain at a neuro chemical level, and suffice to say any substance could 
                    be called a nootropic if it grants the user more control over their neurochemistry and the resulting behavioural and experiential outcomes</p>
            </section>

            <section>
                <header>
                    <h2>What's a 'stack'?</h2>
                </header><br/>
                <p>The term stack in this context, refers to the compounding of nootropics in effort to gain 
                synergistic cognitive enhancing effects</p>
            </section>
            <section>
                <header>
                    <h2>Get started</h2>
                </header><br/>
                <div>
                    <p>Check out this intro video and then login!</p>
                    <iframe type="text/html" width="640" height="360"
                        src="https://www.youtube.com/embed/chbpnnZBziU"
                        frameBorder="0">
                    </iframe>
                    <h3>&nbsp;Login</h3>
                    <LoginForm /><br/>
                    <Link to={"/"}>Or register here</Link>
                </div>
            </section>
            <section>
                <header>
                    <h2>Recommended resources</h2>
                </header><br/>
                <p><a href="https://nootropics.com/introduction-to-nootropics/" target="_blank" rel="noopener noreferrer">Introduction to Nootropics</a></p><br/>
                <p><a href="https://www.reddit.com/r/nootropics/wiki/beginners" target="_blank" rel="noopener noreferrer">https://www.reddit.com/r/nootropics/wiki/beginners</a></p><br/>
                <p><a href="https://www.webmd.com/diet/features/eat-smart-healthier-brain#1" target="_blank" rel="noopener noreferrer">Eat smart for a healhier brain</a></p><br/>
                <p><a href="https://darktka.github.io" target="_blank" rel="noopener noreferrer">2017 Nootropics Survey on /r/Nootropics</a></p><br/>
                <p><a href="https://examine.com/supplements/cognitive-function/" target="_blank" rel="noopener noreferrer">https://examine.com/supplements/cognitive-function/</a></p><br/>
                <p><a href="https://www.youtube.com/watch?v=chbpnnZBziU" target="_blank" rel="noopener noreferrer">13 Nootropics to Unlock Your True Brain</a></p>
            </section>
        </div>
    );
}

export default About;
