import React from 'react';
import StackNameInput from './stack-name-input';
import StackDescInput from './stack-desc-input';
import StackContentsSelector from './stack-contents-selector';
import ConfirmAndSubmit from './confirm-submit';
import '../styles/build-stack.css';

let fieldValues = {
    name: null,
    description: null,
    directive: null,
    contents: []
}

export class BuildStackForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            step: 1,
            tempStack: {
                name: null,
                description: null,
                directive: null,
                contents: []
            }
        }
    }
    saveValues = (fields) => {
        fieldValues = Object.assign({}, fieldValues, fields)
        this.setState({
            tempStack: fieldValues
        })
    }
    nextStep = () => { 
        this.setState({
            step: this.state.step + 1
        })
    }
    resetCount = () => {
        this.setState({
            step: 1
        })
    }
    previousStep = () => {
        this.setState({
            step: this.state.step - 1
        })
    }
    saveAndContinue = (data) => {
        this.saveValues(data)
        this.nextStep()
    }
    addNoopToTempStack = (code) => {
        // add nootropic to 'contents' array
        // lookup nootropic data using code
        let noopData = this.props.nootropics.find(noop => noop.code === code)
        fieldValues.contents = [...fieldValues.contents, noopData]
        this.setState({
            tempStack: fieldValues
        })
    }
    removeNoopFromTempStack = (code) => {
        fieldValues.contents = fieldValues.contents.filter(e => e.code !== code);
        this.setState({
            tempStack: fieldValues
        })
    }
    clearFieldValues = () => {
        fieldValues = {
            name: null,
            description: null,
            directive: null,
            contents: []
        }
    }
    render() {
        if(this.props.hidden) {
            return null
        }
        switch(this.state.step) {
            case 1 :
                return (
                    <form className="stack-name-form">
                        <StackNameInput 
                            saveAndContinue={this.saveAndContinue}
                            fieldValues={fieldValues}
                            nextStep={this.nextStep}
                            saveValues={this.saveValues}
                        />
                    </form>
                )
            case 2 :
                return (
                    <StackContentsSelector
                        nootropics={this.props.nootropics}
                        saveAndContinue={this.saveAndContinue}
                        tempStack={this.state.tempStack}
                        addNoopToTempStack={this.addNoopToTempStack}
                        removeNoopFromTempStack={this.removeNoopFromTempStack}
                        previousStep={this.previousStep}
                        nextStep={this.nextStep}
                        saveValues={this.saveValues}
                    />
                )
            case 3: 
                return (
                    <form className="stack-desc-form">
                        <StackDescInput
                            saveAndContinue={this.saveAndContinue}  
                            fieldValues={fieldValues}
                            nextStep={this.nextStep}
                            previousStep={this.previousStep}
                            saveValues={this.saveValues}
                        />
                    </form>
                )
            case 4 :
                return (
                    <div>
                        <ConfirmAndSubmit 
                            tempStack={this.state.tempStack}
                            nextStep={this.nextStep}
                            previousStep={this.previousStep}
                            saveValues={this.saveValues}  
                            resetCount={this.resetCount}
                            clearFieldValues={this.clearFieldValues}                       
                        />
                    </div>
                )
            default : 
                return (null)
        }
    }
}

export default BuildStackForm;



