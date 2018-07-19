import React from 'react';
import './styles/about.css';

export class About extends React.Component {

    render() {
        return (
            <div className="about">
                <header>
                    <h2>Why NousFood?</h2>
                </header><br/>
                <p>We could all benefit from a better functioning brain. 
                    NousFood helps you get started with nootropics, otherwise referred to 
                    as “smart drugs”. These substances play a role in cognitive function and health
                    by stimulating areas such as memory, focus, creativity, intellgence, motivation, 
                    neuro-transmittion and overall brain health.
                </p><br/>
                <h3>noh-ə-TROP-iks:</h3>
                <p><i>nootropic</i>: from the Greek words 'nous' - meaning mind, and 'trepein' 
                meaning to bend or turn.</p><br/>
                <h3>What's a 'stack'?</h3>
                <p>The term stack refers to compounding multiple nootropics which work together to enhance the overall cognitive effects.
                    NousFood helps you create, rate, and share stack blends.</p>
                <section className="addl-resources">
                    <header>
                        <h2>Helpful resources</h2>
                    </header>
                    <p><a href="https://www.reddit.com/r/nootropics/wiki/beginners">https://www.reddit.com/r/nootropics/wiki/beginners</a></p>
                    <p><a href="https://darktka.github.io">https://darktka.github.io</a></p>
                    <p><a href="https://examine.com/supplements/cognitive-function/">https://examine.com/supplements/cognitive-function/</a></p>
                </section>
            </div>
        );
    }
}

export default About;
