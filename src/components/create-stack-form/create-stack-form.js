import React from 'react';
import StackNameInput from './stack-name-input';
import StackDescInput from './stack-desc-input';
import StackDirectiveInput from './stack-directive-input';
import NootropicLibrary from '../nootropic-library';
import StackContentsSelector from './stack-contents-selector';
import ConfirmAndSubmit from './confirm-submit';
import { addNoopToTempStack, saveValues } from '../../actions/user';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
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
            step: 1
        }
    }
    saveValues = (fields) => {
        // update fieldValues object
        fieldValues = Object.assign({}, fieldValues, fields)

        //dispatch action to save fieldValues to tempStack
        this.props.dispatch(saveValues(fieldValues))
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
    addNoopToTempStack = (code) => {
        // add nootropic code to 'contents' array
        console.log(`adding ${code} to temp stack`);
        fieldValues.contents.push(code);
        this.setState({
            tempStack: fieldValues
        })
    }
    removeNoopFromTempStack = (code) => {
        console.log(`removed ${code} from temp stack`);
        fieldValues.contents = fieldValues.contents.filter(e => e !== code);
        this.setState({
            tempStack: fieldValues
        })
    }
    render() {
        console.log(this.props.tempStack)
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
                    <StackContentsSelector
                        tempStack={this.props.tempStack}
                        addNoopToTempStack={this.addNoopToTempStack}
                        removeNoopFromTempStack={this.removeNoopFromTempStack}
                        previousStep={this.previousStep}
                        nextStep={this.nextStep}
                        saveValues={this.saveValues}
                    />
                )
            case 5 :
                return (
                    <div>
                        <ConfirmAndSubmit 
                            tempStack={this.props.tempStack}
                            nextStep={this.nextStep}
                            previousStep={this.previousStep}
                            saveValues={this.saveValues}                            
                        />
                    </div>
                )
            case 6 :
                return (
                    // redirect to dashboard
                    <Redirect to="/dashboard" />
                )
            default : 
                return (null)
        }
    }
}
    
const mapStateToProps = state => ({
    tempStack: state.user.tempStack
});

export default connect(mapStateToProps)(BuildStackForm);



