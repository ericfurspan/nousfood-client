import React from 'react';
import './styles/twitter.css';

export class TwitterTimeline extends React.Component {

    componentDidMount() {
        window.twttr.ready( () => {
            window.twttr.widgets.load(document.getElementById("twtr"))
        })
    }
    render() {
        return (
            <div id="twtr" className="twitter-view modal-content">
                <h3>News Feed</h3><br/>
                <a className="twitter-timeline" 
                   href="https://twitter.com/nous_food/lists/nousfood"
                   data-chrome="noheader"            
                >
                </a>
            </div>
        )
    }
}

export default TwitterTimeline; 