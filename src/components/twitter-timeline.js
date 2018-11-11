import React from 'react';
import './styles/twitter.css';

export class TwitterTimeline extends React.Component {

    componentDidMount() {
        window.twttr.ready( () => {
            window.twttr.widgets.load()
        })
    }
    render() {
        return (
            <div className="twitter-view">
                <a className="twitter-timeline" href="https://twitter.com/nous_food/lists/nousfood?ref_src=twsrc%5Etfw"> </a>
            </div>
        )
    }
}

export default TwitterTimeline; 