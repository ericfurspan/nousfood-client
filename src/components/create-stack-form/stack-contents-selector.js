import React from 'react';
import NootropicLibrary from '../nootropic-library';
import ArrowForward from '../../assets/images/arrow-forward.svg';
import ArrowBack from '../../assets/images/arrow-back.svg';

class StackContentsSelector extends React.Component {
    handleNext = () => {
        const contents = this.props.tempStack.contents || [];
        let data = { contents }
        this.props.saveAndContinue(data)
    }
    goBack = () => {
        this.props.previousStep()
    }
    render() {
        return (
            <div>
                <div className="nav-item">
                    <img 
                        onClick={this.goBack}
                        src={ArrowBack} alt="arrow-back" 
                    />Back
                </div>
                <div className="nav-item">
                    <img 
                        onClick={this.handleNext}
                        src={ArrowForward} alt="arrow-forward" 
                    />Next
                </div>
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



                       