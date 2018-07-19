import React from 'react';
import { required, nonEmpty } from '../../validators';

class StackDirectiveInput extends React.Component {
    saveAndContinue = () => {
        const directive = this.state && this.state.directive ? this.state.directive : this.props.fieldValues.directive || '';
        let data = { directive }
        this.props.saveValues(data)
        this.props.nextStep()
    }
    goBack = () => {
        this.props.previousStep()
    }
    handleChange = (e) => {
        this.setState({
            directive: e.target.value
        })
    }
    render() {
        return (
            <div>
                <input 
                    type="text" 
                    name="stackDirective"
                    placeholder="Recommended directions"
                    defaultValue={this.props.fieldValues.directive}
                    onChange={this.handleChange}
                    validate={[required, nonEmpty]}
                /><br/>
                <button
                    type="button"
                    onClick={this.goBack}
                >   Back
                </button>
                <button
                    type="button"
                    disabled={this.props.pristine || this.props.submitting}
                    onClick={this.saveAndContinue}
                >   Continue
                </button>
            </div>
        )
    }
}
      
export default StackDirectiveInput;





                       