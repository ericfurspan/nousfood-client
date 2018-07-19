import React from 'react';
import { connect } from 'react-redux';
import { buildStack } from '../../actions/user';

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
    render() {
        return (
            <div>
                <h2>Please confirm your stack. You may edit this later.</h2>
                <div className="stack-confirm">
                    <p><span>Title:</span> {this.props.tempStack.name}</p>
                    <p><span>Description:</span> {this.props.tempStack.description}</p>
                    <p><span>Recommended Instructions:</span> {this.props.tempStack.directive}</p>
                    <button
                        type="button"
                        onClick={this.confirmAndSubmitStack}
                    >   Confirm
                    </button>
                </div>
            </div>
        )
    }
}

export default connect()(ConfirmSubmit)



                       