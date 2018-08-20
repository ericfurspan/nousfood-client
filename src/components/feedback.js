import React from 'react';
import { connect } from 'react-redux';
import { dismissFeedback } from '../actions/user';
import './styles/feedback.css';

export class Feedback extends React.Component {
    componentDidUpdate() {
        this.setTimer = setInterval(
            () => this.dismissFeedback(),
            8 * 1000 // eight seconds
        );
    }
    dismissFeedback = () => {
        this.props.dispatch(dismissFeedback())
    }
    render() {
        if(this.props.feedback) {
            const { type, message } = this.props.feedback;
            return (
                <div className={`feedback ${type}`}>
                    {message}
                </div>
            );
        } else {
            return null
        }

    }
}

export default connect()(Feedback);
