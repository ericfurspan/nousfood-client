import React from 'react';

export class About extends React.Component {

    render() {
        return (
            <div className="about"> 
                <p>We could all benefit from a better functioning brain. 
                    NousFood helps you get started with nootropics, otherwise referred to 
                    as “smart drugs”. These substances play a role in cognitive function and health
                    by stimulating areas such as memory, focus, creativity, intellgence, motivation, 
                    neuro-transmittion and overall brain health.
                </p>
                <h3>noh-ə-TROP-iks:</h3>
                <p><i>nootropic</i>: from the Greek words 'nous' - meaning mind, and 'trepein' 
                meaning to bend or turn.</p>
                <h3>What's a 'stack'?</h3>
                <p>The term stack refers to compounding multiple nootropics which work together to enhance the overall cognitive effects. </p>
            </div>
        );
    }
}

export default About;
