import React from 'react';
import StackNameInput from './stack-name-input';
import StackDescInput from './stack-desc-input';
import StackDirectiveInput from './stack-directive-input';
import NootropicLibrary from '../nootropic-library';

let fieldValues = {
    stackName: null,
    stackDesc: null,
    stackDirective: null,
    contents: []
}

export class CreateStackForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            step: 1
        }
    }
    saveValues(fields) {
        fieldValues = Object.assign({}, fieldValues, fields)
    }
    nextStep = () => {
        this.setState({
            step: this.state.step + 1
        })
    }
    previousStep = () => {
        this.setState({
            step: this.state.step - 1
        })
    }
    addNoopToTempStack(code) {
        console.log(`adding ${code} to temp stack`);
        fieldValues.contents.push(code);
        console.log(fieldValues)
        // add nootropic code to 'create-stack-contents' array
        // highlight nootropic card green to show as selected
        //this.props.dispatch(this.addNoopToTempStack(code))
    }
    removeNoopFromTempStack(code) {
        console.log(`removed ${code} from temp stack`);
        
    }
    render() {
        console.log(fieldValues)
        switch(this.state.step) {
            case 1 :
                return (
                    <form className="stack-name-form">
                        <StackNameInput 
                            fieldValues={fieldValues}
                            nextStep={this.nextStep}
                            saveValues={this.saveValues}
                        />
                    </form>
                )
            case 2: 
                return (
                    <form className="stack-desc-form">
                        <StackDescInput 
                            fieldValues={fieldValues}
                            nextStep={this.nextStep}
                            previousStep={this.previousStep}
                            saveValues={this.saveValues}
                        />
                    </form>
                )
            case 3 :
                return (
                    <form className="stack-directive-form">
                        <StackDirectiveInput 
                            fieldValues={fieldValues}
                            nextStep={this.nextStep}
                            previousStep={this.previousStep}
                            saveValues={this.saveValues}
                        />
                    </form>
                )
            case 4 :
                return (
                    <NootropicLibrary 
                        selectable={true} 
                        selectNoop={(code) => {this.addNoopToTempStack(code)}} 
                        deSelectNoop={(code) => {this.removeNoopFromTempStack(code)}}
                    />
                )
            default : 
                return (null)
        }
    }
}

  
export default CreateStackForm;



