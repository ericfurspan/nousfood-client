import React from 'react';
import { connect } from 'react-redux';
import { buildStack } from '../../actions/user';
import ArrowBack from '../../assets/images/arrow-back.svg';
import Checkmark from '../../assets/images/checkmark.svg';

class ConfirmSubmit extends React.Component {
    confirmAndSubmitStack = () => {
        this.props.saveValues(this.props.tempStack)

        // dispatch action to POST to /api/users/{userId}/stacks
        this.props.dispatch(buildStack(this.props.tempStack))
        setTimeout(() => {
            alert('Mock POST made to /api/users/{userId}/stacks')
        }, 2000)

        this.props.nextStep()
    }
    goBack = () => {
        this.props.previousStep()
    }
    render() {
        return (
            <div>
                <h3>Please confirm your stack.</h3>
                <h5>You may edit this at a later time.</h5>
                <div className="stack-confirm">
                    <p><span>Title:</span> <span className="confirmed-value">{this.props.tempStack.name}</span></p>
                    <p><span>Description:</span> <span className="confirmed-value">{this.props.tempStack.description}</span></p>
                    <p><span>Recommended Instructions:</span> <span className="confirmed-value">{this.props.tempStack.directive}</span></p>
                    <p><span>Contents:</span></p><br/>
                    <ul>
                        {this.props.tempStack.contents.map( (element, index) => 
                            <li key={index}>{element}</li>
                        )}
                    </ul>
                </div>
                <div className="nav-item">
                    <img 
                        onClick={this.goBack}
                        src={ArrowBack} alt="arrow-back" 
                    />Back
                </div>
                <div className="nav-item">
                    <img 
                        onClick={this.confirmAndSubmitStack}
                        src={Checkmark} alt="checkmark" 
                    />Create
                </div>
            </div>
        )
    }
}

export default connect()(ConfirmSubmit)



                       