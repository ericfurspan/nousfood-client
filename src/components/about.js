import React from 'react';
import './styles/about.css';

export class About extends React.Component {

    render() {
        return (
            <div className="about">
                <div id="please-note">
                    <p>Note: this app is currently in beta. The following is supported: 
                    Registration, Sign in, Logout, Create stack, Save stack, Delete stack, Make stack public,
                    Delete public stack</p>
                </div>
                <section>
                    <header>
                        <h2>It's about cognitive enhancement</h2>
                    </header><br/>
                    <p>We could all benefit from a better functioning brain. NousFood aims to help get started
                    with nootropics, commonly referred to as “smart drugs”.</p><br/>

                    <p>Nootropics are a class of natural or synthetic compounds that enhance cognitive functions such as 
                    intelligence, memory, and/or focus. These substances play a role in cognitive function and health
                    by stimulating areas such as memory, focus, creativity, intellgence, motivation, neuro-transmittion 
                    and overall brain health.</p>
                </section>
                <section>
                    <header>
                        <h2>What's this do?</h2>
                    </header><br/>
                    <p>NousFood allows you to:</p><br/>
                    <ul>
                        <li>Follow nootropics to gain access to research studies from PubMed (coming soon)</li>
                        <li>Access a news feed containing articles and tweets of followed nootropics (coming soon)</li>
                        <li>Connect with the community. Save, Fork, and Share nootropic "stacks" (coming soon)</li>
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
                    <ul>
                        <li>A nootropic may enhance learning and memory.</li>
                        <li>A nootropic may help protect the brain from disruptive conditions such as hypoxia (low oxygen) or electroconvulsive shock.</li>
                        <li>A nootropic may help protect the brain from various chemical or physical injuries such as the effects of barbiturates and anti-cholinergic substances.</li>
                        <li>A nootropic may increase the efficacy of cortical and subcortical neuronal firing mechanisms.</li>
                        <li>A nootropic must possess few or no side effects with very low toxicity.</li>
                    </ul>
                </section>
                <section>
                    <header>
                        <h2>More info</h2>
                    </header><br/>
                    <h3>What's a 'stack'?</h3>
                    <p>The term stack, in this context, refers to using compounding nootropics in effort to gain 
                    synergistic cognitive enhancing effects</p>
                </section>
                <section>
                    <header>
                        <h2>Recommended resources</h2>
                    </header>
                    <p><a href="https://www.reddit.com/r/nootropics/wiki/beginners" target="_blank" rel="noopener noreferrer">https://www.reddit.com/r/nootropics/wiki/beginners</a></p>
                    <p><a href="https://darktka.github.io" target="_blank" rel="noopener noreferrer">https://darktka.github.io</a></p>
                    <p><a href="https://examine.com/supplements/cognitive-function/" target="_blank" rel="noopener noreferrer">https://examine.com/supplements/cognitive-function/</a></p>
                    <p><a href="https://www.youtube.com/watch?v=chbpnnZBziU" target="_blank" rel="noopener noreferrer">13 Nootropics to Unlock Your True Brain</a></p>
                </section>
            </div>
        );
    }
}

export default About;
