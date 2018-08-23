import React from 'react';
import NootropicLibrary from '../nootropic-library';
import ArrowForward from '../../assets/images/arrow-forward.svg';
import ArrowBack from '../../assets/images/arrow-back.svg';

class StackContentsSelector extends React.Component {
    handleNext = () => {
        const contents = this.props.tempStack.contents;

        let contentsCount = contents.length;
        if(contentsCount < 2) {
            this.props.handleError('Please select at least 2 nootropics')
        } else {
            this.props.handleError(null)
            let data = { contents }
            this.props.saveAndContinue(data)
        }
    }
    goBack = () => {
        this.props.previousStep()
    }
    render() {
        let error;
        if(this.props.error) {
            error = <div className="red" aria-live="polite">
                        {this.props.error}
                    </div>
        }
        const selectedNoopCodes = this.props.tempStack.contents.map(x => x.code)
        return (
            <div>
                <h4>select nootropics</h4><br/>
                {error}
                <NootropicLibrary
                    show={true}
                    nootropics={this.props.nootropics}
                    selectable={true}
                    selectedNoopCodes={selectedNoopCodes}
                    selectNoop={(code) => {this.props.addNoopToTempStack(code)}} 
                    deSelectNoop={(code) => {this.props.removeNoopFromTempStack(code)}}
                />
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
            </div>
        )
    }
}

export default StackContentsSelector;



                       