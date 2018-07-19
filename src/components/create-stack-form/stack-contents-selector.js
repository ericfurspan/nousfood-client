import React from 'react';
import NootropicLibrary from '../nootropic-library';

class StackContentsSelector extends React.Component {
    saveAndContinue = () => {
        const contents = this.props.tempStack.contents || [];
        let data = { contents }
        this.props.saveValues(data)
        this.props.nextStep()
    }
    goBack(e) {
        this.props.previousStep()
    }
    render() {
        return (
            <div>
                <button
                    type="button"
                    onClick={this.saveAndContinue}
                >   Continue
                </button>
                <NootropicLibrary 
                    selectable={true}
                    selectedNoopCodes={this.props.tempStack.contents}
                    selectNoop={(code) => {this.props.addNoopToTempStack(code)}} 
                    deSelectNoop={(code) => {this.props.removeNoopFromTempStack(code)}}
                />
        </div>
        )
    }
}

export default StackContentsSelector;



                       