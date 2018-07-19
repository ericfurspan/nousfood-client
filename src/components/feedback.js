import React from 'react';
import CloseBtn from '../assets/images/close-btn.svg';
import { connect } from 'react-redux';
import { dismissFeedback } from '../actions/user';

export class Feedback extends React.Component {

    dismissFeedback = () => {
        this.props.dispatch(dismissFeedback())
    }
    render() {
        if(this.props.feedback) {
            const { type, message } = this.props.feedback;
            return (
                <div className={`feedback ${type}`}>
                {message}
                    <button 
                        className="styles_closeButton__20ID4"
                        onClick={() => this.dismissFeedback()}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28">
                            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                            <path d="M0 0h24v24H0z" fill="none"/>
                        </svg>

                    </button>

                </div>
            );
        } else {
            return null
        }

    }
}

export default connect()(Feedback);
