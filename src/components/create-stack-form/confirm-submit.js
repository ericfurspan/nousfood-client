import React from 'react';
import { connect } from 'react-redux';
import { createStack } from '../../actions/user';

class ConfirmSubmit extends React.Component {
    confirmAndSubmitStack = () => {
        this.props.saveValues(this.props.tempStack)
        this.props.dispatch(createStack(this.props.tempStack))
        this.props.clearFieldValues()
        this.props.resetCount()
        this.props.closeModal()
    }
    goBack = () => {
        this.props.previousStep()
    }
    render() {
        return (
            <div>
                <h3 className="bold">Please confirm your stack.</h3>
                <h5>You may edit this at a later time.</h5>
                <div className="stack-confirm">
                    <p><span>Title:</span> <span className="italic">{this.props.tempStack.name}</span></p>
                    <p><span>Author Description:</span> <span className="italic">{this.props.tempStack.description}</span></p>
                    <p><span>Contents:</span></p><br/>
                    <ul>
                        {this.props.tempStack.contents.map( (element, index) => 
                            <li key={index}>{element.name}</li>
                        )}
                    </ul>
                </div>
                <div className="nav-item">
                    <i className="material-icons icon-lg" onClick={this.goBack}>arrow_back</i>
                    Back
                </div>
                <div className="nav-item">
                    <i className="material-icons icon-lg" onClick={this.confirmAndSubmitStack}>checkmark</i>
                    Create
                </div>
            </div>
        )
    }
}

export default connect()(ConfirmSubmit)



                       